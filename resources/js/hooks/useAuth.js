import axios from "axios";
import React, { useContext } from "react";
import { Cookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import AuthContext, { ActionType } from "../context/authContext";
import actionTypes from "../State/actions/actionTypes";

export const useAuth = () => {
    let navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);
    const dispatchLoading = useDispatch();

    function getAuthCookieExpiration() {
        let date = new Date();
        date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days
        return date;
    }

    const setAsLogged = async (payload) => {
       const cookie = new Cookies();
        dispatchLoading({
            type: actionTypes.LOADING,
            payload: {
                isLoading: true,
            },
        });
        await axios
            .post("/api/signin", payload, {
                headers: {
                    Accept: "application/json",
                },
            })
            .then((response) => {
                if (response.status) {
                    dispatch({
                        type: ActionType.LOGIN,
                        payload: {
                            user: response.data.user,
                            isLoggedIn: true,
                        },
                    });
                    cookie.set("is_auth", true, {
                        path: "/",
                        expires: getAuthCookieExpiration(),
                        sameSite: "lax",
                        httpOnly: false,
                    });
                    cookie.set(
                        "is_auth_user",
                        JSON.stringify(response.data.user),
                        {
                            path: "/",
                            expires: getAuthCookieExpiration(),
                            sameSite: "lax",
                            httpOnly: false,
                        }
                    );
                

                    navigate("/dashboard");
                    // toast.success("SignIn successful!", {
                    //     position: "bottom-right",
                    //     autoClose: 5000,
                    //     hideProgressBar: false,
                    //     closeOnClick: true,
                    //     pauseOnHover: true,
                    //     draggable: true,
                    //     progress: undefined,
                    //     theme: "colored",
                    // });
                    // setAsLogged(response?.user);
                } else {
                    // alert("wrong credentials");
                    toast.error("wrong credentials", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    dispatchLoading({
                        type: actionTypes.LOADING,
                        payload: {
                            isLoading: false,
                        },
                    });
                }
            })
            .catch((error) => {
               
                toast.error("wrong credentials", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                // alert("hi", error.message);
                dispatch({
                    type: ActionType.LOGINERROR,
                });
                // if (error?.response) {
                //     if (error?.response?.data.message) {
                //         setMessage(error?.response?.data.message);
                //     }
                //     if (error?.response?.data.errors) {
                //         setErrors(error?.response?.data.errors);
                //     }
                // }
            });
        dispatchLoading({
            type: actionTypes.LOADING,
            payload: {
                isLoading: false,
            },
        });
    };

    const setSignout = async () => {
        
        const cookie = new Cookies();
        dispatchLoading({
            type: actionTypes.LOADING,
            payload: {
                isLoading: true,
            },
        });
        await axios
            .post("/api/signout")
            .then((response) => {
                if (response?.status) {
                    dispatch({
                        type: ActionType.LOGOUT,
                    });
                    cookie.remove("is_auth", {
                        path: "/",
                        expires: getAuthCookieExpiration(),
                        sameSite: "lax",
                        httpOnly: false,
                    });
                    cookie.remove("is_auth_user", {
                        path: "/",
                        expires: getAuthCookieExpiration(),
                        sameSite: "lax",
                        httpOnly: false,
                    });
                    navigate("/");
                    toast.success("SignOut successful!", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                } else {
                    toast.error("Something Wrong!!", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
            })
            .catch((err) => {
                // console.log(err);
                toast.error("Something Wrong!!", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                // dispatch({
                //     type: ActionType.LOGOUT,
                // });
                // cookie.remove("is_auth", {
                //     path: "/",
                //     expires: getAuthCookieExpiration(),
                //     sameSite: "lax",
                //     httpOnly: false,
                // });
                // cookie.remove("is_auth_user", {
                //     path: "/",
                //     expires: getAuthCookieExpiration(),
                //     sameSite: "lax",
                //     httpOnly: false,
                // });
                // navigate("/");
            });
        dispatchLoading({
            type: actionTypes.LOADING,
            payload: {
                isLoading: false,
            },
        });
    };

    function loginUserOnStartupCheck() {
        const cookie = new Cookies();
      
        dispatchLoading({
            type: actionTypes.LOADING,
            payload: {
                isLoading: true,
            },
        });
        if (cookie.get("is_auth")) {
            axios
                .post("/api/me")
                .then((response) => {
                    if (response) {
                        dispatch({
                            type: ActionType.LOGIN,
                            payload: {
                                user: response?.data.user,
                                isLoggedIn: true,
                            },
                        });
                    } else {
                        dispatch({
                            type: ActionType.LOGOUT,
                        });
                        cookie.remove("is_auth", {
                            path: "/",
                            expires: getAuthCookieExpiration(),
                            sameSite: "lax",
                            httpOnly: false,
                        });
                        cookie.remove("is_auth_user", {
                            path: "/",
                            expires: getAuthCookieExpiration(),
                            sameSite: "lax",
                            httpOnly: false,
                        });
                        navigate("/");
                    }
                })
                .catch((error) => {
                    // console.info("Here in catch ");
                    // dispatch({
                    //     type: ActionType.LOGIN,
                    //     payload: {
                    //         user: response?.user,
                    //         isLoggedIn: true,
                    //     },
                    // });
                    dispatch({
                        type: ActionType.LOGOUT,
                    });
                    cookie.remove("is_auth", {
                        path: "/",
                        expires: getAuthCookieExpiration(),
                        sameSite: "lax",
                        httpOnly: false,
                    });
                    cookie.remove("is_auth_user", {
                        path: "/",
                        expires: getAuthCookieExpiration(),
                        sameSite: "lax",
                        httpOnly: false,
                    });
                    navigate("/");
                    // setSignout();
                    // setLogout();
                });
        } else {
           
            dispatch({
                type: ActionType.LOGOUT,
            });
            // navigate('/');
        }
        dispatchLoading({
            type: actionTypes.LOADING,
            payload: {
                isLoading: false,
            },
        });
    }

    const setAsLoggedFromGoogle = async (payload) => {
        // console.log("setas logged payload", payload);
        const cookie = new Cookies();
        dispatchLoading({
            type: actionTypes.LOADING,
            payload: {
                isLoading: true,
            },
        });
        await axios
            .post("/api/callback", {
                email: payload.email,
                name: payload.name,
                first_name: payload.givenName,
                last_name: payload.familyName,
                user_image_link: payload.imageUrl,
                google_id: payload.googleId,
            })
            .then((response) => {
                if (response.status) {
                   
                    dispatch({
                        type: ActionType.LOGIN,
                        payload: {
                            user: response.data.user,
                            isLoggedIn: true,
                        },
                    });
                    cookie.set("is_auth", true, {
                        path: "/",
                        expires: getAuthCookieExpiration(),
                        sameSite: "lax",
                        httpOnly: false,
                    });
                    cookie.set(
                        "is_auth_user",
                        JSON.stringify(response.data.user),
                        {
                            path: "/",
                            expires: getAuthCookieExpiration(),
                            sameSite: "lax",
                            httpOnly: false,
                        }
                    );
                    

                    navigate("/dashboard");
                    // toast.success("SignIn successful!", {
                    //     position: "bottom-right",
                    //     autoClose: 5000,
                    //     hideProgressBar: false,
                    //     closeOnClick: true,
                    //     pauseOnHover: true,
                    //     draggable: true,
                    //     progress: undefined,
                    //     theme: "colored",
                    // });
                    // setAsLogged(response?.user);
                } else {
                    // alert("wrong credentials");
                    toast.error("Something Wrong!!", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
                // dispatchLoading({
                //     type: actionTypes.LOADING,
                //     payload: {
                //         isLoading: false,
                //     },
                // });
            })
            .catch((error) => {
                // alert("hi", error.message);
                toast.error("Something Wrong!!", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                dispatch({
                    type: ActionType.LOGINERROR,
                });
                // if (error?.response) {
                //     if (error?.response?.data.message) {
                //         setMessage(error?.response?.data.message);
                //     }
                //     if (error?.response?.data.errors) {
                //         setErrors(error?.response?.data.errors);
                //     }
                // }
            });
        dispatchLoading({
            type: actionTypes.LOADING,
            payload: {
                isLoading: false,
            },
        });
    };
    const setAsLoggedFromFacebook = async (payload) => {
        // console.log("setas logged payload", payload);
        const cookie = new Cookies();
        dispatchLoading({
            type: actionTypes.LOADING,
            payload: {
                isLoading: true,
            },
        });
        await axios
            .post("/api/facebookcallback", {
                email: payload.email,
                name: payload.name,
                // first_name: payload.givenName,
                // last_name: payload.familyName,
                user_image_link: payload.picture.data.url,
                facebook_id: payload.id,
            })
            .then((response) => {
                if (response.status) {
                    dispatch({
                        type: ActionType.LOGIN,
                        payload: {
                            user: response.data.user,
                            isLoggedIn: true,
                        },
                    });
                    cookie.set("is_auth", true, {
                        path: "/",
                        expires: getAuthCookieExpiration(),
                        sameSite: "lax",
                        httpOnly: false,
                    });
                    cookie.set(
                        "is_auth_user",
                        JSON.stringify(response.data.user),
                        {
                            path: "/",
                            expires: getAuthCookieExpiration(),
                            sameSite: "lax",
                            httpOnly: false,
                        }
                    );
                    // console.log(
                    //     "useAuth SetAsLogged HELLO",
                    //     response.data.user
                    // );
                    // console.info("UserAuth: Here SetLogged Called");

                    navigate("/dashboard");
                    // toast.success("SignIn successful!", {
                    //     position: "bottom-right",
                    //     autoClose: 5000,
                    //     hideProgressBar: false,
                    //     closeOnClick: true,
                    //     pauseOnHover: true,
                    //     draggable: true,
                    //     progress: undefined,
                    //     theme: "colored",
                    // });

                    // setAsLogged(response?.user);
                } else {
                    // alert("wrong credentials");
                    toast.error("Something Wrong!!", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    // dispatchLoading({
                    //     type: actionTypes.LOADING,
                    //     payload: {
                    //         isLoading: false,
                    //     },
                    // });
                }
            })
            .catch((error) => {
               // alert("hi", error.message);
                toast.error("Something Wrong!!", {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                dispatch({
                    type: ActionType.LOGINERROR,
                });
                // if (error?.response) {
                //     if (error?.response?.data.message) {
                //         setMessage(error?.response?.data.message);
                //     }
                //     if (error?.response?.data.errors) {
                //         setErrors(error?.response?.data.errors);
                //     }
                // }
            });
        dispatchLoading({
            type: actionTypes.LOADING,
            payload: {
                isLoading: false,
            },
        });
    };

    return {
        setAsLogged,
        setSignout,
        loginUserOnStartupCheck,
        setAsLoggedFromGoogle,
        setAsLoggedFromFacebook,
    };
};
