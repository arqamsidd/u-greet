import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../Component/Footer/Footer";
import FooterWebsite from "../../Component/Footer/FooterWebsite";
import ScrollToTopArrow from "../../Component/ScrollToTopArrow/ScrollToTopArrow";
import Navbar from "../../Layout/Navbar";

const WorkWithUGreet = () => {
    return (
        <div>
            <div>
                <Navbar />
                <div className="main-container">
                    <section
                        className="text-center imagebg height-80"
                        data-overlay={3}
                    >
                        <div className="background-image-holder hidden-xs">
                            <img
                                alt="background"
                                src="/assets/img/landing-1.jpg"
                            />
                        </div>
                        <div className="container pos-vertical-center mt--1">
                            <div className="row">
                                <div className="col-md-8">
                                    <img
                                        alt="Image"
                                        className="unmarg--bottom"
                                        src="/assets/img/work-1.png"
                                    />
                                    <a
                                        className="btn btn--primary type--uppercase"
                                        href="#openings"
                                    >
                                        <span className="btn__text">
                                            View Openings
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="switchable bg--secondary">
                        <div className="container">
                            <div className="row justify-content-around">
                                <div className="col-md-6 col-lg-5">
                                    <span className="h3">U-Greet Culture</span>
                                    <p className="lead">
                                        Our culture is best described as one
                                        that radiates Unity. We stand for love,
                                        family, friendships and moments. We love
                                        moments, all the moments, the good ones,
                                        that sad ones and sometimes even the bad
                                        ones. Because without those moments, we
                                        would never know true love, true
                                        connection and ultimately, our truest
                                        selves. Work with U-Greet and help
                                        people capture all of those moments to
                                        highlight the most genuine and best
                                        versions of themselves.
                                    </p>
                                </div>
                                <div className="col-lg-6 col-md-6 switchable__text text-center">
                                    <div className="video-cover border--round">
                                        <div className="background-image-holder">
                                            <img
                                                alt="image"
                                                src="/assets/img/wanderer.jpg"
                                            />
                                        </div>
                                        <iframe
                                            data-src
                                            allowFullScreen="allowfullscreen"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="openings">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-block">
                                        <h3>Current Openings</h3>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="feature feature-1 boxed boxed--border">
                                        <span
                                            className="label"
                                            style={{
                                                borderRadius: "50px",
                                                width: "auto",
                                                color: "white",
                                            }}
                                        >
                                            Remote
                                        </span>
                                        <h5>U-Greet Wanderer</h5>
                                        <br />
                                        <p>
                                            We'd love to hear your journey! We
                                            are looking for "all those who
                                            wander" to blog for us using U-Greet
                                            video collections. Come and join our
                                            team and show us the world through
                                            your eyes! Spread the culture,
                                            introduce us to your newfound
                                            friends along the journey and start
                                            healing the world one U-Greet at a
                                            time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <FooterWebsite />
            </div>
            <ScrollToTopArrow />
        </div>
    );
};

export default WorkWithUGreet;
