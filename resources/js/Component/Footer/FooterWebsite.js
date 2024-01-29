import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";

const FooterWebsite = () => {
    const { state } = useContext(AuthContext);
    return (
        <footer className="footer-3 text-center-xs space--xs bg--dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img
                            alt="Image"
                            className="logo"
                            src="/assets/img/logo-footer.png"
                        />
                        <ul className="list-inline list--hover">
                            <li className="list-inline-item">
                                <Link
                                    to={
                                        state.isLoggedIn
                                            ? "/startOccasion"
                                            : "/signup"
                                    }
                                    className="btn btn--sm btn--primary type--uppercase"
                                    style={{ background: "#CE1C1C" }}
                                >
                                    <span className="btn__text">
                                        Get Started
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 text-right text-center-xs">
                        <ul className="social-list list-inline list--hover">
                            <li className="list-inline-item">
                                <Link to="https://www.pinterest.com/u_greetofficial/">
                                    <i className="socicon socicon-pinterest icon icon--xs"></i>
                                </Link>
                            </li>
                            {/* <li className="list-inline-item">
                                <Link to="https://twitter.com/u_greetofficial">
                                    <i className="socicon socicon-twitter icon icon--xs"></i>
                                </Link>
                            </li> */}
                            <li className="list-inline-item">
                                <Link to="https://www.facebook.com/UGreetOfficial">
                                    <i className="socicon socicon-facebook icon icon--xs"></i>
                                </Link>
                            </li>
                            <li className="list-inline-item">
                                <Link to="https://www.instagram.com/u_greetofficial/">
                                    <i className="socicon socicon-instagram icon icon--xs"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row mt--3">
                    <div className="col-md-6 col-lg-3 col-6">
                        <h6 className="type--uppercase">U-Greet</h6>
                        <ul className="list--hover">
                            <li>
                                <Link
                                    to={
                                        state.isLoggedIn
                                            ? "/startOccasion"
                                            : "/signup"
                                    }
                                >
                                    Start a U-Greet
                                </Link>
                            </li>
                            <li>
                                <a href="/about">Our Story</a>
                            </li>
                            <li>
                                <Link to="/signin">Sign In</Link>
                            </li>
                            <li>
                                <Link to="/signup">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 col-6">
                        <h6 className="type--uppercase">Resources</h6>
                        <ul className="list--hover">
                            <li>
                                <a href="/HowItWorks">How It Works</a>
                            </li>
                            <li>
                                <a href="/Pricing">Pricing</a>
                            </li>
                            <li>
                                <a href="/Blog">Blog</a>
                            </li>
                            <li>
                                <a href="/WorkWithUGreet">Work with U-Greet</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 col-6">
                        <h6 className="type--uppercase">Support</h6>
                        <ul className="list--hover">
                            <li>
                                <a href="mailto:greetings@u-greet.com">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="/helpdesk">Helpdesk</a>
                            </li>
                            <li>
                                <a href="mailto:greetings@u-greet.com">
                                    Customer Service
                                </a>
                            </li>
                            <li>
                                <a href="/faq">FAQs</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-3 col-6">
                        <h6 className="type--uppercase">Connect With Us</h6>
                        <ul className="list--hover">
                            <li>
                                <Link to="https://www.facebook.com/UGreetOfficial">
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link to="https://www.instagram.com/u_greetofficial/">
                                    Instagram
                                </Link>
                            </li>
                            {/* <li>
                                <Link to="https://twitter.com/u_greetofficial">
                                    Twitter
                                </Link>
                            </li> */}
                            <li>
                                <Link to="https://www.pinterest.com/u_greetofficial/">
                                    Pinterest
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <span className="type--fine-print">
                            &copy;
                            <span className="update-year"></span> U-Greet Inc.
                        </span>
                        <a className="type--fine-print" href="/PrivacyPolicy">
                            Privacy & Cookie Policy
                        </a>
                        <a className="type--fine-print" href="/TermsConditions">
                            Terms & Conditions
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterWebsite;
