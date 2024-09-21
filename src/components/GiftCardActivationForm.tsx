import React, { useEffect, useRef, useState } from "react";
import i18next from "i18next";
import "./../assets/styles/GiftCard.scss";
import { GiftCard } from "../classes/giftcard/GiftCard";
import Swal from "sweetalert2";
import RedeemGiftCardDTO from "../classes/giftcard/RedeemGiftCardDTO";
import Step1 from "./giftCardForm/Step1";
import Step2 from "./giftCardForm/Step2";
import Step3 from "./giftCardForm/Step3";

export interface FormData {
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
  const [errorMessage, setErrorMessage] = useState("");
  const [giftCardValid, setGiftCardValid] = useState(false);

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
    if (step === Infinity) {
      setIsLoading(true);
      try {
        const giftCard = await GiftCard.getGiftCardByCode(formData.giftCode);
        setGiftCard(giftCard);
      } catch (error) {
        Swal.fire({
          title: "Error!",
          text:
            error instanceof Error ? error.message : "Error fetching giftcard.",
          icon: "error",
          confirmButtonText: "Ok",
        });
        return;
      } finally {
        setIsLoading(false);
      }
    }

    if (step === 1) {
      if (event) {
        event.preventDefault();
      }
    }

    if (step === 2) {
      if (event) {
        event.preventDefault();

        if (giftCard) {
          setIsLoading(true);
          const redeemGiftCardDto: RedeemGiftCardDTO = {
            firstName: formData.customerFirstName,
            lastName:
              formData.customerMiddleInitial + " " + formData.customerLastName,
            email: formData.customerEmail,
            phone: formData.customerPhone,
            city: formData.customerCity,
            state: formData.customerState,
            zipCode: formData.customerZipCode,
            greetings: formData.greetings,
            recipientName: formData.recipientFullname,
            recipientEmail: formData.recipientEmail,
            // countryId: formData.countryId,
            giftCardId: giftCard.id,
          };

          try {
            const res = await GiftCard.redeemedGiftcard(redeemGiftCardDto);
            if (res) {
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
              text:
                error instanceof Error ? error.message : "Unexpected error.",
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

    setStep(step + 1);
  };

  const goBack = () => {
    setStep(step - 1);
  };

  useEffect(() => {
    const setParam = async () => {
      const params = new URLSearchParams(window.location.search);
      const giftCodeParam = params.get("giftCode");
      setIsLoading(true);

      if (giftCodeParam) {
        setFormData((prevData) => ({
          ...prevData,
          giftCode: giftCodeParam,
        }));

        try {
          const giftCard = await GiftCard.getGiftCardByCode(giftCodeParam);
          await setGiftCardValid(true);
          await setGiftCard(giftCard);
        } catch (error) {
          setGiftCardValid(false);

          if (error instanceof Error) {
            setErrorMessage(error.message);
          }

          Swal.fire({
            title: "Error!",
            text:
              error instanceof Error
                ? error.message
                : "Error fetching giftcard.",
            icon: "error",
            confirmButtonText: "Ok",
          });
          return;
        } finally {
          setIsLoading(false);
        }
      } else {
        setErrorMessage(i18next.t("param-isnot-present") || "Param giftCode is not present in url");
        setGiftCardValid(false);
      }
      setIsLoading(false);
    };
    setParam();
  }, []);

  return (
    <div className="container">
      <h2>{i18next.t("title") || ""}</h2>
      {!giftCardValid ? (
        errorMessage !== "" ? (
          <h2 className="giftCardError">{errorMessage}</h2>
        ) : (
          <h2 className="giftCardError">{errorMessage}</h2>
        )
      ) : (
        <ul>
          {/* Step 1: About you */}
          <Step1
            completeStep={completeStep}
            formData={formData}
            goBack={goBack}
            handleInputChange={handleInputChange}
            isLoading={isLoading}
            step={step}
          />

          {/* Step 2: Recipient information */}
          <Step2
            completeStep={completeStep}
            formData={formData}
            goBack={goBack}
            handleInputChange={handleInputChange}
            isLoading={isLoading}
            step={step}
          />

          {/* Step 3: Thank you */}
          <Step3 formData={formData} isLoading={isLoading} step={step} />
        </ul>
      )}
    </div>
  );
};

export default GiftCardValidationForm;
