import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DragAndDropUploader from "../../Component/dragAndDropUpload/DragAndDropUploader";
import SortableMedia from "../../Component/SortableMedia/SortableMedia";
import actionTypes from "../../State/actions/actionTypes";
import bg from "../../../../public/images/background.17641159.svg";
import themeSvg from "../../../../public/images/videoTheme.jpg";
import musicSvg from "../../../../public/images/musicTheme.jpg";
import transitionSvg from "../../../../public/images/transition.png";
import AuthContext from "../../context/authContext";
import { useContext } from "react";
import Footer from "../../Component/Footer/Footer";

const OccasionInformation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { state } = useContext(AuthContext);
    const { greetData } = useSelector((state) => state);
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
            var reloading = JSON.parse(sessionStorage?.greetData_onReloading);
        }
        if (reloading?.id) {
           // sessionStorage.removeItem("greetData_onReloading");
            dispatch({
                type: actionTypes.SET_STATE,
                payload: {
                    greetData: reloading,
                },
            });
        }
    }, []);

    return (
        <div>
            <div>
                <div className="Toastify" />
                <div className="navigation bg-white">
                    <div className="inner inner-occasion inner-action">
                        <div
                            className="left link"
                            onClick={() => navigate("/dashboard")}
                        >
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
                    <div className="media-actions media-section">
                        <div className="card-round bg-11">
                            <img
                                src={bg}
                                className="background mb-0"
                                alt="background"
                            />
                            <div className="text-text">
                                <div className="card-head color-white">
                                    <div className="font-20 bold">
                                        {greetData?.occasion_name}
                                        <span>
                                            {" "}
                                            on {greetData?.occasion_date}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    // onClick="javascript:location.href='occasion-edit.html'"
                                    onClick={() =>
                                        navigate("/occasionEdit", {
                                            state: {
                                                isInvite: false,
                                                greetIdForEdit: greetData?.id,
                                            },
                                        })
                                    }
                                    className="bg-10 bold color-white"
                                >
                                    <div>Edit Occasion</div>
                                </button>
                            </div>
                        </div>
                    </div>
                    <section className="media-section bg-2">
                        <div className="section-head">
                            <div className="font-17 bold">Media Gallery</div>
                            <div className="font-12">
                                Upload, receive and arrange pictures and videos and add music and themes
                            </div>
                        </div>
                        <div className="double-container">
                            <div>
                                <div className="upload bg-white">
                                    <div className="font-17 card text-center">
                                        Customize Your Video
                                    </div>
                                    <DragAndDropUploader
                                        greetData={greetData}
                                    />
                                    {/* <div className="card">
                                        <div
                                            tabIndex={0}
                                            className="text-center"
                                        >
                                            <input
                                                multiple
                                                type="file"
                                                autoComplete="off"
                                                tabIndex={-1}
                                                style={{ display: "none" }}
                                            />
                                            <input
                                                id="fileInput"
                                                type="file"
                                                style={{ display: "none" }}
                                            />
                                            <img
                                                src="assets/images/drag-and-drop.5ed4ffa9.svg"
                                                // onClick="document.getElementById('fileInput').click();"
                                                alt="drag and drop"
                                                width={200}
                                            />
                                            <p>
                                                Drag 'n' drop some files here,
                                                or click to select files
                                            </p>
                                        </div>
                                        <br />
                                        <div className="text-center upload-button-container">
                                            <span tabIndex={0}>
                                                <input
                                                    multiple
                                                    type="file"
                                                    autoComplete="off"
                                                    tabIndex={-1}
                                                    style={{ display: "none" }}
                                                />
                                                <input
                                                    id="fileInput"
                                                    type="file"
                                                    style={{ display: "none" }}
                                                />
                                                <button
                                                    // onClick="document.getElementById('fileInput').click();"
                                                    className="bg-10 bold color-white disableOnSubmit"
                                                >
                                                    <div>Select Files</div>
                                                </button>
                                            </span>
                                        </div>
                                    </div> */}
                                    <SortableMedia />
                                    <div className="font-12 card text-center">
                                    File Requirements: Video must be .MP4 or .MOV &
                            Image must be .JPG, .JPEG, .PNG or .HEIC format. Both
                            require dimensions above 500px
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="card-round bg-white theme-music">
                                    <div className="font-17 bold card-head">
                                        Add Themes
                                    </div>
                                    <div className="item">
                                        <div className="text d-flex">
                                            <div>
                                                <div
                                                    className="image"
                                                    style={{
                                                        backgroundImage: `url(${themeSvg})`,
                                                        backgroundSize: "cover",
                                                        backgroundPosition:
                                                            "center center",
                                                        width: "60px",
                                                        marginRight: "10px",
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <div className="font-14 semi-bold">
                                                    Video Theme
                                                </div>
                                                <div className="color-2">
                                                    Current Theme:{" "}
                                                    {
                                                        greetData?.greet_theme
                                                            ?.name
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() =>
                                                navigate("/occasionThemes")
                                            }
                                            className="bg-3 bold btn2 d-flex justify-content-center align-items-center"
                                            style={{
                                                minWidth: "200px",
                                                maxHeight: "50px",
                                            }}
                                        >
                                            <div>Select Theme</div>
                                        </button>
                                    </div>
                                    <div className="item">
                                        <div className="text d-flex">
                                            <div>
                                                <div
                                                    className="image"
                                                    style={{
                                                        backgroundImage: `url(${musicSvg})`,
                                                        backgroundSize: "cover",
                                                        backgroundPosition:
                                                            "center center",
                                                        width: "60px",
                                                        marginRight: "10px",
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <div className="font-14 semi-bold">
                                                    Music Theme
                                                </div>
                                                <div className="color-2">
                                                    Current Music:{" "}
                                                    {
                                                        greetData?.greet_music
                                                            ?.name
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() =>
                                                navigate("/occasionMusic")
                                            }
                                            className="bg-3 bold btn2 d-flex justify-content-center align-items-center"
                                            style={{
                                                minWidth: "200px",
                                                maxHeight: "50px",
                                            }}
                                        >
                                            <div>Select Music</div>
                                        </button>
                                    </div>
                                    <div className="item">
                                        <div className="text d-flex">
                                            <div>
                                                <div
                                                    className="image"
                                                    style={{
                                                        backgroundImage: `url(${transitionSvg})`,
                                                        backgroundSize: "cover",
                                                        backgroundPosition:
                                                            "center center",
                                                        width: "60px",
                                                        marginRight: "10px",
                                                    }}
                                                />
                                            </div>
                                            <div>
                                                <div className="font-14 semi-bold">
                                                    Transitions
                                                </div>
                                                <div className="color-2">
                                                    Current Transition:{" "}
                                                    {
                                                        greetData?.greet_transition
                                                            ?.name
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() =>
                                                navigate("/occasionTransition")
                                            }
                                            className="bg-3 bold btn2 d-flex justify-content-center align-items-center"
                                            style={{
                                                minWidth: "200px",
                                                maxHeight: "50px",
                                            }}
                                        >
                                            <div>Select Transition</div>
                                        </button>
                                    </div>
                                </div>
                                
                                <div className="card-round bg-18">
                                    <img
                                        src={bg}
                                        className="background mb-0"
                                        alt="background"
                                    />
                                    <div className="text-text">
                                        <div className="font-20 bold card-head color-white">
                                            Invite People
                                        </div>
                                        <button
                                             onClick={() =>
                                                {
                                                    window.scroll({ top: 0, behavior: 'smooth' });
                                                    navigate("/occasionEdit", {
                                                        state: {
                                                            isInvite: true,
                                                            greetIdForEdit:
                                                                greetData?.id,
                                                        },
                                                    })
                                                }
                                            }
                                            className="bg-10 bold color-white"
                                        >
                                            <div>Send Invite</div>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="card-round"
                                    style={{
                                        backgroundColor: "#2c743d",
                                    }}
                                >
                                    <img
                                        src={bg}
                                        className="background mb-0"
                                        alt="background"
                                    />
                                    <div className="text-text">
                                        <div className="font-20 bold card-head color-white">
                                            Preview
                                            <br />
                                            U-Greet
                                        </div>
                                        <button
                                            onClick={() =>
                                                navigate("/occasionPreview")
                                            }
                                            className="bg-3 bold"
                                        >
                                            <div>Preview U-Greet</div>
                                        </button>
                                    </div>
                                </div>
                                <div className="card-round bg-black">
                                    <img
                                        src={bg}
                                        className="background mb-0"
                                        alt="background"
                                    />
                                    <div className="text-text">
                                        <div className="font-20 bold card-head color-white">
                                            Finalize
                                            <br />
                                            U-Greet
                                        </div>
                                        <button
                                            className="bg-3 bold"
                                            onClick={() =>
                                                navigate("/occasionCheckout")
                                            }
                                        >
                                            <div>Finalize U-Greet</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="invite-popup">
                            <div className="invite-popup-background" />
                            <div className="container">
                                <div className="inner">
                                    <img
                                        src="/static/media/invitation.afe2a080.svg"
                                        alt="invitation"
                                        className="invitation-image"
                                    />
                                    <div className="title font-30 bold">
                                        Time to invite!
                                    </div>
                                    <div>
                                        Share this link with people to invite
                                        them to upload their videos and photos
                                    </div>
                                    <div className="link">
                                        https://link.to/share/this.kljkjl/lj
                                    </div>
                                    <div className="social">
                                        <div className="tab">
                                            <img
                                                src="/static/media/messenger.c6a1ee37.svg"
                                                alt="messenger"
                                            />
                                            <div className="font-10">
                                                Messenger
                                            </div>
                                        </div>
                                        <div className="tab">
                                            <img
                                                src="/static/media/whatsapp.27d3105f.svg"
                                                alt="whatsapp"
                                            />
                                            <div className="font-10">
                                                WhatsApp
                                            </div>
                                        </div>
                                        <div className="tab">
                                            <img
                                                src="/static/media/email2.08e41aee.svg"
                                                alt="email"
                                            />
                                            <div className="font-10">Email</div>
                                        </div>
                                        <div className="tab">
                                            <img
                                                src="/static/media/link.5df60455.svg"
                                                alt="link"
                                            />
                                            <div className="font-10">
                                                Copy Link
                                            </div>
                                        </div>
                                        <div className="tab">
                                            <img
                                                src="/static/media/message.edd1278e.svg"
                                                alt="message"
                                            />
                                            <div className="font-10">
                                                Send Message
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default OccasionInformation;
