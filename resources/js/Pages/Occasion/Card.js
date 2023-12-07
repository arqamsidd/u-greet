import React from "react";

function Card({ handleTypeSelect, name, url, selected }) {
    return (
        <div
            className={["card", selected === name ? "active" : ""].join(" ")}
            onClick={handleTypeSelect}
        >
            {name == "Sweet Greet" ? (
                <span
                    style={{
                        // width: "30%",
                        marginTop: "-12px",
                        // left: "calc(100% - 4.5rem)",
                        position: "absolute",
                        right: "0.5rem",
                    }}
                    className="label label-light-danger label-inline font-weight-bold"
                >
                    Free (3 Mins only)
                </span>
            ) : (
                <></>
            )}
            <div
                className="image"
                style={{
                    backgroundImage: `url(${url})`,
                    backgroundSize: 50,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                }}
            />
            <div className="text">{name}</div>
        </div>
    );
}

export default Card;
