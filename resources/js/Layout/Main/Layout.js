import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

export const Layout = ({ children }) => {
    // const { loginUserOnStartup } = useAuth();
    useEffect(() => {
       // loginUserOnStartup();
    }, []);
    return (
        <div id="iamlayout">
            {/*<Navbar />*/}
            {<div className="">{children}</div>}
        </div>
    );
};
