import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import actionTypes from "../../State/actions/actionTypes";

const InvitePopUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { allGreet } = useSelector((state) => state);
    const [selected, setSelected] = useState(allGreet ? allGreet[0] : null);
    const handleInviteSent = () => {
        if (selected) {
            dispatch({
                type: actionTypes.SET_STATE,
                payload: { greetData: selected },
            });
            sessionStorage.setItem(
                "greetData_onReloading",
                JSON.stringify(selected)
            );
            navigate("/occasionEdit", {
                state: {
                    isInvite: true,
                    greetIdForEdit: selected.id,
                },
            });
        }
    };
    useEffect(() => {
        if (allGreet) {
            setSelected(allGreet[0]);
        }
    }, [allGreet]);

    return (
        <div
            className="modal fade"
            id="exampleModalLong"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLongTitle"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content" style={{ height: "90vh" }}>
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">
                            Please select Greet to Invite
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div
                        className="modal-body"
                        style={{ height: "80vh", overflowY: "auto" }}
                    >
                        {allGreet?.length > 0 ? (
                            <>
                                {allGreet.map((greet) => (
                                    <div
                                        className="card p-2 mb-3 d-flex  justify-content-center"
                                        key={greet?.id}
                                        onClick={() => setSelected(greet)}
                                        style={{
                                            border:
                                                greet == selected
                                                    ? "2px solid #f64e60"
                                                    : "",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <div className="d-flex p-2">
                                            <img
                                                src={
                                                    greet.greet_img_link
                                                        ? greet.greet_img_link
                                                        : "assets/media/cake1.jpg"
                                                }
                                                alt={greet?.id}
                                                style={{
                                                    height: "5rem",
                                                    width: "8rem",
                                                    display: "block",
                                                    objectFit: "cover",
                                                }}
                                                className="pr-3"
                                            />
                                            <div className="">
                                                {greet.occasion_name} (
                                                {greet.occasion_date})
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <div>
                                <p>
                                    You have no greet created, please create
                                    one.
                                </p>
                                <button
                                    onClick={() => navigate("/startOccasion")}
                                    data-dismiss="modal"
                                >
                                    Create Greet
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            type="button"
                            data-dismiss="modal"
                            onClick={() => handleInviteSent()}
                            className="btn btn-primary"
                        >
                            Send Invite
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvitePopUp;
