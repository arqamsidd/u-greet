const StyledRoute = ({ children }) => {
    const element = document.getElementById("ugreetAppHtml");
    if (element?.classList?.contains("u-great-css")) {
    }
    if (element?.classList?.contains("video-crt-pages")) {
        element?.classList?.remove("video-crt-pages"),
            element?.classList?.add("u-great-css");
    } else {
        element?.classList?.add("u-great-css");
    }

    return children;
};
export default StyledRoute;
