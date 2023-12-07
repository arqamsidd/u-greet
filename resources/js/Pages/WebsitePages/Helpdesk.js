import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../Layout/Navbar";

const Helpdesk = () => {
    return (
        <div>
            <div>
                <Navbar />
                <div className="main-container">
                    <section className="imageblock switchable feature-large">
                        <div className="imageblock__content col-lg-5 col-md-4 pos-right">
                            <div className="background-image-holder">
                                <img
                                    alt="image"
                                    src="/assets/img/landing-5.jpg"
                                />
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-7">
                                    <h1>Helpdesk</h1>
                                    <p className="lead">
                                        Access help and support options for
                                        U-Greet
                                    </p>
                                    <ul className="social-list list-inline list--hover">
                                        <li>
                                            <a href="#">
                                                <i className="socicon socicon-github icon icon--xs" />
                                            </a>
                                        </li>
                                        <li data-tooltip="@marchammond">
                                            <a href="#">
                                                <i className="socicon socicon-instagram icon icon--xs" />
                                            </a>
                                        </li>
                                        <li data-tooltip="hello@me.com">
                                            <a href="#">
                                                <i className="socicon socicon-mail icon icon--xs" />
                                            </a>
                                        </li>
                                    </ul>
                                    <div className="heading-block" />
                                    <a
                                        href="mailto:info@u-greet.com"
                                        className="block"
                                    >
                                        <div className="feature feature--featured boxed boxed--border bg--secondary">
                                            <span
                                                className="label"
                                                style={{
                                                    borderRadius: "50px",
                                                    width: "auto",
                                                    // padding: "12px",
                                                    color: "white",
                                                }}
                                            >
                                                Message Us
                                            </span>
                                            <h5
                                                style={{ marginBottom: "10px" }}
                                            >
                                                Have A Question?
                                            </h5>
                                            <p>
                                                We are here to help in any way
                                                we can just let us know what you
                                                need.
                                            </p>
                                        </div>
                                    </a>
                                    <a
                                        href="mailto:support@u-greet.com"
                                        className="block"
                                    >
                                        <div className="feature boxed boxed--border bg--secondary">
                                            <span
                                                className="label"
                                                style={{
                                                    borderRadius: "50px",
                                                    width: "auto",
                                                    // padding: "12px",
                                                    color: "white",
                                                }}
                                            >
                                                Message Us
                                            </span>
                                            <h5
                                                style={{ marginBottom: "10px" }}
                                            >
                                                Need Technical Support?
                                            </h5>
                                            <p>
                                                Having technical difficulties?
                                                Drop us a line.
                                            </p>
                                        </div>
                                    </a>
                                    <a
                                        href="mailto:greetings@u-greet.com"
                                        className="block"
                                    >
                                        <div className="feature boxed boxed--border bg--secondary">
                                            <span
                                                className="label"
                                                style={{
                                                    borderRadius: "50px",
                                                    width: "auto",
                                                    // padding: "12px",
                                                    color: "white",
                                                }}
                                            >
                                                Message Us
                                            </span>
                                            <h5
                                                style={{ marginBottom: "10px" }}
                                            >
                                                Want Inspiration?
                                            </h5>
                                            <p>
                                                We specialize in creativity. How
                                                can we help?
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Helpdesk;
