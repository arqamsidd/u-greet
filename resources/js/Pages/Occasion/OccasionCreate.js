import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBarInApp from "../../Component/Auth/NavBar/NavBarInApp";
import sweetGreets from "../../../../public/assets/img/icons/sweet-greets.png";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { useState } from "react";
import { useEffect } from "react";
import actionTypes from "../../State/actions/actionTypes";
// import { Alert } from "bootstrap";
import { toast } from "react-toastify";

const OccasionCreate = () => {
    const dispatch = useDispatch();
    const { occasionType } = useSelector((state) => state);
    const navigate = useNavigate();
    const [selected, setSelected] = useState("");
    useEffect(() => {
        if (occasionType) {
            setSelected(occasionType);
        }
    }, [occasionType]);

    let submitOccasionType = () => {
        if (selected) {
            dispatch({
                type: actionTypes.ADD_OCCASION_TYPE,
                payload: selected,
            });
            navigate("/occasionPersons");
        }
        if (!selected) {
            // alert("please select Type of the Occasion");
            toast.error("please select Type of the Occasion", {
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
    };
    let occasionCanceled = () => {
        dispatch({ type: actionTypes.ADD_OCCASION_TYPE, payload: "" });
        dispatch({ type: actionTypes.ADD_PERSON_NAME, payload: "" });
        dispatch({
            type: actionTypes.ADD_OCCASION_DATES,
            payload: { occasionLastDate: "", occasionDate: "" },
        });
    };

    let data = [
        {
            name: "Sweet Greet",
            url: "assets/img/icons/sweet-greets.png",
        },
        { name: "U-Greet", url: "assets/img/icons/ugreet.png" },
        { name: "U-Age", url: "assets/img/icons/cake.png" },
        { name: "U-Baby", url: "assets/img/icons/newborn2.png" },
        {
            name: "U-Celebrate",
            url: "assets/img/icons/christmas-tree.png",
        },
        {
            name: "U-Grad",
            url: "assets/img/icons/graduation-hat-and-diploma.png",
        },
        { name: "U-Love", url: "assets/img/icons/love.png" },
        { name: "U-Miss", url: "assets/img/icons/world.png" },
        { name: "U-Parent", url: "assets/img/icons/mothers-day.png" },
        { name: "U-Remember", url: "assets/img/icons/ribbon.png" },
        { name: "U-Retire", url: "assets/img/icons/rocking-chair.png" },
        // { name: "U-Run", url: "media/occasion_types/616f313c1fa8b.png" },
        { name: "U-Wed", url: "assets/img/icons/wedding-ring.png" },
    ];
    return (
        <div>
            <div>
                <div className="Toastify" />
                <NavBarInApp />
                <div className="page occassion">
                    <section>
                        <div className="steps">
                            <div>
                                <span
                                    className="dots"
                                    style={{
                                        backgroundImage:
                                            'url("assets/images/tick-white.d30d9e05.svg")',
                                        backgroundSize: "cover",
                                        backgroundPosition: "center center",
                                    }}
                                />
                                <span className="dots dots-active" />
                                <span className="dots" />
                                <span className="dots" />
                            </div>
                        </div>

                        <div className="quadruple-container">
                            {data.map((value) => (
                                <Card
                                    name={value.name}
                                    url={value.url}
                                    selected={selected}
                                    handleTypeSelect={() =>
                                        setSelected(value.name)
                                    }
                                    key={value.name}
                                />
                            ))}
                        </div>
                    </section>
                    <div className="page3 button-container bg-white">
                        <div className="double-container">
                            <div>
                                <button
                                    className="bg-none bold full-input"
                                    onClick={() => {
                                        navigate("/dashboard"),
                                            occasionCanceled();
                                    }}
                                >
                                    <div>Cancel</div>
                                </button>
                            </div>
                            {/* <Link to="/occasionPersons"> */}
                            <button
                                onClick={() => submitOccasionType()}
                                className="bg-3 bold color-white full-input"
                            >
                                Next
                            </button>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OccasionCreate;
