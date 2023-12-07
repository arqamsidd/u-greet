import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import authContext from "../context/authContext";

// import AuthContext from "../../context/authContext";

export const Home = () => {
    const { state } = useContext(authContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!state.isLoggedIn) {
            navigate("/login");
        }
    }, []);

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header">Laravel React Auth</div>

                    <div className="card-body">
                        {state.isLoggedIn && state.user && (
                            <>
                                <p>Signed in</p>
                                <div>Hi {state.user.name}</div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
