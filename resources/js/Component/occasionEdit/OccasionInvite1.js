import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AuthContext from "../../context/authContext";
import actionTypes from "../../State/actions/actionTypes";

const OccasionInvite1 = ({ setEditInvite2, setEditInvite1 }) => {
    const element = document.getElementById("ugreetAppHtml");
    if (element?.classList?.contains("f-style-bundle")) {
    } else {
        element?.classList?.add("f-style-bundle");
    }

    const { greetData } = useSelector((state) => state);
    const { state } = useContext(AuthContext);
    const dispatch = useDispatch();
    greetData.id &&
        sessionStorage.setItem(
            "greetData_onReloading",
            JSON.stringify(greetData)
        );
    useEffect(() => {
        let reloading = JSON.parse(sessionStorage?.greetData_onReloading);
        // console.log("reloading 2", reloading);
        if (reloading.id) {
            //console.log("reloading 2 setiing state", reloading);
            // sessionStorage.removeItem("greetData_onReloading");
            dispatch({
                type: actionTypes.SET_STATE,
                payload: {
                    greetData: reloading,
                },
            });
        }
    }, []);
    const [Mess, setMess] = useState(greetData?.occasions_description);
    const [OccName, setOccName] = useState(greetData?.occasion_name);
    const [eventImage, setEventImage] = useState(greetData?.greet_img_link);
    const [uploadedGreetImage, setUploadedGreetImage] = useState();
    const [preview, setPreview] = useState();
    const [NewEventDate, setNewEventDate] = useState(greetData?.occasion_date);
    const [NewLastDate, setNewLastDate] = useState(
        greetData?.contribution_deadline_date
    );

    useEffect(() => {
        setOccName(greetData?.occasion_name);
        setMess(greetData?.occasions_description);
        setEventImage(greetData?.greet_img_link);
        setNewEventDate(greetData?.occasion_date);
        setNewLastDate(greetData?.contribution_deadline_date);
    }, [greetData?.id]);

    // ================ image

    const reader = new FileReader();
    useEffect(() => {
        setEventImage(greetData?.greet_img_link);
    }, [greetData?.greet_img_link]);

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!uploadedGreetImage) {
            setPreview(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(uploadedGreetImage);
        setPreview(objectUrl);
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl);
    }, [uploadedGreetImage]);

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
                greet_id: greetData.id,
                user_id: state.user.id,
                greet_img_name: uploadedGreetImage ? uploadedGreetImage : null,
                celebrants: formValues,
                occasions_description: Mess,
                occasion_name: OccName,
                occasion_date: NewEventDate,
                contribution_deadline_date: NewLastDate,
                // theme_id: greetData.theme_id,
                // music_id: greetData.music_id,
                // occasion_type: greetData.occasion_type,
                // occasion_limit: greetData.occasion_limit,
                // status: greetData.status,
            },
        });
    };

    return (
        <div className="style-bundle-fsize style-bundle-poppin page-impstyle-bundle stypage-plr-out">
            <div>
                <div className="invite-navigation">
                    <div className="item bg-white">
                        <div className="number bg-4 bg-4-fx ">
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
                            setEditInvite1(false), setEditInvite2(true);
                        }}
                    >
                        <div className="number bg-4 bg-4-fx ">
                            <span>2</span>
                        </div>
                        <div className="description">
                            <div className="bold font-15">Invite</div>
                            <div>Invite using multiple platforms</div>
                        </div>
                    </div>
                </div>
                <div className="card-round bg-white form">
                    <div className="head font-17 bold">
                        Customize or Continue
                    </div>
                    <div className="input item">
                        <div className="input-label">Add a photo</div>
                        <div>
                            <div
                                className="image-input undefined"
                                style={{
                                    // backgroundImage:
                                    //     'url("/static/media/blank.86d44f21.png")',
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
                                ) : (
                                    <></>
                                )}
                                {/* <div
                                    className="image-preview"
                                    style={{
                                        backgroundImage:
                                            'url("https://cdn.pixabay.com/photo/2019/11/10/11/13/couple-4615557__340.jpg")',
                                        backgroundSize: "cover",
                                        backgroundPosition: "center center",
                                    }}
                                /> */}
                                <span className="buttons edit">
                                    {/* <img
                                        src="pen.4b1bdc1c.svg"
                                        alt="edit"
                                    /> */}
                                    <i className="fa fa-pen icon-sm text-muted" />
                                    <input
                                        type="file"
                                        accept=".png, .jpg, .jpeg"
                                        onChange={(e) => {
                                            setUploadedGreetImage(
                                                e.target.files[0]
                                            );
                                        }}
                                    />
                                </span>
                                {/* <span
                                    className="buttons close"
                                    onClick={(e) => {
                                        setUploadedGreetImage("");
                                    }}
                                >
                                    <img
                                        src="close.ea7c95d7.svg"
                                        alt="close"
                                    />
                                    <i className="ki ki-bold-close icon-xs text-muted" />
                                </span> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="each-person item">
                        <div className="double-container">
                            <div className="text-input full-input">
                                <label>First Name</label>
                                <input
                                    type="name"
                                    placeholder="ex. Ms. Jane"
                                    name="fName"
                                    required
                                    className="bg-2 bg-2-fx txt-input2"
                                    id={0}
                                    defaultValue="ad"
                                />
                                <div />
                            </div>
                            <div className="text-input full-input">
                                <label>Last Name</label>
                                <input
                                    type="name"
                                    name="lName"
                                    required
                                    className="bg-2 bg-2-fx txt-input2"
                                    id={0}
                                    defaultValue="afsd"
                                />
                                <div />
                            </div>
                        </div>
                        <div>
                            <button
                                type="button"
                                className="bg-4 bg-4-fx bold btn2"
                            >
                                <div>
                                    <img
                                        src="assets/images/delete.d650400d.svg"
                                        alt="button"
                                    />
                                </div>
                            </button>
                        </div>
                    </div> */}
                    {/* // dynamic */}
                    {formValues.map((element, index) => (
                        <div className="each-person item" key={index}>
                            <div className="double-container">
                                <div className="text-input full-input">
                                    {/* <div className="label undefined"> */}
                                    <label>First Name</label>
                                    {/* <a className="link" href>
                                        <div />
                                    </a> */}
                                    <input
                                        type="name"
                                        value={element?.first_name}
                                        onChange={(e) =>
                                            handleChange(element.id, e)
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
                                        <label>Last Name</label>
                                        {/* <a className="link" href>
                                            <div />
                                        </a> */}
                                    </div>
                                    <input
                                        type="name"
                                        name="last_name"
                                        value={element?.last_name}
                                        onChange={(e) =>
                                            handleChange(element.id, e)
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
                                        onClick={() => removeFormFields(index)}
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
                    ))}
                    <div className="add item">
                        <button
                            type="button"
                            className="bg-4 bold"
                            onClick={(e) => addNewPerson()}
                        >
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
                                value={Mess || ""}
                                // defaultValue={""}
                                onChange={(e) => setMess(e.target.value)}
                            />
                        </div>
                    </div>
                    <div
                        // onClick="javascript:location.href='occasion-invite2.html'"
                        className="button-container item"
                    >
                        <div />
                        <div>
                            <button
                                className="bg-3 bold"
                                onClick={(event) => {
                                    handleFinalEdit(event),
                                        setEditInvite1(false),
                                        setEditInvite2(true);
                                }}
                            >
                                <div>Save</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OccasionInvite1;
