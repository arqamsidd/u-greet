import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import authContext, { ActionType } from "../../context/authContext";
import { useForm } from "../../hooks/useForm";
// import SignInStyle from "../../assets/css/module/Auth.module.css";
import BackgroundImage from "../../Component/Auth/BackgroundImage";
import { useDispatch } from "react-redux";
import actionTypes from "../../State/actions/actionTypes";
import AuthWithGoogleButton from "./authWithGoogleButton/AuthWithGoogleButton";
import AuthWithFbButton from "./authWithFbButton/AuthWithFbButton";
import axios from "axios";

export const Signin = (props) => {
    const { state } = useContext(authContext);
    const dispatchLoading = useDispatch();
    const { setAsLogged } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    useEffect(() => {
        document.title = "Sign In | ❣️ U-Greet";

        console.info("Auth Data:- ", state);
        if (!state.isLoggedIN) {
            console.info("Auth Data SignedIn");
            // navigate('/');
        } else {
            console.info("SignIn Page Not Auth else Part...");
            // navigate('/');
        }
    }, []);

    const { setErrors, renderFieldError, message, setMessage } = useForm();

    const makeRequest = (e) => {
        dispatchLoading({
            type: actionTypes.LOADING,
            payload: {
                isLoading: true,
            },
        });
        console.info("Here come in make Request...");
        e.preventDefault();
        setErrors(null);
        setMessage("");
        // make request first to sanctum/csrf-cookie
        axios.get("/sanctum/csrf-cookie").then(() => {
            const payload = {
                email,
                password,
            };
            if (remember) {
                payload.remember = true;
            }
            setAsLogged(payload);
        });
    };

    return (
        <div>
            <noscript>You need to enable JavaScript to run this app.</noscript>

            <div id="root">
                <div>
                    <div className="Toastify"></div>
                    <div className="authentication">
                        <div className="left">
                            <div className="container">
                                <div className="content">
                                    <div className="head">
                                        <div className="font-26 bold head">
                                            Sign In
                                        </div>
                                        {/*<div className={`${SignInStyle.font-26} ${bold} ${head}`}>Sign In</div>*/}
                                        <div className="font-18 color-2 bold">
                                            New Here?
                                            <Link className="link" to="/signup">
                                                {" "}Create Account
                                            </Link>
                                        </div>
                                    </div>
                                    {/* {state?.loginError ? (
                                        <>
                                            <div className="alert alert-danger alert-dismissible d-flex align-items-center fade show">
                                                <i className="bi-exclamation-octagon-fill" />
                                                <strong className="mx-2">
                                                    Error!
                                                </strong>{" "}
                                                Login fail !!
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="alert"
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <></>
                                    )} */}

                                    <form
                                        method="POST"
                                        action="#"
                                        onSubmit={makeRequest}
                                    >
                                        <div className="item">
                                            <div className="text-input full-input">
                                                <div className="label bold">
                                                    <div>Your Email</div>
                                                    <a className="link" href="">
                                                        <div></div>
                                                    </a>
                                                </div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    required
                                                    className="bg-2 bg-2-fx"
                                                    autoComplete="email"
                                                    autoFocus
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                />
                                                <div
                                                    style={{ color: "red" }}
                                                ></div>
                                                {renderFieldError("email")}
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="text-input full-input">
                                                <div className="label bold">
                                                    <div>Your Password</div>
                                                    <Link
                                                        className="link"
                                                        to="/forgotPassword"
                                                    >
                                                        <div>
                                                            Forgot Password?
                                                        </div>
                                                    </Link>
                                                </div>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    required
                                                    className="bg-2 bg-2-fx"
                                                    autoComplete="current-password"
                                                    value={password}
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <div></div>
                                                {renderFieldError("password")}
                                            </div>
                                        </div>

                                        <div className="item">
                                            <button
                                                type="submit"
                                                className="bg-3 bold button-item w-auto"
                                            >
                                                <div>Sign In</div>
                                            </button>
                                           
                                        </div>
                                       
                                    </form>
                                </div>
                            </div>
                        </div>
                        {BackgroundImage}
                    </div>
                </div>
            </div>
        </div>
    );
};
