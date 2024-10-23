import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import OccasionInvite1 from "../../Component/occasionEdit/OccasionInvite1";
import OccasionInvite2 from "../../Component/occasionEdit/OccasionInvite2";
import AuthContext from "../../context/authContext";
import actionTypes from "../../State/actions/actionTypes";

const OccasionEdit = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const { greetData } = useSelector((state) => state);
    console.log("greetData", greetData);
    const { state } = useContext(AuthContext);
    greetData.id &&
        sessionStorage.setItem(
            "greetData_onReloading",
            JSON.stringify(greetData)
        );
    useEffect(() => {
        greetData?.id
            ? dispatch({
                    type: actionTypes.GET_GREET_DATA,
                    payload: { id: greetData?.id },
                })
            : "";
        greetData.id
            ? dispatch({
                    type: actionTypes.GET_ALL_UPLOADED_MEDIA,
                    payload: { greet_id: greetData?.id },
                })
            : "";
    }, [greetData?.id]);

    // console.log("HELLO NAMES", names);
    //console.log("greetData", greetData);
    // console.log("location.state?.isInvite", location.state?.isInvite);
    // console.log("location.state?.greetIdForEdit", location.state?.greetIdForEdit);

    const [editInvite1, setEditInvite1] = useState(false);
    const [editInvite2, setEditInvite2] = useState(true);

    // useEffect(() => {
    //     greetData?.id
    //         ? dispatch({
    //               type: actionTypes.GET_GREET_DATA,
    //               payload: { id: greetData?.id },
    //           })
    //         : "";
    // }, [greetData?.id]);
    useEffect(() => {
        if (sessionStorage.greetData_onReloading) {
            var reloading = JSON.parse(sessionStorage?.greetData_onReloading);
        }
        
        // console.log("reloading 2", reloading);
        if (reloading.id) {
            console.log("reloading 2 setiing state", reloading);
            // sessionStorage.removeItem("greetData_onReloading");
            dispatch({
                type: actionTypes.SET_STATE,
                payload: {
                    greetData: reloading,
                },
            });
        }
        


    }, []);
    useEffect(() => {
        setOccName(greetData?.occasion_name);
        setNewEventDate(greetData?.occasion_date);
        setMess(greetData?.occasions_description);
        setNewLastDate(greetData?.contribution_deadline_date);
    }, [greetData?.id]);
    // useEffect(() => {
    //     location.state?.isInvite ? setEditInvite1(true) : null;
    // }, [location.state?.isInvite]);

    // get all data state for upload to edit API
    const [OccName, setOccName] = useState(greetData?.occasion_name);
    const [NewEventDate, setNewEventDate] = useState(greetData?.occasion_date);
    const [Mess, setMess] = useState(greetData?.occasions_description);
    const [NewLastDate, setNewLastDate] = useState(
        greetData?.contribution_deadline_date
    );

    // ====================
    const [formValues, setFormValues] = useState([
        { first_name: "", last_name: "", id: new Date().getTime() },
    ]);

    useEffect(() => {
        if (greetData.greet_celebrant?.length > 0) {
            setFormValues(greetData.greet_celebrant);
        }
    }, [greetData.greet_celebrant]);

    let handleChange = (i, e) => {
        const { name, value } = e.target;
        let newFormValues = formValues.map((formValue) => {
            if (formValue.id === i) {
                return {
                    ...formValue,
                    [name]: value,
                };
            } else return formValue;
        });
        setFormValues(newFormValues);
    };
    // console.log("FORM VALUES", formValues);
    let addNewPerson = () => {
        setFormValues([
            ...formValues,
            { first_name: "", last_name: "", id: new Date().getTime() },
        ]);
    };

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues);
    };

    const handleFinalEdit = (event) => {
        event.preventDefault();
        dispatch({
            type: actionTypes.GREET_UPDATE,
            payload: {
                user_id: state.user.id,
                occasion_name: OccName,
                occasion_date: NewEventDate,
                contribution_deadline_date: NewLastDate,
                occasions_description: Mess,
                // theme_id: greetData.theme_id,
                // music_id: greetData.music_id,
                // occasion_type: greetData.occasion_type,
                // occasion_limit: greetData.occasion_limit,
                // status: greetData.status,
                greet_id: greetData.id,
                celebrants: formValues,
            },
        });
        navigate("/OccasionInformation");
    };

    return (
        <div>
            <div>
                <div className="Toastify" />
                <div className="navigation bg-white">
                    <div className="inner inner-occasion inner-action">
                        <div className="left link" onClick={() => navigate(-1)}>
                            <img
                                src="assets/images/arrow-right.418d2ebe.svg"
                                alt="arrow"
                                className="arrow"
                            />
                            Back
                        </div>
                    </div>
                </div>
                <div className="page dashboard">
                    <section className="invite-section bg-2">
                        <div className="section-head">
                            <div className="font-17 bold">
                                Personalize your invitation
                            </div>
                            <div className="font-12">
                                Upload an image, customize your message, invite
                                your contributors
                            </div>
                        </div>
                        <div className="double-container-1-2">
                            <div className="left-invite">
                                <div className="card-round bg-white">
                                    <br />
                                    <div className="profile">
                                        {greetData?.greet_img_link ? (
                                            <div
                                                className="image"
                                                style={{
                                                    backgroundImage: `url(${greetData?.greet_img_link})`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition:
                                                        "center center",
                                                }}
                                            >
                                                <div className="active bg-10" />
                                            </div>
                                        ) : (
                                            <div
                                                className="image"
                                                style={{
                                                    backgroundImage: `url("")`,
                                                    backgroundSize: "cover",
                                                    backgroundPosition:
                                                        "center center",
                                                }}
                                            >
                                                <div className="active bg-10" />
                                            </div>
                                        )}

                                        <div className="text">
                                            <div className="font-17 bold">
                                                {/* // person name here  */}
                                                {greetData?.occasion_name}
                                            </div>
                                            <div className="color-2">
                                                {greetData?.occasion_name} Event
                                            </div>
                       
                                        </div>
                                    </div>
                                    <div className="timestamp">
                                        <div>Contribution Date:</div>
                                        <div className="color-2">
                                            {greetData?.created_at?.split('T')[0]}
                                        </div>
                                    </div>
                                    <div className="description">
                                        <div className="item bg-2 color-5">
                                            <div>
                                                <img
                                                    src="assets/images/dashboard.ada1d043.svg"
                                                    alt="dashboard"
                                                />
                                            </div>
                                            <div className="text">
                                                Occasion:{" "}
                                                {greetData?.occasion_name}
                                            </div>
                                        </div>
                                        <div className="item bg-2 color-5">
                                            <div>
                                                <img
                                                    src="assets/images/user.f26258d4.svg"
                                                    alt="user"
                                                />
                                            </div>
                                            <div className="text">
                                                Recipient:{" "}
                                                {greetData.greet_celebrant
                                                    ?.length > 0 && (
                                                        <>
                                                            {
                                                                greetData
                                                                    ?.greet_celebrant[0]
                                                                    ?.first_name
                                                            }{" "}
                                                            {
                                                                greetData
                                                                    ?.greet_celebrant[0]
                                                                    ?.last_name
                                                            }
                                                        </>
                                                    )}
                                            </div>
                                        </div>
                                        <div className="item bg-2 color-5">
                                            <div>
                                                <img
                                                    src="assets/images/clock.6cf216b8.svg"
                                                    alt="clock"
                                                />
                                            </div>
                                            <div className="text">
                                                Occasion Date:{" "}
                                                {greetData?.occasion_date}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {editInvite1 || editInvite2 ? (
                                editInvite1 ? (
                                    <OccasionInvite1
                                        setEditInvite2={setEditInvite2}
                                        setEditInvite1={setEditInvite1}
                                    />
                                ) : (
                                    <OccasionInvite2
                                        setEditInvite2={setEditInvite2}
                                        setEditInvite1={setEditInvite1}
                                    />
                                )
                            ) : (
                                <form>
                                    <div className="card-round bg-white form">
                                        <div className="head font-17 bold">
                                            Edit Event
                                        </div>
                                        <div className="item">
                                            <div className="text-input full-input">
                                                <label>Select Occasion</label>
                                                <select
                                                    className="bg-2 bg-2-fx txt-input2"
                                                    name="type"
                                                    value={OccName}
                                                    onChange={(e) =>
                                                        setOccName(
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value disabled>
                                                        Select Type
                                                    </option>
                                                    <option value="Sweet Greet">
                                                        Sweet Greet
                                                    </option>
                                                    <option value="U-Age">
                                                        U-Age
                                                    </option>
                                                    <option value="U-Baby">
                                                        U-Baby
                                                    </option>
                                                    <option value="U-Celebrate">
                                                        U-Celebrate
                                                    </option>
                                                    <option value="U-Grad">
                                                        U-Grad
                                                    </option>
                                                    <option value="U-Greet">
                                                        U-Greet
                                                    </option>
                                                    <option value="U-Love">
                                                        U-Love
                                                    </option>
                                                    <option value="U-Miss">
                                                        U-Miss
                                                    </option>
                                                    <option value="U-Parent">
                                                        U-Parent
                                                    </option>
                                                    <option value="U-Remember">
                                                        U-Remember
                                                    </option>
                                                    <option value="U-Retire">
                                                        U-Retire
                                                    </option>
                                                    {/* <option value="U-Run">
                                                        U-Run
                                                    </option> */}
                                                    <option value="U-Wed">
                                                        U-Wed
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="item double-container">
                                            <div className="text-input full-input">
                                                <label>Event Date</label>
                                                <input
                                                    type="date"
                                                    name="event_date"
                                                    required
                                                    className="bg-2 bg-2-fx txt-input2"
                                                    defaultValue={NewEventDate}
                                                    onChange={(e) =>
                                                        setNewEventDate(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <div />
                                            </div>
                                            <div className="text-input full-input">
                                                <label>
                                                    Contribution Deadline
                                                </label>
                                                <input
                                                    type="date"
                                                    name="deadline"
                                                    required
                                                    className="bg-2 bg-2-fx txt-input2"
                                                    defaultValue={NewLastDate}
                                                    onChange={(e) =>
                                                        setNewLastDate(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <div />
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="text-input full-input">
                                                <label>Custom message</label>
                                                <textarea
                                                    placeholder="Custom message"
                                                    name="description"
                                                    required
                                                    className="bg-2 bg-2-fx txt-input2"
                                                    value={Mess || ""}
                                                    // defaultValue={""}
                                                    z onChange={(e) =>
                                                        setMess(e.target.value)
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div>
                                           
                                            {/* // dynamic */}
                                            {formValues.map(
                                                (element, index) => (
                                                    <div
                                                        className="each-person item"
                                                        key={index}
                                                    >
                                                        <div className="double-container">
                                                            <div className="text-input full-input">
                                                                {/* <div className="label undefined"> */}
                                                                <label>
                                                                    First Name
                                                                </label>
                                                                {/* <a className="link" href > <div /> </a> */}
                                                                <input
                                                                    type="name"
                                                                    value={
                                                                        element?.first_name
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        handleChange(
                                                                            element.id,
                                                                            e
                                                                        )
                                                                    }
                                                                    placeholder="ex. Ms. Jane"
                                                                    name="first_name"
                                                                    required
                                                                    className="bg-2 bg-2-fx txt-input2"
                                                                />
                                                                <div />
                                                            </div>
                                                            <div className="text-input full-input">
                                                                {/* <div className="label undefined"> */}
                                                                <div>
                                                                    <label>
                                                                        Last
                                                                        Name
                                                                    </label>
                                                                    {/* <a className="link" href > <div /> </a> */}
                                                                </div>
                                                                <input
                                                                    type="name"
                                                                    name="last_name"
                                                                    value={
                                                                        element?.last_name
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        handleChange(
                                                                            element.id,
                                                                            e
                                                                        )
                                                                    }
                                                                    required
                                                                    className="bg-2 bg-2-fx txt-input2"
                                                                />
                                                                <div />
                                                            </div>
                                                        </div>
                                                        {index > 0 ? (
                                                            <div>
                                                                <button
                                                                    type="button"
                                                                    className="bg-4 bg-4-fx bold btn2"
                                                                    onClick={() =>
                                                                        removeFormFields(
                                                                            index
                                                                        )
                                                                    }
                                                                >
                                                                    <div>
                                                                        <img
                                                                            src="assets/images/delete.d650400d.svg"
                                                                            alt="button"
                                                                        />
                                                                    </div>
                                                                </button>
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                )
                                            )}
                                            <div className="add item">
                                                <button
                                                    type="button"
                                                    className="bg-4 bold"
                                                    onClick={(e) =>
                                                        addNewPerson()
                                                    }
                                                >
                                                    <div>
                                                        + Add Another Person
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="button-container item">
                                            <div />
                                            <div>
                                                <button
                                                    onClick={(event) =>
                                                        handleFinalEdit(event)
                                                    }
                                                    type="submit"
                                                    className="bg-10 bold color-white disableOnSubmit"
                                                >
                                                    <div>Proceed</div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default OccasionEdit;
