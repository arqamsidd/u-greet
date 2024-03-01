import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../Component/paymentcomponent/CheckoutForm";
import Footer from "../../Component/Footer/Footer";

const stripePromise = loadStripe(
    "pk_test_51M4qHZGZ01nKTVKhtwarTKR3XLHZ4DT9ZnicVdLnciRtdiCYBwv1zOpo0GBl7pYuc1M9NRJQ6xICQNYK3Ok4wUNI00JgbmX6Px"
);


const OccasionCheckoutPayment = () => {
    return (
        <div className="">
            <div className="navigation bg-white">
                <div className="inner inner-occasion inner-action">
                    {/* <div className="left link" onClick={() => navigate(-1)}>
                        <img
                            src="assets/images/arrow-right.418d2ebe.svg"
                            alt="arrow"
                            className="arrow"
                        />
                        Back
                    </div> */}
                    <div>
                        <img
                            className="logo logo-dark"
                            alt="logo"
                            src="/assets/img/logo-dark.png"
                        />
                    </div>
                </div>
            </div>
            <div className="container page dashboard d-flex justify-content-center">
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
            <Footer />
        </div>
    );
};

export default OccasionCheckoutPayment;
