import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { Ticket } from "../../classes/Ticket/Ticket";
import Swal from "sweetalert2";
import i18next from "i18next";

const FormStep3 = ({ saveTransaction, handleSucessPay, amount, amountSmallestUnitDollar, name, email }: any) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const checkout = async (event: any) => {
    event.preventDefault();
    if (!stripe || !elements) {
      console.error("Failed to load Stripe.js.");
      alert("Failed to load Stripe.js");
      return;
    }

    try {
      setLoading(true);
      const responseSecret = await Ticket.getPaymentIntent(amountSmallestUnitDollar, name, email);
      elements.submit();

      const transact = await saveTransaction(responseSecret);

      if (transact) {
        const { error } = await stripe.confirmPayment({
          elements: elements,
          clientSecret: responseSecret,
          redirect: "if_required",
          confirmParams: {
            return_url: "https://www.google.com/",
          },
        });
        if (error) {
          Swal.fire({
            icon: "error",
            text: error.message,
          });
          return;
        }
        handleSucessPay(responseSecret);
      }

    } catch (err: any) {
      alert(`An error occurred, please try again: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (!stripe || !elements)
    return (
      <>
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      </>
    );
  return (
    <div>
      <h2 data-aos="fade-up" className="mt-5">
        ${amount}
      </h2>
      <form onSubmit={checkout}>
        <div
          style={{
            borderRadius: "12px",
            padding: "20px",
            backgroundColor: "white",
          }}
        >
          <PaymentElement className="element-1" />
        </div>
        <button
          disabled={loading}
          type="submit"
          id="horizontal-prev-step"
          className="btn btn-primary mt-5"
        >
          {!loading ? i18next.t("button.pay") : "..."}
        </button>
      </form>
    </div>
  );
};

export default FormStep3;
