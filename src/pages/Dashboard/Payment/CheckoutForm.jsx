import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { apiInstance, baseUrl } from "../../../API/api";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ price, classes }) => {
  const { user } = useAuth();
  const token = localStorage.getItem("jwt-token");
  const [error, setError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  const navigate = useNavigate();

  console.log(JSON.stringify({ price, classes }));

  useEffect(() => {
    fetch(`${baseUrl}/payments/create-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [token, price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment submit", error);
      setError(error.message);
    } else {
      setError("");
      console.log(paymentMethod);
    }
    console.log(clientSecret);
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || "unknown",
          name: user?.displayName || "anonymous",
          address: {
            line1: "123 Example St",
            city: "Kolkata",
            state: "WB",
            postal_code: "700001",
            country: "IN",
          },
        },
      },
    });

    if (confirmError) {
      console.log("Payment confirm error", confirmError);
      setError(confirmError.message);
    }
    console.log("payment intent", paymentIntent);
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      toast.success("Your Payment Successful!");

      const payInfo = {
        user: {
          name: user?.displayName,
          email: user?.email,
        },
        amount: price,
        transactionId: paymentIntent.id,
        classes: classes,
        details: paymentIntent,
      };

      console.log(payInfo);

      apiInstance
        .post("/payments", { payInfo })
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            apiInstance
              .patch("/classes/bulk-update", { classes })
              .then((res) => {
                console.log(res.data);
              })
              .catch((err) => {
                console.log(err);
              });

            apiInstance
              .post("/students/enroll", { classes, student_email: user?.email })
              .then((res) => {
                console.log(res.data);
                if (classes.length === 1) {
                  apiInstance.delete(`/students/selected/${classes[0]._id}`).then((res) => {
                    console.log(res.data);
                  });
                } else if (classes.length > 1) {
                  apiInstance.delete(`/students/booked?email=${user.email}`).then((res) => {
                    console.log(res.data);
                  });
                }
                navigate("/dashboard/my_classes");
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="w-1/2 mx-auto my-4 min-h-[60vh]">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "20px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-warning my-4"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-600 text-lg">{error}</p>
    </div>
  );
};

export default CheckoutForm;
