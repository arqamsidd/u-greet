import React, { useContext } from "react";
import FooterWebsite from "../../../Component/Footer/FooterWebsite";
import Navbar from "../../../Layout/Navbar";
import ScrollToTopArrow from "../../../Component/ScrollToTopArrow/ScrollToTopArrow";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import AuthContext from "../../../context/authContext";

const SweetGreet = () => {
    const { state } = useContext(AuthContext);
    return (
        <div className=" f-rubiklato">
            <Navbar />
            <div className="main-container">
                <section
                    className="cover height-90 imagebg videobg text-center"
                    data-overlay={2}
                    id="home"
                >
                    <video autoPlay loop muted>
                        <source src="/assets/video/how.mp4" type="video/mp4" />
                    </video>
                    <div className="background-image-holder">
                        <img alt="image" src="/assets/video/how.jpg" />
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
                                                src="/assets/img/uswe-1.png"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                alt="Image"
                                                src="/assets/img/uswe-2.png"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                alt="Image"
                                                src="/assets/img/uswe-3.png"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                alt="Image"
                                                src="/assets/img/uswe-4.png"
                                            />
                                        </li>
                                        <li>
                                            <img
                                                alt="Image"
                                                src="/assets/img/uswe-5.png"
                                            />
                                        </li>
                                    </ul>
                                </div>
                                <h3>Say U-Matter.</h3>
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
                                    Free sweet messages to spread love,
                                    positivity and encouragement around the
                                    world.{" "}
                                </h2>
                                <p className="lead">
                                    Share a quick,{" "}
                                    <i>
                                        "I love you, I'm sorry, You've got this,
                                        Congratulations or I am proud of you."
                                    </i>{" "}
                                    Whatever the reason, send a message that
                                    they matter.
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
                                            <img alt="image" src="#" />
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
                                            <img alt="image" src="#" />
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
                                            <img alt="image" src="#" />
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
                                            <source src="/assets/video/sweet-4.mp4" />
                                        </video>
                                        <div className="background-image-holder">
                                            <img alt="image" src="#" />
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
                                    Sweet Greet is a free message to let someone
                                    know you are thinking of them. After the
                                    world has been torn apart, send a Sweet
                                    Greet to those that matter.
                                </h4>
                                <p className="lead">
                                    We've made our Sweet Greet free so you can
                                    spread as much love as possible. Start
                                    healing the world one Sweet Greet at a time.
                                </p>
                                <br />
                            </div>
                            <div className="col-md-4 col-lg-4 border--round">
                                <img
                                    alt="Image"
                                    className="border--round box-shadow"
                                    src="/assets/img/vert-sweet.jpg"
                                />
                            </div>
                            <div className="col-md-4 col-lg-2">
                                <hr className="short" />
                                <h3>Reasons to Greet</h3>
                                <div className="checklist">
                                    <ul>
                                        <li>I love you</li>
                                        <li>I'm sorry</li>
                                        <li>Good luck</li>
                                        <li>Get well</li>
                                        <li>Thinking of you</li>
                                        <li>Thank you</li>
                                        <li>You've got this</li>
                                        <li>Congratulations.</li>
                                    </ul>
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
            {/*<Helmet>
                <link
                    href="{{mix('css/app.css')}}"
                    type="text/css"
                    rel="stylesheet"
                />
                <link
                    href="assets/css/bootstrap.css"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                />
                <link
                    href="assets/css/bootstrap.min.css"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                />
                <link
                    href="assets/css/stack-interface.css"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                />
                <link
                    href="assets/css/socicon.css"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                />
                <link
                    href="assets/css/lightbox.min.css"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                />
                
                <link
                    href="assets/css/iconsmind.css"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                />
                <link
                    href="assets/css/jquery.steps.css"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                />
                <link
                    href="assets/css/theme.css"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                />
                <link
                    href="assets/css/custom.css"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                />
                <link
                    href="assets/css/font-roboto.css"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                />
                <link
                    href="assets/css/2.d11a5725.chunk.css"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                />
                <link
                    href="assets/css/main.4afb4b3e.chunk.css"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                />
                <link
                    href="assets/plugins/custom/fullcalendar/fullcalendar.bundle-v%3d7.2.7.css"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                />
                <link
                    href="assets/plugins/global/plugins.bundle-v%3d7.2.7.css"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                />
                <link
                    href="assets/plugins/custom/prismjs/prismjs.bundle-v=3d7.2.7.css"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                />
                <link
                    href="assets/css/style.bundle-v%3d7.2.7.css"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,400i,500,600,700%7CMerriweather:300,300i"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                />

                <script
                    src="{{mix('js/app.js')}}"
                    type="text/javascript"
                ></script>
                <script
                    src="assets/js/jquery-3.1.1.min.js"
                    type="text/javascript"
                ></script>
                
                <script
                    src="assets/js/easypiechart.min.js"
                    type="text/javascript"
                ></script>
                <script
                    src="assets/js/parallax.js"
                    type="text/javascript"
                ></script>
                <script
                    src="assets/js/typed.min.js"
                    type="text/javascript"
                ></script>
                <script
                    src="assets/js/datepicker.js"
                    type="text/javascript"
                ></script>
                <script
                    src="assets/js/isotope.min.js"
                    type="text/javascript"
                ></script>
                 <script
                    src="assets/js/ytplayer.min.js"
                    type="text/javascript"
                ></script>
                 <script
                    src="assets/js/lightbox.min.js"
                    type="text/javascript"
                ></script>
                <script
                    src="assets/js/granim.min.js"
                    type="text/javascript"
                ></script>
                <script
                    src="assets/js/jquery.steps.min.js"
                    type="text/javascript"
                ></script>
                <script
                    src="assets/js/countdown.min.js"
                    type="text/javascript"
                ></script>
                <script
                    src="assets/js/twitterfetcher.min.js"
                    type="text/javascript"
                ></script>
                <script
                    src="assets/js/spectragram.min.js"
                    type="text/javascript"
                ></script>
                <script
                    src="assets/js/smooth-scroll.min.js"
                    type="text/javascript"
                ></script>
                <script
                    src="assets/js/scripts.js"
                    type="text/javascript"
                ></script>
                <script
                    src="assets/js/rellax.js"
                    type="text/javascript"
                ></script>
                <script
                    src="assets/auth/js/2.f55cc9b8.chunk.js"
                    type="text/javascript"
                ></script>
                <script
                    src="assets/auth/js/main.e3b20165.chunk.js"
                    type="text/javascript"
                ></script>
                <script
                    src="assets/js/plugins.bundle7a50.js"
                    type="text/javascript"
                ></script>
                <script
                    src="assets/js/scripts.bundle-v=7.2.7.js"
                    type="text/javascript"
                ></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
                    crossorigin="anonymous"
                ></script>
            </Helmet>*/}
        </div>
    );
};

export default SweetGreet;
