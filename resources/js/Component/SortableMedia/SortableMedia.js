import React, { useRef, useState } from "react";
import { useEffect } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import actionTypes from "../../State/actions/actionTypes";
import "./SortableMedia.css";
import {
    sortableContainer,
    sortableElement,
    // SortableHandle,
} from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";
import arrayMove from "array-move";
import ReactTooltip from "react-tooltip";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";
import RenderVideoThumbnailWithPlay from "./RenderVideoThumbnailWithPlay";
import CustomLightBox from "./CustomLightBox";
import { useContext } from "react";
import AuthContext from "../../context/authContext";
import CustomVideoLightBox from "./CustomVideoLightBox";

function SortableMedia({
    isContribution,
    media,
    greet_token,
    first_name,
    last_name,
    email,
}) {
    const dispatch = useDispatch();
    const { greetData, uploadedMedia, greetContributedMedia } = useSelector(
        (state) => state
    );
    const { state } = useContext(AuthContext);

    const [characters, setCharacters] = useState();
    const [isOpen, setOpen] = useState(false);
    const [urlVid, setUrlVid] = useState("");
    const [showImagePopUp, setShowImagePopUp] = useState(false);
    const [UrlImage, setUrlImage] = useState("");

    useEffect(() => {
        console.log("shru greetContributedMedia2", greetContributedMedia);
        setCharacters(greetContributedMedia);
    }, [greetContributedMedia]);
    useEffect(() => {
        setCharacters(uploadedMedia);
    }, [uploadedMedia]);
    // useEffect(() => {
    //     if (contributedMedia) {
    //         setCharacters(contributedMedia);
    //     }
    // }, [contributedMedia]);
    console.log("shru greetContributedMedia", greetContributedMedia);
    // function handleOnDragEnd(result) {
    //     if (!result.destination) return;
    //     const items = Array.from(characters);
    //     // const objIndex = items.findIndex((obj) => obj.index == result.source.index);
    //     const recordSourceOrder = items[result.source.index].order;
    //     items[result.source.index].order =
    //         items[result.destination.index].order;
    //     // const objDest = items.findIndex((obj) => obj.order == result.destination.order);
    //     items[result.destination.index].order = recordSourceOrder;

    //     const [reorderedItem] = items.splice(result.source.index, 1);
    //     items.splice(result.destination.index, 0, reorderedItem);

    //     setCharacters(items);
    // }

    const SortableItem = sortableElement(({ value }) => <>{value}</>);
    const SortableContainer = sortableContainer(({ children }) => {
        return <>{children}</>;
    });
    const onSortEnd = ({ oldIndex, newIndex }) => {
        console.log("dhruvinarr", oldIndex, newIndex);
        // const items = arrayMoveImmutable(characters, oldIndex, newIndex);

        const items = Array.from(characters);
        // const objIndex = items.findIndex((obj) => obj.index == result.source.index);
        const recordSourceOrder = items[oldIndex].order;
        items[oldIndex].order = items[newIndex].order;
        // const objDest = items.findIndex((obj) => obj.order == result.destination.order);
        items[newIndex].order = recordSourceOrder;

        const [reorderedItem] = items.splice(oldIndex, 1);
        items.splice(newIndex, 0, reorderedItem);

        setCharacters(items);

        // const newitemarr = ({ characters }) => ({
        //     characters: arrayMove(characters, oldIndex, newIndex),
        // });
        // console.log("dhruvinarr arr newitemarr", newitemarr);

        if (greetData?.id && items) {
            dispatch({
                type: actionTypes.MERGE_MEDIA,
                payload: {
                    greet_id: greetData?.id,
                    arr: items,
                },
            });
        }
    };
    sessionStorage.setItem("sortedMediaForMerge", JSON.stringify(characters));

    const [popup, setPopup] = useState({
        show: false, // initial values set to false and null
        id: null,
    });

    // This will show the Cofirmation Box

    const handleDelete = (id, e) => {
        if (e && e.stopPropagation) {
            e.stopPropagation();
            e.cancelBubble = true;
        }
        /** code to delete the vacation **/
        setPopup({
            show: true,
            id,
        });
    };

    // This will perform the deletion and hide the Confirmation Box

    const handleDeleteTrue = () => {
        if (isContribution) {
            if (popup.show && popup.id) {
                dispatch({
                    type: actionTypes.DELETE_MEDIA_CONTRI,
                    payload: {
                        id: popup.id,
                        greet_id: greetData?.id,
                        media: media,
                        greet_token: greet_token,
                        first_name: first_name,
                        last_name: last_name,
                        email: email,
                    },
                });
                setPopup({
                    show: false,
                    id: null,
                });
            }
        } else {
            if (popup.show && popup.id) {
                dispatch({
                    type: actionTypes.DELETE_MEDIA,
                    payload: {
                        id: popup.id,
                        greet_id: greetData?.id,
                    },
                });
                setPopup({
                    show: false,
                    id: null,
                });
            }
        }
    };

    // This will just hide the Confirmation Box when user clicks "No"/"Cancel"

    const handleDeleteFalse = () => {
        setPopup({
            show: false,
            id: null,
        });
    };
    // const handleImageClose = () => {
    //     setShowImagePopUp(false);
    //     if (greetData?.id && characters) {
    //         dispatch({
    //             type: actionTypes.MERGE_MEDIA,
    //             payload: {
    //                 greet_id: greetData?.id,
    //                 arr: characters,
    //             },
    //         });
    //     }
    // };

    // const handleCreateClick = () => {
    //     dispatch({
    //         type: actionTypes.CREATE_VIDEO,
    //         payload: {
    //             greet_id: greetData?.id,
    //         },
    //     });
    // };

    const validImageTypes = ["gif", "jpg", "jpeg", "png"];
    return (
        // <section className="container mt-0">
        <div>
            <div className="card bold">
                <header className="App-header d-flex flex-wrap">
                    {popup.show ? (
                        <div className="d-flex align-items-center w-100 justify-content-center">
                            <div
                                className="text-center align-items-center w-100 justify-content-center"
                                style={{
                                    height: "20rem",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <p>Are you sure you wanna delete?</p>
                                <div>
                                    <button
                                        onClick={handleDeleteFalse}
                                        className="modal_buttonCancel m-3"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleDeleteTrue}
                                        className="bg-10 bold color-white m-3"
                                    >
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : characters?.length > 0 ? (
                        <SortableContainer
                            onSortStart={() =>
                                (document.body.style.cursor = "grabbing")
                            }
                            onSortEnd={({ oldIndex, newIndex }) => {
                                onSortEnd({ oldIndex, newIndex }),
                                    (document.body.style.cursor = "default");
                            }}
                            axis="xy"
                            helperClass="SortableHelper"
                            distance={1}
                        >
                            <div className="w-100">
                                <ul className="d-flex flex-wrap">
                                    {characters?.map(
                                        (
                                            // { id, media_path, media_name },
                                            value,
                                            index
                                        ) => {
                                            return (
                                                <>
                                                    {isContribution ? (
                                                        <>
                                                            <div
                                                            // id="parent"
                                                            >
                                                                <div className="overrideStyleForVideo preview border mx-2 mb-3">
                                                                    <div>
                                                                        <div
                                                                            // className="hidden-child deleteAndInfoIcon"
                                                                            className="deleteAndInfoIcon"
                                                                            style={{
                                                                                zIndex: "99",
                                                                                position:
                                                                                    "absolute",
                                                                            }}
                                                                        >
                                                                            <span
                                                                                className=""
                                                                                style={{
                                                                                    paddingLeft:
                                                                                        "3px",
                                                                                    paddingTop:
                                                                                        "3px",
                                                                                    cursor: "pointer",
                                                                                }}
                                                                                onClick={(
                                                                                    e
                                                                                ) =>
                                                                                    handleDelete(
                                                                                        value.id,
                                                                                        e
                                                                                    )
                                                                                }
                                                                            >
                                                                                <i className="flaticon-delete icon-xs text-muted" />
                                                                                {/* <i className="ki ki-bold-close icon-xs text-muted" /> */}
                                                                            </span>
                                                                            {/* <ReactTooltip
                                                                                type="dark"
                                                                                effect="solid"
                                                                            />
                                                                            <span
                                                                                className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                                                                                data-tip={`Uploader: ${value.user.first_name} ${value.user.last_name}`}
                                                                            >
                                                                                <i className="ki ki-outline-info icon-xs text-muted " />
                                                                            </span> */}
                                                                        </div>
                                                                        {validImageTypes.includes(
                                                                            value.media_path.split(
                                                                                "."
                                                                            )[1]
                                                                        ) ? (
                                                                            <div
                                                                                className="video-player"
                                                                                onClick={(
                                                                                    e
                                                                                ) => {
                                                                                    e.preventDefault();
                                                                                    setShowImagePopUp(
                                                                                        true
                                                                                    );
                                                                                    setUrlImage(
                                                                                        value.media_path
                                                                                    );
                                                                                }}
                                                                            >
                                                                                <img
                                                                                    src={
                                                                                        value.media_path
                                                                                    }
                                                                                    alt={
                                                                                        value.media_path
                                                                                    }
                                                                                    className="overrideStyleForImage"
                                                                                    style={{
                                                                                        objectFit:
                                                                                            "cover",
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                        ) : (
                                                                            <div
                                                                                onClick={(
                                                                                    e
                                                                                ) => {
                                                                                    e.preventDefault();
                                                                                    setOpen(
                                                                                        true
                                                                                    );
                                                                                    setUrlVid(
                                                                                        value.media_path
                                                                                    );
                                                                                }}
                                                                                style={{
                                                                                    width: "100%",
                                                                                    height: "100%",
                                                                                }}
                                                                            >
                                                                                <div
                                                                                    style={{
                                                                                        position:
                                                                                            "relative",
                                                                                    }}
                                                                                >
                                                                                    <div>
                                                                                        {/* <VideoThumbnail
                                                                                        videoUrl={
                                                                                            value.media_path
                                                                                        }
                                                                                        snapshotAtTime={
                                                                                            1
                                                                                        }
                                                                                    /> */}
                                                                                        <RenderVideoThumbnailWithPlay
                                                                                            url={
                                                                                                value.media_path
                                                                                            }
                                                                                            ifThumbPresent={
                                                                                                value.media_video_image
                                                                                            }
                                                                                        />
                                                                                    </div>
                                                                                    <div
                                                                                        style={{
                                                                                            position:
                                                                                                "absolute",
                                                                                            top: "50%",
                                                                                            left: "50%",
                                                                                            transform:
                                                                                                "translate(-50%, -50%)",
                                                                                        }}
                                                                                    >
                                                                                        <svg
                                                                                            width="48"
                                                                                            height="48"
                                                                                            viewBox="0 0 24 24"
                                                                                            fill="none"
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                        >
                                                                                            <path
                                                                                                fill-rule="evenodd"
                                                                                                clip-rule="evenodd"
                                                                                                d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.5963 10.3318C16.8872 11.0694 16.8872 12.9307 15.5963 13.6683L11.154 16.2068C9.9715 16.8825 8.5002 16.0287 8.5002 14.6667L8.5002 9.33339C8.5002 7.97146 9.9715 7.11762 11.154 7.79333L15.5963 10.3318Z"
                                                                                                fill="white"
                                                                                            />
                                                                                        </svg>
                                                                                    </div>
                                                                                </div>
                                                                                {/* <VideoPlayer
                                                                                videoUrl={
                                                                                    value.media_path
                                                                                }
                                                                                snapshotAt={
                                                                                    10
                                                                                }
                                                                            /> */}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                                {/* <video
                                                                className="preview border mx-2 mb-3"
                                                                // controls
                                                                preload="metadata"
                                                                id="videoWithData"
                                                                type="video/mp4"
                                                                // currentTime="5"
                                                                // key={id}
                                                                style={{
                                                                    width: "7rem",
                                                                    height: "7rem",
                                                                    objectFit: "cover",
                                                                    // position: "fixed",
                                                                    top: 0,
                                                                    left: 0,
                                                                }}
                                                            >
                                                                <source
                                                                    // src="/media/sample-mp4-file-small.mp4"
                                                                    src={
                                                                        value.media_path +
                                                                        "#t=1.5"
                                                                    }
                                                                    type="video/mp4"
                                                                />
                                                                Your browser does not
                                                                support the video tag.
                                                            </video> */}
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <SortableItem
                                                            className="override border"
                                                            key={value.id}
                                                            index={index}
                                                            // style={{
                                                            //     width: "auto",
                                                            //     display: "flex",
                                                            // }}
                                                            value={
                                                                <div
                                                                // id="parent"
                                                                >
                                                                    <div className="overrideStyleForVideo preview border mx-2 mb-3">
                                                                        <div>
                                                                            <div
                                                                                // className="hidden-child deleteAndInfoIcon"
                                                                                className="deleteAndInfoIcon"
                                                                                style={{
                                                                                    zIndex: "99",
                                                                                    position:
                                                                                        "absolute",
                                                                                }}
                                                                            >
                                                                                <span
                                                                                    className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                                                                                    onClick={(
                                                                                        e
                                                                                    ) =>
                                                                                        handleDelete(
                                                                                            value.id,
                                                                                            e
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    <i className="flaticon-delete icon-xs text-muted" />
                                                                                    {/* <i className="ki ki-bold-close icon-xs text-muted" /> */}
                                                                                </span>
                                                                                <ReactTooltip
                                                                                    type="dark"
                                                                                    effect="solid"
                                                                                />
                                                                                <span
                                                                                    className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                                                                                    data-tip={`Uploader: ${value.user.first_name} ${value.user.last_name}`}
                                                                                >
                                                                                    <i className="ki ki-outline-info icon-xs text-muted " />
                                                                                </span>
                                                                            </div>
                                                                            {validImageTypes.includes(
                                                                                value.media_path.split(
                                                                                    "."
                                                                                )[1]
                                                                            ) ? (
                                                                                <div
                                                                                    className="video-player"
                                                                                    onClick={(
                                                                                        e
                                                                                    ) => {
                                                                                        e.preventDefault();
                                                                                        setShowImagePopUp(
                                                                                            true
                                                                                        );
                                                                                        setUrlImage(
                                                                                            value.media_path
                                                                                        );
                                                                                    }}
                                                                                >
                                                                                    <img
                                                                                        src={
                                                                                            value.media_path
                                                                                        }
                                                                                        alt={
                                                                                            value.media_path
                                                                                        }
                                                                                        className="overrideStyleForImage"
                                                                                        style={{
                                                                                            objectFit:
                                                                                                "cover",
                                                                                        }}
                                                                                    />
                                                                                </div>
                                                                            ) : (
                                                                                <div
                                                                                    onClick={(
                                                                                        e
                                                                                    ) => {
                                                                                        e.preventDefault();
                                                                                        setOpen(
                                                                                            true
                                                                                        );
                                                                                        setUrlVid(
                                                                                            value.media_path
                                                                                        );
                                                                                    }}
                                                                                    style={{
                                                                                        width: "100%",
                                                                                        height: "100%",
                                                                                    }}
                                                                                >
                                                                                    <div
                                                                                        style={{
                                                                                            position:
                                                                                                "relative",
                                                                                        }}
                                                                                    >
                                                                                        <div>
                                                                                            {/* <VideoThumbnail
                                                                                        videoUrl={
                                                                                            value.media_path
                                                                                        }
                                                                                        snapshotAtTime={
                                                                                            1
                                                                                        }
                                                                                    /> */}
                                                                                            <RenderVideoThumbnailWithPlay
                                                                                                url={
                                                                                                    value.media_path
                                                                                                }
                                                                                                ifThumbPresent={
                                                                                                    value.media_video_image
                                                                                                }
                                                                                            />
                                                                                        </div>
                                                                                        <div
                                                                                            style={{
                                                                                                position:
                                                                                                    "absolute",
                                                                                                top: "50%",
                                                                                                left: "50%",
                                                                                                transform:
                                                                                                    "translate(-50%, -50%)",
                                                                                            }}
                                                                                        >
                                                                                            <svg
                                                                                                width="48"
                                                                                                height="48"
                                                                                                viewBox="0 0 24 24"
                                                                                                fill="none"
                                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                            >
                                                                                                <path
                                                                                                    fill-rule="evenodd"
                                                                                                    clip-rule="evenodd"
                                                                                                    d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM15.5963 10.3318C16.8872 11.0694 16.8872 12.9307 15.5963 13.6683L11.154 16.2068C9.9715 16.8825 8.5002 16.0287 8.5002 14.6667L8.5002 9.33339C8.5002 7.97146 9.9715 7.11762 11.154 7.79333L15.5963 10.3318Z"
                                                                                                    fill="white"
                                                                                                />
                                                                                            </svg>
                                                                                        </div>
                                                                                    </div>
                                                                                    {/* <VideoPlayer
                                                                                videoUrl={
                                                                                    value.media_path
                                                                                }
                                                                                snapshotAt={
                                                                                    10
                                                                                }
                                                                            /> */}
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                    {/* <video
                                                                className="preview border mx-2 mb-3"
                                                                // controls
                                                                preload="metadata"
                                                                id="videoWithData"
                                                                type="video/mp4"
                                                                // currentTime="5"
                                                                // key={id}
                                                                style={{
                                                                    width: "7rem",
                                                                    height: "7rem",
                                                                    objectFit: "cover",
                                                                    // position: "fixed",
                                                                    top: 0,
                                                                    left: 0,
                                                                }}
                                                            >
                                                                <source
                                                                    // src="/media/sample-mp4-file-small.mp4"
                                                                    src={
                                                                        value.media_path +
                                                                        "#t=1.5"
                                                                    }
                                                                    type="video/mp4"
                                                                />
                                                                Your browser does not
                                                                support the video tag.
                                                            </video> */}
                                                                </div>
                                                            }
                                                        />
                                                    )}
                                                </>
                                            );
                                        }
                                    )}
                                </ul>
                                {/* <div
                                    className="w-100"
                                    style={{
                                        display: "flex",
                                        flexDirection: "row-reverse",
                                    }}
                                >
                                    <button
                                        onClick={() => handleCreateClick()}
                                        className="bg-3 bold mr-10"
                                    >
                                        Create Video Request
                                    </button>
                                </div> */}
                            </div>
                        </SortableContainer>
                    ) : (
                        <div
                            className="d-flex flex-column align-items-center text-center justify-content-center empty  "
                            style={{ width: "100%" }}
                        >
                            <img
                                src="/assets/images/empty.da9f33de.svg"
                                alt="empty"
                                width={100}
                                height={100}
                            />
                            <div className="font-25 color-grey mt-2 ">
                                No Item
                            </div>
                        </div>
                    )}
                </header>
            </div>
            {UrlImage && showImagePopUp && (
                <CustomLightBox
                    image={UrlImage}
                    onClose={() => setShowImagePopUp(false)}
                    // onClose={() => handleImageClose()}
                    allowZoom={false}
                    allowRotate={isContribution ? false : true}
                    dispatch={dispatch}
                    greetId={greetData?.id}
                    userId={state?.user?.id}
                />
            )}
            {urlVid && isOpen && (
                <CustomVideoLightBox
                    image={urlVid}
                    onClose={() => setOpen(false)}
                    allowZoom={false}
                    allowRotate={isContribution ? false : true}
                    dispatch={dispatch}
                    greetId={greetData?.id}
                    userId={state?.user?.id}
                />
            )}
        </div>
        // </section>
    );
}

export default SortableMedia;
