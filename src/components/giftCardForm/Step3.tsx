import i18next from "i18next";
import { GiftCard } from "../../classes/giftcard/GiftCard";
import { FormData } from "../GiftCardActivationForm";

interface IStep3 {
    step: number;
    formData: FormData;
    isLoading: boolean;
  }

const Step3: React.FunctionComponent<IStep3> = ({step, formData, isLoading}) => {
  return (
    <li className={step === 3 ? "active" : ""}>
      <h3>{i18next.t("step-3-title") || ""}</h3>
      {step === 3 && (
        <div className="congratulation">
          <h4>{i18next.t("thank-you") || ""}</h4>
          <p>{i18next.t("confirmation-message") || ""}</p>
          <div className="d-grid gap-3 col-4">
            <button
              onClick={(e) => GiftCard.downloadLetter(formData.giftCode)}
              disabled={isLoading || !formData.giftCode}
            >
              Donwload here
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default Step3;
