import React from "react";
import { useDispatch } from "react-redux";
import DndUploaderForInvitedUser from "../../Component/dragAndDropUpload/DndUploaderForInvitedUser";
import DragAndDropUploader from "../../Component/dragAndDropUpload/DragAndDropUploader";
import SortableMedia from "../../Component/SortableMedia/SortableMedia";
import "./InvitedToGreet.css";
import bg from "../../../../public/images/background.17641159.svg";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import actionTypes from "../../State/actions/actionTypes";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../../context/authContext";
import { nodeName } from "jquery";
import { useDropzone } from "react-dropzone";
import dnd from "../../../../public/images/drag-and-drop.5ed4ffa9.svg";
import Footer from "../../Component/Footer/Footer";
import heic2any from "heic2any";

const InvitedToGreet = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { greetData, greetContributedMedia } = useSelector((state) => state);
    const { token } = useParams();

    const [NextClicked, setNextClicked] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    greetData.id &&
        sessionStorage.setItem(
            "greetData_onReloading",
            JSON.stringify(greetData)
        );
    useEffect(() => {
        if (sessionStorage.greetData_onReloading) {
            var reloading = JSON.parse(sessionStorage?.greetData_onReloading);
        }
        // console.log("reloading", reloading);
        if (reloading?.id) {
            console.log("reloading setiing state", reloading);
            // sessionStorage.removeItem("greetData_onReloading");
            dispatch({
                type: actionTypes.SET_STATE,
                payload: {
                    greetData: reloading,
                },
            });
        }
    }, []);

    // dnduploaader
    const { state } = useContext(AuthContext);
    const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
        useDropzone({
            accept: {
                "video/mp4": [],
                "video/mov": [".mov"],
                "image/jpg": [],
                "image/jpeg": [],
                "image/png": [],
                "image/heic": [".heic"],
            },
            getFilesFromEvent: async (event) => {
                let files = [];
                if (typeof FileSystemFileHandle !== "undefined") {
                    console.log(
                        "d event of beg file",
                        event,
                        event[0] instanceof FileSystemFileHandle
                    );
                    if (event[0] instanceof FileSystemFileHandle) {
                        for (const eve of event) {
                            console.log("dhruvin eve getfile", eve);
                            const file = await eve.getFile();
                            //   console.log("d event inside if", files)
                            files.push(file);
                            console.log(
                                "d event of beg file 2222 if",
                                event,
                                files
                            );
                        }
                    } else {
                        files =
                            event.dataTransfer?.files ||
                            event.target?.files ||
                            [];
                        console.log(
                            "d event of beg file 2222 else",
                            event,
                            files
                        );
                    }
                } else {
                    files = event.dataTransfer?.files || event.target?.files || [];
                    console.log("d event of beg file 2222 else", event, files);
                }
                const promises = [];
                for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    const regImage = /image/;
                    if (
                        (file.type != "image/heif" &&
                            file.type != "image/heic" &&
                            file.type != "") ||
                        file.name.includes(".mov")
                    ) {
                        console.log("dhruvin is not heif");
                        if (regImage.test(file.type)) {
                            const promise = new Promise((resolve, reject) => {
                                const image = new Image();
                                let url;
                                image.onload = function () {
                                    file.width = image.width;
                                    file.height = image.height;
                                    resolve(file);
                                };
                                url = URL.createObjectURL(file);
                                image.src = url;
                            });
                            promises.push(promise);
                        } else {
                            if (
                                file.type != "video/mp4" &&
                                file.type != "video/mov"
                            ) {
                                const promise = new Promise(
                                    (resolve, reject) => {
                                        resolve(file);
                                    }
                                );
                                promises.push(promise);
                            } else {
                                const promise = new Promise(
                                    (resolve, reject) => {
                                        const video =
                                            document.createElement("video");
                                        let url;
                                        video.onloadedmetadata = function () {
                                            file["width"] = video.videoWidth;
                                            file["height"] = video.videoHeight;
                                            resolve(file);
                                        };
                                        console.log("d event in video", video);
                                        url = URL.createObjectURL(file);
                                        video.src = url;
                                    }
                                );
                                promises.push(promise);
                            }
                        }
                    } else {
                        console.log("dhruvin is heif");
                        const promise = new Promise((resolve, reject) => {
                            heic2any({
                                blob: file,
                                toType: "image/jpeg", // Convert to JPEG format
                                quality: 1, // Set quality value as per your requirements
                            }).then((convertedBlob) => {
                                const image2 = new Image();
                                let url;
                                image2.onload = function () {
                                    convertedBlob["width"] = image2.width;
                                    convertedBlob["height"] = image2.height;
                                    convertedBlob["name"] =
                                        image2.height + image2.size + ".jpeg";
                                    resolve(convertedBlob);
                                };
                                url = URL.createObjectURL(convertedBlob);
                                image2.src = url;
                            });
                        });
                        promises.push(promise);
                    }
                }

                return await Promise.all(promises);
            },
            validator: (file) => {
                if (
                    file.type != "video/mp4" &&
                    file.type != "video/mov" &&
                    file.type != "image/jpg" &&
                    file.type != "image/jpeg" &&
                    file.type != "image/png" &&
                    file.type != "image/heic" &&
                    file.type != "video/quicktime" &&
                    file.type != ""
                ) {
                    return {
                        code: "small-width",
                        message: `Image width must be greater than 800`,
                    };
                } else if (file?.width < 5|| file?.height < 5) {
                    return {
                        code: "small-width",
                        message: `Image width must be greater than 800`,
                    };
                }
                return null;
            },
        });
    // console.log("acceptedFiles", acceptedFiles);
    // console.log("fileRejections", fileRejections);

    // const acceptedFileItems = acceptedFiles.map((file) => (
    //     <li key={file.path}>
    //         {file.path} - {file.size} bytes
    //     </li>
    // ));

    // const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    //     <li key={file.path}>
    //         {file.path} - {file.size} bytes
    //         <ul>
    //             {errors.map((e) => (
    //                 <li key={e.code}>{e.message}</li>
    //             ))}
    //         </ul>
    //     </li>
    // ));

    useEffect(() => {
        if (acceptedFiles.length > 0) {
            // acceptedFiles.map((file) =>
            uploadAcceptedFile(acceptedFiles);
            // );
        }
    }, [acceptedFiles]);
    const uploadAcceptedFile = (acceptedFiles) => {
        if (token && firstName && lastName && email) {
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
    // dnduploaader ended
    // form start

    // const makeRequest = (e) => {
    //     e.preventDefault();
    //     if (greetData?.id) {
    //         dispatch({
    //             type: actionTypes.POST_FILE_INVITED_USER,
    //             payload: {
    //                 media: file,
    //                 greet_token: token,
    //                 first_name: first_name,
    //                 last_name: last_name,
    //                 email: email,
    //             },
    //         });
    //     }
    // };
    return (
        <div className="invite-pages">
            <div>
                <div>
                    <div className="page dashboard pt-4">
                        <div className="media-actions media-section">
                            <div className="card-round bg-11">
                                <img
                                    src={bg}
                                    className="background mb-0"
                                    alt="background"
                                />
                                {/* <div className="text-text">
                                    <div className="card-head color-white">
                                        <div className="font-20 bold">
                                            {greetData?.occasion_name}
                                        </div>
                                        <div>
                                            Sweet Greets on{" "}
                                            {greetData?.occasion_date}
                                        </div>
                                    </div>
                                </div> */}
                                <div className="text-text">
                                    <div className="card-head color-white">
                                        <div className="font-20 bold">
                                            Welcome to U-Greet
                                        </div>
                                        <div>Where Stories Matter</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className="media-section bg-2">
                            <div className="section-head">
                                <div className="font-17 bold">
                                    Media Gallery
                                </div>
                                <div className="font-12">
                                    Upload pictures and/or personalized videos
                                </div>
                            </div>
                            <div>
                                {/* <div className="double-container"> */}
                                {NextClicked ? (
                                    <div className="upload bg-white">
                                        <div
                                            style={{
                                                border:
                                                    fileRejections.length > 0
                                                        ? "2px solid red"
                                                        : "",
                                                height: "100%",
                                            }}
                                            className="text-center align-items-center justify-content-center"
                                        >
                                            <div
                                                className="card text-center align-items-center justify-content-center"
                                                style={{ height: "100%" }}
                                            >
                                                <div
                                                    {...getRootProps({
                                                        className: "dropzone",
                                                    })}
                                                >
                                                    <div
                                                        style={{
                                                            marginBottom:
                                                                "10px",
                                                        }}
                                                    >
                                                        <input
                                                            {...getInputProps()}
                                                        />
                                                        <img
                                                            src={dnd}
                                                            alt="drag and drop"
                                                            width={200}
                                                        />
                                                        <p>
                                                            Drag n’ Drop or
                                                            Select Files
                                                        </p>
                                                        <span
                                                            style={{
                                                                color:
                                                                    fileRejections.length >
                                                                        0
                                                                        ? "red"
                                                                        : "",
                                                            }}
                                                        >
                                                            Edit and arrange pictures and videos to your liking and customize with music and background.
                                                        </span>
                                                    </div>
                                                    <button
                                                        // {...getRootProps({ className: "dropzone" })}
                                                        // onClick={openDialog}
                                                        style={{
                                                            width: "fit-content",
                                                        }}
                                                        className="bg-10 bold color-white disableOnSubmit"
                                                    >
                                                        <div>Select Files</div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* </section> */}
                                    </div>
                                ) : (
                                    <div className="upload bg-white">
                                        {/* <div className="font-17 bold card text-center">
                        Uploaded Media
                    </div> */}
                                        {/* <SortableMedia /> */}
                                        {/* <div className="left">
                        <div className="container">
                            <div className="content"> */}
                                        <div className="card justify-content-center p-4 ">
                                            <div className="head">
                                                <div className="font-26 bold head">
                                                    Your Details
                                                </div>
                                                <br />
                                            </div>
                                            <form
                                                method="POST"
                                                action="#"
                                                onSubmit={() => {
                                                    setNextClicked(true);
                                                    uploadAcceptedFile("");
                                                }}
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
                                                                    e.target
                                                                        .value
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
                                                        {/* {renderFieldError(
                                                "first_name"
                                            )} */}
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
                                                                    e.target
                                                                        .value
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
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            tabIndex="3"
                                                        />
                                                        <div
                                                            style={{
                                                                color: "red",
                                                            }}
                                                        ></div>
                                                        {/* {renderFieldError(
                                                "email"
                                            )} */}
                                                    </div>
                                                </div>

                                                {/* Signup Button */}
                                                <div className="item">
                                                    <button
                                                        type="submit"
                                                        className="bg-3 bold disableOnSubmit button-item w-auto"
                                                    >
                                                        {/* <Link to="/dashboard"> */}
                                                        Next
                                                        {/* </Link> */}
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        {/* </div>
                    </div> */}
                                    </div>
                                )}
                                {NextClicked && (
                                    <div className="upload bg-white">
                                        {/* hi */}
                                        <SortableMedia
                                            isContribution={true}
                                            greet_token={token}
                                            first_name={firstName}
                                            last_name={lastName}
                                            email={email}

                                        // contributedMedia={
                                        //     greetContributedMedia
                                        // }
                                        />
                                        <div className="font-12 card text-center">
                                            File Requirements: Video must be .MP4 or .MOV &
                                    Image must be .JPG, .JPEG, .PNG or .HEIC format. Both
                                    require dimensions above 500px
                                        </div>
                                    </div>
                                )}
                                {NextClicked && (
                                    <div style={{ textAlign: "end" }}>
                                        <button
                                            onClick={() => navigate("/")}
                                            style={{
                                                width: "fit-content",
                                            }}
                                            className="bg-10 bold color-white disableOnSubmit"
                                        >
                                            <div>Done</div>
                                        </button>
                                    </div>
                                )}
                                {/* </div> */}
                            </div>
                        </section>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default InvitedToGreet;
