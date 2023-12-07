import React from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    user: null,
    loginError: false,
    onLogin: () => {},
    onLogout: () => {},
});

export const ActionType = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    LOGINERROR: "LOGINERROR",
    SETUSER: "SETUSER",
};

export const authReducer = (state, action) => {
    switch (action.type) {
        case ActionType.LOGIN:
            return {
                user: action.payload.user,
                isLoggedIn: action.payload.isLoggedIn,
            };
        case ActionType.LOGOUT:
            return {
                user: null,
                isLoggedIn: false,
            };
        case ActionType.LOGINERROR:
            return {
                loginError: true,
                isLoggedIn: false,
            };
        case ActionType.SETUSER:
            return {
                user: action.payload.user,
            };

        default:
            return state;
    }
};

export default AuthContext;
