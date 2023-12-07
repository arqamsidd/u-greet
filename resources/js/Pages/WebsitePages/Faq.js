import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import FooterWebsite from "../../Component/Footer/FooterWebsite";
import ScrollToTopArrow from "../../Component/ScrollToTopArrow/ScrollToTopArrow";
import AuthContext from "../../context/authContext";
import Navbar from "../../Layout/Navbar";

const Faq = () => {
    const { state } = useContext(AuthContext);
    return (
        <div>
            <Navbar />
            <div className="main-container">
                <section className="text-center height-40 pb-2">
                    <div className="container pos-vertical-center">
                        <div className="row">
                            <div className="col-md-8">
                                <img
                                    alt="Image"
                                    className="unmarg--bottom"
                                    src="/assets/img/faq-1.png"
                                />
                                {/* <p className="lead">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </p> */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div
                                    className="tabs-container"
                                    data-content-align="left"
                                >
                                    {/* <ul className="tabs"> */}
                                    {/* <li className="active"> */}
                                    {/* <div className="tab__title">
                                                <span className="h5">
                                                    App Related
                                                </span>
                                            </div> */}
                                    <div className="tab__content text-left">
                                        <ul
                                            className="accordion accordion-1 accordion--oneopen"
                                            style={{ minHeight: 511 }}
                                        >
                                            {/* <li className="active "> */}
                                            <li>
                                                <div className="accordion__title d-flex align-items-center">
                                                    <span className="h5">
                                                        Do you store my final
                                                        video?
                                                    </span>
                                                </div>
                                                <div className="accordion__content">
                                                    <p className="lead">
                                                        We would love to be able
                                                        to store all U-Greet
                                                        videos forever but it’s
                                                        not feasible. We do
                                                        provide 6 months of
                                                        storage to ensure you
                                                        have the time to
                                                        download your video.
                                                        Please note, the video
                                                        will be removed after 6
                                                        months. Once the video
                                                        has been removed from
                                                        our server, U-Greet will
                                                        not be able to retrieve
                                                        it. Don't worry, we will
                                                        remind you the whole way
                                                        through.
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="accordion__title d-flex align-items-center">
                                                    <span className="h5">
                                                        What is the difference
                                                        between preview and
                                                        finalize?
                                                    </span>
                                                </div>
                                                <div className="accordion__content">
                                                    <p className="lead">
                                                        So happy you asked!
                                                        Preview is a feature
                                                        that allows you to
                                                        review your video before
                                                        committing to the final
                                                        version. Once you are
                                                        happy with your edited
                                                        changes and ready to
                                                        complete your video,
                                                        select finalize and your
                                                        video will be generated
                                                        through our program.
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="accordion__title d-flex align-items-center">
                                                    <span className="h5">
                                                        Do you offer refunds?
                                                    </span>
                                                </div>
                                                <div className="accordion__content">
                                                    <p className="lead">
                                                        Your satisfaction is
                                                        important to us and we
                                                        are always here to help
                                                        should you have a
                                                        concern. Our program
                                                        allows you to view, edit
                                                        and create your video
                                                        before paying for the
                                                        service to make sure
                                                        that you are fully
                                                        satisfied with your
                                                        video creation. It is
                                                        for this reason that
                                                        U-Greet does not offer
                                                        refunds once you have
                                                        made the decision to
                                                        move forward with your
                                                        video. We are confident
                                                        you will love the final
                                                        product but if there is
                                                        an issue you want to
                                                        discuss, we are here to
                                                        listen. Please contact
                                                        us at{" "}
                                                        <a href="mailto:support@u-greet.com">
                                                            support@u-greet.com
                                                        </a>
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="accordion__title d-flex align-items-center">
                                                    <span className="h5">
                                                        How will I know when
                                                        people contribute?
                                                    </span>
                                                </div>
                                                <div className="accordion__content">
                                                    <p className="lead">
                                                        We have you covered!
                                                        U-Greet will notify you
                                                        via email each time
                                                        someone uploads a
                                                        picture or a video to
                                                        the site. It is that
                                                        easy—we will let you
                                                        know!
                                                    </p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="accordion__title d-flex align-items-center">
                                                    <span className="h5">
                                                        Can someone add to the
                                                        video after the
                                                        contribution deadline?
                                                    </span>
                                                </div>
                                                <div className="accordion__content">
                                                    <p className="lead">
                                                        Yes, people can add
                                                        right up until you hit
                                                        finalize. The
                                                        contribution deadline is
                                                        a suggested date used by
                                                        the creator to provide
                                                        themselves with enough
                                                        time to edit the video
                                                        before it needs to be
                                                        sent to the recipient
                                                        for their special day.
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* </li> */}
                                    {/* <li>
                                            <div className="tab__title">
                                                <span className="h5">
                                                    Pricing
                                                </span>
                                            </div>
                                            <div className="tab__content">
                                                <p className="lead">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                    incididunt ut labore et
                                                    dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis
                                                    nostrud exercitation ullamco
                                                    laboris nisi ut aliquip ex
                                                    ea commodo consequat.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="tab__title">
                                                <span className="h5">
                                                    How Do I
                                                </span>
                                            </div>
                                            <div className="tab__content">
                                                <p className="lead">
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor
                                                    incididunt ut labore et
                                                    dolore magna aliqua.
                                                </p>
                                            </div>
                                        </li> */}
                                    {/* </ul> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-center">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-8">
                                <div className="cta">
                                    <h1 className="bold">
                                        &#9834; U-Greet, I-Greet, We All Greet
                                        To Make It Sweet. &#9834;
                                    </h1>
                                    {/* <h2>
                                        U-Greet, I-Greet, We all greet to make
                                        it sweet
                                    </h2> */}
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
    );
};

export default Faq;
