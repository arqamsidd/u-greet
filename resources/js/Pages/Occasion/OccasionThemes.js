import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import actionTypes from "../../State/actions/actionTypes";

const OccasionThemes = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { themes, selectedThemeId } = useSelector((state) => state);
    console.log("dhruvin theme selectedThemeId", selectedThemeId);
    const { greetData } = useSelector((state) => state);
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
    console.log("themes", themes);

    useEffect(() => {
        dispatch({
            type: actionTypes.GET_THEMES,
        });
    }, []);
    useEffect(() => {
        if (greetData.id) {
            dispatch({
                type: actionTypes.GET_GREET_THEME,
                payload: { id: greetData.id },
            });
        }
    }, [greetData?.id]);

    const handleThemeClick = (id) => {
        // console.log("theme change", id);
        if (greetData.id) {
            dispatch({
                type: actionTypes.POST_THEME,
                payload: {
                    greet_id: greetData.id,
                    theme_id: id,
                },
            });
        }
        // if (greetData.id) {
        //     dispatch({
        //         type: actionTypes.GET_GREET_THEME,
        //         payload: { id: greetData.id },
        //     });
        // }
    };

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
                <section className="media-section media-section2 bg-2">
                    <div className="section-head">
                        <div className="font-17 bold">Select a Theme</div>
                        <div className="font-12">
                            Select a background image for your U-Greet
                        </div>
                    </div>
                    <div className="themes-container card-round bg-white">
                        <div className="tab-container">
                            {themes?.length > 0 ? (
                                themes.map((theme) => (
                                    <span
                                        type="button"
                                        key={theme.id}
                                        onClick={() =>
                                            handleThemeClick(theme.id)
                                        }
                                        //   style={
                                        //       //   theme.id == selectedThemeId &&
                                        //       {
                                        //           ,
                                        //       }
                                        //   }
                                    >
                                        <div
                                            className="tab"
                                            style={{
                                                backgroundImage: `url("${theme.file_url}")`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                border:
                                                    theme.id == selectedThemeId
                                                        ? "5px solid green"
                                                        : "",
                                            }}
                                        />
                                    </span>
                                ))
                            ) : (
                                <p>No theme Available for Now</p>
                            )}
                        </div>
                        {/* <video
                            className="preview"
                            controls
                            id="videoWithoutData"
                        >
                            <source
                                src="assets/images/YXBwL21lZGlhL3RoZW1lLzYwZDE5NjJhMGZkNGIubXA0.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video> */}

                        {themes?.length > 0
                            ? themes.map(
                                  (theme) =>
                                      theme.id == selectedThemeId && (
                                          <div
                                              className="preview"
                                              style={{
                                                  backgroundImage: `url("${theme.file_url}")`,
                                                  backgroundSize: "contain",
                                                  //   height: "50vh",
                                                  //   width: "100%",
                                                backgroundRepeat: "no-repeat",
                                                backgroundPosition: "center",
                                              }}
                                          >
                                            <div>
                                                </div>
                                              {/* selected theme id: {selectedThemeId} */}
                                              {/* <img
                                                  src={theme.file_url}
                                                  alt={theme.id}
                                                  key={theme.id}
                                                  style={{
                                                      // height: "35vh"
                                                      width: "100%",
                                                      height: "100%",
                                                      objectFit: "cover",
                                                  }}
                                              /> */}
                                          </div>
                                      )
                              )
                            : ""}
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default OccasionThemes;
