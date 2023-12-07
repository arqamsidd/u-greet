import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NavBarInApp from "../../Component/Auth/NavBar/NavBarInApp";
import AuthContext from "../../context/authContext";
import actionTypes from "../../State/actions/actionTypes";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const OccasionDate = () => {
    const dispatch = useDispatch();
    const [date, setDate] = useState("");
    const [lastDate, setLastDate] = useState("");
    const navigate = useNavigate();
    const { state } = useContext(AuthContext);

    const { occasionLastDate, occasionDate, names, occasionType } = useSelector(
        (state) => state
    );

    useEffect(() => {
        if (names?.length === 0 || !occasionType) {
            navigate("/startOccasion");
        }
    }, []);
    useEffect(() => {
        if (occasionLastDate) {
            setLastDate(occasionLastDate);
        }
        if (occasionDate) {
            setDate(occasionDate);
        }
    }, [occasionLastDate, occasionDate]);

    let submitOccasionDate = () => {
        const dateObject = new Date(date);
        const formattedDate = dateObject.toISOString().split("T")[0];
        const dateObjectLast = new Date(lastDate);
        const formattedDateLast = dateObjectLast.toISOString().split("T")[0];
        console.log("i am dhruv", formattedDate, formattedDateLast);
        dispatch({
            type: actionTypes.ADD_OCCASION_DATES,
            payload: { formattedDate, formattedDateLast },
        });
    };

    let submitOccasionToAPI = () => {
        const dateObject = new Date(date);
        const formattedDate = dateObject.toISOString().split("T")[0];
        const dateObjectLast = new Date(lastDate);
        const formattedDateLast = dateObjectLast.toISOString().split("T")[0];
        console.log("i am dhruv", formattedDate, formattedDateLast);
        if (state.user.id) {
            dispatch({
                type: actionTypes.ADD_OCCASION_TO_API,
                payload: {
                    user_id: state.user.id,
                    occasionType: occasionType,
                    occasionDate: formattedDate,
                    occasionLastDate: formattedDateLast,
                    names: names,
                },
            });
        } else {
            toast.error("User Not Found!", {
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
                                <span
                                    className="dots"
                                    style={{
                                        backgroundImage:
                                            'url("assets/images/tick-white.d30d9e05.svg")',
                                        backgroundSize: "cover",
                                        backgroundPosition: "center center",
                                    }}
                                />
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
                            </div>
                        </div>
                        <div className="font-30 bold title mb-3">
                            When is the {occasionType} happening?
                        </div>
                        <div>
                            <div className="react-date-picker react-date-picker--closed react-date-picker--enabled">
                                {/* <input
                                    type="date"
                                    name="event_date"
                                    required
                                    className="bg-2 bg-2-fx txt-input2 rounded mb-3 "
                                    style={{
                                        width: "100%",
                                        textTransform: "uppercase",
                                        fontWeight: "bold",
                                        color: "gray",
                                        border: "transparent",
                                        minWidth: "99%",
                                    }}
                                    value={date}
                                    min={new Date().toISOString().split("T")[0]}
                                    onChange={(e) => setDate(e.target.value)}
                                /> */}
                                <DatePicker
                                    selected={date}
                                    minDate={new Date()}
                                    // maxDate={addDays(date, 5)}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="DD-MM-YYYY"
                                    className="bg-2 bg-2-fx txt-input2 mb-3 rounded border-0 w-100 font-weight-bold"
                                    onChange={(value) => setDate(value)}
                                />
                            </div>
                        </div>
                        <div className="font-30 bold title mb-3">
                            What is the last date for contribution?
                        </div>
                        <div>
                            <div className="react-date-picker react-date-picker--closed react-date-picker--enabled">
                                {/* <input
                                    type="date"
                                    name="event_date"
                                    required
                                    className="bg-2 bg-2-fx txt-input2 rounded "
                                    style={{
                                        width: "100%",
                                        textTransform: "uppercase",
                                        fontWeight: "bold",
                                        color: "gray",
                                        border: "transparent",
                                    }}
                                    value={lastDate}
                                    min={new Date().toISOString().split("T")[0]}
                                    // max={date}
                                    onChange={(e) => {
                                        if (e.target.value < date) {
                                            setLastDate(e.target.value);
                                        } else {
                                            // alert(
                                            //     "last date should be smaller then Greet Date"
                                            // );
                                            toast.error(
                                                "last date should be smaller then Greet Date",
                                                {
                                                    position: "bottom-right",
                                                    autoClose: 5000,
                                                    hideProgressBar: false,
                                                    closeOnClick: true,
                                                    pauseOnHover: true,
                                                    draggable: true,
                                                    progress: undefined,
                                                    theme: "colored",
                                                }
                                            );
                                        }
                                    }}
                                /> */}
                                <DatePicker
                                    selected={lastDate}
                                    minDate={new Date()}
                                    // maxDate={addDays(date, 5)}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="DD-MM-YYYY"
                                    className="bg-2 bg-2-fx txt-input2 rounded border-0 w-100 font-weight-bold"
                                    onChange={(value) => {
                                        if (value < date) {
                                            setLastDate(value);
                                        } else {
                                            // alert(
                                            //     "last date should be smaller then Greet Date"
                                            // );
                                            toast.error(
                                                "last date should be smaller then Greet Date",
                                                {
                                                    position: "bottom-right",
                                                    autoClose: 5000,
                                                    hideProgressBar: false,
                                                    closeOnClick: true,
                                                    pauseOnHover: true,
                                                    draggable: true,
                                                    progress: undefined,
                                                    theme: "colored",
                                                }
                                            );
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </section>
                    <div className="page3 button-container bg-white">
                        <div className="double-container">
                            <div>
                                <button className="bg-none bold full-input">
                                    <div
                                        onClick={() => {
                                            navigate(-1), submitOccasionDate();
                                        }}
                                    >
                                        Back
                                    </div>
                                </button>
                            </div>
                            <button
                                onClick={() => {
                                    if (date && lastDate) {
                                        submitOccasionDate(),
                                            submitOccasionToAPI(),
                                            navigate("/occasionInformation");
                                    } else {
                                        // alert("please fill dates");
                                        toast.error("please fill dates", {
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
                                }}
                                className="bg-3 bold color-white full-input"
                            >
                                <div>Create</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OccasionDate;
