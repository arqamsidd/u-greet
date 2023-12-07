const StyledRoute2 = ({ children }) => {
    const element = document.getElementById("ugreetAppHtml");
    if (element?.classList?.contains("u-great-css")) {
        element?.classList?.remove("u-great-css"),
            element?.classList?.add("video-crt-pages");
    }
    if (element?.classList?.contains("video-crt-pages")) {
    } else {
        element?.classList?.add("video-crt-pages");
    }

    return children;
};
export default StyledRoute2;
