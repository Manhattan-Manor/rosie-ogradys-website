import React, { useEffect, useRef, useState } from "react";
import i18next from "i18next";
import "./../assets/styles/GiftCard.scss"; // Importar el archivo de estilos
import { GiftCard } from "../classes/giftcard/GiftCard";
import Swal from "sweetalert2";
import { Country } from "../classes/Country";
import RedeemGiftCardDTO from "../classes/giftcard/RedeemGiftCardDTO";

interface FormData {
  giftCode: string;
  customerFirstName: string;
  customerMiddleInitial: string;
  customerLastName: string;
  customerEmail: string;
  customerPhone: string;
  recipientFullname: string;
  recipientEmail: string;
  customerCity: string;
  customerState: string;
  customerZipCode: string;
//   countryId: number;
  greetings: string;
}

const GiftCardValidationForm: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [giftCard, setGiftCard] = useState<GiftCard>();
  const [isLoading, setIsLoading] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const [formData, setFormData] = useState<FormData>({
    giftCode: "",
    customerFirstName: "",
    customerMiddleInitial: "",
    customerLastName: "",
    customerEmail: "",
    customerPhone: "",
    customerCity: "",
    customerState: "",
    customerZipCode: "",
    // countryId: 0,
    recipientFullname: "",
    recipientEmail: "",
    greetings: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const completeStep = async (event?: React.FormEvent<HTMLFormElement>) => {
    if (step === 1) {
        setIsLoading(true);
        try {
            const giftCard = await GiftCard.getGiftCardByCode(formData.giftCode);
            setGiftCard(giftCard);
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: error instanceof Error ? error.message : 'Error fetching giftcard.',
                icon: "error",
                confirmButtonText: "Ok",
            });
            return;
        } finally {
            setIsLoading(false);
        }
    }

    if (step === 2) {
      if (event) {
        event.preventDefault();

        if (giftCard) {
            setIsLoading(true);
            const redeemGiftCardDto: RedeemGiftCardDTO = {
                firstName: formData.customerFirstName,
                lastName: formData.customerMiddleInitial + ' ' + formData.customerLastName,
                email: formData.customerEmail,
                phone: formData.customerPhone,
                city: formData.customerCity,
                state: formData.customerState,
                zipCode: formData.customerZipCode,
                greetings: formData.greetings,
                recipientName: formData.recipientFullname,
                recipientEmail: formData.recipientEmail,
                // countryId: formData.countryId,
                giftCardId: giftCard.id
            }
            
            try {
                const res = await GiftCard.redeemedGiftcard(redeemGiftCardDto);
                if(res){
                    Swal.fire({
                        title: "Success!",
                        text: i18next.t("gift-message-success") || "Success",
                        icon: "success",
                        confirmButtonText: "Ok",
                    });
                }
            } catch (error) {
                Swal.fire({
                    title: "Error!",
                    text: error instanceof Error ? error.message : 'Unexpected error.',
                    icon: "error",
                    confirmButtonText: "Ok",
                });
                setIsLoading(false);
                return;
            } finally {
                setIsLoading(false);
            }
        }

      }
    }

    setStep(step +1);
  };

  const goBack = () => {
    setStep(step - 1);
  };

  const isStepComplete = () => {
    if (step === 1 && !formData.giftCode) {
      return false;
    }
    if (
      step === 2 &&
      (!formData.customerFirstName ||
        !formData.customerEmail ||
        !formData.customerCity ||
        !formData.customerState ||
        !formData.customerZipCode ||
        !formData.recipientFullname ||
        !formData.recipientEmail 
        // || !formData.countryId
    )
    ) {
      return false;
    }
    return true;
  };


  useEffect(() => {
    const setParam = async ()=>{
        const params = new URLSearchParams(window.location.search);
        const giftCodeParam = params.get('giftCode');

        if (giftCodeParam) {
            await setFormData((prevData) => ({
            ...prevData,
            giftCode: giftCodeParam,
            }));

            if (buttonRef.current) {
                buttonRef.current.click();
            }
        }
    }
    setParam();
  }, []); 

  return (
    <div className="container">
      <h2>{i18next.t("title") || ""}</h2>
      <ul>
        {/* Step 1: Código de la gift card */}
        <li className={step >= 1 ? "active" : ""}>
          <h3
        //    onClick={() => step > 1 && setStep(1)}
            >
            {i18next.t("step-1-title") || ""}
          </h3>
          {step === 1 && (
            <div>
              <input
                type="text"
                name="giftCode"
                placeholder={i18next.t("gift-code-placeholder") || ""}
                value={formData.giftCode}
                onChange={handleInputChange}
              />
              <br />
              {/* {formData.giftCode && ( */}
              <div className="d-grid gap-2 col-2">
                <button className="" onClick={()=> completeStep()} disabled={isLoading || !formData.giftCode} ref={buttonRef}>
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
                    i18next.t("next") || ""
                  )}
                </button>
                </div>
              {/* )} */}
            </div>
          )}
        </li>

        {/* Step 2: General Information */}
        <li className={step >= 2 ? "active" : ""}>
          <h3
        //   onClick={() => step > 2 && setStep(2)}
          >
            {i18next.t("step-2-title") || ""}
          </h3>
          {step === 2 && (
            <form onSubmit={completeStep}>
              <div>
                <h4>{i18next.t("about-you") || ""}</h4>
                <input
                  type="text"
                  name="customerFirstName"
                  placeholder={
                    i18next.t("customer-first-name-placeholder") || ""
                  }
                  value={formData.customerFirstName}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="customerMiddleInitial"
                  placeholder={
                    i18next.t("customer-last-name-paternal-placeholder") || ""
                  }
                  value={formData.customerMiddleInitial}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="customerLastName"
                  placeholder={
                    i18next.t("customer-last-name-maternal-placeholder") || ""
                  }
                  value={formData.customerLastName}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="customerEmail"
                  placeholder={i18next.t("customer-email-placeholder") || ""}
                  value={formData.customerEmail}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="customerPhone"
                  placeholder={i18next.t("customer-phone-placeholder") || ""}
                  value={formData.customerPhone}
                  onChange={handleInputChange}
                  required
                />

                <input
                  type="text"
                  name="customerCity"
                  placeholder={i18next.t("customer-city-placeholder") || ""}
                  value={formData.customerCity}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="customerState"
                  placeholder={i18next.t("customer-state-placeholder") || ""}
                  value={formData.customerState}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="customerZipCode"
                  placeholder={i18next.t("customer-zipcode-placeholder") || ""}
                  value={formData.customerZipCode}
                  onChange={handleInputChange}
                  required
                />

                {/* <div className="select-wrapper">
                  <select
                    name="countryId"
                    value={formData.countryId}
                    onChange={handleInputChange}
                  >
                    <option value="">
                      {i18next.t("customer-country") || ""}
                    </option>
                    {countries.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div> */}

                <h4>{i18next.t("recipient-info") || ""}</h4>
                <input
                  type="text"
                  name="recipientFullname"
                  placeholder={
                    i18next.t("recipient-full-name-placeholder") || ""
                  }
                  value={formData.recipientFullname}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="recipientEmail"
                  placeholder={i18next.t("recipient-email-placeholder") || ""}
                  value={formData.recipientEmail}
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  onChange={handleInputChange}
                  name="greetings"
                  placeholder={
                    i18next.t("recipient-greetings-placeholder") || ""
                  }
                />

                <br />
                <button type="button" className="btn btn-secondary" onClick={goBack}>
                  {i18next.t("back") || ""}
                </button>

                  {/* <button type="submit">{i18next.t("next") || ""}</button> */}
                  <button type="submit" disabled={isLoading || !formData.giftCode}>
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
                    i18next.t("next") || ""
                  )}
                </button>
              </div>
            </form>
          )}
        </li>

        {/* Step 3: Thank you */}
        <li className={step === 3 ? "active" : ""}>
          <h3>{i18next.t("step-3-title") || ""}</h3>
          {step === 3 && (
            <div className="congratulation">
              <h4>{i18next.t("thank-you") || ""}</h4>
              <p>{i18next.t("confirmation-message") || ""}</p>
              <div className="d-grid gap-3 col-4">
                <button onClick={(e)=> GiftCard.downloadLetter(formData.giftCode)} disabled={isLoading || !formData.giftCode}>
                    Donwload here
                </button>
                </div>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default GiftCardValidationForm;
