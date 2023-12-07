import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import AuthContext, { authReducer } from "../../context/authContext";
import { Layout } from "../Main/Layout";
import AppRoutes from "../../Routes/routes";
// import Navbar from "../Navbar";

// CSS import
// import "../../../../assets/plugins/custom/fullcalendar/fullcalendar.bundle-v=7.2.7.css";
// import "../../../../assets/plugins/global/plugins.bundle-v=7.2.7.css";
// import "../../../../assets/plugins/custom/prismjs/prismjs.bundle-v=7.2.7.css";
import "../../../../public/assets/css/style.bundle-v=7.2.7.css";
import "../../../../public/assets/css/main.4afb4b3e.chunk.css";
import "../../../../public/assets/css/2.d11a5725.chunk.css";

// import "../../../../assets/css/bootstrap.css";
// import "../../../../assets/css/bootstrap.min.css";
// import "../../../../assets/css/stack-interface.css";
// import "../../../../assets/css/socicon.css";
// import "../../../../assets/css/lightbox.min.css";
// import "../../../../assets/css/flickity.css";
// import "../../../../assets/css/iconsmind.css";
// import "../../../../assets/css/jquery.steps.css";
// import "../../../../assets/css/theme.css";
// import "../../../../assets/css/custom.css";
// import "../../../../assets/css/font-roboto.css";
// import "./../../assets/Front/plugins/custom/fullcalendar/fullcalendar.bundle-v=7.2.7.css";
// // import "./../../assets/Front/plugins/global/plugins.bundle-v=7.2.7.css";
// import "./../../assets/Front/plugins/global/plugins_bundle.css";
// import "./../../assets/Front/plugins/custom/prismjs/prismjs.bundle-v=7.2.7.css";
// // import "./../../assets/Front/css/style.bundle-v=7.2.7.css";
// import "./../../assets/Front/css/style_bundle.css";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../../State/reducers/rootReducer";
import { Provider } from "react-redux";
import { Cookies } from "react-cookie";
import { useReducer } from "react";
import { rootSaga } from "../../State/Saga/rootSaga";
import { ToastContainer } from "react-toastify";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
const action = (type) => store.dispatch({ type });

function RootApp() {
    const cookie = new Cookies();
    const user = cookie?.get("is_auth_user");
    const isLoggedIn = user ? true : false;
    let initialState = { user, isLoggedIn };
    const [state, dispatch] = useReducer(authReducer, initialState);

    // useEffect(() => loginUserOnStartupCheck(), []);
    // console.log = console.warn = console.error = () => {};

    return (
        <Provider store={store}>
            <AuthContext.Provider value={{ state, dispatch }}>
                <Layout>
                    {/*<Navbar />*/}
                    <AppRoutes />
                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </Layout>
            </AuthContext.Provider>
        </Provider>
    );
}

export default RootApp;

if (document.getElementById("app")) {
    ReactDOM.render(
        <BrowserRouter>
            <RootApp />
        </BrowserRouter>,
        document.getElementById("app")
    );
}
