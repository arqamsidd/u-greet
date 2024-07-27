import Footer from "../../Component/Footer/Footer";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import actionTypes from "../../State/actions/actionTypes";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const OccasionTransitions = () => {
    const dispatch = useDispatch();
    const [listItem, setListItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const [ setGreetData] = useState(null);
    const { greetData } = useSelector((state) => state);
    const [selectedTransitionId, setSelectedTransitionId] = useState(false)
    const navigate = useNavigate();

    const getTransitions = async() => {
        try {
            setLoading(true)
            const data = await axios.get("/api/get-transitions");
            setListItem(data.data?.data?.transitions);
            setLoading(false);
        } catch (error) {
            setLoading(false)
        }
    }
    const handleSelectTransition = async(id) => {
        console.log({id})
        try {
            const data = await axios.post("/api/store-greet-transitions", 
                {"transition_id" : id, 
                "greet_id" : greetData.id}
            );
            console.log({data})
            setSelectedTransitionId(id);
            const greet_data = JSON.parse(greet_data || sessionStorage?.greetData_onReloading);
            greet_data['transition_id'] = id;

            sessionStorage.setItem(
                "greetData_onReloading",
                JSON.stringify(greet_data)
            );
            toast.success("Transition selected successfully!", {
                style: {
                  color: 'white',
                },
              });
        } catch (error) {
            toast.error("Failed to select transition. Please try again.", {
                style: {
                  color: 'white',
                },
              });
            console.log(error)
        }
    }
    useEffect(() => {
        if (sessionStorage.greetData_onReloading) {
            const greet_data = JSON.parse(sessionStorage?.greetData_onReloading);
            setGreetData(greet_data);
            setSelectedTransitionId(greet_data?.transition_id)
        }
        getTransitions()
    },[])
    return (
        <div>
            <div className="Toastify" />
            <div className="navigation bg-white">
                <div className="inner inner-occasion inner-action">
                    <div className="left link" onClick={() => navigate(-1)}>
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
                <section className="media-section media-section2 media-ocation bg-2">
                    <div className="section-head">
                        <div className="font-17 bold">Select a transition</div>
                        <div className="font-12">
                            Select a transition for your U-Greet
                        </div>
                    </div>
                    {listItem?.length > 0
                        ? listItem.map((transition) => {
                            return (
                                <React.Fragment key={transition?.id}>
                                    <div
                                        className="music-container mb-2"
                                        style={{
                                            border: 
                                                transition.id == selectedTransitionId
                                                    ?"2px solid green"
                                                    :"",
                                        }}
                                    >
                                        <div className="tab bg-white"
                                                style={{
                                                    display: "flex",
                                                }}
                                                >
                                            <div className="one"
                                                style={{
                                                    justifyContent: "space-between",
                                                    width: "100%"
                                                }}
                                            >
                                                <div className="name"
                                                    style={{
                                                        width: '20%',
                                                        wordWrap: 'break-word',
                                                    }}          
                                                >
                                                    <div className="name-inner">
                                                        <div className="font-15 bold">
                                                            <p>{transition?.name}</p>
                                                        </div>
                                                        <div className="color-2" />
                                                    </div>
                                                </div>
                                                <div 
                                                    style={{
                                                        width: "20%",
                                                        display: "flex",
                                                        justifyContent: "center",
                                                    }}
                                                >
                                                    <img src={transition?.transition_path} />
                                                </div>
                                                <div 
                                                    style={{
                                                        width: "100px",
                                                        height: "100px",
                                                        justifyContent: "center",
                                                        alignItems: "center",
                                                        display: "flex",
                                                        cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                        handleSelectTransition(transition.id)
                                                    }
                                                >
                                                    <span
                                                        style={{
                                                            fontSize: "20px",
                                                            color: "#ce2f2b",
                                                            fontWeight: "700",
                                                        }}
                                                    >
                                                        {transition.id == selectedTransitionId  ? "SELECTED" : "SELECT" }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )
                        })
                        : null}
                </section>
            </div>
            <Footer />
        </div>
    );
}
export default OccasionTransitions;

const mediaQuery = `@media (max-width: 768px) {
    .media-ocation .music-container .tab .one {
        flex-direction: column;
      }
      .media-ocation .video-crt-pages p {
        white-space: nowrap;
      }
      .media-ocation .music-container .tab .name {
        padding-left: 0 !important;
        width: 100% !important;
        margin: 0 auto;
        text-align: center;
      }
    }
  }`;
  const styleTag = document.createElement("style");
  styleTag.textContent = mediaQuery;
  document.head.appendChild(styleTag);