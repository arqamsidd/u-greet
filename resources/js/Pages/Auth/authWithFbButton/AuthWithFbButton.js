import React from "react";
import FacebookLogin from "react-facebook-login";
import { useAuth } from "../../../hooks/useAuth";

const AuthWithFbButton = () => {
    const { setAsLoggedFromFacebook } = useAuth();
    const responseFacebook = (response) => {
        console.log("responseFacebook", response);
        setAsLoggedFromFacebook(response);
    };
    return (
        <FacebookLogin
            appId="792517981848575"
            // autoLoad={true}
            fields="name,email,picture"
            // scope="public_profile,user_friends,user_actions.books"
            callback={responseFacebook}
            cssClass="bg-4 bg-4-fx bold"
            icon="fa-facebook pr-3"
        />
    );
};

export default AuthWithFbButton;
