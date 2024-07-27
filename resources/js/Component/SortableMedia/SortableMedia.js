import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import actionTypes from "../../State/actions/actionTypes";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import { arrayMoveImmutable } from "array-move";
import ReactTooltip from "react-tooltip";
import AuthContext from "../../context/authContext";
import CustomLightBox from "./CustomLightBox";
import CustomVideoLightBox from "./CustomVideoLightBox";
import RenderVideoThumbnailWithPlay from "./RenderVideoThumbnailWithPlay";
import "./SortableMedia.css";

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

    const [characters, setCharacters] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [urlVid, setUrlVid] = useState("");
    const [showImagePopUp, setShowImagePopUp] = useState(false);
    const [urlImage, setUrlImage] = useState("");
    const [popup, setPopup] = useState({ show: false, id: null });

    useEffect(() => {
        if (greetContributedMedia && greetContributedMedia.length > 0) {
            setCharacters(greetContributedMedia);
        } else {
            setCharacters(uploadedMedia || []);
        }
    }, [greetContributedMedia, uploadedMedia]);

    const SortableItem = sortableElement(({ value }) => <>{value}</>);
    const SortableContainer = sortableContainer(({ children }) => {
        return <>{children}</>;
    });

    const onSortEnd = ({ oldIndex, newIndex }) => {
        const items = arrayMoveImmutable(characters, oldIndex, newIndex);
        setCharacters(items);

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

    const handleDelete = (id, e) => {
        e.stopPropagation();
        e.cancelBubble = true;
        setPopup({ show: true, id });
    };

    const handleDeleteTrue = () => {
        if (popup.show && popup.id) {
            dispatch({
                type: isContribution
                    ? actionTypes.DELETE_MEDIA_CONTRI
                    : actionTypes.DELETE_MEDIA,
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
            setPopup({ show: false, id: null });
        }
    };

    const handleDeleteFalse = () => {
        setPopup({ show: false, id: null });
    };

    const validImageTypes = ["gif", "jpg", "jpeg", "png"];

    return (
        <div>
            <div className="card bold">
                <header className="App-header d-flex flex-wrap">
                    {popup.show ? (
                        <div className="d-flex align-items-center w-100 justify-content-center">
                            <div className="text-center align-items-center w-100 justify-content-center">
                                <p>Are you sure you want to delete?</p>
                                <div>
                                    <button onClick={handleDeleteFalse} className="modal_buttonCancel m-3">
                                        Cancel
                                    </button>
                                    <button onClick={handleDeleteTrue} className="bg-10 bold color-white m-3">
                                        Confirm
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : characters && characters.length > 0 ? (
                        <SortableContainer
                            onSortStart={() => (document.body.style.cursor = "grabbing")}
                            onSortEnd={({ oldIndex, newIndex }) => {
                                onSortEnd({ oldIndex, newIndex });
                                document.body.style.cursor = "default";
                            }}
                            axis="xy"
                            helperClass="SortableHelper"
                            distance={1}
                        >
                            <div className="w-100">
                                <ul className="d-flex flex-wrap">
                                    {characters.map((value, index) => (
                                        <SortableItem
                                            key={value.id}
                                            index={index}
                                            value={
                                                <div>
                                                    <div className="overrideStyleForVideo preview border mx-2 mb-3">
                                                        <div className="deleteAndInfoIcon" style={{ zIndex: "99", position: "absolute" }}>
                                                            <span
                                                                className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                                                                onClick={(e) => handleDelete(value.id, e)}
                                                            >
                                                                <i className="flaticon-delete icon-xs text-muted" />
                                                            </span>
                                                            <ReactTooltip type="dark" effect="solid" />
                                                            <span
                                                                className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                                                                data-tip={`Uploader: ${value.user.first_name} ${value.user.last_name}`}
                                                            >
                                                                <i className="ki ki-outline-info icon-xs text-muted " />
                                                            </span>
                                                        </div>
                                                        {validImageTypes.includes(value.media_path.split(".").pop()) ? (
                                                            <div
                                                                className="video-player"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    setShowImagePopUp(true);
                                                                    setUrlImage(value.media_path);
                                                                }}
                                                            >
                                                                <img
                                                                    src={value.media_path}
                                                                    alt="Media Thumbnail"
                                                                    className="overrideStyleForImage"
                                                                    style={{ objectFit: "cover" }}
                                                                />
                                                            </div>
                                                        ) : (
                                                            <div
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    setOpen(true);
                                                                    setUrlVid(value.media_path);
                                                                }}
                                                                style={{ width: "100%", height: "100%" }}
                                                            >
                                                                <RenderVideoThumbnailWithPlay
                                                                    url={value.media_path}
                                                                    ifThumbPresent={value.media_video_image}
                                                                />
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            }
                                        />
                                    ))}
                                </ul>
                            </div>
                        </SortableContainer>
                    ) : (
                        <div className="d-flex flex-column align-items-center text-center justify-content-center empty" style={{ width: "100%" }}>
                            <img
                                src="/assets/images/empty.da9f33de.svg"
                                alt="empty"
                                width={100}
                                height={100}
                            />
                            <div className="font-25 color-grey mt-2">No Item</div>
                        </div>
                    )}
                </header>
            </div>
            {urlImage && showImagePopUp && (
                <CustomLightBox
                    image={urlImage}
                    onClose={() => setShowImagePopUp(false)}
                    allowZoom={false}
                    allowRotate={!isContribution}
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
                    allowRotate={!isContribution}
                    dispatch={dispatch}
                    greetId={greetData?.id}
                    userId={state?.user?.id}
                />
            )}
        </div>
    );
}

export default SortableMedia;
