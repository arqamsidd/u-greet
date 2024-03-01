import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import actionTypes from "../../State/actions/actionTypes";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../Component/paymentcomponent/CheckoutForm";

const stripePromise = loadStripe(
    "pk_test_51M4qHZGZ01nKTVKhtwarTKR3XLHZ4DT9ZnicVdLnciRtdiCYBwv1zOpo0GBl7pYuc1M9NRJQ6xICQNYK3Ok4wUNI00JgbmX6Px"
);


const OccasionCheckout = () => {
    const element = document.getElementById("ugreetAppHtml");
    if (element?.classList?.contains("f-style-bundle")) {
    } else {
        element?.classList?.add("f-style-bundle");
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { greetData, checkoutDetail, isLoading } = useSelector(
        (state) => state
    );

    const [IsPaymentWindow, setIsPaymentWindow] = useState(false);
    const [IsPlanPopup, setIsPlanPopup] = useState(true);
    const [Plan, setPlan] = useState("");

    useEffect(() => {
        if (sessionStorage.greetData_onReloading) {
            var reloading = JSON.parse(sessionStorage?.greetData_onReloading);
        }
        // console.log("reloading", reloading);
        if (reloading?.id) {
            console.log("reloading setiing state", reloading);
            // sessionStorage.removeItem("greetData_onReloading");
            dispatch({
                type: actionTypes.SET_STATE,
                payload: {
                    greetData: reloading,
                },
            });
        }
    }, []);
    useEffect(() => {
        if (greetData?.id) {
            dispatch({
                type: actionTypes.GET_CHECKOUT_DETAIL,
                payload: {
                    greet_id: greetData?.id,
                },
            });
        }
    }, [greetData?.id]);

    if (!isLoading && checkoutDetail.id) {
        (checkoutDetail,
        checkoutDetail?.uploads_media == "False" ||
            checkoutDetail?.request_video_status != "Done" ||
            checkoutDetail?.video_link == "") && navigate("/occasionPreview");
    }

    const handlePlanSelect = (plan) => {
        console.log(plan);
        setPlan(plan);
        setIsPlanPopup(false);
    };
    const renderPlans = (plan) => {
        return (
            <div className="page dashboard u-great-css">
                <div className="container text-center mb-10">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Pricing Plans to suit every story.</h4>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row posRelative">
                    <div className="pricingAbsolute">                        
                          <button       
                          className="color-white"                         
                                onClick={() => handlePlanSelect("plan3")}
                                
                            >
                                
                                Introductory Pricing - $17 All Greets
                                
                            </button>
                        </div>
                        <div className="col-md-4 pointerEventNone">
                            <div className="pricing pricing-1 boxed boxed--lg boxed--border">
                                <span className="h3 pb-4">
                                    <br />
                                    <br />
                                    <strong className="h3 font-weight-bold">
                                    Per Minute
                                    </strong>
                                </span>
                                <span className="h3 pb-4 font-weight-normal">
                                $0.98 per minute
                                </span>
                                <span
                                    className="label"
                                    style={{
                                        borderRadius: 50,
                                        padding: "10px 10px",
                                        width: "auto",
                                        color: "white",
                                    }}
                                >
                                    TEASER (FREE)
                                </span>
                                <hr />
                                <ul>
                                    <li>
                                            <span className="checkmark bg--primary" />
                                            <span>0 to 3 minutes: Free Sweet Greet </span>
                                        </li>
                                        <li>
                                            <span className="checkmark bg--primary" />
                                            <span>3 minutes to 59 minutes:  $0.98 per minute</span>
                                        </li>
                                        <li>
                                            <span className="checkmark bg--primary" />
                                            <span>All features included </span>
                                        </li>
                                        <li>
                                            <span className="checkmark bg--primary" />
                                            <span>Tax excluded</span>
                                        </li>
                                </ul>
                                <button
                                    className="btn btn--primary"
                                    onClick={() => console.log("plan1")}
                                    style={{
                                        background: "gray",
                                        cursor: "not-allowed",
                                    }}
                                >
                                    <span className="btn__text">
                                        Get Greeting
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-4 pointerEventNone">
                            <div className="pricing pricing-1 boxed boxed--lg boxed--border boxed--emphasis">
                                <span className="h3 pb-4">
                                    <br />
                                    <br />
                                    <strong className="h3 font-weight-bold">
                                    Per Story
                                    </strong>
                                </span>
                                <span className="h3 pb-4 font-weight-normal">
                                $44.00 + HST
                                </span>
                                <span
                                    className="label"
                                    style={{
                                        borderRadius: 50,
                                        padding: "10px 10px",
                                        width: "auto",
                                        color: "white",
                                    }}
                                >
                                    TALE (1 OCCASION)
                                </span>
                                <hr />
                                <ul>
                                     <li>
                                            <span className="checkmark bg--primary" />
                                            <span>Set price (No Surprises)</span>
                                        </li>
                                        <li>
                                            <span className="checkmark bg--primary" />
                                            <span>Up to 60 minutes</span>
                                        </li>
                                        <li>
                                            <span className="checkmark bg--primary" />
                                            <span>All features included</span>
                                        </li>
                                        <li>
                                            <span className="checkmark bg--primary" />
                                            <span>Tax excluded</span>
                                        </li>
                                </ul>
                                <button
                                    className="btn btn--primary"
                                    onClick={() =>
                                        checkoutDetail?.video_length > 30
                                            ? console.log("plan2")
                                            : handlePlanSelect("plan2")
                                    }
                                    style={{
                                        // background: "rgb(206, 28, 28)",
                                        background:
                                            checkoutDetail?.video_length > 30
                                                ? "gray"
                                                : "rgb(206, 28, 28)",
                                        cursor:
                                            checkoutDetail?.video_length > 30
                                                ? "not-allowed"
                                                : "pointer",
                                    }}
                                >
                                    <span className="btn__text">
                                        Get Greeting
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-4 pointerEventNone">
                            <div className="pricing pricing-1 boxed boxed--lg boxed--border">
                                <span className="h3 pb-4">
                                    <br />
                                    <br />
                                    <strong className="h3 font-weight-bold">
                                    Per Month
                                    </strong>
                                </span>
                                <span className="h3 pb-4 font-weight-normal">
                                $28.00 + HST
                                </span>
                                <span
                                    className="label"
                                    style={{
                                        borderRadius: 50,
                                        padding: "10px 10px",
                                        width: "auto",
                                        color: "white",
                                    }}
                                >
                                    Unlimited
                                </span>
                                <hr />
                                <ul>
                                <li>
                                            <span className="checkmark bg--primary" />
                                            <span>$28 per month + HST </span>
                                        </li>
                                        <li>
                                            <span className="checkmark bg--primary" />
                                            <span>12 videos per year (up to 60 minutes)</span>
                                        </li>
                                        <li>
                                            <span className="checkmark bg--primary" />
                                            <span>Monthly billing</span>
                                        </li>
                                        <li>
                                            <span className="checkmark bg--primary" />
                                            <span>All features included</span>
                                        </li>
                                </ul>
                                <button
                                    className="btn btn--primary"
                                    onClick={() => handlePlanSelect("plan3")}
                                    style={{
                                        background: "rgb(206, 28, 28)",
                                    }}
                                >
                                    <span className="btn__text">
                                        Get Greeting
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    const renderFinalVideo = () => {
        if (checkoutDetail?.video_link) {
            return (
                <div className="page dashboard">
                    <section className="checkout-section">
                        {/* final video Component */}
                        <section className="media-section media-section2 bg-2">
                            <div className="section-head">
                                <div className="font-17 bold">Final Video</div>
                                <div className="font-12">Check out your video...</div>
                            </div>
                            <div className="themes-container card-round bg-white">
                                <video
                                    className="preview"
                                    controls
                                    id="videoWithData"
                                    type="video/mp4"
                                    key="finalVid"
                                >
                                    <source
                                        src={checkoutDetail?.video_link}
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>

                                {(checkoutDetail?.video_link ) &&
                                    <a className="rounded bg-3 p-5 d-inline-block bold mr-10" target="_blank" href={checkoutDetail.video_link} download="">Download</a>
                                }
                            </div>
                           
                           
                        </section>
                    </section>
                </div>
            );
        }
    };
    const renderCheckout = () => {
        if (
            checkoutDetail.occasion_name == "Sweet Greet" ||
            checkoutDetail?.greet_plan == "1" ||
            checkoutDetail?.payment_status == "succeeded"
        ) {
            return <>{renderFinalVideo()}</>;
        }
        if (IsPlanPopup) {
            return <>{renderPlans()}</>;
        }
        return (
            <div className="page dashboard">
                <section className="checkout-section">
                    <div className="section-head">
                        <div className="font-40 bold">Your Cart</div>
                        {/* <div className="font-20">
                                        Review your cart before continuing your payment
                                    </div> */}
                    </div>
                    <>
                        <div className="description">
                            <span>
                                <span className="font-20 bold">
                                    {checkoutDetail?.occasion_name}
                                </span>
                                <br />
                                <b>Est. Length:</b>{" "}
                                {checkoutDetail?.video_length
                                    ? checkoutDetail?.video_length
                                    : "00:00"}
                            </span>
                        </div>
                        <div className="input-container d-none">
                            <div>
                                <div className="text-input full-input">
                                    {/* <div className="label undefined">
                                            <div />
                                            <a className="link" href>
                                                <div />
                                            </a>
                                        </div> */}
                                    <input
                                        type="name"
                                        name="code"
                                        className="bg-2 bg-2-fx"
                                        defaultValue
                                    />
                                    <div />
                                </div>
                            </div>
                            <div>
                                <button className="bg-none color-5 bold">
                                    <div>Apply Code</div>
                                </button>
                            </div>
                        </div>
                        {/*<div className="list mt-5">
                            <div className="item">
                                <div>
                                    <input type="checkbox" defaultValue="true" />{" "}
                                    &nbsp; Quality Check • ${ checkoutDetail?.price ? checkoutDetail?.price : '0.00'} &nbsp;
                                    <img
                                        src="assets/images/info.5ba51b75.svg"
                                        className="info"
                                        alt="info"
                                    />
                                </div>
                            </div>
                        </div>*/}
                        <div className="list">
                            <div className="item">
                                <div>
                                    Video Gift{" "}
                                    {checkoutDetail?.greet_for
                                        ? "for " + checkoutDetail?.greet_for
                                        : ""}{" "}
                                    (
                                    {checkoutDetail?.video_length
                                        ? checkoutDetail?.video_length
                                        : "00:00"}
                                    )
                                </div>
                                {!isLoading && Plan == "plan2" && (
                                    <div>${checkoutDetail.plan2}</div>
                                )}
                                {!isLoading && Plan == "plan3" && (
                                    <div>${checkoutDetail.plan3}</div>
                                )}
                            </div>
                        </div>
                        <div className="total font-30 bold">
                            <div>Your Total (CAD):</div>
                            {!isLoading && Plan == "plan2" && (
                                <div>${checkoutDetail.plan2}</div>
                            )}
                            {!isLoading && Plan == "plan3" && (
                                <div>${checkoutDetail.plan3}</div>
                            )}
                        </div>
                        <div className="button-container">
                            {/* <Link to="/occasionCheckout/payment">
                                <button className="bg-3 bold">
                                    <div>Continue to payment</div>
                                </button>
                            </Link> */}
                            <div>
                                <button
                                    onClick={() => setIsPaymentWindow(true)}
                                    className="bg-3 bold"
                                >
                                    <div>Continue to payment</div>
                                </button>
                            </div>
                        </div>
                    </>
                </section>
            </div>
        );
    };

    if (IsPaymentWindow) {
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
                        <CheckoutForm
                            plan={Plan}
                            amount={
                                Plan == "plan2"
                                    ? checkoutDetail.plan2
                                    : Plan == "plan3"
                                    ? checkoutDetail.plan3
                                    : "error"
                            }
                        />
                    </Elements>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <div className="Toastify" />
            <div className="navigation bg-white">
                <div className="inner inner-occasion inner-action">
                    <div className="left link" onClick={() => navigate(-1)}>
                        <img
                            src="assets/images/arrow-right.418d2ebe.svg"
                            alt="arrow"
                            className="arrow"
                        />
                        Back
                    </div>
                </div>
            </div>
            {!isLoading && renderCheckout()}
            <Footer />
        </div>
    );
};

export default OccasionCheckout;
