import React from "react";
import FooterWebsite from "../../../Component/Footer/FooterWebsite";
import ScrollToTopArrow from "../../../Component/ScrollToTopArrow/ScrollToTopArrow";
import Navbar from "../../../Layout/Navbar";

const Blog2 = () => {
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
                                        src="/assets/img/blog-02.jpg"
                                    />
                                </div>
                                <div className="container pos-vertical-center">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="article__title">
                                                <h1>Our Why?</h1>
                                                <span className="gnb">
                                                    May 29th 2024
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
                                                    U-Greet was born out of
                                                    grief and loss. Both
                                                    founders have suffered
                                                    losses that propelled them
                                                    to find new ways to capture
                                                    memories and keep the spirit
                                                    of their lost one alive.
                                                </p>
                                                <blockquote
                                                    style={{
                                                        textAlign: "start",
                                                    }}
                                                >
                                                    Grief, I've learned, is
                                                    really just love. It's all
                                                    the love you want to give,
                                                    but cannot. All that unspent
                                                    love gathers up in the
                                                    corners of your eyes, the
                                                    lump in your throat, and in
                                                    that hollow part of your
                                                    chest. Grief is just love
                                                    with no place to go.
                                                    <p>- Jamie Anderson</p>
                                                </blockquote>
                                                <p>
                                                    Watching someone you love
                                                    pass before your eyes is
                                                    gut-wrenching. There are no
                                                    words potent enough to
                                                    describe watching someone
                                                    deteriorate or vanish. You
                                                    find yourself looking back
                                                    on photos and videos to
                                                    remind yourself of the good
                                                    times and immerse yourself
                                                    in the love.
                                                </p>
                                                <p>
                                                    We searched for ways to mend
                                                    the grief and we landed on
                                                    love. We can't mend your
                                                    broken heart but we offer
                                                    you a way to carry their
                                                    light, remember their spirit
                                                    and find a place to put your
                                                    love. Memories and moments,
                                                    photos and videos, all
                                                    captured together in one
                                                    beautiful tribute that
                                                    allows you to hold a little
                                                    piece of them in your heart
                                                    forever.
                                                </p>
                                                <p>
                                                    In loving memory of you, Sue
                                                    &amp; Donna
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
                                                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&t=Our Why?`}
                                                    target="_blank"
                                                >
                                                    <span className="btn__text">
                                                        <i className="socicon socicon-facebook" />
                                                        Share on Facebook
                                                    </span>
                                                </a>
                                                <a
                                                    className="btn bg--twitter btn--icon"
                                                    href={`https://twitter.com/share?url=${window.location.href}&text=Our Why?`}
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

export default Blog2;
