import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DragAndDropUploader from "../../Component/dragAndDropUpload/DragAndDropUploader"; 
import SortableMedia from "../../Component/SortableMedia/SortableMedia";
import actionTypes from "../../State/actions/actionTypes";
import bg from "../../../../public/images/background.17641159.svg";
import Footer from "../../Component/Footer/Footer";
import AuthContext from "../../context/authContext";
import "./InvitedToGreet.css";

const InvitedToGreet = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const { greetData } = useSelector((state) => state);
    const { greetData, greetContributedMedia } = useSelector((state) => state);
    const { token } = useParams();
    const [NextClicked, setNextClicked] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const { state } = useContext(AuthContext);

    // Handle session storage for greetData


    // useEffect(() => {
    //     console.log('greetData', greetData)
    //     if (greetData?.id) {
    //         sessionStorage.setItem(
    //             "greetData_onReloading",
    //             JSON.stringify(greetData)
    //         );
    //     }
    // }, [greetData]);
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

    useEffect(() => {
        if (sessionStorage.greetData_onReloading) {
            const reloading = JSON.parse(sessionStorage.greetData_onReloading);
            if (reloading?.id) {
                dispatch({
                    type: actionTypes.SET_STATE,
                    payload: { greetData: reloading },
                });
            }
        }
    }, []);

    // Trigger the API dispatch for file upload
    const uploadAcceptedFile = (acceptedFiles) => {
        console.log('acceptedFiles', acceptedFiles)
        if (token && firstName && lastName && email && acceptedFiles.length > 0) {
            console.log("uploadAcceptedFile",{
                media: acceptedFiles,
                greet_token: token,
                first_name: firstName,
                last_name: lastName,
                email: email,
            })
            dispatch({
                type: actionTypes.POST_FILE_INVITED_USER,
                payload: {
                    media: acceptedFiles,
                    greet_token: token,
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                },
            });
        }
    };

    const handleNextClick = (e) => {
        e.preventDefault();
        if (firstName && lastName && email) {
            setNextClicked(true);
        }
    };

    return (
        <div className="invite-pages">
            <div className="page dashboard pt-4">
                <div className="media-actions media-section">
                    <div className="card-round bg-11">
                        <img
                            src={bg}
                            className="background mb-0"
                            alt="background"
                        />
                        <div className="text-text">
                            <div className="card-head color-white">
                                <div className="font-20 bold">Welcome to U-Greet</div>
                                <div>Where Stories Matter</div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="media-section bg-2">
                    <div className="section-head">
                        <div className="font-17 bold">Media Gallery</div>
                        <div className="font-12">
                            Upload pictures and/or personalized videos
                        </div>
                    </div>
                    <div>
                        {NextClicked ? (
                            <div className="upload bg-white">
                                {/* Reuse DragAndDropUploader and pass necessary props */}
                                <DragAndDropUploader
                                    greetData={greetData}
                                    // onUpload={uploadAcceptedFile}
                                />
                                <SortableMedia
                                    isContribution={true}
                                    greet_token={token}
                                    first_name={firstName}
                                    last_name={lastName}
                                    email={email}
                                />
                                <div className="font-12 card text-center">
                                    File Requirements: Video must be .MP4 or .MOV & Image must be .JPG, .JPEG, .PNG or .HEIC format. Both require dimensions above 500px.
                                </div>
                                <div style={{ textAlign: "end" }}>
                                    <button
                                        onClick={() => navigate("/")}
                                        style={{
                                            width: "fit-content",
                                        }}
                                        className="bg-10 bold color-white disableOnSubmit"
                                    >
                                        Done
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="upload bg-white">
                                <div className="card justify-content-center p-4">
                                    <div className="head">
                                        <div className="font-26 bold head">
                                            Your Details
                                        </div>
                                        <br />
                                    </div>
                                    <form
                                        method="POST"
                                        action="#"
                                        onSubmit={(e) => handleNextClick(e)}
                                    >
                                        {/* First Name Input Field */}
                                        <div className="item">
                                            <div className="text-input full-input">
                                                <div className="label bold">
                                                    <div>
                                                        First Name
                                                    </div>
                                                    <a
                                                        className="link"
                                                        href=""
                                                    >
                                                        <div></div>
                                                    </a>
                                                </div>
                                                <input
                                                    type="text"
                                                    name="first_name"
                                                    id="first_name"
                                                    required
                                                    className="bg-2 bg-2-fx"
                                                    autoComplete="first_name"
                                                    autoFocus
                                                    value={firstName}
                                                    onChange={(e) =>
                                                        setFirstName(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="First Name"
                                                    tabIndex="1"
                                                />
                                                <div
                                                    style={{
                                                        color: "red",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>

                                        {/* Last Name Input Field */}
                                        <div className="item">
                                            <div className="text-input full-input">
                                                <div className="label bold">
                                                    <div>Last Name</div>
                                                    <a
                                                        className="link"
                                                        href=""
                                                    >
                                                        <div></div>
                                                    </a>
                                                </div>
                                                <input
                                                    type="text"
                                                    name="last_name"
                                                    id="last_name"
                                                    required
                                                    className="bg-2 bg-2-fx"
                                                    autoComplete="last_name"
                                                    value={lastName}
                                                    placeholder="Last Name"
                                                    tabIndex="2"
                                                    onChange={(e) =>
                                                        setLastName(
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                <div
                                                    style={{
                                                        color: "red",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>

                                        {/* Email Input Field */}
                                        <div className="item">
                                            <div className="text-input full-input">
                                                <div className="label bold">
                                                    <div>
                                                        Your Email
                                                    </div>
                                                    <a
                                                        className="link"
                                                        href=""
                                                    >
                                                        <div></div>
                                                    </a>
                                                </div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    required
                                                    className="bg-2 bg-2-fx"
                                                    autoComplete="email"
                                                    placeholder="Email"
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(
                                                            e.target.value
                                                        )
                                                    }
                                                    tabIndex="3"
                                                />
                                                <div
                                                    style={{
                                                        color: "red",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>

                                        {/* Signup Button */}
                                        <div className="item">
                                            <button
                                                type="submit"
                                                className="bg-3 bold disableOnSubmit button-item w-auto"
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
                <Footer />
            </div>
        </div>
    );
};

export default InvitedToGreet;




