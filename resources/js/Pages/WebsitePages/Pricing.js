import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import FooterWebsite from "../../Component/Footer/FooterWebsite";
import ScrollToTopArrow from "../../Component/ScrollToTopArrow/ScrollToTopArrow";
import Navbar from "../../Layout/Navbar";
import Testimonials from "../../Component/Testimonial/Testimonials";
import AuthContext from "../../context/authContext";

const Pricing = () => {
    const { state } = useContext(AuthContext);
    return (
        <div>
            <Navbar />
            <div className="main-container">
                <section
                    className="text-center imagebg videobg height-80"
                    data-overlay={3}
                >
                    <video autoPlay loop muted>
                        <source
                            src="/assets/video/pricing.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="background-image-holder">
                        <img alt="image" src="/assets/video/pricing.jpg" />
                    </div>
                    <div className="container pos-vertical-center mt--3">
                        <div className="row">
                            <div className="col-md-8">
                                <img
                                    alt="Image"
                                    className="unmarg--bottom"
                                    src="/assets/img/pricing-1.png"
                                />
                                <h3>Filled with priceless memories.</h3>
                                <Link
                                    className="btn btn--primary type--uppercase"
                                    to={
                                        state.isLoggedIn
                                            ? "/startOccasion"
                                            : "/signup"
                                    }
                                    style={{ background: "#CE1C1C" }}
                                >
                                    <span className="btn__text">Start Now</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-center pb-5 pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Pricing Plans to suit every story. </h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row posRelative">
                          <div className="pricingAbsolute">
                          <Link                                
                                to={
                                    state.isLoggedIn
                                        ? "/startOccasion"
                                        : "/signup"
                                }
                                
                            >
                                
                                Introductory Pricing - $17 All Greets
                                
                            </Link>
                            </div>
                            <div className="col-md-4 pointerEventNone">
                                <div className="pricing pricing-1 boxed boxed--lg boxed--border">
                                    <span className="h3">
                                        <br />
                                        <strong>Per Minute</strong>
                                    </span>
                                    <span className="h3">$0.98 per minute</span>
                                    <span
                                        className="label"
                                        style={{
                                            borderRadius: 50,
                                            // padding: "10px 10px",
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
                                    <Link
                                        className="btn btn--primary"
                                        to={
                                            state.isLoggedIn
                                                ? "/startOccasion"
                                                : "/signup"
                                        }
                                        style={{ background: "#CE1C1C" }}
                                    >
                                        <span className="btn__text">
                                            Get Greeting
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 pointerEventNone">
                                <div className="pricing pricing-1 boxed boxed--lg boxed--border boxed--emphasis">
                                    <span className="h3">
                                        <br />
                                        <strong>Per Story</strong>
                                    </span>
                                    <span className="h3">$44.00 + HST</span>
                                    <span
                                        className="label"
                                        style={{
                                            borderRadius: 50,
                                            // padding: "10px 10px",
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
                                    <Link
                                        className="btn btn--primary"
                                        to={
                                            state.isLoggedIn
                                                ? "/startOccasion"
                                                : "/signup"
                                        }
                                        style={{ background: "#CE1C1C" }}
                                    >
                                        <span className="btn__text">
                                            Get Greeting
                                        </span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 pointerEventNone">
                                <div className="pricing pricing-1 boxed boxed--lg boxed--border">
                                    <span className="h3">
                                        <br />
                                        <strong>Per Month</strong>
                                    </span>
                                    <span className="h3">$28.00 + HST</span>
                                    <span
                                        className="label"
                                        style={{
                                            borderRadius: 50,
                                            // padding: "10px 10px",
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
                                    <Link
                                        className="btn btn--primary"
                                        to={
                                            state.isLoggedIn
                                                ? "/startOccasion"
                                                : "/signup"
                                        }
                                        style={{ background: "#CE1C1C" }}
                                    >
                                        <span className="btn__text">
                                            Get Greeting
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="text-center"
                    style={{
                        background:
                            'url("/assets/img/3.jpg") no-repeat top center',
                        backgroundSize: "cover",
                        padding: "70px 0 70px",
                    }}
                >
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-7 col-lg-6 text-left">
                                <h2 className="bold">
                                    What are U-Greeters saying?
                                </h2>
                                <div
                                    className="slider slider--inline-arrows"
                                    data-arrows="true"
                                    data-children="1"
                                    style={{ marginTop: "-100px" }}
                                >
                                    <ul
                                        className="slides flickity-enabled is-draggable"
                                        tabIndex="0"
                                    >
                                        <div
                                            className="flickity-viewport"
                                            style={{ height: "189px" }}
                                        >
                                            <div
                                                className="flickity-slider"
                                                style={{
                                                    left: "0px",
                                                    transform:
                                                        "translateX(-100%)",
                                                }}
                                            >
                                                {/* <li
                                                    className="slide"
                                                    style={{
                                                        position: "absolute",
                                                        left: "0%",
                                                    }}
                                                >
                                                    <div className="testimonial row justify-content-center">
                                                        <div className="col-lg-2 col-md-4 col-6 text-center">
                                                            <img
                                                                className="testimonial__image"
                                                                alt="Image"
                                                                src="/assets/img/avatar-round-1.png"
                                                            />
                                                        </div>
                                                        <div className="col-lg-7 col-md-8 col-12">
                                                            <span className="h3">
                                                                Natus voluptatum
                                                                enim quod
                                                                necessitatibus
                                                                quis expedita
                                                                harum provident
                                                                eos obcaecati id
                                                                culpa corporis
                                                                molestias.
                                                            </span>
                                                            <h5>
                                                                Maguerite
                                                                Holland
                                                            </h5>
                                                            <span>I-Loved</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li
                                                    className="slide is-selected"
                                                    style={{
                                                        position: "absolute",
                                                        left: "100%",
                                                    }}
                                                >
                                                    <div className="testimonial row justify-content-center">
                                                        <div className="col-lg-2 col-md-4 col-6 text-center">
                                                            <img
                                                                className="testimonial__image"
                                                                alt="Image"
                                                                src="/assets/img/avatar-round-4.png"
                                                            />
                                                        </div>
                                                        <div className="col-lg-7 col-md-8 col-12">
                                                            <span className="h3">
                                                                Natus voluptatum
                                                                enim quod
                                                                necessitatibus
                                                                quis expedita
                                                                harum provident
                                                                eos obcaecati id
                                                                culpa corporis
                                                                molestias.
                                                            </span>
                                                            <h5>
                                                                Lucas Nguyen
                                                            </h5>
                                                            <span>
                                                                I-Remembered
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li
                                                    className="slide"
                                                    style={{
                                                        position: "absolute",
                                                        left: "200%",
                                                    }}
                                                >
                                                    <div className="testimonial row justify-content-center">
                                                        <div className="col-lg-2 col-md-4 col-6 text-center">
                                                            <img
                                                                className="testimonial__image"
                                                                alt="Image"
                                                                src="/assets/img/avatar-round-3.png"
                                                            />
                                                        </div>
                                                        <div className="col-lg-7 col-md-8 col-12">
                                                            <span className="h3">
                                                                Natus voluptatum
                                                                enim quod
                                                                necessitatibus
                                                                quis expedita
                                                                harum provident
                                                                eos obcaecati id
                                                                culpa corporis
                                                                molestias.
                                                            </span>
                                                            <h5>Rob Vasquez</h5>
                                                            <span>
                                                                I-Greeted
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li> */}
                                                <li
                                                    className="slide"
                                                    style={{
                                                        position: "absolute",
                                                        left: "200%",
                                                    }}
                                                >
                                                    <div className="testimonial row justify-content-center">
                                                        <div className="col-lg-2 col-md-4 col-6 text-center">
                                                            <img
                                                                className="testimonial__image"
                                                                alt="Image"
                                                                src="/assets/img/testimonials_marguerite.jpg"
                                                            />
                                                        </div>
                                                        <div className="col-lg-7 col-md-8 col-12">
                                                            <span className="h3">
                                                                After my father
                                                                recently passed
                                                                unexpectedly, I
                                                                discovered
                                                                U-Remember and
                                                                shared the link
                                                                with family and
                                                                friends and
                                                                created the most
                                                                incredible
                                                                tribute to my
                                                                Dad. We played
                                                                the video at his
                                                                celebration of
                                                                life which
                                                                allowed us all
                                                                to deeply
                                                                connect with my
                                                                Dad one last
                                                                time. I’m
                                                                grateful for
                                                                U-Remember as
                                                                these memories
                                                                would have
                                                                otherwise been
                                                                lost forever.
                                                            </span>
                                                            <h5>Marguerite</h5>
                                                            <span>
                                                                I-Remembered
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li
                                                    className="slide"
                                                    style={{
                                                        position: "absolute",
                                                        left: "200%",
                                                    }}
                                                >
                                                    <div className="testimonial row justify-content-center">
                                                        <div className="col-lg-2 col-md-4 col-6 text-center">
                                                            <img
                                                                className="testimonial__image"
                                                                alt="Image"
                                                                src="/assets/img/testimonials_lucas.jpg"
                                                            />
                                                        </div>
                                                        <div className="col-lg-7 col-md-8 col-12">
                                                            <span className="h3">
                                                                I used my U-Love
                                                                video to propose
                                                                to my
                                                                soon-to-be-wife
                                                                and she said,
                                                                “Yes!” She was
                                                                so blown away
                                                                with this unique
                                                                proposal that
                                                                she was saying,
                                                                “Yes” before I
                                                                could even get
                                                                down on one
                                                                knee.
                                                            </span>
                                                            <h5>Lucas</h5>
                                                            <span>I-Loved</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li
                                                    className="slide"
                                                    style={{
                                                        position: "absolute",
                                                        left: "200%",
                                                    }}
                                                >
                                                    <div className="testimonial row justify-content-center">
                                                        <div className="col-lg-2 col-md-4 col-6 text-center">
                                                            <img
                                                                className="testimonial__image"
                                                                alt="Image"
                                                                src="/assets/img/avatar-round-3.png"
                                                            />
                                                        </div>
                                                        <div className="col-lg-7 col-md-8 col-12">
                                                            <span className="h3">
                                                                I brought
                                                                U-Greet along on
                                                                a guy’s fishing
                                                                trip. As it
                                                                turned out, we
                                                                had a blast
                                                                making videos. I
                                                                guess we can’t
                                                                lie about how
                                                                big the catch
                                                                was this time!
                                                                U-Greet will
                                                                definitely be a
                                                                part of our
                                                                annual fishing
                                                                trip moving
                                                                forward.
                                                            </span>
                                                            <h5>Robert</h5>
                                                            <span>
                                                                I-Greeted
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </div>
                                        </div>
                                        <button
                                            className="flickity-prev-next-button previous"
                                            type="button"
                                            aria-label="previous"
                                        >
                                            <svg viewBox="0 0 100 100">
                                                <path
                                                    d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                                                    className="arrow"
                                                ></path>
                                            </svg>
                                        </button>
                                        <button
                                            className="flickity-prev-next-button next"
                                            type="button"
                                            aria-label="next"
                                        >
                                            <svg viewBox="0 0 100 100">
                                                <path
                                                    d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
                                                    className="arrow"
                                                    transform="translate(100, 100) rotate(180) "
                                                ></path>
                                            </svg>
                                        </button>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-6">
                                <img src="/assets/img/bg2.svg" />
                            </div>
                        </div>
                    </div>
                </section>

                <FooterWebsite />
            </div>
            <ScrollToTopArrow />
        </div>
    );
};

export default Pricing;
