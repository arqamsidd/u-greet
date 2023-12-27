import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import actionTypes from "../../State/actions/actionTypes";

const GreetCard = () => {
    const { allGreet } = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const handleClick = (greet) => {
        dispatch({
            type: actionTypes.SET_STATE,
            payload: { greetData: greet },
        });
        navigate("/occasionInformation");
    };

    return allGreet.length > 0 ? (
        allGreet.map((greet) => (
            <div className={`col-xl-4 g-${greet.id}`} key={greet.id}>
                <div
                    className="card card-custom bgi-no-repeat bgi-size-cover gutter-b card-stretch img-gradient"
                    style={{
                        backgroundImage: greet.greet_img_link
                            ? `url(${greet.greet_img_link})`
                            : "url('assets/media/cake1.jpg')",
                            backgroundSize: "cover",
                            aspectRatio: "3/2",
                            // backgroundPosition: "center",
                            // backgroundRepeat: "no-repeat",
                    }}
                >
                    <div className="card-body d-flex p-0">
                        <div
                            className="flex-grow-1 p-12 card-rounded flex-grow-1"
                            style={{
                                zIndex: "1",
                                // paddingBottom:
                                //     "1rem !important",
                            }}
                        >
                            <h3 className="text-inverse-info pb-5 font-weight-bolder">
                                {greet.occasion_name} ({greet.occasion_date})
                            </h3>
                            {/* <h6 className="text-inverse-info pb-5 font-weight-bolder">
                                {greet.occasion_date}
                            </h6> */}
                            {/* <p className="text-white pt-10 pb-5 font-size-h3 font-weight-bolder line-height-lg">
                                Start with a branding
                                <br />
                                for your greeting
                                <br />
                                and send it
                            </p> */}
                            <div
                                onClick={() => handleClick(greet)}
                                // to="/occasionInformation"
                                className="btn btn-danger font-weight-bold py-2 px-6"
                            >
                                View Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
    ) : (
        <></>
    );
};

export default GreetCard;
