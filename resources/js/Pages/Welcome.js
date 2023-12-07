import React, { useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import authContext from "../context/authContext";
import Navbar from "../Layout/Navbar";
import { Helmet } from "react-helmet";

// import WelcomeStyle from "../assets/css/module/Welcome.module.css";
import FooterWebsite from "../Component/Footer/FooterWebsite";
import ScrollToTopArrow from "../Component/ScrollToTopArrow/ScrollToTopArrow";
import Testimonials from "../Component/Testimonial/Testimonials";

export const Welcome = () => {
    const { authData, state } = useContext(authContext);

    const navigate = useNavigate();

   
    //
    // useEffect(() => {
    //     console.info("Here");
    //     if(!authData.signedIn) {
    //         console.info("Welcome: heheheh");
    //         // navigate('/login');
    //     } else {
    //         console.info("Welcome: Here in else");
    //     }
    // }, []);

    return (
        <div className="f-roboto">
            <Navbar />
            <div className="main-container">
             
                <section
                    className="imageblock switchable height-100 switchable--switch imagebg image--light videobg feature-large bg--white space--sm rellax"
                    data-rellax-speed="-1"
                >
                    <div className="imageblock__content col-lg-6 col-md-4 pos-right imagebg">
                        <video autoPlay loop muted>
                            <source
                                src="/assets/video/main3_final.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <div className="background-image-holder">
                            <img alt="image" src="/assets/video/main2.jpg" />
                        </div>
                        <div className="container pos-vertical-center">
                            <div className="row">
                                <div className="col-md-12"></div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-7">
                                <h1
                                    className="big color--black"
                                    style={{ fontSize: "4em" }}
                                >
                                    For all the moments in life, there’s a
                                    U-Greet.
                                </h1>

                                <p className="lead">
                                    <span style={{ color: "rgb(206, 28, 28)" }}>
                                        Create a video time capsule to share the
                                        adventures of life in what will surely
                                        be the ultimate gift. It’s not the money
                                        we spend but the memories we make that
                                        matter.
                                    </span>
                                </p>
                                <p className="lead">
                                    <i>Unite with U-Greet</i>
                                </p>
                                <div className="modal-instance block">
                                    <div className="video-play-icon bg--primary video-play-icon--sm modal-trigger"></div>
                                    <span>
                                        <strong>Watch Overview</strong>
                                        &nbsp;&nbsp;&nbsp;64 Seconds
                                    </span>
                                    <div className="modal-container">
                                        <div
                                            className="modal-content bg-dark"
                                            data-width="60%"
                                            data-height="70%"
                                        >
                                            <video controls>
                                                <source
                                                    src="/assets/video/ugreet_v2.mp4"
                                                    type="video/mp4"
                                                />
                                            </video>
                                            {/*<video>
                                                <source
                                                    src="/assets/video/main3.mp4"
                                                    type="video/mp4"
                                                />
                                            </video>*/}
                                            {/*<iframe
                                                data-src="https://www.youtube.com/embed/VZFp56LP2Cg?autoplay=1"
                                                allowFullScreen="allowfullscreen"
                                            ></iframe>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div
                    className="rellax rellax-margin-bottom"
                    data-rellax-speed="20"
                >
                    <section className="text-center bg--dark">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="col-md-12 col-lg-12 text-left">
                                        <h1 className="bold">
                                            Share The Gift Of Love.
                                        </h1>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <a
                                                    href="/U-Greet"
                                                    className="h3 gnb bold color--white short"
                                                >
                                                    U-Greet
                                                </a>
                                                <p className="color--white">
                                                    Stay connected the U-Greet
                                                    way. Capture every minute of
                                                    your adventure in real time.
                                                    Invite everyone to share in
                                                    your U-Greet and relive the
                                                    moments forever... Not all
                                                    who wander are lost, and
                                                    those who do wander, capture
                                                    it with U-Greet.
                                                </p>
                                            </div>
                                            <div className="col-md-6">
                                                <br className="hide-md" />
                                                <a
                                                    href="/SweetGreet"
                                                    className="h3 gnb bold color--white short"
                                                >
                                                    Sweet Greet
                                                </a>
                                                <p className="color--white">
                                                    Short, sweet and to the
                                                    point with a Sweet greet
                                                    FREE video. We want you to
                                                    spread as much love and hope
                                                    as you can. The world needs
                                                    love and we think you are
                                                    perfect for the job! Start
                                                    Greeting today.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="row mt--1">
                                            <div className="col-md-6">
                                                <a
                                                    href="/U-Love"
                                                    className="h3 gnb bold color--white short"
                                                >
                                                    U-Love
                                                </a>
                                                <p className="color--white">
                                                    Roses are red, violets are
                                                    blue. There are so many
                                                    reasons that I love you. Say
                                                    it with U-Love, say it
                                                    forever. Speak from the
                                                    heart so they will wonder
                                                    never.
                                                </p>
                                            </div>
                                            <div className="col-md-6">
                                                <br className="hide-md" />
                                                <a
                                                    href="/U-Wed"
                                                    className="h3 gnb bold color--white short"
                                                >
                                                    U-Wed
                                                </a>
                                                <p className="color--white">
                                                    Your love story told through
                                                    the eyes of your family and
                                                    friends, a story like no
                                                    other. U-Wed captures your
                                                    moment, your day and your
                                                    new chapter. It will be the
                                                    ultimate wedding keepsake.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row mt--1">
                                            <div className="col-md-6">
                                                <a
                                                    href="/U-Miss"
                                                    className="h3 gnb bold color--white short"
                                                >
                                                    U-Miss
                                                </a>
                                                <p className="color--white">
                                                    In a fast-paced world it’s
                                                    easy to lose track of time
                                                    and forget what’s truly
                                                    important. Everyone needs a
                                                    reminder that they are
                                                    special, that they are loved
                                                    and that they are missed.
                                                    Tell them today with
                                                    U-Missand be the reason
                                                    someone smiles today!
                                                </p>
                                            </div>
                                            <div className="col-md-6">
                                                <br className="hide-md" />
                                                <a
                                                    href="/U-Remember"
                                                    className="h3 gnb bold color--white short"
                                                >
                                                    U-Remember
                                                </a>
                                                <p className="color--white">
                                                    Collaborate with pictures,
                                                    stories and heartfelt video
                                                    messages that are
                                                    beautifully transformed into
                                                    a legacy story of life,
                                                    leaving a love filled
                                                    tribute behind for you and
                                                    your loved ones to keep
                                                    remembering for all time. In
                                                    Loving Memory.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row mt--1">
                                            <div className="col-md-6">
                                                <a
                                                    href="/U-Age"
                                                    className="h3 gnb bold color--white short"
                                                >
                                                    U-Age
                                                </a>
                                                <p className="color--white">
                                                    Just another Birthday? Think
                                                    again. Sending a U-Age
                                                    personalized video and photo
                                                    gift is the best anyone can
                                                    receive. Celebrate your
                                                    person like never before
                                                    with contributions from
                                                    their family and friends.
                                                    You are sure to give them a
                                                    birthday that they'll never
                                                    forget!
                                                </p>
                                            </div>
                                            <div className="col-md-6">
                                                <br className="hide-md" />
                                                <a
                                                    href="/U-Celebrate"
                                                    className="h3 gnb bold color--white short"
                                                >
                                                    U-Celebrate
                                                </a>
                                                <p className="color--white">
                                                    No matter the Holiday, we
                                                    have you covered in true
                                                    U-Greet Style! Celebrations
                                                    are what we do. Collaborate
                                                    with your loved ones to
                                                    produce the ultimate holiday
                                                    gift. Share the festivities
                                                    from near and far and never
                                                    again miss another holiday
                                                    tradition!
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row mt--1">
                                            <div className="col-md-6">
                                                <a
                                                    href="/U-Baby"
                                                    className="h3 gnb bold color--white short"
                                                >
                                                    U-Baby
                                                </a>
                                                <p className="color--white">
                                                    Let U-Greet be the first to
                                                    welcome your new baby and
                                                    then share it with the
                                                    world! Babies have so many
                                                    firsts and milestones,
                                                    U-Baby ensures that you
                                                    never forget any of them and
                                                    gives you and your loved
                                                    ones a beautiful video time
                                                    capsule.
                                                </p>
                                            </div>
                                            <div className="col-md-6">
                                                <br className="hide-md" />
                                                <a
                                                    href="/U-Grad"
                                                    className="h3 gnb bold color--white short"
                                                >
                                                    U-Grad
                                                </a>
                                                <p className="color--white">
                                                    No matter the stage of your
                                                    scholar’s education, they
                                                    deserve all the cheer,
                                                    support and recognition
                                                    possible; it’s hard work
                                                    staying the course. As one
                                                    story ends and another
                                                    begins, celebrate them with
                                                    a video tribute of
                                                    accomplishments thus far.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="row mt--1">
                                            <div className="col-md-6">
                                                <a
                                                    href="/U-Parent"
                                                    className="h3 gnb bold color--white short"
                                                >
                                                    U-Parent
                                                </a>
                                                <p className="color--white">
                                                    Parents have the most
                                                    thankless job; yet, one of
                                                    the most important. How can
                                                    you ever thank someone whose
                                                    given you everything? Give
                                                    the gift of U-Parent and
                                                    express how you feel in a
                                                    truly unique and
                                                    unforgettable way.
                                                </p>
                                            </div>
                                            <div className="col-md-6">
                                                <br className="hide-md" />
                                                <a
                                                    href="/U-Retire"
                                                    className="h3 gnb bold color--white short"
                                                >
                                                    U-Retire
                                                </a>
                                                <p className="color--white">
                                                    They’ve been so busy
                                                    working, remind them it’s
                                                    time to get busy living with
                                                    U-Retire. Help them get
                                                    started on their bucket list
                                                    or send them off with fun
                                                    advice; either way, remind
                                                    them life is about to begin.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-3 hide-xs">
                                    <br className="hide-md" />
                                    <br className="hide-md" />
                                    <div className="col-md-12">
                                        <div className="feature feature-1">
                                            <img
                                                alt="Image"
                                                src="/assets/img/fgreet.jpg"
                                            />
                                            <div className="feature__body boxed boxed--sm boxed--border bg--white">
                                                <h4>Choose Your Adventure!</h4>
                                                <p className="">
                                                    “The biggest adventure you
                                                    can ever take is to live the
                                                    life of your dreams.”
                                                    <br /> - Oprah Winfrey
                                                </p>
                                                <a href="/U-Greet">
                                                    Learn More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="feature feature-1">
                                            <img
                                                alt="Image"
                                                src="/assets/img/celebrateIt.jpg"
                                            />
                                            <div className="feature__body boxed boxed--sm boxed--border bg--white">
                                                <h4 className="">
                                                    Celebrate It!
                                                </h4>
                                                <p className="">
                                                    “Grow old with me! The best
                                                    is yet to be.”
                                                    <br /> - Robert Browning
                                                </p>
                                                <a href="/U-Age">Learn More</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="feature feature-1">
                                            <img
                                                alt="Image"
                                                src="/assets/img/frem.jpg"
                                            />
                                            <div className="feature__body boxed boxed--sm boxed--border bg--white">
                                                <h4>In Loving Memory</h4>
                                                <p className="">
                                                    “Gone yet not forgotten.”
                                                    <br /> - Author Unknown
                                                </p>
                                                <a href="/U-Remember">
                                                    Learn More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 mt--7 hide-xs">
                                    <div className="col-md-12">
                                        <div className="feature feature-1">
                                            <img
                                                alt="Image"
                                                src="/assets/img/baby.jpg"
                                            />
                                            <div className="feature__body boxed boxed--sm boxed--border bg--white">
                                                <h4>Hello World!</h4>
                                                <p className="">
                                                    “I love you forever, I’ll
                                                    like you for always. As long
                                                    as I am living, my baby
                                                    you’ll be.” <br /> - Robert
                                                    Munsch
                                                </p>
                                                <a href="/U-Baby">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-11">
                                        <div className="feature feature-1">
                                            <img
                                                alt="Image"
                                                src="/assets/img/fmiss.jpg"
                                            />
                                            <div className="feature__body boxed boxed--sm boxed--border bg--white">
                                                <h4>P.S. I Miss U</h4>
                                                <p className="">
                                                    "Distance gives us a reason
                                                    to love harder."
                                                    <br /> - Author Unknown
                                                </p>
                                                <a href="/U-Miss">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-3 hide-md">
                                    <br className="hide-md" />
                                    <br className="hide-md" />
                                    <div className="col-md-12">
                                        <div className="feature feature-1">
                                            <img
                                                alt="Image"
                                                src="/assets/img/fgreet.jpg"
                                            />
                                            <div className="feature__body boxed boxed--sm boxed--border bg--white">
                                                <h4>Choose your adventure!</h4>
                                                <p className="">
                                                    “The biggest adventure you
                                                    can ever take is to live the
                                                    life of your dreams.”
                                                    <br /> - Oprah Winfrey
                                                </p>
                                                <a href="/U-Greet">
                                                    Learn More
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="feature feature-1">
                                            <img
                                                alt="Image"
                                                src="/assets/img/baby.jpg"
                                            />
                                            <div className="feature__body boxed boxed--sm boxed--border bg--white">
                                                <h4>Hello World!</h4>
                                                <p className="">
                                                    “I love you forever I’ll
                                                    like you for always, as long
                                                    as I am living my baby
                                                    you’ll be.”
                                                    <br /> - Robert Munsch
                                                </p>
                                                <a href="/U-Baby">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="feature feature-1">
                                            <img
                                                alt="Image"
                                                src="/assets/img/celebrateIt.jpg"
                                            />
                                            <div className="feature__body boxed boxed--sm boxed--border bg--white">
                                                <h4 className="">
                                                    Celebrate it!
                                                </h4>
                                                <p className="">
                                                    “Grow old with me! The best
                                                    is yet to be.”
                                                    <br /> - Robert Browning
                                                </p>
                                                <a href="/U-Age">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="feature feature-1">
                                            <img
                                                alt="Image"
                                                src="/assets/img/fmiss.jpg"
                                            />
                                            <div className="feature__body boxed boxed--sm boxed--border bg--white">
                                                <h4>P.S. I miss you xox</h4>
                                                <p className="">
                                                    "Distance gives us a reason
                                                    to love harder."
                                                    <br /> - Author Unknown
                                                </p>
                                                <a href="/U-Miss">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="feature feature-1">
                                            <img
                                                alt="Image"
                                                src="/assets/img/frem.jpg"
                                            />
                                            <div className="feature__body boxed boxed--sm boxed--border bg--white">
                                                <h4>In Loving Memory</h4>
                                                <p className="">
                                                    “Gone yet not forgotten.”
                                                    <br /> - Author Unknown
                                                </p>
                                                <a href="/U-Remember">
                                                    Learn More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="text-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-8">
                                    <h1>Get Greeting</h1>
                                    <p className="lead">
                                        Create, collaborate and share memories
                                        that will last a lifetime.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="switchable switchable--switch feature-large">
                        <div className="container">
                            <div className="row justify-content-around">
                                <div className="col-md-6 col-12">
                                    <div className="video-cover border--round box-shadow-wide">
                                        <video autoPlay loop muted playsInline>
                                            <source src="/assets/video/hm1.mp4" />
                                        </video>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-5">
                                    <div className="switchable__text">
                                        <h2>U-Invite People To Contribute</h2>
                                        <p className="lead">
                                            Ask the people who mean the most to
                                            your loved one to send in
                                            personalized video messages and must
                                            see photos of your celebrated person
                                            via the easy to use shareable link.
                                            Watch your video time capsule grow
                                            as your friends and family upload at
                                            the click of a button.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="switchable feature-large bg--secondary">
                        <div className="container">
                            <div className="row justify-content-around">
                                <div className="col-md-6">
                                    <div className="video-cover border--round box-shadow-wide">
                                        <video autoPlay loop muted playsInline>
                                            <source src="/assets/video/hm2.mp4" />
                                        </video>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-5">
                                    <div className="switchable__text">
                                        <h2>U-Edit & Arrange</h2>
                                        <p className="lead">
                                            Review, arrange and approve content
                                            gathered from friends, family and
                                            loved ones with an easy to use edit
                                            feature.  Choose your themed
                                            occasion, add music and customize
                                            your own video.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="switchable switchable--switch feature-large">
                        <div className="container">
                            <div className="row justify-content-around">
                                <div className="col-md-6 col-12">
                                    <div className="video-cover border--round box-shadow-wide">
                                        <video autoPlay loop muted playsInline>
                                            <source src="/assets/video/hm3.mp4" />
                                        </video>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-5">
                                    <div className="switchable__text">
                                        <h2>U-Finalize & Share</h2>
                                        <p className="lead">
                                            Share your one of a kind masterpiece
                                            with your special someone and be the
                                            reason they smile today. Give the
                                            gift of love, cherished memories,
                                            forgotten stories and the ultimate
                                            gift of a video time capsule.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        className="text-center bg--secondary"
                        id="occasions"
                    >
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-8 col-lg-8 text-left">
                                    <h1 className="bold">
                                        &#9834; U-Greet, I-Greet,
                                        <br />
                                        We All Greet To Make It Sweet. &#9834;
                                    </h1>
                                    <br className="hide-md" />
                                </div>
                                <div className="col-md-4 col-lg-4 text-right text-center-xs">
                                    <Link
                                        className="btn btn--lg btn--primary"
                                        to={
                                            state.isLoggedIn
                                                ? "/startOccasion"
                                                : "/signup"
                                        }
                                    >
                                        <span className="btn__text">
                                            Start Now
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="greets switchable switchable--switch feature-large bg--secondary p-3">
                        <div className="container">
                            <div className="row justify-content-around">
                                <div className="row text-center">
                                    <div className="col-md-2 col-xs-4">
                                        <a href="/SweetGreet" className="block">
                                            <div className="feature boxed feature-height boxed--border border--round">
                                                <img
                                                    src="/assets/img/icons/sweet-greets.png"
                                                    alt="Occasions"
                                                    className="top-add-10"
                                                />
                                                <span className="h5 color--dark">
                                                    Sweet Greet
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-2 col-xs-4">
                                        <a href="/U-Age" className="block">
                                            <div className="feature boxed feature-height boxed--border border--round">
                                                <img
                                                    src="/assets/img/icons/cake.png"
                                                    alt="Occasions"
                                                />
                                                <span className="h5 color--dark">
                                                    U-Age
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-2 col-xs-4">
                                        <a href="/U-Wed" className="block">
                                            <div className="feature boxed feature-height  boxed--border border--round">
                                                <img
                                                    src="/assets/img/icons/wedding-ring.png"
                                                    alt="Occasions"
                                                />
                                                <span className="h5 color--dark">
                                                    U-Wed
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-2 col-xs-4">
                                        <a href="/U-Remember" className="block">
                                            <div className="feature boxed feature-height  boxed--border border--round">
                                                <img
                                                    src="/assets/img/icons/ribbon.png"
                                                    alt="Occasions"
                                                />
                                                <span className="h5 color--dark">
                                                    U-Remember
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-2 col-xs-4">
                                        <a href="/U-Love" className="block">
                                            <div className="feature boxed feature-height  boxed--border border--round">
                                                <img
                                                    src="/assets/img/icons/love.png"
                                                    alt="Occasions"
                                                />
                                                <span className="h5 color--dark">
                                                    U-Love
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-2 col-xs-4">
                                        <a href="/U-Miss" className="block">
                                            <div className="feature boxed feature-height  boxed--border border--round">
                                                <img
                                                    src="/assets/img/icons/world.png"
                                                    alt="Occasions"
                                                />
                                                <span className="h5 color--dark">
                                                    U-Miss
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="row justify-content-around">
                                <div className="row text-center">
                                    <div className="col-md-2 col-xs-4">
                                        <a href="/U-Baby" className="block">
                                            <div className="feature boxed feature-height  boxed--border border--round">
                                                <img
                                                    src="/assets/img/icons/newborn2.png"
                                                    alt="Occasions"
                                                />
                                                <span className="h5 color--dark">
                                                    U-Baby
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-2 col-xs-4">
                                        <a href="/U-Parent" className="block">
                                            <div className="feature boxed feature-height  boxed--border border--round">
                                                <img
                                                    src="/assets/img/icons/mothers-day.png"
                                                    alt="Occasions"
                                                />
                                                <span className="h5 color--dark">
                                                    U-Parent
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-2 col-xs-4">
                                        <a href="/U-Grad" className="block">
                                            <div className="feature boxed feature-height  boxed--border border--round">
                                                <img
                                                    src="/assets/img/icons/graduation-hat-and-diploma.png"
                                                    alt="Occasions"
                                                />
                                                <span className="h5 color--dark">
                                                    U-Grad
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-2 col-xs-4">
                                        <a href="/U-Retire" className="block">
                                            <div className="feature boxed feature-height  boxed--border border--round">
                                                <img
                                                    src="/assets/img/icons/rocking-chair.png"
                                                    alt="Occasions"
                                                />
                                                <span className="h5 color--dark">
                                                    U-Retire
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-2 col-xs-4">
                                        <a
                                            href="/U-Celebrate"
                                            className="block"
                                        >
                                            <div className="feature boxed feature-height  boxed--border border--round">
                                                <img
                                                    src="/assets/img/icons/christmas-tree.png"
                                                    alt="Occasions"
                                                />
                                                <span className="h5 color--dark">
                                                    U-Celebrate
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-md-2 col-xs-4">
                                        <a href="/U-Greet" className="block">
                                            <div className="feature boxed feature-height  boxed--border border--round">
                                                <img
                                                    src="/assets/img/icons/ugreet.png"
                                                    alt="Occasions"
                                                />
                                                <span className="h5 color--dark">
                                                    U-Greet
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <section
                    className="text-center"
                    style={{
                        background: "url(img/3.jpg) no-repeat top center",
                        backgroundRepeat: "no-repeat",
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

            <Helmet>
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
                {/* <link
                    href="assets/css/flickity.css"
                    rel="stylesheet"
                    type="text/css"
                    media="all"
                /> */}
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
                    src="assets/js/flickity.min.js"
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
                {/* {/* <script
                    src="assets/js/ytplayer.min.js"
                    type="text/javascript"
                ></script> */}
                {/* <script
                    src="assets/js/lightbox.min.js"
                    type="text/javascript"
                ></script> */}
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
                {/* below script causes problem in three dot */}
                {/* <script
                    src="assets/js/scripts.js"
                    type="text/javascript"
                ></script> */}
                {/* below script causes problem in three dot */}
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
                {/* below script causes problem in create button dropdown */}
                {/* <script
                    src="assets/js/plugins.bundle7a50.js"
                    type="text/javascript"
                ></script> */}
                {/* above script causes problem in create button dropdown */}
                <script
                    src="assets/js/scripts.bundle-v=7.2.7.js"
                    type="text/javascript"
                ></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
                    crossorigin="anonymous"
                ></script>
                <script>var rellax = new Rellax('.rellax');</script>
            </Helmet>
        </div>
    );
};
