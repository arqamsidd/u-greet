import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MainNavbar } from "../../Component/Navbar/MainNavbar";
import Footer from "../../Component/Footer/Footer";
import AuthContext from "../../context/authContext";

const UserCards = () => {
    const element = document.getElementById("ugreetAppHtml");
    if (element?.classList?.contains("f-style-bundle")) {
    } else {
        element?.classList?.add("f-style-bundle");
    }
    const navigate = useNavigate();
    const { state } = useContext(AuthContext);

    return (
        <div className="page-impstyle-bundle stypage-plr-out">
            <MainNavbar>
                <div>
                    <div
                        className="content d-flex flex-column flex-column-fluid"
                        id="kt_content"
                    >
                        <div className="d-flex flex-column-fluid">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-4">
                                        <div className="card card-custom">
                                            <div className="card-body pt-15">
                                                <div className="text-center mb-10">
                                                    <div className="symbol symbol-60 symbol-circle symbol-xl-90">
                                                        <div
                                                            className="symbol-label"
                                                            style={{
                                                                backgroundImage:
                                                                    'url("assets/media/users/300_15.jpg")',
                                                            }}
                                                        />
                                                        <i className="symbol-badge symbol-badge-bottom bg-success" />
                                                    </div>
                                                    <h4 className="font-weight-bold my-2">
                                                        {
                                                            state?.user
                                                                ?.first_name
                                                        }{" "}
                                                        {state?.user?.last_name}
                                                    </h4>
                                                    <span className="label label-light-warning label-inline font-weight-bold label-lg">
                                                        Active
                                                    </span>
                                                </div>
                                                {/* <div className="mb-10 text-center">
                                                    <a
                                                        href="https://www.facebook.com/"
                                                        className="btn btn-icon btn-circle btn-light-facebook mr-2"
                                                    >
                                                        <i className="socicon-facebook" />
                                                    </a>
                                                    <a
                                                        href="https://twitter.com/"
                                                        className="btn btn-icon btn-circle btn-light-twitter mr-2"
                                                    >
                                                        <i className="socicon-twitter" />
                                                    </a>
                                                    <a
                                                        href="https://www.google.com/"
                                                        className="btn btn-icon btn-circle btn-light-google"
                                                    >
                                                        <i className="socicon-google" />
                                                    </a>
                                                </div> */}
                                                <Link
                                                    to="/userProfile"
                                                    className="btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block"
                                                >
                                                    Personal info
                                                </Link>
                                                <Link
                                                    to="/changePass"
                                                    className="btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block ml-0"
                                                >
                                                    Change Password
                                                </Link>
                                                <Link
                                                    to="/userCards"
                                                    className="btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block ml-0 active"
                                                >
                                                    Saved Credit Cards
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8">
                                        <div className="card card-custom">
                                            <div className="card-header py-3">
                                                <div className="card-title align-items-start flex-column">
                                                    <h3 className="card-label font-weight-bolder text-dark">
                                                        Your Cards
                                                    </h3>
                                                    <span className="text-muted font-weight-bold font-size-sm mt-1">
                                                        Change your primary card
                                                        for payment
                                                    </span>
                                                </div>
                                                <div className="card-toolbar">
                                                    <button
                                                        type="reset"
                                                        // onClick="javascript:location.href='dash.html'"
                                                        className="btn btn-success mr-2"
                                                    >
                                                        Save Changes
                                                    </button>
                                                    <button
                                                        type="reset"
                                                        onClick={() =>
                                                            navigate(
                                                                "/dashboard"
                                                            )
                                                        }
                                                        className="btn btn-secondary"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                            <form className="form">
                                                <div className="card-body">
                                                    <div
                                                        className="pb-5"
                                                        data-wizard-type="step-content"
                                                        data-wizard-state="current"
                                                    >
                                                        <h4 className="mb-10 font-weight-bold text-dark">
                                                            Enter your Card
                                                            Details
                                                        </h4>
                                                        <div className="row">
                                                            <div className="col-xl-6">
                                                                <div className="form-group fv-plugins-icon-container">
                                                                    <label>
                                                                        Name on
                                                                        Card
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control form-control-solid form-control-lg"
                                                                        name="ccname"
                                                                        placeholder="Card Name"
                                                                        defaultValue="John Wick"
                                                                    />
                                                                    <span className="form-text text-muted">
                                                                        Please
                                                                        enter
                                                                        your
                                                                        Card
                                                                        Name.
                                                                    </span>
                                                                    <div className="fv-plugins-message-container" />
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-6">
                                                                <div className="form-group fv-plugins-icon-container">
                                                                    <label>
                                                                        Card
                                                                        Number
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control form-control-solid form-control-lg"
                                                                        name="ccnumber"
                                                                        placeholder="Card Number"
                                                                        defaultValue="4444 3333 2222 1111"
                                                                    />
                                                                    <span className="form-text text-muted">
                                                                        Please
                                                                        enter
                                                                        your
                                                                        Address.
                                                                    </span>
                                                                    <div className="fv-plugins-message-container" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-xl-4">
                                                                <div className="form-group fv-plugins-icon-container">
                                                                    <label>
                                                                        Card
                                                                        Expiry
                                                                        Month
                                                                    </label>
                                                                    <input
                                                                        type="number"
                                                                        className="form-control form-control-solid form-control-lg"
                                                                        name="ccmonth"
                                                                        placeholder="Card Expiry Month"
                                                                        defaultValue="10"
                                                                    />
                                                                    <span className="form-text text-muted">
                                                                        Please
                                                                        enter
                                                                        your
                                                                        Card
                                                                        Expiry
                                                                        Month.
                                                                    </span>
                                                                    <div className="fv-plugins-message-container" />
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-4">
                                                                <div className="form-group fv-plugins-icon-container">
                                                                    <label>
                                                                        Card
                                                                        Expiry
                                                                        Year
                                                                    </label>
                                                                    <input
                                                                        type="number"
                                                                        className="form-control form-control-solid form-control-lg"
                                                                        name="ccyear"
                                                                        placeholder="Card Expire Year"
                                                                        defaultValue={
                                                                            21
                                                                        }
                                                                    />
                                                                    <span className="form-text text-muted">
                                                                        Please
                                                                        enter
                                                                        your
                                                                        Card
                                                                        Expiry
                                                                        Year.
                                                                    </span>
                                                                    <div className="fv-plugins-message-container" />
                                                                </div>
                                                            </div>
                                                            <div className="col-xl-4">
                                                                <div className="form-group fv-plugins-icon-container">
                                                                    <label>
                                                                        Card CVV
                                                                        Number
                                                                    </label>
                                                                    <input
                                                                        type="password"
                                                                        className="form-control form-control-solid form-control-lg"
                                                                        name="cccvv"
                                                                        placeholder="Card CVV Number"
                                                                        defaultValue={
                                                                            123
                                                                        }
                                                                    />
                                                                    <span className="form-text text-muted">
                                                                        Please
                                                                        enter
                                                                        your
                                                                        Card CVV
                                                                        Number.
                                                                    </span>
                                                                    <div className="fv-plugins-message-container" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </MainNavbar>
        </div>
    );
};

export default UserCards;
