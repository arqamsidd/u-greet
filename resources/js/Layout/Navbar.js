import React, { useContext, assetPath, useEffect } from "react";
import { GoogleLogout } from "react-google-login";
import { Link } from "react-router-dom";
import authContext, { ActionType } from "../context/authContext";
import { useAuth } from "../hooks/useAuth";
import { clientId } from "../Pages/Auth/authWithGoogleButton/AuthWithGoogleButton";
import "../Pages/Auth/authWithGoogleButton/customStyle.css";

function Navbar() {
    const { state, dispatch } = useContext(authContext);
    const { setSignout } = useAuth();
    // const {setLogout} = useAuth();
    // const { setSignout } = useAuth();

    // const { loginUserOnStartupCheck } = useAuth();

    useEffect(() => {
        // loginUserOnStartupCheck();
       if (!state.isLoggedIn) {
            // navigate('/login');
        } else {
        }
    }, []);
    const renderLinks = () => {
         if (!state.isLoggedIn) {
            return (
                <>
                    <Link to="/signin" className="btn btn--sm type--uppercase">
                        <span className="btn__text">LOGIN</span>
                    </Link>
                    <Link
                        to="/signup"
                        className="btn btn--sm btn--primary type--uppercase"
                    >
                        <span className="btn__text">Sign up</span>
                    </Link>
                </>
            );
        }
        return (
            <>
                {/*<li className="nav-item">
                    <Link className="nav-link" to="">Hi {authData.user.name}</Link>
                </li>*/}
                {/*<li className="nav-item">
                    <Link className="nav-link" to="#" onClick={handleLogout}>Logout</Link>
                </li>*/}

                {/*<Link to='' className="btn btn--sm btn--primary type--uppercase" onClick={handleLogout}>
                    <span className="btn__text">
                        Logout
                    </span>
                </Link>*/}
                <span id="customStyle">
                    <GoogleLogout
                        clientId={clientId}
                        // onLogoutSuccess={logOut}
                    >
                        <Link
                            to="/"
                            className="btn btn--sm btn--primary type--uppercase"
                            onClick={() => setSignout()}
                        >
                            <span className="btn__text">Sign out</span>
                        </Link>
                    </GoogleLogout>
                </span>
            </>
        );
    };
    // const handleLogout = () => {
    //     axios
    //         .post("/api/logout")
    //         .then((response) => {
    //             setSignout();
    //             // setLogout();
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    // const handleSignout = () => {
    //     axios
    //         .post("/api/signout")
    //         .then((response) => {
    //             setSignout();
    //             // setLogout();
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    return (
        <div className="nav-container ">
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
                            </Link>
                        </div>
                        <div className="col-9 col-md-10 text-right">
                            <Link
                                to="#"
                                className="hamburger-toggle"
                                data-toggle-class="#menu1;hidden-xs"
                            >
                                <i className="icon icon--sm stack-interface stack-menu"></i>
                            </Link>
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
                                <a href="/">
                                    <a
                                        href="/"
                                        style={{
                                            display: "flex",
                                            position: "absolute",
                                            zIndex: "9999",
                                        }}
                                    >
                                        <img
                                            className="logo logo-light"
                                            alt="logo"
                                            src="/assets/img/logo-dark.png"
                                        />
                                    </a>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-11 col-md-12 text-right text-left-xs text-left-sm">
                            <div className="bar__module">
                                <ul
                                    className="menu-horizontal text-left left-30px"
                                    style={{ marginRight: "-20px" }}
                                >
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    {state.isLoggedIn && (
                                        <li>
                                            <a href="/dashboard">Dashboard</a>
                                        </li>
                                    )}
                                    <li className="dropdown dropdown--hover ">
                                        <div
                                            className="dropdown__trigger"
                                            style={{
                                                fontSize: "0.997142857142857em",
                                                lineHeight:
                                                    "2.166666666666667em",
                                                textTransform: "uppercase",
                                                fontWeight: "900 ",
                                                color: "#000",
                                                letterSpacing: ".5px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            Occasions
                                        </div>
                                        {/* {isHovering && ( */}
                                        <div
                                            className="dropdown__container "
                                            // style={{ left: "-600px" }}
                                        >
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
                                                                            className="btn btn--primary type--uppercase"
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
                                                                <div className="row ">
                                                                    <div className="col-md-2 col-xs-3">
                                                                        <a
                                                                            href="/SweetGreet"
                                                                            className=""
                                                                        >
                                                                            <div className="text-block text-center">
                                                                                <img
                                                                                    src="/assets/img/icons/sweet-greets.png"
                                                                                    alt="Occasions"
                                                                                    className="top-add-10"
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
                                                                            href="/U-Age"
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
                                                                            href="/U-Wed"
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
                                                                            href="/U-Remember"
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
                                                                            href="/U-Love"
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
                                                                            href="/U-Miss"
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
                                                                            href="/U-Baby"
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
                                                                            href="/U-Parent"
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
                                                                            href="/U-Grad"
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
                                                                            href="/U-Retire"
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
                                                                            href="/U-Celebrate"
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
                                                                            href="/U-Greet"
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
                                                                            href="/sweetGreets"
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
                                                                            href="/U-Age"
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
                                                                            href="/U-Wed"
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
                                                                            href="/U-Remember"
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
                                                                            href="/U-Love"
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
                                                                            href="/U-Miss"
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
                                                                            href="/U-Baby"
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
                                                                            href="/U-Parent"
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
                                                                            href="/U-Grad"
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
                                                                            href="/U-Retire"
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
                                                                            href="/U-Celebrate"
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
                                                                            href="/U-Greet"
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
                                        {/* )} */}
                                    </li>
                                    <li>
                                        <a href="/about">About</a>
                                    </li>
                                    <li className="dropdown dropdown--hover">
                                        <span
                                            className="dropdown__trigger"
                                            style={{
                                                fontSize: "0.997142857142857em",
                                                lineHeight:
                                                    "2.166666666666667em",
                                                textTransform: "uppercase",
                                                fontWeight: "900 ",
                                                color: "#000",
                                                letterSpacing: ".5px",
                                                cursor: "pointer",
                                            }}
                                        >
                                            More
                                        </span>
                                        <div className="dropdown__container">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="dropdown__content col-lg-2 col-md-4">
                                                        <ul className="menu-vertical">
                                                            <li className="">
                                                                <a href="/HowItWorks">
                                                                    How It Works
                                                                </a>
                                                            </li>

                                                            <li className="">
                                                                <a href="/pricing">
                                                                    Pricing
                                                                </a>
                                                            </li>
                                                            <li className="">
                                                                <a href="/reviews">
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

                            <div className="bar__module">
                                {/*<Link to="/login" className="btn btn--sm type--uppercase">
                                        <span className="btn__text">
                                            Login
                                        </span></Link>
                                <Link to="../signup" className="btn btn--sm btn--primary type--uppercase">
                                        <span className="btn__text">
                                            Sign up
                                        </span>
                                </Link>*/}
                                {renderLinks()}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        /*<nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div className="container">
                <Link to="/" className="navbar-brand">Laravel React Auth</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        { renderLinks() }
                    </ul>
                </div>
            </div>
        </nav>*/
    );
}

export default Navbar;
