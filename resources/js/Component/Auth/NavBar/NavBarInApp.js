import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../../public/assets/img/logo-dark.png";

const NavBarInApp = () => {
    return (
        <div>
            <div className="navigation bg-white">
                <div className="inner inner-occasion">
                    <div className="left">
                        <Link className="link2" to="/dashboard">
                            <img src={logo} alt="logo" className="logo" />
                        </Link>
                    </div>
                    <Link
                        to="/dashboard"
                        className="right color-5 font-12 link"
                    >
                        Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBarInApp;
