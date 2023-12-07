import React from "react";

const ScrollToTopArrow = () => {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    return (
        <a
            className="back-to-top inner-link"
            href="#start"
            data-scroll-class="100vh:active"
            onClick={scrollTop}
        >
            <i className="stack-interface stack-up-open-big"></i>
        </a>
    );
};

export default ScrollToTopArrow;
