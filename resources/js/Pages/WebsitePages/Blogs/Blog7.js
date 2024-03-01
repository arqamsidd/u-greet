import React from "react";
import FooterWebsite from "../../../Component/Footer/FooterWebsite";
import ScrollToTopArrow from "../../../Component/ScrollToTopArrow/ScrollToTopArrow";
import Navbar from "../../../Layout/Navbar";

const Blog7 = () => {
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
                                        src="/assets/img/blog-07.jpg"
                                    />
                                </div>
                                <div className="container pos-vertical-center">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="article__title">
                                                <h1>Oh Donna</h1>
                                                <span className="gnb">
                                                    Oct 15th 2024
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
                                            src="/assets/img/avatar-round-1.png"
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
                                                    My dear friend, Donna was
                                                    lost this year during the
                                                    pandemic although that's not
                                                    what took her.
                                                </p>
                                                <p>
                                                    This past year has been a
                                                    trying time for many people
                                                    unable to see family and
                                                    friends and more so when you
                                                    know their days may be
                                                    numbered.
                                                </p>
                                                <p>
                                                    Death and loss will almost
                                                    always leave you feeling
                                                    helpless but Covid-19 added
                                                    an extra layer of
                                                    powerlessness. It was this
                                                    sense of hopelessness that
                                                    brought to light the idea of
                                                    U-Greet.
                                                </p>
                                                <p>
                                                    The inability to see my
                                                    friend, hours away with
                                                    lockdowns in place made for
                                                    an extremely difficult time.
                                                    I found myself sending
                                                    regular video messages to my
                                                    friend as I was desperate to
                                                    find ways to show her I
                                                    cared, that she mattered,
                                                    that she would not be
                                                    forgotten. It was from this
                                                    desperation that hope shone
                                                    down.
                                                </p>
                                                <p>
                                                    We came up with the idea of
                                                    U-Greet. Unfortunately, not
                                                    in time to send my beautiful
                                                    friend a U-Miss with a
                                                    collection of messages from
                                                    the many who loved her near
                                                    and far containing messages
                                                    of love, hope and
                                                    inspiration. She will,
                                                    however, be the first to be
                                                    honoured with our
                                                    U-Remember.
                                                </p>
                                                <p>
                                                    I will always Remember U,
                                                    Donna.
                                                </p>
                                                <p>In loving memory.</p>
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
                                                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&t=Oh Donna`}
                                                    target="_blank"
                                                >
                                                    <span className="btn__text">
                                                        <i className="socicon socicon-facebook" />
                                                        Share on Facebook
                                                    </span>
                                                </a>
                                                <a
                                                    className="btn bg--twitter btn--icon"
                                                    href={`https://twitter.com/share?url=${window.location.href}&text=Oh Donna`}
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
                                                src="/assets/img/blog-07.jpg"
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
                                                src="/assets/img/blog-01.jpg"
                                            />
                                        </a>
                                        <div className="feature__body boxed boxed--border">
                                            <span>May 25th 2024</span>
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
                                                src="/assets/img/blog-03.jpg"
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

export default Blog7;
