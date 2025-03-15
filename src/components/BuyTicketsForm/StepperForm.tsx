import {
  type ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import i18next from "i18next";
import Swal from "sweetalert2";
import "../../assets/styles/StepperForm.scss";
import { Ticket } from "../../classes/Ticket/Ticket";
import { type CreateReservationSesionDTO } from "../../classes/Ticket/DTOs/CreateReservationSessionDTO";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import type CreateReservationPurchaseDTO from "../../classes/Transaction/DTOs/CreateReservationPurchaseDTO";
import { Transaction } from "../../classes/Transaction/Transaction";
import { type TicketDTO } from "../../classes/Transaction/DTOs/TicketDTO";
import { type TicketChoose } from "./ITicketChoose";
import FormStep1 from "./FormStep1";
import FormStep2 from "./FormStep2";
import StepperButtons from "./StepperButtons";
import FormStep3 from "./FormStep3";
import logo from "../../assets/images/rosie-mm-badge.png";
import { Coupon } from "../../classes/Coupon/Coupon";

const stripePromise = loadStripe(import.meta.env.PUBLIC_STRIPE_KEY);

const StepperForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [availableTickets, setAvailableTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingButton, setLoadingButton] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<string>("15:00");
  const [coupon, setCoupon] = useState<Coupon | null>(null);

  const [orderNumber, setOrderNumber] = useState<string>("");
  const [selectedTickets, setSelectedTickets] = useState<TicketChoose[]>([]);
  const [formData, setFormData] = useState({
    firstname: "",
    middleInitial: "",
    lastName: "",
    email: "",
    mobilePhone: "",
    city: "",
    state: "",
    zipcode: "",
    restrictions: "",
    countryId: 0,
  });

  useEffect(() => {
    const fetchTickets = async () => {
      setIsLoading(true);
      try {
        const tickets = await Ticket.getAllAvailableTicketsToChoose();
        setAvailableTickets(tickets);
      } catch (error) {
        showAlert("error", "error.loadingTickets");
      } finally {
        setIsLoading(false);
      }
    };
    fetchTickets();
  }, []);

  useEffect(() => {
    if (currentStep === 3) {
      if (timer) {
        clearInterval(timer);
        setTimer(null);
      }
      return;
    }
    if (currentStep > 0) {
      startReservationTimer();
    }
    return () => {
      if (timer) {
        clearInterval(timer);
        setTimer(null);
      }
    };
  }, [currentStep]);

  // Función auxiliar para mostrar alertas
  const showAlert = (
    icon: "error" | "info" | "question" | "success" | "warning",
    messageKey: string
  ) => {
    Swal.fire({
      icon: icon,
      text: i18next.t(messageKey) || "",
    });
  };

  // Función para actualizar el temporizador
  const updateTimer = () => {
    const savedEndTime = parseInt(
      localStorage.getItem("reservationEndTime") || "0",
      10
    );
    const timeRemainingMs = savedEndTime - Date.now();

    if (timeRemainingMs <= 0) {
      showAlert("error", "tickets.reservation.message.time-expired");
      if (timer) {
        clearInterval(timer);
        setTimer(null);
      }
      window.location.reload();
    } else {
      const minutes = Math.floor(timeRemainingMs / 1000 / 60);
      const seconds = Math.floor((timeRemainingMs / 1000) % 60);
      setTimeRemaining(
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
          2,
          "0"
        )}`
      );
    }
  };

  const handleNextStep = useCallback(
    async (params: {transactionId?: string, countryId?: number} ) => {
      if (!validateStep(params.countryId)) return;

      if (currentStep === 0) {
        await handleTicketReservation();
      }

      if (currentStep === 2 && params.transactionId) {
        await confirmTransaction(params.transactionId);
        window.location.href = `/thankyou?transactionId=${params.transactionId}`;
        return;
      }

      setCurrentStep((prev) => prev + 1);
      window.scrollTo(0, 0);
    },
    [currentStep, selectedTickets]
  );

  const handlePrevStep = useCallback(() => {
    if (currentStep === 1) {
      resetReservation();
    }
    setCurrentStep((prev) => prev - 1);
    window.scrollTo(0, 0);
  }, [currentStep]);

  // Función auxiliar para validar el paso actual
  const validateStep = (countryId?: number) => {
    if (currentStep === 0) {
      if (formRef.current && !formRef.current.checkValidity()) {
        formRef.current.reportValidity();
        showAlert("error", "tickets.validation.form.fields-requireds");
        return false;
      }

      if (selectedTickets.length <= 0) {
        showAlert("error", "tickets.validation.mount-tickets-selected");
        return false;
      }

      if (!countryId) {
        showAlert("error", "tickets.validation.form.fields-required-country");
        return false;
      }

      if (
        selectedTickets.find((t) =>
          t.ticketType.ticketName.toLowerCase().includes("bar")
        ) &&
        selectedTickets.find((t) =>
          t.ticketType.ticketName.toLowerCase().includes("child")
        )
      ) {
        showAlert("error", "tickets.validation.not_child_bar_tickets_together");
        return false;
      }

      const res =
        new Set(
          selectedTickets
            .filter(
              (ticket) =>
                !ticket.ticketType.ticketName.toLowerCase().includes("child")
            )
            .map((ticket) => ticket.ticketType.ticketId)
        ).size > 1;
      if (res) {
        showAlert("error", "tickets.validation.only-one-type-ticket-purchase");
        return false;
      }
    }

    if (currentStep === 1) {
      if (selectedTickets.some((a) => !a.name || !a.age)) {
        showAlert("error", "tickets.validation.form.fields-requireds");
        return false;
      }

      // Validate child age
      if (
        selectedTickets.some((a) => {
          const isChild = a.ticketType.ticketName
            .toLowerCase()
            .includes("child");
          return isChild && a.age > 12;
        })
      ) {
        showAlert("error", "tickets.validation.child-age");
        return false;
      }
      // Validate bar age (21+)
      if (
        selectedTickets.some((a) => {
          const isBar = a.ticketType.ticketName.toLowerCase().includes("bar");
          return isBar && a.age < 21;
        })
      ) {
        showAlert("error", "tickets.validation.bar-age");
        return false;
      }
    }

    return true;
  };

  // Función auxiliar para manejar la reservación de tickets
  const handleTicketReservation = async () => {
    setIsLoading(true);

    const ticketGroups = groupSelectedTicketsByType(selectedTickets);
    const data: CreateReservationSesionDTO = {
      eventId: selectedTickets[0].ticketType.eventId,
      tickets: formatTicketGroups(ticketGroups),
    };

    try {
      const res = await Ticket.reserveTickets(data);
      storeReservationDetails(res.toString());
      startReservationTimer();
    } catch (error) {
      showAlert("error", "tickets.reservation.message.error");
    } finally {
      setIsLoading(false);
    }
  };

  // Función auxiliar para agrupar tickets seleccionados por tipo
  const groupSelectedTicketsByType = (tickets: TicketChoose[]) => {
    return tickets.reduce<{ [key: number]: number }>((acc, ticketChoice) => {
      const ticketId = ticketChoice.ticketType.ticketId;
      acc[ticketId] = (acc[ticketId] || 0) + 1;
      return acc;
    }, {});
  };

  // Función auxiliar para formatear los tickets agrupados
  const formatTicketGroups = (ticketGroups: { [key: number]: number }) => {
    return Object.entries(ticketGroups).map(([ticketId, quantity]) => ({
      ticketId: Number(ticketId),
      quantity,
    }));
  };

  // Función auxiliar para almacenar detalles de la reservación
  const storeReservationDetails = (reservationId: string) => {
    localStorage.setItem("reservationId", reservationId);
  };

  // Función para iniciar el temporizador de reservación
  const startReservationTimer = () => {
    const endTime = Date.now() + 15 * 60 * 1000;
    localStorage.setItem("reservationEndTime", endTime.toString());

    // Limpiar cualquier temporizador existente antes de iniciar uno nuevo
    if (timer) {
      clearInterval(timer);
    }

    // Iniciar un nuevo temporizador
    const intervalId = setInterval(updateTimer, 1000);
    setTimer(intervalId);
  };

  // Función auxiliar para procesar la transacción
  const saveTransaction = async (transactionId: string) => {
    setOrderNumber(transactionId);
    const createReservationDto = buildReservationDTO(transactionId);
    try {
      const res: String = await Transaction.createTransaction(
        createReservationDto
      );
      return res;
    } catch (error) {
      showAlert("warning", "tickets.reservation.message.error-transaction");
    }
  };

  const handleRestrictionsChange = (value: string) => {
    setFormData({ ...formData, restrictions: value });
  };

  const cretaeTransactionWithNoCost = async () => {
    setLoadingButton(true);
    try {
      const transactionId = Transaction.generateCustomTransactionID();
      const res = await saveTransaction(transactionId);
      if (res) {
        handleNextStep({transactionId: transactionId});
      }
    } catch (error) {
    } finally {
      setLoadingButton(false);
    }
  };

  // Función auxiliar para confirmar la transacción
  const confirmTransaction = async (transactionId: string) => {
    setOrderNumber(transactionId);
    setIsLoading(true);
    try {
      await Transaction.confirmTransaction(transactionId);
      await downloadBlob(transactionId);
    } catch (error) {
      showAlert("warning", "tickets.reservation.message.error-transaction");
    } finally {
      setIsLoading(false);
    }
  };

  const downloadBlob = async (transactionId: string) => {
    try {
      const blob = await Transaction.downloadBlobTickets(transactionId);

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "Receipt.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      // if(!(coupon?.isPercentage && Number(coupon.value) === 100)){
      //   showAlert("success", "tickets.checkout.downloaded-tickets");
      // }
    } catch (error) {}
  };

  // Función auxiliar para construir el DTO de reservación
  const buildReservationDTO = (
    transactionId: string
  ): CreateReservationPurchaseDTO => {
    const ticketsDto: TicketDTO[] = selectedTickets.map((st) => ({
      age: st.age,
      email: st.email,
      isChild: st.age < 13,
      name: st.name,
      typeTicketId: st.ticketType.ticketId,
    }));

    return {
      eventId: availableTickets[0].eventId,
      reservationId: Number(localStorage.getItem("reservationId")),
      firstName: formData.firstname,
      lastName: formData.middleInitial + " " + formData.lastName,
      email: formData.email,
      phone: formData.mobilePhone,
      city: formData.city,
      state: formData.state,
      allergiesSpecialRequerements: formData.restrictions,
      tickets: ticketsDto,
      totalAmount: calculateTotalAmount(),
      transactionId,
      zipCode: formData.zipcode,
      couponId: coupon?.id,
      countryId: formData.countryId ? formData.countryId : 226,
    };
  };

  const resetReservation = () => {
    setTimer(null);
    localStorage.removeItem("reservationEndTime");
    localStorage.removeItem("reservationId");
  };

  const handleTicketCountChange = useCallback(
    (ticketType: Ticket, count: number) => {
      const updatedTickets = selectedTickets.filter(
        (t) => t.ticketType.ticketId !== ticketType.ticketId
      );
      const newTickets = Array.from({ length: count }, () => ({
        ticketType,
        name: "",
        email: "",
        age: 0,
      }));
      setSelectedTickets([...updatedTickets, ...newTickets]);
    },
    [selectedTickets]
  );

  const handleTicketDetailChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>, index: number) => {
      const { name, value } = e.target;
      setSelectedTickets((prevTickets) =>
        prevTickets.map((ticket, i) =>
          i === index ? { ...ticket, [name]: value } : ticket
        )
      );
    },
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCouponChange = (coupon: Coupon) => setCoupon(coupon);

  const subtotalAmount = selectedTickets.reduce(
    (acc, ticketChoose) =>
      acc + parseFloat(ticketChoose.ticketType.price.toString()),
    0
  );

  const calculateTotalAmount = () => {
    if (coupon) {
      if (coupon.isPercentage) {
        return subtotalAmount - subtotalAmount * (coupon.value / 100);
      } else {
        return subtotalAmount - coupon.value;
      }
    } else {
      return subtotalAmount;
    }
  };

  const totalAmount = calculateTotalAmount();

  const amountSmallestUnitDollar = Math.round(totalAmount * 100);

  return (
    <div>
      <div className="text-center">
        <img
          src={logo.src}
          alt="Rosie MM Badge"
          style={{ height: 100, width: 100 }}
        />
        <h1 className="text-center mb-1 mt-3" data-aos="fade-up">
          {i18next.t("tickets.title")}
        </h1>
        <p>{i18next.t("tickets.subtitle")}</p>

        <div className="d-flex justify-content-center">
          <a
            className="btn btn-primary"
            href="#"
            onClick={()=> {window.location.href = "https://nye.manhattanmanor.com"}}
          >
            Go to homepage of the event
          </a>
        </div>
      </div>
      {isLoading ? (
        <>
          <div className="spinner-container flex-column">
            <div className="spinner"></div>
            <span className="mt-3">{i18next.t("please-wait")}</span>
          </div>
        </>
      ) : (
        <div className="horizontal-stepper-container">
          <div>
            <h2 data-aos="fade-up" className="mt-5">
              {timer && timeRemaining}
            </h2>
          </div>
          <Stepper currentStep={currentStep} />
          {currentStep === 0 && (
            <FormStep1
              formRef={formRef}
              availableTickets={availableTickets}
              selectedTickets={selectedTickets}
              handleTicketCountChange={handleTicketCountChange}
              formData={formData}
              handleInputChange={handleInputChange}
              handleCouponChange={handleCouponChange}
            />
          )}
          {currentStep === 1 && (
            <FormStep2
              selectedTickets={selectedTickets}
              handleRestrictionsChange={handleRestrictionsChange}
              handleTicketDetailChange={handleTicketDetailChange}
            />
          )}
          {currentStep === 2 && (
            <div>
              <h2 data-aos="fade-up" className="mt-2">
                {i18next.t("tickets.checkout.title")}
              </h2>
              {!totalAmount &&
              coupon?.isPercentage &&
              Number(coupon.value) === 100 ? (
                <>
                  <div>
                    <p>
                      {i18next.t("tickets.checkout.text_coupon_information")}
                    </p>
                    <p>
                      Subtotal amount:{" "}
                      <span className="discount-info">
                        ${subtotalAmount.toFixed(2)}
                      </span>
                    </p>
                    <p>
                      Coupon code:{" "}
                      <span className="discount-info">{coupon?.code}</span>
                    </p>
                    <p>
                      Total amount:{" "}
                      <span className="discount-info">
                        ${totalAmount.toFixed(2)}
                      </span>
                    </p>
                    <button
                      disabled={loadingButton}
                      type="submit"
                      id="horizontal-prev-step"
                      className="btn btn-primary mt-5"
                      onClick={cretaeTransactionWithNoCost}
                    >
                      {!loadingButton
                        ? i18next.t("tickets.button.confirm_purchase")
                        : "..."}
                    </button>
                  </div>
                </>
              ) : (
                <Elements
                  stripe={stripePromise}
                  options={{
                    mode: "payment",
                    amount: amountSmallestUnitDollar,
                    currency: "usd",
                    appearance: {
                      theme: "stripe",
                    },
                  }}
                >
                  <FormStep3
                    amount={calculateTotalAmount().toFixed(2)}
                    handleSucessPay={handleNextStep}
                    saveTransaction={saveTransaction}
                    amountSmallestUnitDollar={amountSmallestUnitDollar}
                    name={`${formData.firstname} ${formData.middleInitial} ${formData.lastName}`}
                    email={formData.email}
                  />
                </Elements>
              )}
            </div>
          )}
          {currentStep === 3 && (
            <div>
              <h1 className="text-center mb-5" data-aos="fade-up">
                {i18next.t("tickets.print-tickets.thanks")}
              </h1>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  id="horizontal-prev-step"
                  className="btn btn-primary mb-5 mx-auto"
                  onClick={(e) => Transaction.downloadTickets(orderNumber)}
                >
                  {i18next.t("tickets.button.download_tickets")}
                </button>
              </div>
              <p>{i18next.t("tickets.print-tickets.line1")}</p>
              <p className="mt-3">{i18next.t("tickets.print-tickets.line2")}</p>
              <p className="mt-3">
                {i18next.t("tickets.reservation.message.order-number")}{" "}
                {orderNumber}
              </p>
              <p className="mt-2" style={{ marginBottom: 0 }}>
                {i18next.t("tickets.print-tickets.line3")}
              </p>
              <p>{i18next.t("tickets.print-tickets.line4")}</p>
              <p className="mt-2" style={{ marginBottom: 0 }}>
                Amanda Smith
              </p>
              <p style={{ marginBottom: 0 }}>amanda@manhattanmanor.com</p>
              <p>1-646-627-4329</p>
            </div>
          )}
          <StepperButtons
            currentStep={currentStep}
            handleNextStep={()=> handleNextStep({countryId: formData.countryId})}
            handlePrevStep={handlePrevStep}
          />
        </div>
      )}
    </div>
  );
};

const Stepper = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="horizontal-stepper">
      <div className="horizontal-stepper-steps">
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className={`horizontal-step ${
              currentStep === index ? "horizontal-active" : ""
            } ${currentStep > index ? "horizontal-completed" : ""}`}
          >
            <div className="horizontal-step-number">{index + 1}</div>
            <div className="horizontal-step-title">
              {i18next.t(`tickets.general-step.${index + 1}.title`)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const StepperMain = () => (
  <Elements stripe={stripePromise}>
    <StepperForm></StepperForm>
  </Elements>
);
export default StepperMain;
