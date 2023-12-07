import React from "react";
import FooterWebsite from "../../../Component/Footer/FooterWebsite";
import ScrollToTopArrow from "../../../Component/ScrollToTopArrow/ScrollToTopArrow";
import Navbar from "../../../Layout/Navbar";

const Blog6 = () => {
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
                                        src="/assets/img/blog-06.jpg"
                                    />
                                </div>
                                <div className="container pos-vertical-center">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="article__title">
                                                <h1>Truly, madly, deeply</h1>
                                                <span className="gnb">
                                                    Aug 22th 2020
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
                                                <p>Love.</p>
                                                <p>
                                                    Romantic, platonic,
                                                    unconditional, universal
                                                    love is all you need.
                                                </p>
                                                <p>
                                                    If you are blessed to feel
                                                    love, spread it! We all need
                                                    love to sustain us. Whether
                                                    you're shy or confident,
                                                    nervous or excited, unsure
                                                    or CERTAIN, a U-Love
                                                    greeting is a unique way to
                                                    get the special message
                                                    across to your person.
                                                </p>
                                                <p>
                                                    Tomorrow is never promised
                                                    so there's no time like the
                                                    present to tell someone how
                                                    you feel. Show them in a
                                                    meaningful and unforgettable
                                                    way with pictures, videos,
                                                    love-filled messages and
                                                    memories that are sure to
                                                    stir up the love in their
                                                    heart.
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
                                                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&t=Truly, madly, deeply`}
                                                    target="_blank"
                                                >
                                                    <span className="btn__text">
                                                        <i className="socicon socicon-facebook" />
                                                        Share on Facebook
                                                    </span>
                                                </a>
                                                <a
                                                    className="btn bg--twitter btn--icon"
                                                    href={`https://twitter.com/share?url=${window.location.href}&text=Truly, madly, deeply`}
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
                                            <span>Oct 15th 2020</span>
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
                                            <span>May 25th 2020</span>
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
                                            <span>June 12th 2020</span>
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

export default Blog6;
