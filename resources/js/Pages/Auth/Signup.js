import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "../../hooks/useForm";
// import AuthStyle from "../../assets/css/module/Auth.module.css";
import BackgroundImage from "../../Component/Auth/BackgroundImage";
import AuthWithGoogleButton from "./authWithGoogleButton/AuthWithGoogleButton";


const Signup = (props) => {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [agreementChecked, setAgreementChecked] = useState(false); // New state for checkbox
    const [showCheckboxError, setShowCheckboxError] = useState(false); // New state for checkbox error



    const { setErrors, renderFieldError, navigate } = useForm();

   
    const handleCheckboxChange = (e) => {
        const isChecked = e.target.checked;
        setAgreementChecked(isChecked);
    
        // If the checkbox is checked, reset the error message display
        if (isChecked) {
            setShowCheckboxError(false);
        }
    };


    useEffect(() => {
        document.title = "Sign Up | ❣️ U-Greet";
    }, []);

    const makeRequest = (e) => {
        e.preventDefault();

        if (!agreementChecked) {
            setShowCheckboxError(true); // Show error if checkbox is not checked
            return; // Stop the form submission
        }
        setShowCheckboxError(false); 

        setErrors(null);
        console.info("Here Come");

        axios
            .post("/api/signup", {
                first_name,
                last_name,
                name,
                email,
                password,
                password_confirmation: passwordConfirmation,
            })
            .then((response) => {
                console.log(response.data.user);

                if (response.data.user) {
                    navigate("/signin");
                }
            })
            .catch((error) => {
                console.log(error);

                if (error.response) {
                    if (error.response.data.errors) {
                        setErrors(error.response.data.errors);
                    }
                }
            });
    };

    return (
        <div className="pt-0">
            <div className="Toastify"></div>
            <div className="authentication">
                <div className="right mobile">
                    <div className="text font-50 color-white bold">
                        Share heartfelt messages with your loved ones
                    </div>
                    <img
                        src="assets/images/authentication.a3a12619.svg"
                        alt="background"
                    />
                </div>
                <div className="left">
                    <div className="container">
                        <div className="content">
                            <div className="head">
                                <div className="font-26 bold head">
                                    Create Account
                                </div>
                                <div className="font-18 color-2 bold">
                                    Already have an account?
                                    <Link className="link" to="/signin">
                                        {" "}Sign In
                                    </Link>
                                </div>
                            </div>

                            <form
                                method="POST"
                                action="#"
                                onSubmit={makeRequest}
                            >
                                {/* First Name Input Field */}
                                <div className="item">
                                    <div className="text-input full-input">
                                        <div className="label bold">
                                            <div>Your First Name</div>
                                            <a className="link" href="">
                                                <div></div>
                                            </a>
                                        </div>
                                        <input
                                            type="text"
                                            name="first_name"
                                            id="first_name"
                                            required
                                            className="bg-2 bg-2-fx"
                                            autoComplete="first_name"
                                            autoFocus
                                            value={first_name}
                                            onChange={(e) =>
                                                setFirstName(e.target.value)
                                            }
                                            placeholder="First Name"
                                            tabIndex="1"
                                        />
                                        <div style={{ color: "red" }}></div>
                                        {renderFieldError("first_name")}
                                    </div>
                                </div>

                                {/* Last Name Input Field */}
                                <div className="item">
                                    <div className="text-input full-input">
                                        <div className="label bold">
                                            <div>Your Last Name</div>
                                            <a className="link" href="">
                                                <div></div>
                                            </a>
                                        </div>
                                        <input
                                            type="text"
                                            name="last_name"
                                            id="last_name"
                                            required
                                            className="bg-2 bg-2-fx"
                                            autoComplete="last_name"
                                            value={last_name}
                                            onChange={(e) =>
                                                setLastName(e.target.value)
                                            }
                                            placeholder="Last Name"
                                            tabIndex="2"
                                        />
                                        <div style={{ color: "red" }}></div>
                                        {renderFieldError("last_name")}
                                    </div>
                                </div>

                                {/* Email Input Field */}
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
                                            value={email}
                                            placeholder="Email"
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            tabIndex="3"
                                        />
                                        <div style={{ color: "red" }}></div>
                                        {renderFieldError("email")}
                                    </div>
                                </div>

                                {/* Password Input Field */}
                                <div className="item">
                                    <div className="text-input full-input">
                                        <div className="label bold">
                                            <div>Your Password</div>
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
                                                setPassword(e.target.value)
                                            }
                                            placeholder="Password"
                                            tabIndex="4"
                                        />
                                        <div></div>
                                        {renderFieldError("password")}
                                    </div>
                                </div>

                                {/* Confirm Password Input Field */}
                                <div className="item">
                                    <div className="text-input full-input">
                                        <div className="label bold">
                                            <div>Confirm Password</div>
                                        </div>
                                        <input
                                            type="password"
                                            name="password_confirmation"
                                            id="password_confirmation"
                                            required
                                            className="bg-2 bg-2-fx"
                                            autoComplete="current-password"
                                            value={passwordConfirmation}
                                            onChange={(e) =>
                                                setPasswordConfirmation(
                                                    e.target.value
                                                )
                                            }
                                            placeholder="Confirm Password"
                                            tabIndex="5"
                                        />
                                        <div></div>
                                        {renderFieldError(
                                            "password_confirmation"
                                        )}
                                    </div>
                                </div>

                                {/* Agreement Checkbox */}
                                <div className="item">
                                    <div className="text-input full-input">
                                        <input id="agreement-checkbox" name="agreement-checkbox" type="checkbox" required="" style={{
                                            display: 'inline-block',
                                            width: 'unset',
                                            marginRight: '10px'
                                        }}
                                            onChange={handleCheckboxChange}
                                        ></input>
                                        <label for="agreement-checkbox" >I have read and accept the <a target="_blank" href="https://app.u-greet.com/PrivacyPolicy">Privacy Policy</a>.</label>

                                        {showCheckboxError && (
                                            <span class="invalid-feedback" role="alert"><strong>Please agree to the Privacy Policy to sign up.</strong></span>
                                            )}
                                    </div>
                                </div>
                               


                                {/* Signup Button */}
                                <div className="item">
                                    <button
                                        type="submit"
                                        className="bg-3 bold disableOnSubmit button-item w-auto"
                                       
                                    >
                                        {/* <Link to="/dashboard"> */}
                                        Sign Up
                                        {/* </Link> */}
                                    </button>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
                {BackgroundImage}
            </div>
        </div>
    );
};

export { Signup };
