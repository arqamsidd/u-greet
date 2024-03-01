import React from "react";
import FooterWebsite from "../../../Component/Footer/FooterWebsite";
import ScrollToTopArrow from "../../../Component/ScrollToTopArrow/ScrollToTopArrow";
import Navbar from "../../../Layout/Navbar";

const Blog4 = () => {
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
                                        src="/assets/img/blog-04.jpg"
                                    />
                                </div>
                                <div className="container pos-vertical-center">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="article__title">
                                                <h1>
                                                    The Adventures of U-Greet
                                                </h1>
                                                <span className="gnb">
                                                    June 19th 2024
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
                                                    U-Greet is our customizable
                                                    video time capsule but we
                                                    hope you'll consider it more
                                                    of a travel companion.
                                                    Capture your adventures,
                                                    upload them on route or when
                                                    you get home, send the link
                                                    to travel buddies and
                                                    friends you meet along the
                                                    way and share the
                                                    compilation of your epic
                                                    trip with everyone who made
                                                    it bliss.
                                                </p>
                                                <p>
                                                    Whether you're road
                                                    tripping, camping,
                                                    backpacking Europe or
                                                    adventuring in other ways,
                                                    let U-Greet help you capture
                                                    it so you can relive them at
                                                    your beck and call.
                                                </p>
                                                <p>
                                                    Capture the sights, enjoy a
                                                    great meal, dance the night
                                                    away, make new friends, hug
                                                    a stranger. Wherever the
                                                    trip takes you, hold that
                                                    moment in time and share
                                                    with all of those who
                                                    crossed your path along the
                                                    way. What an amazing gift to
                                                    share with those who
                                                    enriched you on your journey
                                                    and a keepsake to remember
                                                    the good old days as if they
                                                    were yesterday!
                                                </p>
                                                <p>
                                                    There are so many things you
                                                    can do with a U-Greet. Get
                                                    creative, think outside the
                                                    box and create a masterpiece
                                                    just the way you like it.
                                                    Trust us, you won't regret
                                                    creating a time capsule of
                                                    your journey wherever it may
                                                    take you!
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
                                                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&t=The Adventures of U-Greet`}
                                                    target="_blank"
                                                >
                                                    <span className="btn__text">
                                                        <i className="socicon socicon-facebook" />
                                                        Share on Facebook
                                                    </span>
                                                </a>
                                                <a
                                                    className="btn bg--twitter btn--icon"
                                                    href={`https://twitter.com/share?url=${window.location.href}&text=The Adventures of U-Greet`}
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

export default Blog4;
