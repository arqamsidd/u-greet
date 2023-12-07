import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import FooterWebsite from "../../Component/Footer/FooterWebsite";
import ScrollToTopArrow from "../../Component/ScrollToTopArrow/ScrollToTopArrow";
import AuthContext from "../../context/authContext";
import Navbar from "../../Layout/Navbar";

const About = () => {
    const { state } = useContext(AuthContext);
    return (
        <div>
            <Navbar />
            <div className="main-container">
                <section
                    className="text-center imagebg videobg space--lg"
                    data-overlay={3}
                >
                    <video autoPlay loop muted playsInline>
                        <source
                            src="/assets/video/about.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className="background-image-holder">
                        <img alt="image" src="/assets/video/about.jpg" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-lg-6">
                                <img
                                    alt="Image"
                                    className="unmarg--bottom"
                                    src="/assets/img/about-1.png"
                                />
                                <br />
                                <br />
                                <h4 className="lead">
                                    Helping people tell their stories, share
                                    memories, moments and heartfelt messages in
                                    a video time capsule to be cherished
                                    forever.
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    Everyone has a story to tell. Let U-Greet
                                    tells yours.
                                </h4>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="switchable switchable--switch p-0">
                    <div className="container">
                        <div className="row justify-content-around">
                            <div className="col-md-8 col-lg-8 mt--3">
                                <div className="testimonial testimonial-2">
                                    <div className="testimonial__body boxed boxed--border bg--secondary">
                                        <h3>U-Greet's Story</h3>
                                        <p className="lead">
                                            U-Greet was inspired from loss,
                                            grief and a desire to preserve
                                            memories, moments and stories. Both
                                            founders have a hole in their heart
                                            for loved ones gone too soon. In
                                            honour of their memory, U-Greet was
                                            created to highlight all of life's
                                            incredible moments and capture them
                                            forever as we celebrate the lives of
                                            all of those we love and lost.
                                            <br />
                                            <br />
                                            In memory of Sue and Donna.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 mt--3">
                                <div className="testimonial testimonial-2">
                                    <div className="testimonial__body boxed boxed--border bg--secondary">
                                        <h3>U-Greet's Mission</h3>
                                        <p className="lead">
                                            U-Greet's mission is to capture all
                                            of life's moments in a priceless and
                                            timeless video collection so you can
                                            share your story for years to come.
                                            <br className="hide-xs" />
                                            <br className="hide-xs" />
                                            <br className="hide-xs" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt--2">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <h4>Stories to Tell</h4>
                            </div>
                            <div className="col-6 text-right color--primary">
                                <a
                                    to={
                                        state.isLoggedIn
                                            ? "/startOccasion"
                                            : "/signup"
                                    }
                                >
                                    Start U-Greeting
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-6">
                                <a href="/U-Love" className="block">
                                    <div
                                        className="feature feature-7 boxed text-center imagebg"
                                        data-overlay={3}
                                    >
                                        <div className="background-image-holder">
                                            <img
                                                alt="background"
                                                src="/assets/img/abt-ulove.jpg"
                                            />
                                        </div>
                                        <h4 className="pos-vertical-center">
                                            U-Love
                                        </h4>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-6">
                                <a href="/U-Age" className="block">
                                    <div
                                        className="feature feature-7 boxed text-center imagebg"
                                        data-overlay={3}
                                    >
                                        <div className="background-image-holder">
                                            <img
                                                alt="background"
                                                src="/assets/img/birthday.jpg"
                                            />
                                        </div>
                                        <h4 className="pos-vertical-center">
                                            U-Age
                                        </h4>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-6">
                                <a href="/U-Wed" className="block">
                                    <div
                                        className="feature feature-7 boxed text-center imagebg"
                                        data-overlay={3}
                                    >
                                        <div className="background-image-holder">
                                            <img
                                                alt="background"
                                                src="/assets/img/wedding.jpg"
                                            />
                                        </div>
                                        <h4 className="pos-vertical-center">
                                            U-Wed
                                        </h4>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-6">
                                <a href="/U-Remember" className="block">
                                    <div
                                        className="feature feature-7 boxed text-center imagebg"
                                        data-overlay={3}
                                    >
                                        <div className="background-image-holder">
                                            <img
                                                alt="background"
                                                src="/assets/img/abt-urem.jpg"
                                            />
                                        </div>
                                        <h4 className="pos-vertical-center">
                                            U-Remember
                                        </h4>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-6">
                                <a href="/U-Baby" className="block">
                                    <div
                                        className="feature feature-7 boxed text-center imagebg"
                                        data-overlay={3}
                                    >
                                        <div className="background-image-holder">
                                            <img
                                                alt="background"
                                                src="/assets/img/baby-2.jpg"
                                            />
                                        </div>
                                        <h4 className="pos-vertical-center">
                                            U-Baby
                                        </h4>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4 col-6">
                                <a href="/U-Miss" className="block">
                                    <div
                                        className="feature feature-7 boxed text-center imagebg"
                                        data-overlay={3}
                                    >
                                        <div className="background-image-holder">
                                            <img
                                                alt="background"
                                                src="/assets/img/abt-umiss.jpg"
                                            />
                                        </div>
                                        <h4 className="pos-vertical-center">
                                            U-Miss
                                        </h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="row mt--1"></div>
                    </div>
                </section>
                <section className="text-center bg--secondary">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-8">
                                <h2>What drives us</h2>
                                <p className="lead bold">
                                    U-Greet wants to Unite the world
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg--secondary">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="feature">
                                    <h1 className="bold">
                                        unite{" "}
                                        <span
                                            style={{
                                                fontSize: 16,
                                                color: "#31639c",
                                            }}
                                        >
                                            <u>verb</u>
                                        </span>
                                    </h1>
                                    <h3 className="color--primary-1">
                                        \ yu-'nit \
                                    </h3>
                                    <h4>united; uniting</h4>
                                    <p>
                                        <b>a: </b>to become one or as if one
                                        <br />
                                        <b>b:</b> to become combined by or as if
                                        by adhesion or mixture
                                        <br />
                                        <b>c:</b> to act in concert
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature">
                                    <h1 className="bold">
                                        uplift
                                        <span
                                            style={{
                                                fontSize: 16,
                                                color: "#31639c",
                                            }}
                                        >
                                            <u>noun</u>
                                        </span>
                                    </h1>
                                    <h3 className="color--primary-1">
                                        up-lift | \'ǝp-lift
                                    </h3>
                                    <h4>uplifted; uplifting: uplifts</h4>
                                    <p>
                                        <b>a: </b>a bettering of a condition
                                        especially spiritually, socially, or
                                        intellectually
                                        <br />
                                        <b>b:</b> influences intended to uplift
                                        <br />
                                        <b>c:</b> a social movement to improve
                                        especially morally or culturally
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature">
                                    <h1 className="bold">
                                        unfold{" "}
                                        <span
                                            style={{
                                                fontSize: 16,
                                                color: "#31639c",
                                            }}
                                        >
                                            <u>verb</u>
                                        </span>
                                    </h1>
                                    <h3 className="color--primary-1">
                                        un-fold | \,an-fold \
                                    </h3>
                                    <h4>unfolded; unfolding; unfolds</h4>
                                    <p>
                                        <b>a: </b>to open from a folded state:
                                        open out: expand
                                        <br />
                                        <b>b:</b> blossom
                                        <br />
                                        <b>c:</b> develop, evolve <br />
                                        // as the story unfolds
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-center height-50">
                    <div className="container pos-vertical-center">
                        <div className="row">
                            <div className="col-md-8 col-lg-6">
                                <h1>How It Works</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-10">
                                <div className="process-1">
                                    <div className="process__item">
                                        <h4>
                                            1. U-ADD VIDEO CLIPS &amp; PHOTOS
                                        </h4>
                                        <img
                                            alt="Image"
                                            src="/assets/img/how-1.jpg"
                                            className="border--round"
                                            style={{ height: 300 }}
                                        />
                                        <p>
                                            Select the U-Greet story you wish to
                                            create, personalize your account and
                                            upload images and videos of the
                                            celebrated person. Hint: Dig deep
                                            and search for a wide variety of
                                            ages, memories and moments.
                                        </p>
                                    </div>
                                    <div className="process__item">
                                        <h4>
                                            2. U-INVITE PEOPLE TO CONTRIBUTE
                                        </h4>
                                        <img
                                            alt="Image"
                                            src="/assets/img/how-2.jpg"
                                            className="border--round"
                                            style={{ height: 300 }}
                                        />
                                        <p>
                                            Ask the people who mean the most to
                                            your loved one to send in
                                            personalized video messages and must
                                            see photos of your celebrated person
                                            via the easy to use shareable link.
                                            Hint: tear jerkers, special moments,
                                            secret stories never told or other
                                            fun antics that you and your
                                            creative crew come up with to show
                                            your love for the special person.
                                        </p>
                                    </div>
                                    <div className="process__item">
                                        <h4>3. U-EDIT &amp; ARRANGE</h4>
                                        <img
                                            alt="Image"
                                            src="/assets/img/how-3.jpg"
                                            className="border--round"
                                            style={{ height: 300 }}
                                        />
                                        <p>
                                            Review, arrange and approve content
                                            gathered from friends, family and
                                            loved ones with an easy to use edit
                                            feature. Choose your reason to Greet
                                            or customize your own U-Greet. Hint:
                                            envelope each video with a few
                                            photos on either side and add
                                            special features to make a truly
                                            unique video.
                                        </p>
                                    </div>
                                    <div className="process__item">
                                        <h4>4. U-FINALIZE &amp; SHARE</h4>
                                        <img
                                            alt="Image"
                                            src="/assets/img/how-4.jpg"
                                            className="border--round"
                                            style={{ height: 250 }}
                                        />
                                        <p>
                                            Share the masterpiece with your
                                            special someone and give the gift of
                                            love, cherished memories, forgotten
                                            stories and the ultimate video time
                                            capsule. Hint: catch them off guard,
                                            make it a surprise or plan a viewing
                                            event to match your theme!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <></>
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
                                        style={{ background: "#CE1C1C" }}
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

export default About;
