import copy from "copy-to-clipboard";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import actionTypes from "../../State/actions/actionTypes";

const OccasionInvite2 = ({ setEditInvite2, setEditInvite1, greetDataa }) => {
    const element = document.getElementById("ugreetAppHtml");
    if (element && !element.classList.contains("f-style-bundle")) {
        element.classList.add("f-style-bundle");
    }

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { greetData, inviteLink } = useSelector((state) => state);
    const [click, setClick] = useState(false);

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

    useEffect(() => {
        if (greetData.id) {
            dispatch({
                type: actionTypes.GET_INVITE_LINK,
                payload: { greet_id: greetData.id },
            });
        }
    }, [dispatch, greetData.id]);

    return (
        <div className="style-bundle-fsize style-bundle-poppin page-impstyle-bundle stypage-plr-out">
            <div className="invite-navigation">
                <div
                    className="item bg-2"
                    onClick={() => {
                        setEditInvite2(false);
                        setEditInvite1(true);
                    }}
                >
                    <div className="number bg-4 bg-4-fx">
                        <span>1</span>
                    </div>
                    <div className="description">
                        <div className="bold font-15">Customize</div>
                        <div>Add Details</div>
                    </div>
                </div>
                <div className="item bg-white">
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
                <div className="head font-17 bold center">Send Invite</div>
                <div className="social">
                    <div>
                        <div
                            className="tab"
                            onClick={() => {
                                const linkMessage =
                                    greetData?.occasion_name === "U-Remember"
                                        ? `During this difficult time, ${greetData?.greet_celebrant[0]?.first_name}'s loved ones have requested your participation in honoring ${greetData?.greet_celebrant[0]?.first_name}'s legacy by contributing to a video time capsule. Being a part of this memorial tribute will ensure ${greetData?.greet_celebrant[0]?.first_name}'s story is recorded for all of time. The U-Remember will honor, cherish, and preserve ${greetData?.greet_celebrant[0]?.first_name}'s memory. We also hope it will bring comfort, healing, and solace to ${greetData?.greet_celebrant[0]?.first_name}'s friends and family. Thank you for your video and image contributions.

Use this link to contribute: ${inviteLink}
Last date to contribute: ${greetData?.contribution_deadline_date}

In loving memory.

U-Greet`
                                        : `Greetings fellow U-Greeter,

We are beyond excited to share that you have been personally selected to join a video tribute for ${greetData?.greet_celebrant[0]?.first_name} ${greetData?.greet_celebrant[0]?.last_name}. Could you please help these extraordinary people tell the story they wish to share? Upload your favorite pictures and videos and be the reason someone smiles today!

Use this link to contribute: ${inviteLink}
Last date to contribute: ${greetData?.contribution_deadline_date}

Love, U-Greet
XO

P.S. for tips on what to upload or creative ideas, check us out at www.u-greet.com`;

                                window.open(`fb-messenger://share/?link=${encodeURIComponent(linkMessage)}`);
                            }}
                            style={{ cursor: "pointer" }}
                        >
                            <img src="assets/images/messenger.c6a1ee37.svg" alt="messenger" />
                            <div className="font-10">Messenger</div>
                        </div>
                        <div className="tab" style={{ cursor: "pointer" }}>
                            <a
                                href={
                                    greetData?.occasion_name === "U-Remember"
                                        ? `whatsapp://send?text=${encodeURIComponent(
                                              `During this difficult time, ${greetData?.greet_celebrant[0]?.first_name}'s loved ones have requested your participation in honoring ${greetData?.greet_celebrant[0]?.first_name}'s legacy by contributing to a video time capsule. Being a part of this memorial tribute will ensure ${greetData?.greet_celebrant[0]?.first_name}'s story is recorded for all of time. The U-Remember will honor, cherish, and preserve ${greetData?.greet_celebrant[0]?.first_name}'s memory. We also hope it will bring comfort, healing, and solace to ${greetData?.greet_celebrant[0]?.first_name}'s friends and family. Thank you for your video and image contributions.

Use this link to contribute: ${inviteLink}
Last date to contribute: ${greetData?.contribution_deadline_date}

In loving memory.

U-Greet`
                                          )}`
                                        : `whatsapp://send?text=${encodeURIComponent(
                                              `Greetings fellow U-Greeter,

We are beyond excited to share that you have been personally selected to join a video tribute for ${greetData?.greet_celebrant[0]?.first_name} ${greetData?.greet_celebrant[0]?.last_name}. Could you please help these extraordinary people tell the story they wish to share? Upload your favorite pictures and videos and be the reason someone smiles today!

Use this link to contribute: ${inviteLink}
Last date to contribute: ${greetData?.contribution_deadline_date}

Love, U-Greet
XO

P.S. for tips on what to upload or creative ideas, check us out at www.u-greet.com`
                                          )}`
                                }
                                data-action="share/whatsapp/share"
                                target="_blank"
                                style={{ color: "black" }}
                            >
                                <img src="assets/images/whatsapp.27d3105f.svg" alt="whatsapp" />
                                <div className="font-10">WhatsApp</div>
                            </a>
                        </div>
                        <div className="tab" style={{ cursor: "pointer" }}>
                            <a
                                href={
                                    greetData?.occasion_name === "U-Remember"
                                        ? `mailto:?subject=${encodeURIComponent(`${greetData?.occasion_name} occasion Invitation on ${greetData?.occasion_date}`)}&body=${encodeURIComponent(
                                              `During this difficult time, ${TgreetData?.greet_celebrant[0]?.first_name}'s loved ones have requested your participation in honoring ${greetData?.greet_celebrant[0]?.first_name}'s legacy by contributing to a video time capsule. Being a part of this memorial tribute will ensure ${greetData?.greet_celebrant[0]?.first_name}'s story is recorded for all of time. The U-Remember will honor, cherish, and preserve ${greetData?.greet_celebrant[0]?.first_name}'s memory. We also hope it will bring comfort, healing, and solace to ${greetData?.greet_celebrant[0]?.first_name}'s friends and family. Thank you for your video and image contributions.

Use this link to contribute: ${inviteLink}
Last date to contribute: ${greetData?.contribution_deadline_date}

In loving memory.

U-Greet`
                                          )}`
                                        : `mailto:?subject=${encodeURIComponent(`${greetData?.occasion_name} occasion Invitation on ${greetData?.occasion_date}`)}&body=${encodeURIComponent(
                                              `Greetings fellow U-Greeter,

We are beyond excited to share that you have been personally selected to join a video tribute for ${greetData?.greet_celebrant[0]?.first_name} ${greetData?.greet_celebrant[0]?.last_name}. Could you please help these extraordinary people tell the story they wish to share? Upload your favorite pictures and videos and be the reason someone smiles today!

Use this link to contribute: ${inviteLink}
Last date to contribute: ${greetData?.contribution_deadline_date}

Love, U-Greet
XO

P.S. for tips on what to upload or creative ideas, check us out at www.u-greet.com`
                                          )}`
                                }
                                style={{ color: "black" }}
                            >
                                <img src="assets/images/email2.08e41aee.svg" alt="email" />
                                <div className="font-10">Email</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="social">
                    <div>
                        {inviteLink ? (
                            <div
                                style={{ cursor: "pointer" }}
                                className="tab"
                                onClick={() => {
                                    setClick(true);
                                    copy(`${inviteLink}`);
                                    toast.success("Link copied successfully!", {
                                        position: "bottom-right",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: "colored",
                                    });
                                }}
                            >
                                <img src="assets/images/link.5df60455.svg" alt="link" />
                                <div className="font-10">{click ? "Link Copied" : "Copy Link"}</div>
                            </div>
                        ) : null}
                        <div className="tab" style={{ cursor: "pointer" }}>
                            <a
                                href={
                                    greetData?.occasion_name === "U-Remember"
                                        ? `sms:?body=${encodeURIComponent(
                                              `During this difficult time, ${greetData?.greet_celebrant[0]?.first_name}'s loved ones have requested your participation in honoring ${greetData?.greet_celebrant[0]?.first_name}'s legacy by contributing to a video time capsule. Being a part of this memorial tribute will ensure ${greetData?.greet_celebrant[0]?.first_name}'s story is recorded for all of time. The U-Remember will honor, cherish, and preserve ${greetData?.greet_celebrant[0]?.first_name}'s memory. We also hope it will bring comfort, healing, and solace to ${greetData?.greet_celebrant[0]?.first_name}'s friends and family. Thank you for your video and image contributions.

Use this link to contribute: ${inviteLink}
Last date to contribute: ${greetData?.contribution_deadline_date}

In loving memory.

U-Greet`
                                          )}`
                                        : `sms:?body=${encodeURIComponent(
                                              `Greetings fellow U-Greeter,

We are beyond excited to share that you have been personally selected to join a video tribute for ${greetData?.greet_celebrant[0]?.first_name} ${greetData?.greet_celebrant[0]?.last_name}. Could you please help these extraordinary people tell the story they wish to share? Upload your favorite pictures and videos and be the reason someone smiles today!

Use this link to contribute: ${inviteLink}
Last date to contribute: ${greetData?.contribution_deadline_date}

Love, U-Greet
XO

P.S. for tips on what to upload or creative ideas, check us out at www.u-greet.com`
                                          )}`
                                }
                                style={{ color: "black" }}
                            >
                                <img src="assets/images/message.edd1278e.svg" alt="message" />
                                <div className="font-10">Send Message</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="button-container item">
                    <button
                        onClick={() => {
                            setEditInvite2(false);
                            setEditInvite1(true);
                        }}
                        className="bg-4 bold"
                    >
                        <div>Previous</div>
                    </button>
                    <button className="bg-10 bold color-white" onClick={() => navigate("/dashboard")}>
                        <div>Proceed</div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OccasionInvite2;
