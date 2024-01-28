import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import FooterWebsite from "../../../Component/Footer/FooterWebsite";
import ScrollToTopArrow from "../../../Component/ScrollToTopArrow/ScrollToTopArrow";
import AuthContext from "../../../context/authContext";
import Navbar from "../../../Layout/Navbar";

const Ucelebrate = () => {
    const { state } = useContext(AuthContext);
    return (
        <div>
            <Navbar />
            <div className="main-container">
                <section
                    className="cover height-90 imagebg videobg text-center"
                    data-overlay={2}
                    id="home"
                >
                    <video autoPlay loop muted>
                        <source
                            src="/assets/video/u-cel.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="background-image-holder">
                        <img alt="image" src="/assets/video/u-cel.html" />
                    </div>
                    <style
                        dangerouslySetInnerHTML={{
                            __html: "\n            .gallery-cell {\n                left: 0 !important;\n                opacity: 0;\n                transition: opacity 0.3s ease-in-out;\n                z-index: -1;\n            }\n        ",
                        }}
                    />
                    <div className="container pos-vertical-center">
                        <div className="row">
                            <div className="col-md-8">
                                <div
                                    className="slider"
                                    data-arrows="false"
                                    data-autoplay="true"
                                    data-fade="true"
                                >
                                    <ul className="slides">
                                        <li>
                                            <img
                                                alt="Image"
                                                src="/assets/img/ucel-1.png"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                alt="Image"
                                                src="/assets/img/ucel-2.png"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                alt="Image"
                                                src="/assets/img/ucel-3.png"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                alt="Image"
                                                src="/assets/img/ucel-4.png"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                alt="Image"
                                                src="/assets/img/ucel-5.png"
                                            />
                                        </li>
                                    </ul>
                                </div>
                                <h3>
                                    Give the gift of family and friends this
                                    holiday season.
                                </h3>
                                <Link
                                    className="btn btn--primary type--uppercase"
                                    to={
                                        state.isLoggedIn
                                            ? "/startOccasion"
                                            : "/signup"
                                    }
                                >
                                    <span className="btn__text">Start Now</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-8">
                                <h2>Remember the reason for the season.</h2>
                                <p className="lead">
                                    Merry Christmas, Happy Hanukkah, Eid
                                    Mubarak, Happy Diwali. However you observe
                                    the holidays, commemorate with a U-Celebrate
                                    and share holiday greetings with your family
                                    and friends.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-6">
                                <Link to="#" className="block">
                                    <div
                                        className="feature feature-7 boxed text-center imagebg videobg cover"
                                        data-scrim-bottom={10}
                                    >
                                        <video autoPlay loop muted>
                                            <source
                                                src="/assets/video/block-1.mp4"
                                                type="video/mp4"
                                            />
                                        </video>
                                        <div className="background-image-holder">
                                            <img alt="image" src="/assets/#" />
                                        </div>
                                        <div>
                                            <br />
                                            <br />
                                            <br />
                                            <br className="hide-xs" />
                                            <br className="hide-xs" />
                                            <br className="hide-xs" />
                                            <h3>
                                                1. ADD VIDEO CLIPS &amp; PHOTOS
                                            </h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-5 col-6">
                                <Link to="#" className="block">
                                    <div
                                        className="feature feature-7 boxed text-center imagebg videobg cover"
                                        data-scrim-bottom={10}
                                    >
                                        <video autoPlay loop muted>
                                            <source
                                                src="/assets/video/block-2.mp4"
                                                type="video/mp4"
                                            />
                                        </video>
                                        <div className="background-image-holder">
                                            <img alt="image" src="/assets/#" />
                                        </div>
                                        <div>
                                            <br />
                                            <br />
                                            <br />
                                            <br className="hide-xs" />
                                            <br className="hide-xs" />
                                            <br className="hide-xs" />
                                            <h3>
                                                2. INVITE PEOPLE TO CONTRIBUTE
                                            </h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-5 col-6">
                                <Link to="#" className="block">
                                    <div
                                        className="feature feature-7 boxed text-center imagebg videobg cover"
                                        data-scrim-bottom={10}
                                    >
                                        <video autoPlay loop muted>
                                            <source
                                                src="/assets/video/block-3.mp4"
                                                type="video/mp4"
                                            />
                                        </video>
                                        <div className="background-image-holder">
                                            <img alt="image" src="/assets/#" />
                                        </div>
                                        <div>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br className="hide-xs" />
                                            <br className="hide-xs" />
                                            <h3>3. EDIT &amp; ARRANGE</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-7 col-6">
                                <Link to="#" className="block">
                                    <div
                                        className="feature feature-7 boxed text-center imagebg videobg cover"
                                        data-scrim-bottom={10}
                                    >
                                        <video autoPlay loop muted>
                                            <source src="/assets/video/cel-4.mp4" />
                                        </video>
                                        <div className="background-image-holder">
                                            <img alt="image" src="/assets/#" />
                                        </div>
                                        <div>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br className="hide-xs" />
                                            <br className="hide-xs" />
                                            <h3>4. FINALIZE &amp; SHARE</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="feature-large feature-large-2 bg--secondary">
                    <div className="container">
                        <div className="row justify-content-around">
                            <div className="col-md-4 col-lg-3">
                                <h4>
                                    U-Celebrate makes the perfect holiday gift
                                    for anyone on your list. Whether you've been
                                    naughty or nice, receiving a U-Celebrate
                                    from your family and friends will warm your
                                    heart this holiday season.
                                </h4>
                                <p className="lead">
                                    Keep holiday traditions alive no matter the
                                    distance with U-Celebrate.You'll never miss
                                    another family occasion. Collaborate with
                                    all your loved ones to capture holiday
                                    memories for years to come.
                                </p>
                                <br />
                            </div>
                            <div className="col-md-4 col-lg-4 border--round mt--2">
                                <img
                                    alt="Image"
                                    className="border--round box-shadow"
                                    src="/assets/img/vert-ucel.jpg"
                                />
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <hr className="short" />
                                <h3>How to Celebrate</h3>
                                <div className="checklist">
                                    <ol>
                                        <li>Customize holiday keepsakes</li>
                                        <li>Spread holiday cheer</li>
                                        <li>Get into the festive spirit</li>
                                        <li>Create an epic holiday gift</li>
                                        <li>
                                            Compete in an Ugly Sweater Contest
                                        </li>
                                        <li>
                                            Send a prayer or spiritual message
                                        </li>
                                        <li>Keep family traditions alive</li>
                                        <li>Connect friends and family.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-center bg--secondary hideIt">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-8">
                                <h2>What some of our users have created.</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    className="cover cover-fullscreen height-100 imagebg slider text-center"
                    data-sutoplay="true"
                    data-paging="true"
                    data-arrows="true"
                    data-timing={4000}
                >
                    <ul className="slides">
                        <li
                            className="imagebg col-lg-4 col-md-6 col-12"
                            data-overlay={1}
                        >
                            <div className="background-image-holder">
                                <img
                                    alt="background"
                                    src="/assets/img/photography-1.jpg"
                                />
                            </div>
                            <div className="pos-vertical-center">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Sweet Love</h4>
                                        <Link to="#">Explore Gallery</Link>
                                        <br />
                                        <br />
                                        <div className="modal-instance">
                                            <div className="video-play-icon modal-trigger box-shadow bg--secondary" />
                                            <div className="modal-container">
                                                <div
                                                    className="modal-content bg-dark"
                                                    data-width="60%"
                                                    data-height="60%"
                                                >
                                                    <iframe />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li
                            className="imagebg col-lg-4 col-md-6 col-12"
                            data-overlay={1}
                        >
                            <div className="background-image-holder">
                                <img
                                    alt="background"
                                    src="/assets/img/photography-2.jpg"
                                />
                            </div>
                            <div className="pos-vertical-center">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Portraits</h4>
                                        <Link to="#">Explore Gallery</Link>
                                        <br />
                                        <br />
                                        <div className="modal-instance">
                                            <div className="video-play-icon modal-trigger box-shadow bg--secondary" />
                                            <div className="modal-container">
                                                <div
                                                    className="modal-content bg-dark"
                                                    data-width="60%"
                                                    data-height="60%"
                                                >
                                                    <iframe />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li
                            className="imagebg col-lg-4 col-md-6 col-12"
                            data-overlay={1}
                        >
                            <div className="background-image-holder">
                                <img
                                    alt="background"
                                    src="/assets/img/photography-3.jpg"
                                />
                            </div>
                            <div className="pos-vertical-center">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Wedding Concepts</h4>
                                        <Link to="#">Explore Gallery</Link>
                                        <br />
                                        <br />
                                        <div className="modal-instance">
                                            <div className="video-play-icon modal-trigger box-shadow bg--secondary" />
                                            <div className="modal-container">
                                                <div
                                                    className="modal-content bg-dark"
                                                    data-width="60%"
                                                    data-height="60%"
                                                >
                                                    <iframe />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li
                            className="imagebg col-lg-4 col-md-6 col-12"
                            data-overlay={1}
                        >
                            <div className="background-image-holder">
                                <img
                                    alt="background"
                                    src="/assets/img/photography-4.jpg"
                                />
                            </div>
                            <div className="pos-vertical-center">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Wedding Fashion Shoots</h4>
                                        <Link to="#">Explore Gallery</Link>
                                        <br />
                                        <br />
                                        <div className="modal-instance">
                                            <div className="video-play-icon modal-trigger box-shadow bg--secondary" />
                                            <div className="modal-container">
                                                <div
                                                    className="modal-content bg-dark"
                                                    data-width="60%"
                                                    data-height="60%"
                                                >
                                                    <iframe />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li
                            className="imagebg col-lg-4 col-md-6 col-12"
                            data-overlay={1}
                        >
                            <div className="background-image-holder">
                                <img
                                    alt="background"
                                    src="/assets/img/photography-5.jpg"
                                />
                            </div>
                            <div className="pos-vertical-center">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h4>Black &amp; White</h4>
                                        <Link to="#">Explore Gallery</Link>
                                        <br />
                                        <br />
                                        <div className="modal-instance">
                                            <div className="video-play-icon modal-trigger box-shadow bg--secondary" />
                                            <div className="modal-container">
                                                <div
                                                    className="modal-content bg-dark"
                                                    data-width="60%"
                                                    data-height="60%"
                                                >
                                                    <iframe />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
                <section
                    className="text-center imagebg"
                    data-gradient-bg="#000000,#72726F,#989795,#BABBBB"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-lg-6">
                                <div className="cta">
                                    <h2>Spread the love.</h2>
                                    <p className="lead">
                                        Join the thousands of users who've
                                        already started Greeting.
                                    </p>
                                    <Link
                                        className="btn btn--primary type--uppercase"
                                        to={
                                            state.isLoggedIn
                                                ? "/startOccasion"
                                                : "/signup"
                                        }
                                    >
                                        <span className="btn__text">
                                            Start Now
                                        </span>
                                        <span className="label">
                                            Free Trial
                                        </span>
                                    </Link>
                                </div>
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

export default Ucelebrate;
