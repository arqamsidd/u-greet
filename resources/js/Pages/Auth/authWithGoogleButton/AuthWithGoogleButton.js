import { gapi } from "gapi-script";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/authContext";
import { useAuth } from "../../../hooks/useAuth";

import "./customStyle.css";

export var clientId =
    "919511277596-lm8fva9j0ju4gcsku93le17885hoees1.apps.googleusercontent.com";

const AuthWithGoogleButton = () => {
    const { state, dispatch } = useContext(AuthContext);
    // const { loginError } = useSelector((state) => state);
    const navigate = useNavigate();
    const dispatchLoading = useDispatch();
    const { setAsLoggedFromGoogle } = useAuth();

    const initG = () => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: "",
            });
        };
        gapi.load("client:auth2", initClient);
    };
    // useEffect(() => {
    //     const initClient = () => {
    //         gapi.client.init({
    //             clientId: clientId,
    //             scope: "",
    //         });
    //     };
    //     gapi.load("client:auth2", initClient);
    // }, []);
    // useEffect(() => {
    //     const initClient = () => {
    //         gapi.client.init({
    //             clientId: clientId,
    //             scope: "",
    //         });
    //     };
    //     gapi.load("client:auth2", initClient);
    // });
    const onSuccess = (res) => {
        setAsLoggedFromGoogle(res.profileObj);
    };
    const onFailure = (err) => {
        console.log("failed", err);
    };
    // const logOut = () => {
    //     setProfile(null);
    // };
    return (
        <div>
            <span id="customStyle">
                <GoogleLogin
                    clientId={clientId}
                    // buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={"single_host_origin"}
                    // isSignedIn={true}
                    type="button"
                    // className="bg-4 bg-4-fx bold"
                    // style={yourCustomStyle}
                >
                    {/* <a
                href="/auth/google"
                target="_blank"
            > */}

                    {/* <span
                type="button"
                className=""
                // onClick={() =>
                //     navigate("/auth/google")
                // }
            > */}
                    <button
                        // type="submit"
                        className="bg-4 bg-4-fx bold bold button-item w-auto"
                        onClick={() => initG()}
                    >
                        <img
                            src="assets/images/google.98280151.svg"
                            alt="button"
                        />
                        <span className="image-space"></span>
                        Sign in with Google
                    </button>
                    {/* </span> */}
                    {/* </a> */}
                </GoogleLogin>
            </span>
        </div>
    );
};

export default AuthWithGoogleButton;
