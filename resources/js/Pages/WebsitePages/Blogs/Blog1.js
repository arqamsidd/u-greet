import React from "react";
import FooterWebsite from "../../../Component/Footer/FooterWebsite";
import ScrollToTopArrow from "../../../Component/ScrollToTopArrow/ScrollToTopArrow";
import Navbar from "../../../Layout/Navbar";

const Blog1 = () => {
    return (
        <div>
            <Navbar />
            <div className="main-container">
                <div>
                    <section className="unpad">
                        <article>
                            <div
                                className="imagebg text-center height-60"
                                data-overlay={5}
                            >
                                <div className="background-image-holder">
                                    <img
                                        alt="background"
                                        src="/assets/img//blog-01.jpg"
                                    />
                                </div>
                                <div className="container pos-vertical-center">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="article__title">
                                                <h1>The Purpose of U-Greet</h1>
                                                <span className="gnb">
                                                January 20th 2024
                                                </span>
                                                {/* <span>
                                                    <a href="#">
                                                        Video Greeting
                                                    </a>
                                                </span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="pos-absolute pos-bottom col-12 text-center">
                                    <div className="article__author">
                                        {/* <img
                                            alt="Image"
                                            src="/assets/img//avatar-round-1.png"
                                        /> */}
                                        <h6 className="type--uppercase gnb">
                                            U-Greet
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-8">
                                            <div className="article__body">
                                                <p>
                                                    The short answer is to
                                                    spread love. The long answer
                                                    is a constellation of
                                                    circumstances.
                                                </p>
                                                <p>
                                                    Covid-19 tore people apart
                                                    in distance, but also
                                                    through division. It was
                                                    heart wrenching in so many
                                                    ways and many of us
                                                    struggled to find ways to
                                                    keep in touch.
                                                </p>
                                                <p>
                                                    Milestone birthdays,
                                                    weddings, births,
                                                    graduations, funerals, so
                                                    many important moments were
                                                    lost among the lives that
                                                    we'll never get back.
                                                </p>
                                                <p>
                                                    It's truly devastating to
                                                    miss out on the shared
                                                    dreams, moments and
                                                    milestones of our families
                                                    and in the midst of crisis
                                                    we had to remain strong for
                                                    our friends and families,
                                                    support and love them...by
                                                    staying away and finding
                                                    alternative ways to stay
                                                    connected.
                                                </p>
                                                <p>
                                                    U-Greet was birthed from
                                                    personal loss but also from
                                                    a strong desire to spread
                                                    love and showcase
                                                    connections in a time where
                                                    social isolation has taken a
                                                    toll on our mental and
                                                    emotional well-being.
                                                </p>
                                                <p>
                                                    We want to bring people
                                                    together and what better way
                                                    to show how much you care.
                                                    The sheer happiness, tears
                                                    of joy and gratitude that
                                                    exudes from the receiver of
                                                    a U-Greet video will be
                                                    enough to capture you too.
                                                    Showing your loved one how
                                                    much you care has never been
                                                    easier or more meaningful
                                                    and the result is they feel
                                                    truly special and loved.
                                                </p>
                                                <p>
                                                    We are so happy and proud to
                                                    bring this amazing gift to
                                                    you. Even if you're not the
                                                    receiver, you will be gifted
                                                    with a moment of true bliss,
                                                    knowing you made someone's
                                                    day truly special. You have
                                                    to feel it to believe it.
                                                </p>
                                                <h4>
                                                    With Love,
                                                    <br />
                                                    <span className="gnb">
                                                        U-Greet xo
                                                    </span>
                                                </h4>
                                            </div>
                                            <div className="article__share text-center">
                                                <a
                                                    className="btn bg--facebook btn--icon"
                                                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&t=The Purpose of U-Greet`}
                                                    target="_blank"
                                                >
                                                    <span className="btn__text">
                                                        <i className="socicon socicon-facebook" />
                                                        Share on Facebook
                                                    </span>
                                                </a>
                                                <a
                                                    className="btn bg--twitter btn--icon"
                                                    href={`https://twitter.com/share?url=${window.location.href}&text=The Purpose of U-Greet`}
                                                    target="_blank"
                                                >
                                                    <span className="btn__text">
                                                        <i className="socicon socicon-twitter" />
                                                        Share on Twitter
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </section>
                    <section className="bg--secondary">
                        <div className="container">
                            <div className="row text-block">
                                <div className="col-md-12">
                                    <h3>More recent stories</h3>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <article className="feature feature-1">
                                        <a href="/blog7" className="block">
                                            <img
                                                alt="Image"
                                                src="/assets/img//blog-07.jpg"
                                            />
                                        </a>
                                        <div className="feature__body boxed boxed--border">
                                            <span>Oct 15th 2024</span>
                                            <h5>Oh Donna</h5>
                                            <a href="/blog7"> Read More </a>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-md-4">
                                    <article className="feature feature-1">
                                        <a href="/blog1" className="block">
                                            <img
                                                alt="Image"
                                                src="/assets/img//blog-01.jpg"
                                            />
                                        </a>
                                        <div className="feature__body boxed boxed--border">
                                            <span>January 20th 2024</span>
                                            <h5>The Purpose of U-Greet</h5>
                                            <a href="/blog1"> Read More </a>
                                        </div>
                                    </article>
                                </div>
                                <div className="col-md-4">
                                    <article className="feature feature-1">
                                        <a href="/blog3" className="block">
                                            <img
                                                alt="Image"
                                                src="/assets/img//blog-03.jpg"
                                            />
                                        </a>
                                        <div className="feature__body boxed boxed--border">
                                            <span>June 12th 2024</span>
                                            <h5>Why should U-Remember?</h5>
                                            <a href="/blog3"> Read More </a>
                                        </div>
                                    </article>
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

export default Blog1;
