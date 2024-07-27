import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthContext from "../../context/authContext";
import actionTypes from "../../State/actions/actionTypes";

const OccasionInvite1 = ({ setEditInvite2, setEditInvite1, greetDataa }) => {
    const element = document.getElementById("ugreetAppHtml");
    if (element && !element.classList.contains("f-style-bundle")) {
        element.classList.add("f-style-bundle");
    }

    const greetData = useSelector((state) => state.greetData);
    const { state } = useContext(AuthContext);
    const dispatch = useDispatch();

    useEffect(() => {
        if (greetData.id) {
            sessionStorage.setItem("greetData_onReloading", JSON.stringify(greetData));
        }
    }, [greetData]);

    useEffect(() => {
        try {
            let reloading = JSON.parse(greetDataa || sessionStorage.getItem("greetData_onReloading"));
            if (reloading && reloading.id) {
                dispatch({
                    type: actionTypes.SET_STATE,
                    payload: { greetData: reloading },
                });
            }
        } catch (error) {
            console.error("Failed to parse session storage data:", error);
        }
    }, [dispatch, greetDataa]);

    const [Mess, setMess] = useState(greetData?.occasions_description || "");
    const [OccName, setOccName] = useState(greetData?.occasion_name || "");
    const [eventImage, setEventImage] = useState(greetData?.greet_img_link || "");
    const [uploadedGreetImage, setUploadedGreetImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [NewEventDate, setNewEventDate] = useState(greetData?.occasion_date || "");
    const [NewLastDate, setNewLastDate] = useState(greetData?.contribution_deadline_date || "");

    useEffect(() => {
        setOccName(greetData?.occasion_name || "");
        setMess(greetData?.occasions_description || "");
        setEventImage(greetData?.greet_img_link || "");
        setNewEventDate(greetData?.occasion_date || "");
        setNewLastDate(greetData?.contribution_deadline_date || "");
    }, [greetData]);

    useEffect(() => {
        if (!uploadedGreetImage) {
            setPreview(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(uploadedGreetImage);
        setPreview(objectUrl);
        return () => URL.revokeObjectURL(objectUrl);
    }, [uploadedGreetImage]);

    const [formValues, setFormValues] = useState([{ first_name: "", last_name: "", id: new Date().getTime() }]);

    useEffect(() => {
        if (greetData.greet_celebrant?.length > 0) {
            setFormValues(greetData.greet_celebrant);
        }
    }, [greetData.greet_celebrant]);

    const handleChange = (id, e) => {
        const { name, value } = e.target;
        setFormValues((prevFormValues) =>
            prevFormValues.map((formValue) =>
                formValue.id === id ? { ...formValue, [name]: value } : formValue
            )
        );
    };

    const addNewPerson = () => {
        setFormValues((prevFormValues) => [
            ...prevFormValues,
            { first_name: "", last_name: "", id: new Date().getTime() },
        ]);
    };

    const removeFormFields = (index) => {
        setFormValues((prevFormValues) => prevFormValues.filter((_, i) => i !== index));
    };

    const handleFinalEdit = (event) => {
        event.preventDefault();
        dispatch({
            type: actionTypes.GREET_UPDATE,
            payload: {
                greet_id: greetData.id,
                user_id: state.user.id,
                greet_img_name: uploadedGreetImage || null,
                celebrants: formValues,
                occasions_description: Mess,
                occasion_name: OccName,
                occasion_date: NewEventDate,
                contribution_deadline_date: NewLastDate,
            },
        });
    };

    return (
        <div className="style-bundle-fsize style-bundle-poppin page-impstyle-bundle stypage-plr-out">
            <div>
                <div className="invite-navigation">
                    <div className="item bg-white">
                        <div className="number bg-4 bg-4-fx">
                            <span>1</span>
                        </div>
                        <div className="description">
                            <div className="bold font-15">Customize</div>
                            <div>Add Details</div>
                        </div>
                    </div>
                    <div
                        className="item bg-2"
                        onClick={() => {
                            setEditInvite1(false);
                            setEditInvite2(true);
                        }}
                    >
                        <div className="number bg-4 bg-4-fx">
                            <span>2</span>
                        </div>
                        <div className="description">
                            <div className="bold font-15">Invite</div>
                            <div>Invite using multiple platforms</div>
                        </div>
                    </div>
                </div>
                <div className="card-round bg-white form">
                    <div className="head font-17 bold">Customize or Continue</div>
                    <div className="input item">
                        <div className="input-label">Add a photo</div>
                        <div>
                            <div
                                className="image-input"
                                style={{
                                    backgroundSize: "cover",
                                    backgroundPosition: "center center",
                                }}
                            >
                                {preview ? (
                                    <div
                                        className="image-preview"
                                        style={{
                                            backgroundImage: `url(${preview})`,
                                            backgroundSize: "cover",
                                        }}
                                    />
                                ) : eventImage ? (
                                    <div
                                        className="image-preview"
                                        style={{
                                            backgroundImage: `url(${eventImage})`,
                                            backgroundSize: "cover",
                                        }}
                                    />
                                ) : null}
                                <span className="buttons edit">
                                    <i className="fa fa-pen icon-sm text-muted" />
                                    <input
                                        type="file"
                                        accept=".png, .jpg, .jpeg"
                                        onChange={(e) => setUploadedGreetImage(e.target.files[0])}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                    {formValues.map((element, index) => (
                        <div className="each-person item" key={index}>
                            <div className="double-container">
                                <div className="text-input full-input">
                                    <label>First Name</label>
                                    <input
                                        type="name"
                                        value={element?.first_name}
                                        onChange={(e) => handleChange(element.id, e)}
                                        placeholder="ex. Ms. Jane"
                                        name="first_name"
                                        required
                                        className="bg-2 bg-2-fx txt-input2"
                                    />
                                </div>
                                <div className="text-input full-input">
                                    <label>Last Name</label>
                                    <input
                                        type="name"
                                        name="last_name"
                                        value={element?.last_name}
                                        onChange={(e) => handleChange(element.id, e)}
                                        required
                                        className="bg-2 bg-2-fx txt-input2"
                                    />
                                </div>
                            </div>
                            {index > 0 && (
                                <div>
                                    <button
                                        type="button"
                                        className="bg-4 bg-4-fx bold btn2"
                                        onClick={() => removeFormFields(index)}
                                    >
                                        <img src="assets/images/delete.d650400d.svg" alt="delete" />
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="add item">
                        <button type="button" className="bg-4 bold" onClick={addNewPerson}>
                            <div>+ Add Another Person</div>
                        </button>
                    </div>
                    <div className="item">
                        <div className="text-input full-input">
                            <label>Custom message</label>
                            <textarea
                                placeholder="Custom message"
                                name="description"
                                required
                                className="bg-2 bg-2-fx txt-input2"
                                value={Mess}
                                onChange={(e) => setMess(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="button-container item">
                        <button
                            className="bg-3 bold"
                            onClick={(event) => {
                                handleFinalEdit(event);
                                setEditInvite1(false);
                                setEditInvite2(true);
                            }}
                        >
                            <div>Save</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OccasionInvite1;
