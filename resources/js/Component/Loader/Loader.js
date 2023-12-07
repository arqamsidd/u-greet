import React from "react";
import "./loader.css";

const Loader = () => {
    return (
        <div className="loaderbg">
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default Loader;
