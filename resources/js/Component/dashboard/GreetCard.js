import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import actionTypes from "../../State/actions/actionTypes";

const GreetCard = () => {
    const { allGreet } = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Dynamically generate CSS rules for each ID
    const generateDynamicStyles = (greet) => {
        return `
            #greet-${greet.id} .greet-background:before,
            #greet-${greet.id} .greet-background:after {
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                background: url(${greet.greet_img_link || 'assets/media/cake1.jpg'});
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
            }

            #greet-${greet.id} .greet-background:before {
                background-size: cover;
                filter: blur(10px);
                transform: scale(1);
            }
        `;
    };

    // Generate dynamic CSS for each greet item
    const dynamicStyles = allGreet.map((greet) => generateDynamicStyles(greet)).join("\n");

    const handleClick = (greet) => {
        dispatch({
            type: actionTypes.SET_STATE,
            payload: { greetData: greet },
        });
        navigate("/occasionInformation");
    };

    return (
        <div>
            {/* Dynamically inject generated CSS */}
            <style>{dynamicStyles}</style>
            {/* Render greet cards */}
            {allGreet.map((greet) => (
                <div className={`col-xl-4 greet-${greet.id}`} key={greet.id} id={`greet-${greet.id}`}>
                    <div className="card card-custom bgi-no-repeat bgi-size-cover gutter-b card-stretch img-gradient greet-background"
                        style={{
                            backgroundImage: greet.greet_img_link
                                ? `url(${greet.greet_img_link})`
                                : "url('assets/media/cake1.jpg')",
                            backgroundSize: "cover",
                            aspectRatio: "3/2",
                        }}>
                        <div className="card-body d-flex p-0">
                            <div className="flex-grow-1 p-12 card-rounded flex-grow-1"
                                style={{
                                    zIndex: "1",
                                }}>
                                <h3 className="text-inverse-info pb-5 font-weight-bolder">
                                    {greet.occasion_name} ({greet.occasion_date})
                                </h3>
                                <div onClick={() => handleClick(greet)} className="btn btn-danger font-weight-bold py-2 px-6">
                                    View Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GreetCard;
