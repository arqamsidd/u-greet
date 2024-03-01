import React from "react";
import FooterWebsite from "../../../Component/Footer/FooterWebsite";
import ScrollToTopArrow from "../../../Component/ScrollToTopArrow/ScrollToTopArrow";
import Navbar from "../../../Layout/Navbar";

const Blog3 = () => {
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
                                        src="/assets/img/blog-03.jpg"
                                    />
                                </div>
                                <div className="container pos-vertical-center">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="article__title">
                                                <h1>Why should U-Remember?</h1>
                                                <span className="gnb">
                                                    June 12th 2024
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
                                                    Here's the story behind
                                                    U-Remember and the message I
                                                    hope all of you reading this
                                                    blog take away from this.
                                                </p>
                                                <p>
                                                    I lost my Mom when I was 14
                                                    years old. As expected, I
                                                    was devastated by this loss.
                                                    Trying to keep her memory
                                                    alive becomes harder with
                                                    each passing day quite
                                                    simply because memories
                                                    fade.
                                                </p>
                                                <p>
                                                    It's been 26 years since I
                                                    saw her last but I can
                                                    recall that day like it was
                                                    yesterday. I have spent the
                                                    better part of two decades
                                                    healing and grieving the
                                                    loss. Yes, it is true when
                                                    they say time heals, but it
                                                    does not forget or leave you
                                                    feeling truly full. There
                                                    will always be a part of me
                                                    missing, a part of me
                                                    resentful that I can never
                                                    truly have it all. No matter
                                                    how great my life, she will
                                                    always be missing.
                                                </p>
                                                <p />
                                                <p>
                                                    I am a mother myself now yet
                                                    my children will never know
                                                    my Mom. They will never get
                                                    to be a part of her life
                                                    through anything more than a
                                                    photo in a book. When I look
                                                    back and try to remember
                                                    her, to share her journey
                                                    and stories and include her
                                                    and her memory within my
                                                    family, the memories have
                                                    faded, the stories have
                                                    stopped and the people that
                                                    loved and knew her are
                                                    distant from my life now. I
                                                    have only my thoughts and
                                                    memories to share.
                                                </p>
                                                <p>
                                                    U-Remember preserves the
                                                    memories to watch for all of
                                                    eternity and keep you
                                                    feeling connected. A time
                                                    capsule you can share with
                                                    family members not lucky
                                                    enough to have had the
                                                    opportunity to meet.
                                                </p>
                                                <p>
                                                    I wish this was available 26
                                                    years ago. I wish I could
                                                    listen to my mom's family
                                                    and friends share pictures
                                                    and stories of her. I wish I
                                                    could laugh, smile and
                                                    giggle at the unknown
                                                    moments of her life. I wish
                                                    I could be a part of their
                                                    past to help me continue
                                                    into the future. To have
                                                    this would be priceless. And
                                                    so to you, our readers and
                                                    "Greeters" we leave you with
                                                    this:
                                                </p>
                                                <p>
                                                    Don't let their light go
                                                    out. U-Remember, forever.
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
                                                    href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}&t=Why should U-Remember?`}
                                                    target="_blank"
                                                >
                                                    <span className="btn__text">
                                                        <i className="socicon socicon-facebook" />
                                                        Share on Facebook
                                                    </span>
                                                </a>
                                                <a
                                                    className="btn bg--twitter btn--icon"
                                                    href={`https://twitter.com/share?url=${window.location.href}&text=Why should U-Remember?`}
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
                                            <a href="/blog7">Read More</a>
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
                                            <a href="/blog1">Read More</a>
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
                                            <a href="/blog3">Read More</a>
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

export default Blog3;
