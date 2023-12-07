import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import AuthContext from "../../context/authContext";
import actionTypes from "../../State/actions/actionTypes";

const ChangePass = () => {
    const element = document.getElementById("ugreetAppHtml");
    if (element?.classList?.contains("f-style-bundle")) {
    } else {
        element?.classList?.add("f-style-bundle");
    }

    const navigate = useNavigate();
    const { state } = useContext(AuthContext);
    const { currentUser } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [currentPass, setCurrentPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [newPassConf, setNewPassConf] = useState("");

    const saveChanges = () => {
        dispatch({
            type: actionTypes.CHANGE_PASSWORD,
            payload: {
                current_password: currentPass,
                new_password: newPass,
                new_password_confirmation: newPassConf,
            },
        });
        // setCurrentPass("");
        // setNewPass("");
        // setNewPassConf("");
    };

    return (
        <div className=" style-bundle-fsize style-bundle-poppin page-impstyle-bundle stypage-plr-out">
            <div className="Toastify" />
            <div className="navigation bg-white">
                <div className="inner inner-occasion inner-action">
                    <div
                        onClick={() => {
                            navigate(-1);
                        }}
                        className="left link"
                    >
                        <img
                            src="assets/images/arrow-right.418d2ebe.svg"
                            alt="arrow"
                            className="arrow"
                        />
                        Back
                    </div>
                </div>
            </div>
            <div className="page dashboard">
                <div className="account">
                    <div>
                        <div className="card account-left">
                            <div className="symbol symbol-60 symbol-circle symbol-xl-90">
                                <div
                                    className="image"
                                    style={{
                                        backgroundImage: `url(${state?.user.profile_image_link})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center center",
                                    }}
                                >
                                    <div className="active bg-10" />
                                </div>
                                {/* <i className="symbol-badge symbol-badge-bottom bg-success" /> */}
                            </div>
                            <div className="font-18">
                                {currentUser?.first_name ||
                                    state?.user?.first_name}{" "}
                                {currentUser?.last_name ||
                                    state?.user?.last_name}
                            </div>
                            <span className="color-3 status">Active</span>
                            <div className="nav">
                                <Link className="link" to="/userProfile">
                                    <div className="item">Personal Info</div>
                                </Link>
                                <a className="link">
                                    <div className="item bg-4">
                                        Changed Password
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <form className="card-2 account-right">
                        <div className="head">
                            <div>
                                <div className="font-17 bold">
                                    Change Password
                                </div>
                                <div className="color-2">
                                    Change your account password
                                </div>
                            </div>
                            {/* <div>
                                <button
                                    // onClick="javascript:location.href='dash.html'"
                                    type="submit"
                                    className="bg-10 color-white"
                                >
                                    <div>Save Changes</div>
                                </button>
                                <button
                                    // onClick="javascript:location.href='dash.html'"
                                    type="button"
                                    className="bg-12"
                                >
                                    <div>Cancel</div>
                                </button>
                            </div> */}
                            <div className="card-toolbar">
                                <button
                                    type="reset"
                                    onClick={() => saveChanges()}
                                    className="btn btn-success mr-2"
                                >
                                    Save Changes
                                </button>
                                <button
                                    type="reset"
                                    onClick={() => {
                                        navigate("/dashboard");
                                        setCurrentPass("");
                                        setNewPass("");
                                        setNewPassConf("");
                                    }}
                                    className="btn btn-secondary"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                        <div className="form">
                            <div className="message bg-4">
                                <img
                                    src="assets/images/warning.064153df.svg"
                                    alt="warning"
                                    className="mb-0"
                                />
                                <div>
                                    Please do not share your password with
                                    anyone. U-Greets can be shared using
                                    multiple methods.
                                </div>
                                <span className="close font-20">×</span>
                            </div>
                            <div className="input item">
                                <div className="input-label">
                                    Current Password
                                </div>
                                <div>
                                    <div className="text-input full-input">
                                        {/* <div className="label undefined">
                                            <div />
                                            <a className="link" href>
                                                <div />
                                            </a>
                                        </div> */}
                                        <input
                                            type="password"
                                            placeholder="Current Password"
                                            name="password"
                                            value={currentPass}
                                            onChange={(e) =>
                                                setCurrentPass(e.target.value)
                                            }
                                            required
                                            className="bg-2 bg-2-fx txt-input2"
                                        />
                                        <div style={{ color: "red" }} />
                                    </div>
                                    <a className="link" href="/forgotPassword">
                                        <div>Forgot Password?</div>
                                    </a>
                                </div>
                            </div>
                            <div className="input item">
                                <div className="input-label">New Password</div>
                                <div>
                                    <div className="text-input full-input">
                                        {/* <div className="label undefined">
                                            <div />
                                            <a className="link" href>
                                                <div />
                                            </a>
                                        </div> */}
                                        <input
                                            type="password"
                                            placeholder="New Password"
                                            name="passwordNew"
                                            value={newPass}
                                            onChange={(e) =>
                                                setNewPass(e.target.value)
                                            }
                                            required
                                            className="bg-2 bg-2-fx txt-input2"
                                        />
                                        <div style={{ color: "red" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="input item">
                                <div className="input-label">
                                    Verify Password
                                </div>
                                <div>
                                    <div className="text-input full-input">
                                        {/* <div className="label undefined">
                                            <div />
                                            <a className="link" href>
                                                <div />
                                            </a>
                                        </div> */}
                                        <input
                                            type="password"
                                            placeholder="Verify Password"
                                            name="passwordVerify"
                                            value={newPassConf}
                                            onChange={(e) =>
                                                setNewPassConf(e.target.value)
                                            }
                                            required
                                            className="bg-2 bg-2-fx txt-input2"
                                        />
                                        <div />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ChangePass;
