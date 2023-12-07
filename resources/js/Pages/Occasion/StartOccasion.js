import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import start1 from "../../../../public/images/start-1.9d8ce0cf.png";
import NavBarInApp from "../../Component/Auth/NavBar/NavBarInApp";
import actionTypes from "../../State/actions/actionTypes";

const StartOccasion = () => {
    const dispatch = useDispatch();
    let clearOldData = () => {
        dispatch({ type: actionTypes.ADD_OCCASION_TYPE, payload: "" });
        dispatch({ type: actionTypes.ADD_PERSON_NAME, payload: "" });
        dispatch({
            type: actionTypes.ADD_OCCASION_DATES,
            payload: { occasionLastDate: "", occasionDate: "" },
        });
    };
    return (
        <>
            <div>
                <div>
                    <div className="Toastify"></div>
                    <NavBarInApp />
                    {/* <div className="navigation bg-white">
                        <div className="inner inner-occasion">
                            <div className="left">
                                <a className="link2" href="dash.html">
                                    <img
                                        src={start1}
                                        alt="logo"
                                        className="logo"
                                    />
                                </a>
                            </div>
                            <div className="right color-5 font-12 link">
                                <a href="dash.html">Dashboard</a>
                            </div>
                        </div>
                    </div> */}
                    <div className="home bg-9">
                        <div className="inner">
                            <img
                                src={start1}
                                className="home-image"
                                alt="ugreet"
                            />
                            <div className="font-40 bold">
                                Let's get started!
                            </div>
                            <div className="font-20">
                                Start by answering a few questions.
                            </div>
                            <Link
                                to="/occasionCreate"
                                className="button-container bg-white"
                            >
                                <button
                                    onClick={() => clearOldData()}
                                    className="bg-10 bold color-white"
                                >
                                    Start a New U-Greet
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StartOccasion;
