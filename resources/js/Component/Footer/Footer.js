import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div
            className="footer bg-white py-4 d-flex flex-lg-column w-100"
            id="kt_footer"
        >
            <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
                <div className="text-dark order-2 order-md-1">
                    <span className="text-muted font-weight-bold mr-2">
                        {new Date().getFullYear()}©
                    </span>
                    <a
                        href="/"
                        target="_blank"
                        className="text-dark-75 text-hover-primary"
                    >
                        U-Greet
                    </a>
                </div>

                <div className="nav nav-dark order-1 order-md-2">
                    <a
                        href="/about"
                        target="_blank"
                        className="nav-link pr-3 pl-0"
                    >
                        About
                    </a>
                    <a
                        href="/privacypolicy"
                        target="_blank"
                        className="nav-link px-3"
                    >
                        Terms
                    </a>
                    <a
                        href="mailto:greetings@u-greet.com"
                        target="_blank"
                        className="nav-link pl-3 pr-0"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
