import copy from "copy-to-clipboard";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import actionTypes from "../../State/actions/actionTypes";

const OccasionInvite2 = ({ setEditInvite2, setEditInvite1 }) => {
    const element = document.getElementById("ugreetAppHtml");
    if (element?.classList?.contains("f-style-bundle")) {
    } else {
        element?.classList?.add("f-style-bundle");
    }
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { greetData, inviteLink } = useSelector((state) => state);
    const [click, setClick] = useState(false);
    // const state = useSelector((state) => state);
    // console.log('Current State:', state);
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
    useEffect(() => {
        dispatch({
            type: actionTypes.GET_INVITE_LINK,
            payload: {
                greet_id: greetData.id,
            },
        });
    }, [greetData?.id]);

    return (
        <div className="style-bundle-fsize style-bundle-poppin page-impstyle-bundle stypage-plr-out">
            <div className="invite-navigation">
                <div
                    className="item bg-2"
                    onClick={() => {
                        setEditInvite2(false), setEditInvite1(true);
                    }}
                >
                    <div className="number bg-4 bg-4-fx ">
                        <span>1</span>
                    </div>
                    <div className="description">
                        <div className="bold font-15">Customize</div>
                        <div>Add Details</div>
                    </div>
                </div>
                <div className="item bg-white">
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
                <div className="head font-17 bold center">Send Invite</div>
                <div className="social">
                    <div>
                        <div
                            className="tab"
                            onClick={() => {
                                window.open(
                                    // `fb-messenger://share/?link=${greetData?.occasion_name}%0A${greetData?.greet_celebrant[0]?.first_name}%20${greetData?.greet_celebrant[0]?.last_name}%0A${greetData?.contribution_deadline_date}%0A${inviteLink}%0A%0AGreetings%2C%0A%20%0AWe%20are%20beyond%20excited%20to%20share%20that%20you%20have%20been%20personally%20selected%20to%20join%20a%20video%20tribute%20for%20%20${greetData?.greet_celebrant[0]?.first_name}%20${greetData?.greet_celebrant[0]?.last_name}.%0A%20%0A${greetData?.greet_celebrant[0]?.first_name}%E2%80%99s%20loved%20ones%20have%20personally%20invited%20you%20to%20be%20a%20part%20of%20this%20forever%20story%20that%20they%20want%20to%20tell.%20Being%20included%20in%20someone%E2%80%99s%20video%20time%20capsule%20is%20a%20huge%20honour%3B%20it%20says%20that%20U-Matter%2C%20U%20are%20important%20and%20U%20should%20be%20recorded%20for%20all%20time.%20So%2C%20congratulations%20on%20being%20an%20awesome%20human!%20%0A%20%20%0ACould%20you%20please%20help%20these%20extraordinary%20people%20tell%20the%20story%20they%20wish%20to%20share?%20%0A%20%0AUpload%20your%20favourite%20pictures%20and%20videos%20and%20be%20the%20reason%20someone%20smiles%20today!%0A%20%20%0AP.S.%20for%20tips%20on%20what%20to%20upload%20or%20creative%20ideas%2C%20check%20us%20out%20at%20www.u-greet.com%0A`
                                        greetData?.occasion_name === 'U-Remember'
                                        ? // Your href for the U-REMEMBER condition
                                          `fb-messenger://share/?link=${encodeURIComponent(
                                            `During this difficult time, ${greetData?.greet_celebrant[0]?.first_name}'s loved ones have requested your participation in honoring ${greetData?.greet_celebrant[0]?.first_name}'s legacy by contributing to a video time capsule. Being a part of this memorial tribute will ensure ${greetData?.greet_celebrant[0]?.first_name}'s story is recorded for all of time. 
The U-Remember will honor, cherish, and preserve ${greetData?.greet_celebrant[0]?.first_name}'s memory.
We also hope it will bring comfort, healing, and solace to ${greetData?.greet_celebrant[0]?.first_name}'s friends and family. Thank you for your video and image contributions.

Use this link to contribute: ${inviteLink}
Last date to contribute: ${greetData?.contribution_deadline_date}
                                  
In loving memory.

U-Greet`
                                          )}`
                                        :
                                        `fb-messenger://share/?link=${encodeURIComponent(
                                        `Greetings fellow U-Greeter,
                                        
We are beyond excited to share that you have been personally selected to join a video tribute for ${greetData?.greet_celebrant[0]?.first_name} ${greetData?.greet_celebrant[0]?.last_name}.                                                                               
                                        
Could you please help these extraordinary people tell the story they wish to share?
                                        
Upload your favorite pictures and videos and be the reason someone smiles today!

Use this link to contribute: ${inviteLink}
Last date to contribute: ${greetData?.contribution_deadline_date}
        
Love, U-Greet
XO
                                        
P.S. for tips on what to upload or creative ideas, check us out at www.u-greet.com`
                                    )}`
                                );
                            }}
                            style={{ cursor: "pointer" }}
                        >
                            {/* <a href={`fb-messenger://share/?link=${inviteLink}`}> */}
                            <img
                                src="assets/images/messenger.c6a1ee37.svg"
                                alt="messenger"
                            />
                            <div className="font-10">Messenger</div>
                            {/* </a> */}
                        </div>
                        <div
                            className="tab"
                            style={{ cursor: "pointer" }}
                            // onClick="javascript:location.href='https://web.whatsapp.com/'"
                        >
                            <a
                                // href={`whatsapp://send?text=${greetData?.occasion_name}%0A${greetData?.greet_celebrant[0]?.first_name}%20${greetData?.greet_celebrant[0]?.last_name}%0A${greetData?.contribution_deadline_date}%0A${inviteLink}%0A%0AGreetings%2C%0A%20%0AWe%20are%20beyond%20excited%20to%20share%20that%20you%20have%20been%20personally%20selected%20to%20join%20a%20video%20tribute%20for%20%20${greetData?.greet_celebrant[0]?.first_name}%20${greetData?.greet_celebrant[0]?.last_name}.%0A%20%0A${greetData?.greet_celebrant[0]?.first_name}%E2%80%99s%20loved%20ones%20have%20personally%20invited%20you%20to%20be%20a%20part%20of%20this%20forever%20story%20that%20they%20want%20to%20tell.%20Being%20included%20in%20someone%E2%80%99s%20video%20time%20capsule%20is%20a%20huge%20honour%3B%20it%20says%20that%20U-Matter%2C%20U%20are%20important%20and%20U%20should%20be%20recorded%20for%20all%20time.%20So%2C%20congratulations%20on%20being%20an%20awesome%20human!%20%0A%20%20%0ACould%20you%20please%20help%20these%20extraordinary%20people%20tell%20the%20story%20they%20wish%20to%20share?%20%0A%20%0AUpload%20your%20favourite%20pictures%20and%20videos%20and%20be%20the%20reason%20someone%20smiles%20today!%0A%20%20%0AP.S.%20for%20tips%20on%20what%20to%20upload%20or%20creative%20ideas%2C%20check%20us%20out%20at%20www.u-greet.com%0A`}

                                href={
                                    greetData?.occasion_name === 'U-Remember'
                                    ? // Your href for the U-REMEMBER condition
                                      `whatsapp://send?text=${encodeURIComponent(
                                        `During this difficult time, ${greetData?.greet_celebrant[0]?.first_name}'s loved ones have requested your participation in honoring ${greetData?.greet_celebrant[0]?.first_name}'s legacy by contributing to a video time capsule. Being a part of this memorial tribute will ensure ${greetData?.greet_celebrant[0]?.first_name}'s story is recorded for all of time. 
The U-Remember will honor, cherish, and preserve ${greetData?.greet_celebrant[0]?.first_name}'s memory.
We also hope it will bring comfort, healing, and solace to ${greetData?.greet_celebrant[0]?.first_name}'s friends and family. Thank you for your video and image contributions.

Use this link to contribute: ${inviteLink}
Last date to contribute: ${greetData?.contribution_deadline_date}

In loving memory.

U-Greet`
                                      )}`
                                    :
                                    `whatsapp://send?text=${encodeURIComponent(
                                    `Greetings fellow U-Greeter,
                                        
We are beyond excited to share that you have been personally selected to join a video tribute for ${greetData?.greet_celebrant[0]?.first_name} ${greetData?.greet_celebrant[0]?.last_name}.                                                                               
                                        
Could you please help these extraordinary people tell the story they wish to share?
                                        
Upload your favorite pictures and videos and be the reason someone smiles today!

Use this link to contribute: ${inviteLink}
Last date to contribute: ${greetData?.contribution_deadline_date}
        
Love, U-Greet
XO
                                        
P.S. for tips on what to upload or creative ideas, check us out at www.u-greet.com`
                                )}`}
                                data-action="share/whatsapp/share"
                                target="_blank"
                                style={{ color: "black" }}
                            >
                                <img
                                    src="assets/images/whatsapp.27d3105f.svg"
                                    alt="whatsapp"
                                />
                                <div className="font-10">WhatsApp</div>
                            </a>
                        </div>
                        <div
                            className="tab"
                            style={{ cursor: "pointer" }}
                            // onClick="javascript:location."
                        >
                        <a
                            href={
                                greetData?.occasion_name === 'U-Remember'
                                ? // Your href for the U-REMEMBER condition
                                  `mailto:?subject=${encodeURIComponent(`${greetData?.occasion_name} occasion Invitation on ${greetData?.occasion_date}`)}&body=${encodeURIComponent(
                                    `During this difficult time, ${greetData?.greet_celebrant[0]?.first_name}'s loved ones have requested your participation in honoring ${greetData?.greet_celebrant[0]?.first_name}'s legacy by contributing to a video time capsule. Being a part of this memorial tribute will ensure ${greetData?.greet_celebrant[0]?.first_name}'s story is recorded for all of time. 
The U-Remember will honor, cherish, and preserve ${greetData?.greet_celebrant[0]?.first_name}'s memory.
We also hope it will bring comfort, healing, and solace to ${greetData?.greet_celebrant[0]?.first_name}'s friends and family. Thank you for your video and image contributions.

Use this link to contribute: ${inviteLink}
Last date to contribute: ${greetData?.contribution_deadline_date}

In loving memory.

U-Greet`
                                  )}`
                                :
                                `mailto:?subject=${encodeURIComponent(`${greetData?.occasion_name} occasion Invitation on ${greetData?.occasion_date}`)}&body=${encodeURIComponent(
                                `Greetings fellow U-Greeter,
                                        
We are beyond excited to share that you have been personally selected to join a video tribute for ${greetData?.greet_celebrant[0]?.first_name} ${greetData?.greet_celebrant[0]?.last_name}.                                                                               
                                        
Could you please help these extraordinary people tell the story they wish to share?
                                        
Upload your favorite pictures and videos and be the reason someone smiles today!

Use this link to contribute: ${inviteLink}
Last date to contribute: ${greetData?.contribution_deadline_date}
        
Love, U-Greet
XO
                                        
P.S. for tips on what to upload or creative ideas, check us out at www.u-greet.com`
                            )}`}
                            style={{ color: "black" }}
                        >
                                <img
                                    src="assets/images/email2.08e41aee.svg"
                                    alt="email"
                                />
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
                                onClick={(e) => {
                                    setClick(true);
                                    copy(`${inviteLink}`);
                                    // navigator.clipboard
                                    //     .writeText(`${inviteLink}`)
                                    //     .then(() => {
                                    //         // alert("successfully copied");
                                    //         toast.success(
                                    //             "Link copied successfully!",
                                    //             {
                                    //                 position: "bottom-right",
                                    //                 autoClose: 5000,
                                    //                 hideProgressBar: false,
                                    //                 closeOnClick: true,
                                    //                 pauseOnHover: true,
                                    //                 draggable: true,
                                    //                 progress: undefined,
                                    //                 theme: "colored",
                                    //             }
                                    //         );
                                    //     })
                                    //     .catch(() => {
                                    //         // alert("something went wrong");
                                    //         toast.error(
                                    //             "something went wrong in copy text",
                                    //             {
                                    //                 position: "bottom-right",
                                    //                 autoClose: 5000,
                                    //                 hideProgressBar: false,
                                    //                 closeOnClick: true,
                                    //                 pauseOnHover: true,
                                    //                 draggable: true,
                                    //                 progress: undefined,
                                    //                 theme: "colored",
                                    //             }
                                    //         );
                                    //     });
                                }}
                            >
                                <img
                                    src="assets/images/link.5df60455.svg"
                                    alt="link"
                                />
                                <div className="font-10">
                                    {click ? "Link Copied" : "Copy Link"}
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                        <div className="tab" style={{ cursor: "pointer" }}>
                            <a
                                // href={`sms:?&body=${greetData?.occasion_name}%0A${greetData?.greet_celebrant[0]?.first_name}%20${greetData?.greet_celebrant[0]?.last_name}%0A${greetData?.contribution_deadline_date}%0A${inviteLink}%0A%0AGreetings%2C%0A%20%0AWe%20are%20beyond%20excited%20to%20share%20that%20you%20have%20been%20personally%20selected%20to%20join%20a%20video%20tribute%20for%20%20${greetData?.greet_celebrant[0]?.first_name}%20${greetData?.greet_celebrant[0]?.last_name}.%0A%20%0A${greetData?.greet_celebrant[0]?.first_name}%E2%80%99s%20loved%20ones%20have%20personally%20invited%20you%20to%20be%20a%20part%20of%20this%20forever%20story%20that%20they%20want%20to%20tell.%20Being%20included%20in%20someone%E2%80%99s%20video%20time%20capsule%20is%20a%20huge%20honour%3B%20it%20says%20that%20U-Matter%2C%20U%20are%20important%20and%20U%20should%20be%20recorded%20for%20all%20time.%20So%2C%20congratulations%20on%20being%20an%20awesome%20human!%20%0A%20%20%0ACould%20you%20please%20help%20these%20extraordinary%20people%20tell%20the%20story%20they%20wish%20to%20share?%20%0A%20%0AUpload%20your%20favourite%20pictures%20and%20videos%20and%20be%20the%20reason%20someone%20smiles%20today!%0A%20%20%0AP.S.%20for%20tips%20on%20what%20to%20upload%20or%20creative%20ideas%2C%20check%20us%20out%20at%20www.u-greet.com%0A`}
                                href={
                                    greetData?.occasion_name === 'U-Remember'
                                    ? // Your href for the U-REMEMBER condition
                                      `sms:?body=${encodeURIComponent(
                                        `During this difficult time, ${greetData?.greet_celebrant[0]?.first_name}'s loved ones have requested your participation in honoring ${greetData?.greet_celebrant[0]?.first_name}'s legacy by contributing to a video time capsule. Being a part of this memorial tribute will ensure ${greetData?.greet_celebrant[0]?.first_name}'s story is recorded for all of time. 
The U-Remember will honor, cherish, and preserve ${greetData?.greet_celebrant[0]?.first_name}'s memory.
We also hope it will bring comfort, healing, and solace to ${greetData?.greet_celebrant[0]?.first_name}'s friends and family. Thank you for your video and image contributions.

Use this link to contribute: ${inviteLink}
Last date to contribute: ${greetData?.contribution_deadline_date}

In loving memory.

U-Greet`
                                      )}`
                                    :
                                    `sms:?body=${encodeURIComponent(
                                    `Greetings fellow U-Greeter,
                                        
We are beyond excited to share that you have been personally selected to join a video tribute for ${greetData?.greet_celebrant[0]?.first_name} ${greetData?.greet_celebrant[0]?.last_name}.                                                                               
                                        
Could you please help these extraordinary people tell the story they wish to share?
                                        
Upload your favorite pictures and videos and be the reason someone smiles today!

Use this link to contribute: ${inviteLink}
Last date to contribute: ${greetData?.contribution_deadline_date}
        
Love, U-Greet
XO
                                        
P.S. for tips on what to upload or creative ideas, check us out at www.u-greet.com`
                                )}`}
                                style={{ color: "black" }}
                            >
                                <img
                                    src="assets/images/message.edd1278e.svg"
                                    alt="message"
                                />
                                <div className="font-10">Send Message</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="button-container item">
                    <div>
                        <button
                            onClick={() => {
                                setEditInvite2(false), setEditInvite1(true);
                            }}
                            className="bg-4 bold"
                        >
                            <div>Previous</div>
                        </button>
                    </div>
                    <div>
                        <button
                            className="bg-10 bold color-white"
                            onClick={() => navigate("/dashboard")}
                        >
                            <div>Proceed</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OccasionInvite2;
