import React from "react";
import i18next from "i18next";
import { FormData } from "../GiftCardActivationForm";

interface IStep1 {
  step: number;
  completeStep: (event?: React.FormEvent<HTMLFormElement>)=>any;
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => any;
  goBack: ()=>any;
  isLoading: boolean;
}

const Step1: React.FunctionComponent<IStep1> = ({ step, completeStep, formData, handleInputChange, goBack, isLoading }) => {
  return (
    <li className={step >= 1 ? "active" : ""}>
      <h3>{i18next.t("step-1-title") || ""}</h3>

      {step === 1 && (
        <form onSubmit={completeStep}>
            <div>
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

                    <br />
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
  );
};

export default Step1;
