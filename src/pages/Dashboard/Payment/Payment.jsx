import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment);

const Payment = () => {
   const location = useLocation();
   const price = location.state.price;
   const amount = parseFloat(price.toFixed(2));
   const ids = location.state.ids;
   console.log(location, amount, ids);
   return (
      <div>
         <SectionTitle title="Payment" subTitle="Complete Payment to enroll the class"></SectionTitle>
         <div className="text-center text-2xl font-bold">
            <p>Pay: ${amount}</p>
         </div>
         <Elements stripe={stripePromise}>
            <CheckoutForm price={amount} ids={ids} />
         </Elements>
      </div>
   );
};

export default Payment;
