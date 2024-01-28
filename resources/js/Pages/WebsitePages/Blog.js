import React from "react";
import { Helmet } from "react-helmet";
import FooterWebsite from "../../Component/Footer/FooterWebsite";
import ScrollToTopArrow from "../../Component/ScrollToTopArrow/ScrollToTopArrow";
import Navbar from "../../Layout/Navbar";

const Blog = () => {
    return (
        <div>
            <div>
                <Navbar />
                <div className="main-container">
                    <section className="space--xs">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="masonry">
                                        {/* <div className="masonry-filter-container d-flex align-items-center">
                                            <span>Category:</span>
                                            <div className="masonry-filter-holder">
                                                <div
                                                    className="masonry__filters"
                                                    data-filter-all-text="All Categories"
                                                />
                                            </div>
                                        </div> */}
                                        <hr />
                                        <div className="masonry__container row">
                                            <div className="masonry__item col-lg-4 col-md-6" />
                                            <div
                                                className="masonry__item col-lg-4 col-md-6"
                                                data-masonry-filter="U-Love"
                                            >
                                                <article className="feature feature-1">
                                                    <a
                                                        href="/blog1"
                                                        className="block"
                                                    >
                                                        <img
                                                            alt="Image"
                                                            src="/assets/img/blog-01.jpg"
                                                        />
                                                    </a>
                                                    <div className="feature__body boxed boxed--border">
                                                        <span className="gnb">
                                                            January 20th 2024
                                                        </span>
                                                        <h5>
                                                            The Purpose of
                                                            U-Greet
                                                        </h5>
                                                        <a href="/blog1">
                                                            Read More
                                                        </a>
                                                    </div>
                                                </article>
                                            </div>
                                            <div
                                                className="masonry__item col-lg-4 col-md-6"
                                                data-masonry-filter="U-Love"
                                            >
                                                <article className="feature feature-1">
                                                    <a
                                                        href="/blog2"
                                                        className="block"
                                                    >
                                                        <img
                                                            alt="Image"
                                                            src="/assets/img/blog-02.jpg"
                                                        />
                                                    </a>
                                                    <div className="feature__body boxed boxed--border">
                                                        <span className="gnb">
                                                            May 29th 2020
                                                        </span>
                                                        <h5>Our Why?</h5>
                                                        <a href="/blog2">
                                                            Read More
                                                        </a>
                                                    </div>
                                                </article>
                                            </div>
                                            <div
                                                className="masonry__item col-lg-4 col-md-6"
                                                data-masonry-filter="U-Festive"
                                            >
                                                <article className="feature feature-1">
                                                    <a
                                                        href="/blog3"
                                                        className="block"
                                                    >
                                                        <img
                                                            alt="Image"
                                                            src="/assets/img/blog-03.jpg"
                                                        />
                                                    </a>
                                                    <div className="feature__body boxed boxed--border">
                                                        <span className="gnb">
                                                            June 12th 2020
                                                        </span>
                                                        <h5>
                                                            Why should
                                                            U-Remember?
                                                        </h5>
                                                        <a href="/blog3">
                                                            Read More
                                                        </a>
                                                    </div>
                                                </article>
                                            </div>
                                            <div
                                                className="masonry__item col-lg-4 col-md-6"
                                                data-masonry-filter="U-Celebrate"
                                            >
                                                <article className="feature feature-1">
                                                    <a
                                                        href="/blog4"
                                                        className="block"
                                                    >
                                                        <img
                                                            alt="Image"
                                                            src="/assets/img/blog-04.jpg"
                                                        />
                                                    </a>
                                                    <div className="feature__body boxed boxed--border">
                                                        <span className="gnb">
                                                            June 19th 2020
                                                        </span>
                                                        <h5>
                                                            The Adventures of
                                                            U-Greet
                                                        </h5>
                                                        <a href="/blog4">
                                                            Read More
                                                        </a>
                                                    </div>
                                                </article>
                                            </div>
                                            <div
                                                className="masonry__item col-lg-4 col-md-6"
                                                data-masonry-filter="U-Celebrate"
                                            >
                                                <article className="feature feature-1">
                                                    <a
                                                        href="/blog5"
                                                        className="block"
                                                    >
                                                        <img
                                                            alt="Image"
                                                            src="/assets/img/blog-05.jpg"
                                                        />
                                                    </a>
                                                    <div className="feature__body boxed boxed--border">
                                                        <span className="gnb">
                                                            June 27th 2020
                                                        </span>
                                                        <h5>I miss you</h5>
                                                        <a href="/blog5">
                                                            Read More
                                                        </a>
                                                    </div>
                                                </article>
                                            </div>
                                            <div
                                                className="masonry__item col-lg-4 col-md-6"
                                                data-masonry-filter="U-Festive"
                                            >
                                                <article className="feature feature-1">
                                                    <a
                                                        href="/blog6"
                                                        className="block"
                                                    >
                                                        <img
                                                            alt="Image"
                                                            src="/assets/img/blog-06.jpg"
                                                        />
                                                    </a>
                                                    <div className="feature__body boxed boxed--border">
                                                        <span className="gnb">
                                                            Aug 22th 2020
                                                        </span>
                                                        <h5>
                                                            Truly, madly, deeply
                                                        </h5>
                                                        <a href="/blog6">
                                                            Read More
                                                        </a>
                                                    </div>
                                                </article>
                                            </div>
                                            <div
                                                className="masonry__item col-lg-4 col-md-6"
                                                data-masonry-filter="U-Festive"
                                            >
                                                <article className="feature feature-1">
                                                    <a
                                                        href="/blog7"
                                                        className="block"
                                                    >
                                                        <img
                                                            alt="Image"
                                                            src="/assets/img/blog-07.jpg"
                                                        />
                                                    </a>
                                                    <div className="feature__body boxed boxed--border">
                                                        <span className="gnb">
                                                            Oct 15th 2020
                                                        </span>
                                                        <h5>Oh Donna</h5>
                                                        <a href="/blog7">
                                                            Read More
                                                        </a>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                        {/* <div className="pagination">
                                            <a
                                                className="pagination__prev"
                                                href="#"
                                                title="Previous Page"
                                            >
                                                «
                                            </a>
                                            <ol>
                                                <li>
                                                    <a href="#">1</a>
                                                </li>
                                                <li>
                                                    <a href="#">2</a>
                                                </li>
                                                <li className="pagination__current">
                                                    3
                                                </li>
                                                <li>
                                                    <a href="#">4</a>
                                                </li>
                                            </ol>
                                            <a
                                                className="pagination__next"
                                                href="#"
                                                title="Next Page"
                                            >
                                                »
                                            </a>
                                        </div> */}
                                    </div>
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

export default Blog;
