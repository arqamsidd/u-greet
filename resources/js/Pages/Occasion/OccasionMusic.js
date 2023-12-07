import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import actionTypes from "../../State/actions/actionTypes";
import { Helmet } from "react-helmet";

const OccasionMusic = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { musics, selectedMusicId } = useSelector((state) => state);
    const { greetData } = useSelector((state) => state);
    const [Song, setSong] = useState(null);
    const [IsPlaying, setIsPlaying] = useState(false);

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

    console.log("musics dhruvin", musics);
    useEffect(() => {
        dispatch({
            type: actionTypes.GET_MUSICS,
        });
    }, []);
    useEffect(() => {
        if (greetData.id) {
            dispatch({
                type: actionTypes.GET_GREET_MUSIC,
                payload: { id: greetData.id },
            });
        }
    }, [greetData?.id]);

    const handleMusicClick = (id) => {
        console.log("music change", id);
        // if (greetData.id) {
        dispatch({
            type: actionTypes.POST_MUSIC,
            payload: {
                greet_id: greetData.id,
                music_id: id,
            },
        });
        // }
        // if (greetData.id) {
        //     dispatch({
        //         type: actionTypes.GET_GREET_MUSIC,
        //         payload: { id: greetData.id },
        //     });
        // }
    };

    const myHiddenAudio = document.getElementById("myHiddenAudio");

    const handleEnded = () => {
        // alert("The audio has ended");
        setSong(null);
        setIsPlaying(false);
    };

    const handlePlay = (path) => {
        if (!IsPlaying) {
            myHiddenAudio.src = path;
            setSong(path);
            myHiddenAudio.play();
            setIsPlaying(true);
        } else {
            if (path != Song) {
                myHiddenAudio.pause();
                myHiddenAudio.src = path;
                myHiddenAudio.currentTime = 0;
                myHiddenAudio.play();
                setSong(path);
                setIsPlaying(true);
            } else {
                myHiddenAudio.pause();
                setSong(null);
                myHiddenAudio.currentTime = 0;
                setIsPlaying(false);
            }
        }
    };

    // file_url
    // console.log("dd Song", Song);
    // const currentAudio = new Audio(path);
    // IsPlaying ? currentAudio.pause() : currentAudio.play();

    // if (IsPlaying) {
    //     currentAudio.pause();
    //     setIsPlaying(false);
    // } else {
    //     setSong(path);
    //     currentAudio.play();
    //     setIsPlaying(true);
    // }
    // };
    return (
        <div>
            <div className="Toastify" />
            <audio
                controls
                // src={Song}
                id="myHiddenAudio"
                onEnded={() => handleEnded()}
                style={{ display: "none" }}
            ></audio>
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
                <section className="media-section media-section2 bg-2">
                    <div className="section-head">
                        <div className="font-17 bold">Select a Music</div>
                        <div className="font-12">
                            Select music for your U-Greet
                        </div>
                    </div>
                    {musics?.length > 0
                        ? musics.map((music) => (
                              <div
                                  className="music-container mb-2"
                                  key={music.id}
                                  style={{
                                      border:
                                          music.id == selectedMusicId
                                              ? "2px solid green"
                                              : "",
                                  }}
                              >
                                  <div className="tab bg-white">
                                      <div className="one">
                                          <div
                                              className="image"
                                              style={{
                                                  //   backgroundImage:
                                                  //       'url("assets/images/YXBwL21lZGlhL3RoZW1lLzYwZDE5NTU4OTY3NGMuanBn.jpg")',
                                                  //   backgroundSize: "cover",
                                                  //   backgroundPosition:
                                                  //       "center center",
                                                  display: "flex",
                                                  alignItems: "center",
                                                  justifyContent: "center",
                                              }}
                                              onClick={() =>
                                                  handlePlay(music.file_url)
                                              }
                                          >
                                              <img
                                                  src="assets/images/YXBwL21lZGlhL3RoZW1lLzYwZDE5NTU4OTY3NGMuanBn.jpg"
                                                  style={{
                                                      height: "50px",
                                                      zIndex: "2",
                                                      margin: "unset",
                                                      borderRadius: "10px",
                                                  }}
                                              />
                                              <div
                                                  className="background"
                                                  style={{ zIndex: "2" }}
                                              />
                                              <span
                                                  style={{
                                                      position: "absolute",
                                                      top: "10%",
                                                      zIndex: "2",
                                                  }}
                                              >
                                                  {music.file_url == Song &&
                                                  IsPlaying ? (
                                                      //   <iframe
                                                      //       src="https://giphy.com/embed/yFKokXsr5Bc6xVqpTt"
                                                      //       width="100%"
                                                      //       height="100%"
                                                      //       //   style={{
                                                      //       //       pointerEvents: "none",
                                                      //       //   }}
                                                      //       frameBorder={0}
                                                      //       className="giphy-embed"
                                                      //       allowFullScreen
                                                      //   />
                                                      <img
                                                          src="assets/images/pause.f51d8047.svg"
                                                          alt="play"
                                                      />
                                                  ) : (
                                                      <img
                                                          src="assets/images/play.f51d8047.svg"
                                                          alt="play"
                                                      />
                                                  )}
                                              </span>
                                          </div>
                                          <div className="name">
                                              <div className="name-inner">
                                                  <div className="font-15 bold">
                                                      {music.name}
                                                  </div>
                                                  <div className="color-2" />
                                              </div>
                                          </div>
                                      </div>
                                      <div className="two">
                                          <div className="chart">
                                              <canvas
                                                  id="audio_visualiser"
                                                  height={100}
                                                  width={500}
                                              />
                                          </div>
                                          <div
                                              className="select"
                                              onClick={() =>
                                                  handleMusicClick(music.id)
                                              }
                                          >
                                              <span className="color-5 font-20 bold">
                                                  {music.id == selectedMusicId
                                                      ? "SELECTED"
                                                      : "SELECT"}
                                              </span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          ))
                        : null}
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default OccasionMusic;
