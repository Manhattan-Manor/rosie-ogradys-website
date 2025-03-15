import { Ticket } from "../../classes/Ticket/Ticket";
import { type TicketChoose } from "./ITicketChoose";
import i18next from "i18next";
import PersonalInfoFields from "./PersonalInfoFields";
import { Fragment, useState } from "react";
import { Coupon } from "../../classes/Coupon/Coupon";

const FormStep1 = ({
  formRef,
  availableTickets,
  selectedTickets,
  handleTicketCountChange,
  formData,
  handleInputChange,
  handleCouponChange,
}: any) => {
  const [isCouponInputVisible, setIsCouponInputVisible] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponData, setCouponData] = useState<Coupon | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const tax = 8.875;

  const orderedTickets = availableTickets.sort((a: Ticket, b: Ticket) => {
    const ticketNameA = a.ticketName.toLowerCase();
    const ticketNameB = b.ticketName.toLowerCase();

    if (ticketNameA.includes("dinner") && ticketNameB.includes("dinner")) {
      return 0;
    }
    if (ticketNameA.includes("child") && ticketNameB.includes("child")) {
      return 0;
    }
    if (ticketNameA.includes("bar") && ticketNameB.includes("bar")) {
      return 0;
    }

    if (ticketNameA.includes("dinner")) {
      return -1;
    }
    if (ticketNameB.includes("dinner")) {
      return 1;
    }

    if (ticketNameA.includes("child")) {
      return -1;
    }
    if (ticketNameB.includes("child")) {
      return 1;
    }

    if (ticketNameA.includes("bar")) {
      return -1;
    }
    if (ticketNameB.includes("bar")) {
      return 1;
    }

    return 0;
  });

  const toggleCouponInput = () => {
    setIsCouponInputVisible(!isCouponInputVisible);
  };

  const handleRedeemCoupon = async () => {
    setIsLoading(true);
    setErrorMessage(null);
    try {
      const coupon: Coupon = await Coupon.getCouponByCode(couponCode);
      setCouponData(coupon);
      handleCouponChange(coupon);
    } catch (error: any) {
      if (error instanceof Error) {
        setErrorMessage(error.message.toString());
      }
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  return (
    <form ref={formRef} id="ticket-form">
      <h2 data-aos="fade-up">{i18next.t("tickets.about-you")}</h2>
      <PersonalInfoFields
        formData={formData}
        handleInputChange={handleInputChange}
      />
      <h2 data-aos="fade-up" className="mt-5">
        {i18next.t("tickets.tickets")} - <span style={{fontSize: 22}}>{i18next.t("tickets.early-bird-pricing")}</span>
      </h2>
      {orderedTickets.map((t: Ticket, i: number) => {
        return (
          <Fragment key={t.ticketId}>
            <div className="d-flex align-items-center mt-3" key={t.ticketId}>
              <input
                disabled={t.quantity <= 0}
                type="number"
                className={`form-control ticket-input ${t.quantity <= 0 ? 'disabled-input' : ''}`}
                name={t.ticketName}
                value={
                  selectedTickets.filter(
                    (tc: TicketChoose) => tc.ticketType.ticketId === t.ticketId
                  ).length
                }
                onChange={(e) =>
                  handleTicketCountChange(t, parseInt(e.target.value))
                }
                min="0"
              />
              <label
                htmlFor={t.ticketName}
                className={`form-label ms-2 ${t.quantity <= 0 ? 'sold-out-label' : ''}`}
              >
                <strong>{t.ticketName}</strong> - 
                <strong> ${Math.floor(t.price / (1 + (tax/100)))}</strong>{" "} p/person + {tax}% TAX = ${t.price}
                {t.quantity <= 0 && <span className="ms-2 text-danger">Sold Out</span>}
              </label>
            </div>

            {i === 2 && (
              <>
                <p className="mt-3">
                  <strong>Note:</strong> Children are not allowed at bar.
                  Available only on VIP and Dinner sections
                </p>
              </>
            )}
            {i === 2 && (
              <>
                <hr />
              </>
            )}
            {i === 4 && (
              <p className="mt-3">
                <strong>Note:</strong> Must be +21 years old.
              </p>
            )}
          </Fragment>
        );
      })}
      <div className="d-flex align-items-center mt-3">
        <button
          type="button"
          className="btn btn-link p-0"
          style={{color: '#dee2e6', fontWeight: 'bold'}}
          onClick={toggleCouponInput}
        >
          Enter a coupon code to apply discount
        </button>
      </div>
      {isCouponInputVisible && (
        <div className="d-flex align-items-center mt-3">
          <input
            type="text"
            className="form-control coupon-input"
            name="coupon"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-primary ms-2"
            onClick={handleRedeemCoupon}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                ...
              </>
            ) : (
              "Redeem"
            )}
          </button>
        </div>
      )}
      {couponData && (
        <div className="mt-3">
          <p>
            Coupon Code: <strong>{couponData.code}</strong>
          </p>
          <p>
            Discount:{" "}
            {couponData.isPercentage
              ? `${couponData.value}%`
              : `$${couponData.value}`}
          </p>
          <p>Expires on: {formatDate(couponData.expiration)}</p>
        </div>
      )}
      {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
    </form>
  );
};

export default FormStep1;
