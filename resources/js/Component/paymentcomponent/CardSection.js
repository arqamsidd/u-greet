import React from "react";
import {
    CardElement,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement,
} from "@stripe/react-stripe-js";
import "./CardSection.css";
import { useState } from "react";
const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: "#32325d",
            fontFamily: "Arial, sans-serif",
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#32325d",
            },
        },
        invalid: {
            fontFamily: "Arial, sans-serif",
            color: "#fa755a",
            iconColor: "#fa755a",
        },
    },
};
// useEffect(() => {
//     CardNumberElement.on("change", ({ error }) => {
//         const displayError = document.getElementById("payment-errors");
//         if (error) {
//             displayError.textContent = error.message;
//         }
//     });
// });

function CardSection({ handleNameChange, name, Error, setError }) {
    const removeError = () => {
        setError(null);
    };
    return (
        <div className="row">
            <label>
                {/* <div className='cardTitle'>Fill the Card details</div> */}
                {/* <CardElement options={CARD_ELEMENT_OPTIONS} /> */}
                {/* <CardNumberElement options={CARD_ELEMENT_OPTIONS} />
                    <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
                    <CardExpiryElement options={CARD_ELEMENT_OPTIONS} /> */}

                <div className="">
                    <div className="panel panel-default credit-card-box">
                        <div className="panel-heading display-table">
                            <div className="row ">
                                <h5 className="panel-title display-td col-8">
                                    Payment Details
                                </h5>
                                <img
                                    className="img-responsive pull-right col-4 object-fit-contain"
                                    src="/assets/img/logo-dark.png"
                                />
                            </div>
                        </div>
                        <div className="panel-body">
                            {/* <div className="form-row row">
                                <div className="col-xs-12 form-group required">
                                    <label className="control-label">
                                        Name on Card
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        placeholder="Card holder name"
                                        value={name}
                                        onChange={(e)=> handleNameChange(e)}
                                    />
                                </div>
                            </div> */}
                            {Error && (
                                <div className="form-row row ">
                                    <div className="mt-4 mb-4 col-md-12 error form-group hide">
                                        <div className="alert-danger alert mb-0">
                                            {Error}
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="form-row row">
                                <label className="control-label">
                                    Card Number
                                </label>
                                <div className="col-xs-12 form-group card required p-3">
                                    <CardNumberElement
                                        options={CARD_ELEMENT_OPTIONS}
                                        onChange={removeError}
                                    />
                                    {/* <input
                                        autoComplete="off"
                                        className="form-control card-number"
                                        size={20}
                                        type="text"
                                    /> */}
                                </div>
                            </div>
                            <div className="form-row row">
                                <div className="col">
                                    <label className="control-label">CVC</label>
                                    <div className="col-xs-12 col-md-4 form-group card required p-3">
                                        <CardCvcElement
                                            options={CARD_ELEMENT_OPTIONS}
                                            onChange={removeError}
                                        />
                                    </div>
                                </div>
                                <div className="col">
                                    <label className="control-label">
                                        Expiration
                                    </label>
                                    <div className="col-xs-12 col-md-7 form-group card required p-3">
                                        <CardExpiryElement
                                            options={CARD_ELEMENT_OPTIONS}
                                            onChange={removeError}
                                        />
                                    </div>
                                </div>
                                {/* <div className="col-xs-12 col-md-4 form-group expiration required">
                                    <label className="control-label">
                                        Expiration Year
                                    </label>
                                    <input
                                        className="form-control card-expiry-year"
                                        placeholder="YYYY"
                                        size={4}
                                        type="text"
                                    />
                                </div> */}
                            </div>

                            {/* <div className="row">
                                <div className="col-xs-12">
                                    <button
                                        className="btn btn-primary btn-lg btn-block"
                                        type="submit"
                                    >
                                        Pay Now ($100)
                                    </button>
                                </div>
                            </div> */}
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </label>
        </div>
    );
}

export default CardSection;
