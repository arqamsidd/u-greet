import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Protected = ({ isLoggedIn, children }) => {
    const element = document.getElementById("ugreetAppHtml");
    if (element?.classList?.contains("u-great-css")) {
        element?.classList?.remove("u-great-css"),
            element?.classList?.add("video-crt-pages");
    }
    if (element?.classList?.contains("video-crt-pages")) {
    } else {
        element?.classList?.add("video-crt-pages");
    }

    if (element?.classList?.contains("f-style-bundle")) {
        element?.classList?.remove("f-style-bundle");
    }

    const { loginUserOnStartupCheck } = useAuth();
    useEffect(() => {
        loginUserOnStartupCheck();
    }, []);

    if (!isLoggedIn) {
        return <Navigate to="/signin" replace />;
    }
    return children;
};
export default Protected;
