import React, { useContext, assetPath, useEffect } from "react";
import { Link } from "react-router-dom";

// import {LogoFooter} from '/assets/img/logo-footer.png';

import authContext from "../context/authContext";
import { useAuth } from "../hooks/useAuth";

// import WelcomeStyle from "../assets/css/module/Welcome.module.css";
import { Helmet } from "react-helmet";
import { clientId } from "../Pages/Auth/authWithGoogleButton/authWithGoogleButton";
import "../Pages/Auth/authWithGoogleButton/customStyle.css";
import axios from "axios";

function Navbar() {
    const { state } = useContext(authContext);
    // // const {setLogout} = useAuth();
    const { setSignout } = useAuth();

    // const { loginUserOnStartupCheck } = useAuth();

    // useEffect(() => {
    //     loginUserOnStartupCheck();
    //     console.info("Nav: Here");
    //     if(!state.signedIn) {
    //         console.info("NavBar: heheheh");
    //         // navigate('/login');
    //     } else {
    //         console.info("NAv: Here in else");
    //     }
    // }, []);
    const renderLinks = () => {
        if (!state.isLoggedIn) {
            return (
                <>
                    <Link
                        to="/signin"
                        className="btn btn--sm type--uppercase  btn btn--sm type--uppercase"
                    >
                        <span className="btn__text  btn__text">Signin</span>
                    </Link>
                    <Link
                        to="/signup"
                        className="btn btn--sm btn--primary type--uppercase  btn}  btn--sm btn--primary type--uppercase"
                    >
                        <span className="btn__text btn__text">Sign up</span>
                    </Link>
                </>
            );
        }
        return (
            <>
                <span id="customStyle">
                    <GoogleLogout
                        clientId={clientId}
                        // onLogoutSuccess={logOut}
                    >
                        <Link
                            to=""
                            className="btn btn--sm btn--primary type--uppercase  btn btn--sm btn--primary type--uppercase"
                            onClick={() => {
                                handleSignout;
                            }}
                        >
                            <span className="btn-text">Sign out</span>
                        </Link>
                    </GoogleLogout>
                </span>
            </>
        );
    };

    const handleSignout = () => {
        axios
            .post("/api/signout")
            .then((response) => {
                setSignout();
                // setLogout();
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <div className="nav-container">
            <div className="bar bar--sm visible-xs">
                <div className="container">
                    <div className="row">
                        <div className="col-3 col-md-2">
                            <Link to="/dashboard">
                                <img
                                    className="logo logo-dark"
                                    alt="logo"
                                    src="/assets/img/logo-dark.png"
                                />
                                <img
                                    className="logo logo-dark"
                                    alt="logo"
                                    src="/assets/img/logo-footer.png"
                                />
                            </Link>
                        </div>
                        <div className="col-9 col-md-10 text-right">
                            <a
                                href="#"
                                className="hamburger-toggle"
                                data-toggle-class="#menu1;hidden-xs"
                            >
                                <i className="icon icon--sm stack-interface stack-menu"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <nav
                id="menu1"
                className="bar bar--sm bar-1 bar--transparent hidden-xs bar--absolute"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1 col-md-2 hidden-xs">
                            <div className="bar__module">
                                <Link to="/">
                                    <img
                                        className="logo logo-dark"
                                        alt="logo"
                                        src="/assets/img/logo-dark.png"
                                    />
                                    <img
                                        className="logo logo-light"
                                        alt="logo"
                                        src="/assets/img/logo-dark.png"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-11 col-md-12 text-right text-left-xs text-left-sm">
                            <div className="bar__module">
                                <ul
                                    className="menu-horizontal text-left left-30px"
                                    style={{ marginRight: "-20px" }}
                                >
                                    <li>
                                        <Link to="/dashboard">Home</Link>
                                    </li>
                                    <li className="dropdown dropdown--hover">
                                        <span className="dropdown__trigger">
                                            Occasions
                                        </span>
                                        <div className="dropdown__container  dropdown__container">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12 dropdown__content dropdown__content--lg">
                                                        <div
                                                            className="pos-absolute col-lg-5 imagebg hidden-sm hidden-xs"
                                                            data-overlay="4"
                                                        >
                                                            <div className="background-image-holder">
                                                                <img
                                                                    alt="background"
                                                                    src="/assets/img/dropdown-2.jpg"
                                                                />
                                                            </div>
                                                            <div className="container pos-vertical-center pl-5">
                                                                <div className="row">
                                                                    <div className="col-lg-8">
                                                                        <img
                                                                            alt="Logo"
                                                                            src="/assets/img/logo-light.png"
                                                                            className="image--sm mt--1"
                                                                        />
                                                                        <span className="h2 color--white">
                                                                            Capture
                                                                            &
                                                                            send
                                                                            your
                                                                            heart.
                                                                        </span>
                                                                        <Link
                                                                            to={
                                                                                state.isLoggedIn
                                                                                    ? "/startOccasion"
                                                                                    : "/signup"
                                                                            }
                                                                            className={` btn btn--primary type--uppercase`}
                                                                        >
                                                                            <span className="label">
                                                                                Free
                                                                                Trial
                                                                            </span>
                                                                            <span className="btn__text">
                                                                                Start
                                                                                Now
                                                                            </span>
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row justify-content-end hide-xs">
                                                            <div className="col-lg-7 pl-4 pr-1">
                                                                <div className="row">
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="sweet-greets.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/sweet-greets.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    Sweet
                                                                                    Greet
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="u-age.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/cake.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    U-Age
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="u-wed.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/wedding-ring.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    U-Wed
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="u-remember.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/ribbon.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    U-Remember
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="u-love.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/love.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    U-Love
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="u-miss.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/world.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    U-Miss
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>

                                                                <div className="row">
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="u-baby.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/newborn2.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    U-Baby
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="u-parent.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/mothers-day.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    U-Parent
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="u-graduate.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/graduation-hat-and-diploma.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    U-Grad
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="u-retire.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/rocking-chair.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    U-Retire
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="u-celebrate.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/christmas-tree.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    U-Celebrate
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="u-greet.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/ugreet.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    U-Greet
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="row justify-content-end hide-md">
                                                            <div className="col-lg-7 pl-4 pr-1">
                                                                <div className="row">
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="sweet-greets.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/sweet-greets.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    Sweet
                                                                                    Greet
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="u-age.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/cake.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    U-Age
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="u-wed.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/wedding-ring.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    U-Wed
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="u-remember.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/ribbon.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    U-Remember
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="u-love.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/love.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    U-Love
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="u-miss.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/world.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    U-Miss
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="u-baby.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/newborn2.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    U-Baby
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="u-parent.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/mothers-day.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    U-Parent
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                                <div className="row">
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="u-graduate.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/graduation-hat-and-diploma.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    U-Grad
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="u-retire.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/rocking-chair.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    U-Retire
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="u-celebrate.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/christmas-tree.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    U-Celebrate
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="u-greet.html"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/ugreet.png"
                                                                                    alt="Occasions"
                                                                                />
                                                                                <h6>
                                                                                    U-Greet
                                                                                </h6>
                                                                            </div>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="about.html">About</a>
                                    </li>
                                    <li className="dropdown dropdown--hover">
                                        <span className="dropdown__trigger">
                                            More
                                        </span>
                                        <div className="dropdown__container">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="dropdown__content col-lg-2 col-md-4">
                                                        <ul className="menu-vertical">
                                                            <li className="">
                                                                <a href="how-it-works.html">
                                                                    How It Works
                                                                </a>
                                                            </li>

                                                            <li className="">
                                                                <a href="pricing.html">
                                                                    Pricing
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a href="reviews.html">
                                                                    Reviews
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bar__module">{renderLinks()}</div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
