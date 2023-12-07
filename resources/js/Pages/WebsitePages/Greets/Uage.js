import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import FooterWebsite from "../../../Component/Footer/FooterWebsite";
import ScrollToTopArrow from "../../../Component/ScrollToTopArrow/ScrollToTopArrow";
import AuthContext from "../../../context/authContext";
import Navbar from "../../../Layout/Navbar";

const Uage = () => {
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
                            src="/assets/video/u-age.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="background-image-holder">
                        <img alt="image" src="/assets/u-age-2.html" />
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
                                                src="/assets/img/uage-1.png"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                alt="Image"
                                                src="/assets/img/uage-2.png"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                alt="Image"
                                                src="/assets/img/uage-3.png"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                alt="Image"
                                                src="/assets/img/uage-4.png"
                                            />
                                        </li>
                                    </ul>
                                </div>
                                <h3>A gift beyond measure.</h3>
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
                                <h2>
                                    Gone are the days of searching for the
                                    perfect birthday gift that can never truly
                                    express the way you feel.
                                </h2>
                                <p className="lead">
                                    Collaborate with friends and family to send
                                    a unique birthday gift. Share memories,
                                    stories, photos and well wishes destined to
                                    leave the celebrated person speechless.
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
                                            <source src="/assets/video/uage-4.mp4" />
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
                                    To give is better than to receive. The gift
                                    of a U-Age birthday greeting will leave an
                                    imprint on your celebrated person's heart
                                    that will never be forgotten. Regardless of
                                    how old your loved one is turning, everyone
                                    has a story to tell. So, start telling
                                    theirs.
                                </h4>
                                <p className="lead">
                                    U-Age collects the memories for you and
                                    creates the perfect gift each and every
                                    time. Being part of a U-Age birthday video
                                    is the best way to celebrate the people you
                                    love most and a memorable way to be a part
                                    of someone's special day regardless of where
                                    they are in the world.
                                </p>
                                <br />
                            </div>
                            <div className="col-md-4 col-lg-4 border--round mt--3">
                                <img
                                    alt="Image"
                                    className="border--round box-shadow"
                                    src="/assets/img/vert-uage.jpg"
                                />
                            </div>
                            <div className="col-md-4 col-lg-2">
                                <hr className="short" />
                                <div className="checklist">
                                    <h3>U-Age Checklist</h3>
                                    <ol>
                                        <li>Early childhood photos</li>
                                        <li>Long lost friends</li>
                                        <li>Class photos</li>
                                        <li>Graduation</li>
                                        <li>Momentous occasions</li>
                                        <li>Funny stories </li>
                                        <li>Secret handshakes </li>
                                        <li>Heartfelt messages.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-center bg--secondary">
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
                                        Join the thousands of users who’ve
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

export default Uage;
