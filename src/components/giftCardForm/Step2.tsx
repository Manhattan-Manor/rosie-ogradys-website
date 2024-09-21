import React from "react";
import i18next from "i18next";
import { FormData } from "../GiftCardActivationForm";

interface IStep2 {
  step: number;
  completeStep: (event?: React.FormEvent<HTMLFormElement>)=>any;
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => any;
  goBack: ()=>any;
  isLoading: boolean;
}

const Step2: React.FunctionComponent<IStep2> = ({ step, completeStep, formData, handleInputChange, goBack, isLoading }) => {
  return (
    <li className={step >= 2 ? "active" : ""}>
      <h3>{i18next.t("step-2-title") || ""}</h3>

      {step === 2 && (
        <form onSubmit={completeStep}>
            <div>
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
  );
};

export default Step2;
