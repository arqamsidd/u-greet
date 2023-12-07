import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import FooterWebsite from "../../Component/Footer/FooterWebsite";
import ScrollToTopArrow from "../../Component/ScrollToTopArrow/ScrollToTopArrow";
import AuthContext from "../../context/authContext";
import Navbar from "../../Layout/Navbar";

const HowItWorks = () => {
    const { state } = useContext(AuthContext);
    return (
        <div>
            <div>
                <Navbar />
                <div className="main-container">
                    <section
                        className="text-center imagebg videobg height-80"
                        data-overlay={3}
                    >
                        <video autoPlay loop muted>
                            <source
                                src="/assets/video/occasions.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <div className="background-image-holder">
                            <img alt="image" src="/assets/video/how.jpg" />
                        </div>
                        <div className="container pos-vertical-center mt--3">
                            <div className="row">
                                <div className="col-md-8">
                                    <img
                                        alt="Image"
                                        className="unmarg--bottom"
                                        src="/assets/img/how-1.png"
                                    />
                                    <h3>We All Greet To Make It Sweet.</h3>
                                    <Link
                                        className="btn btn--primary type--uppercase"
                                        to={
                                            state.isLoggedIn
                                                ? "/startOccasion"
                                                : "/signup"
                                        }
                                        style={{ background: "#CE1C1C" }}
                                    >
                                        <span className="btn__text">
                                            Start Now
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="text-center height-50">
                        <div className="container pos-vertical-center">
                            <div className="row">
                                <div className="col-md-8">
                                    <h1>
                                        Spreading love has never been easier.
                                    </h1>
                                    <p className="lead">
                                        Create your U-Greet in four easy steps.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="switchable switchable--switch">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div
                                        className="height-50 imagebg videobg border--round box-shadow-wide"
                                        data-overlay={4}
                                    >
                                        <video autoPlay loop muted>
                                            <source
                                                src="/assets/video/occasions.mp4"
                                                type="video/mp4"
                                            />
                                        </video>
                                        <div className="background-image-holder">
                                            <img
                                                alt="image"
                                                src="/assets/video/occasions.html"
                                            />
                                        </div>
                                        <div className="pos-vertical-center col-md-10 boxed boxed--lg bg--none">
                                            <h2>Choose A Reason To Greet</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="switchable switchable--switch">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div
                                        className="height-50 imagebg videobg border--round box-shadow-wide"
                                        data-overlay={4}
                                    >
                                        <video autoPlay loop muted>
                                            <source
                                                src="/assets/video/invite.mp4"
                                                type="video/mp4"
                                            />
                                        </video>
                                        <div className="background-image-holder">
                                            <img
                                                alt="image"
                                                src="/assets/video/invite.jpg"
                                            />
                                        </div>
                                        <div className="pos-vertical-center col-md-10 boxed boxed--lg bg--none">
                                            <h2>
                                                Invite Family &amp; Friends To
                                                Participate
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="switchable switchable--switch">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div
                                        className="height-50 imagebg videobg border--round box-shadow-wide"
                                        data-overlay={3}
                                    >
                                        <video autoPlay loop muted>
                                            <source
                                                src="/assets/video/share-experience.mp4"
                                                type="video/mp4"
                                            />
                                        </video>
                                        <div className="background-image-holder">
                                            <img
                                                alt="image"
                                                src="/assets/video/share-experience.jpg"
                                            />
                                        </div>
                                        <div className="pos-vertical-center col-md-10 boxed boxed--lg bg--none">
                                            <h2>Edit &amp; Finalize Video</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="switchable switchable--switch">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div
                                        className="height-50 imagebg videobg border--round box-shadow-wide"
                                        data-overlay={3}
                                    >
                                        <video autoPlay loop muted>
                                            <source
                                                src="/assets/video/share-love.mp4"
                                                type="video/mp4"
                                            />
                                        </video>
                                        <div className="background-image-holder">
                                            <img
                                                alt="image"
                                                src="/assets/video/share-love.jpg"
                                            />
                                        </div>
                                        <div className="pos-vertical-center col-md-10 boxed boxed--lg bg--none">
                                            <h2>Share The Love</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-8 col-lg-6">
                                    <div className="cta">
                                        <h2>
                                            ♪ U-Greet, I-Greet, <br />
                                            We All Greet To Make It Sweet. ♪
                                        </h2>
                                        <p className="lead">
                                            Who will U-Greet today?
                                        </p>
                                        <a
                                            className="btn btn--primary type--uppercase"
                                            href={
                                                state.isLoggedIn
                                                    ? "/startOccasion"
                                                    : "/signup"
                                            }
                                            style={{ background: "#CE1C1C" }}
                                        >
                                            <span className="btn__text">
                                                Start Greeting
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <FooterWebsite />
                </div>
                <ScrollToTopArrow />
            </div>
        </div>
    );
};

export default HowItWorks;
