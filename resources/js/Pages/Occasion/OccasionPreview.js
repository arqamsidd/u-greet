import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import actionTypes from "../../State/actions/actionTypes";
import { useState } from "react";

const OccasionPreview = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { greetData, finalVideo, isLoading } = useSelector((state) => state);
    const allData  = useSelector((state)=> state)
    console.log('!!allData', allData)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    if (sessionStorage.sortedMediaForMerge) {
        var arr = JSON.parse(sessionStorage?.sortedMediaForMerge);
    }
    // if (arr) {
    //     sessionStorage.removeItem("sortedMediaForMerge");
    // }
    console.log("finalVideo", finalVideo);
    useEffect(() => {
        if (sessionStorage.greetData_onReloading) {
            var reloading = JSON.parse(sessionStorage?.greetData_onReloading);
        }
        console.log("reloading", reloading);
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

    useEffect(() => {
        if (greetData?.id) {
            dispatch({
                type: actionTypes.PREVIEW_MEDIA,
                payload: {
                    greet_id: greetData?.id,
                },
            });
        }
    }, [greetData?.id]);

    const handleCreateClick = () => {
        dispatch({
            type: actionTypes.CREATE_VIDEO,
            payload: {
                greet_id: greetData?.id,
                setIsButtonDisabled: setIsButtonDisabled,
            },
        });
        // setIsButtonDisabled(true);
    };

    const renderVideoContent = () => {
        return <>
            {(finalVideo?.Video_link_final || finalVideo?.Video_link_preview) &&
                <video
                    className="preview"
                    controls
                    controlsList={finalVideo.Payment_status != "succeeded" && "nodownload"}
                    id="videoWithData"
                    type="video/mp4"
                    key={
                        finalVideo?.Video_link_preview
                    }
                >
                    <source
                        src={
                            finalVideo?.Video_link_preview
                        }
                       
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>}
          
            {(finalVideo.Payment_status != "succeeded") && <div className="font-20 color-grey m-2 ">
                {(finalVideo.video_request_status != "" || isButtonDisabled) ? "Your preview request is in progress. If you wish to do more preview requests then please click on the below button." : 'Please click on "Create Video Request" to start the process. You will be notified by email once the preview is generated.'}
                <div className="w-100 mt-8">
                    <button
                        onClick={() => handleCreateClick()}
                        className="bg-3 bold mr-10"
                    >
                        Create Video Request
                    </button>
                </div>
            </div>}
        </>

    };

    return (
        <div>
            <div className="Toastify" />
            <div className="navigation bg-white">
                <div className="inner inner-occasion inner-action">
                    <div
                        className="left link"
                        onClick={() => navigate("/occasionInformation")}
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
            {!isLoading && (
                <div className="page dashboard">
                    {finalVideo?.uploads == "False" ? (
                        <section className="media-section media-section2 bg-2">
                            Please Upload Media and then create video request to
                            preview video
                        </section>
                    ) : (
                        <section className="media-section media-section2 bg-2">
                            <div className="section-head">
                                <div className="font-17 bold">
                                    Preview Video
                                </div>
                                <div className="font-12">
                                    Preview your video, check out your montage.
                                    <br />
                                    Edit, arrange, and create new previews until you are satisfied by clicking the button below!
                                </div>
                            </div>
                            <div className="themes-container card-round bg-white">
                                {finalVideo ? (
                                    renderVideoContent()
                                ) : (
                                    <div className="font-20 color-grey m-2 ">
                                        Your preview video making is in process.
                                        You will be notified by email once the
                                        preview is generated.
                                    </div>
                                )}
                            </div>
                            <div className="empty text-center">

                            </div>
                        </section>
                    )}
                </div>
            )}
            <Footer />
        </div>
    );
};

export default OccasionPreview;
