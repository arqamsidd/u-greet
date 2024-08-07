import axios from "axios";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { browserHistory } from "react-router";
import { toast } from "react-toastify";
import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ActionType } from "../../context/authContext";
import { useAuth } from "../../hooks/useAuth";
import actionTypes from "../actions/actionTypes";

export function* GET_GREET_DATA({ payload }) {
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });
    const success = yield axios
        .get(`/api/greet/${payload?.id}`)
        .then((response) => {
            // console.log("dhruvin responsing get greet", response.data.greet);
            return response.data.greet;
        })
        .catch((err) => {
            console.log(err);
        });

    console.log("dhruvin success", success);
    if (success) {
        yield put({
            type: actionTypes.SET_STATE,
            payload: {
                greetData: success,
            },
        });
    } else {
        yield put({
            type: actionTypes.SET_STATE,
            payload: {
                greetData: null,
            },
        });
    }
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* GET_THEMES({ payload }) {
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });
    const success = yield axios
        .get("/api/get-themes")
        .then((response) => {
            console.log("dhruvin responsing theme", response);
            return response;
        })
        .catch((err) => {
            console.log("sd");
        });
    // console.log("dhruvin success THEMES", success.data.data);
    if (success.data) {
        yield put({
            type: actionTypes.SET_STATE,
            payload: {
                themes: success.data.data,
            },
        });
    } else {
        yield put({
            type: actionTypes.SET_STATE,
            payload: {
                themes: null,
            },
        });
    }
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* GET_MUSICS({ payload }) {
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });
    const success = yield axios
        .get("/api/get-musics")
        .then((response) => {
            // console.log("dhruvin responsing get-musics", response);
            return response;
        })
        .catch((err) => {
            console.log("sd");
        });
    // console.log("dhruvin success get-musics", success.data.data);
    if (success.data) {
        yield put({
            type: actionTypes.SET_STATE,
            payload: {
                musics: success.data.data,
            },
        });
    } else {
        yield put({
            type: actionTypes.SET_STATE,
            payload: {
                musics: null,
            },
        });
    }
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* ADD_OCCASION_TO_API({ payload }) {
    // console.log("Get greet data request param :", JSON.stringify(payload));
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });
    const createGreetSuccess = yield axios
        .post("/api/create-greet", {
            user_id: payload.user_id,
            occasion_name: payload.occasionType,
            occasion_date: payload.occasionDate,
            contribution_deadline_date: payload.occasionLastDate,
            celebrants: payload.names,
        })
        .then((response) => {
            console.log("/api/create-greet.response", response);
            return response;
        })
        .catch((err) => {
            console.log("sd");
        });
    if (createGreetSuccess?.data?.greet) {
        yield put({
            type: actionTypes.SET_STATE,
            payload: {
                greetData: createGreetSuccess.data.greet,
            },
        });
        yield toast.success("Occasion Created successfully!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    } else {
        yield put({
            type: actionTypes.SET_STATE,
            payload: {
                greetData: null,
            },
        });
    }
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* POST_THEME({ payload }) {
    // console.log("post theme request param :", JSON.stringify(payload));

    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });
    yield axios
        .post("/api/store-greet-theme", {
            greet_id: payload.greet_id,
            theme_id: payload.theme_id,
        })
        .then((response) => {
            console.log("/api/store-greet-theme", response);
            toast.success("Theme updated successfully!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        })
        .catch((err) => {
            console.log("sd");
            toast.error("Theme updated failed!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        });
    yield put({
        type: actionTypes.GET_GREET_THEME,
        payload: { id: payload.greet_id },
    });
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* POST_MUSIC({ payload }) {
    console.log("post music request param :", JSON.stringify(payload));

    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });
    yield axios
        .post("/api/store-greet-music", {
            greet_id: payload.greet_id,
            music_id: payload.music_id,
        })
        .then((response) => {
            console.log("/api/store-greet-music", response);
            toast.success("Music updated successfully!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        })
        .catch((err) => {
            console.log("sd");
        });
    yield put({
        type: actionTypes.GET_GREET_MUSIC,
        payload: { id: payload.greet_id },
    });
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* GET_GREET_THEME({ payload }) {
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });
    const success = yield axios
        .get(`/api/get-greet-theme/${payload?.id}`)
        .then((response) => {
            console.log("dhruvin responsing get-greet-theme", response);
            return response;
        })
        .catch((errors) => {
            console.log("there is error");
        });
    // console.log("dhruvin success get-greet-theme", success.data.id);
    if (success) {
        console.log("dhruvin theme success", success);
        yield put({
            type: actionTypes.SET_STATE,
            payload: {
                selectedThemeId: success?.data?.data?.id,
            },
        });
    } else {
        console.log("dhruvin theme fail");
        yield put({
            type: actionTypes.SET_STATE,
            payload: {
                selectedThemeId: null,
            },
        });
    }
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* GET_GREET_MUSIC({ payload }) {
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });
    const success = yield axios
        .get(`/api/get-greet-music/${payload?.id}`)
        .then((response) => {
            console.log("dhruvin responsing get-greet-Music", response);
            return response;
        })
        .catch((errors) => {
            console.log("there is error");
        });
    console.log("dhruvin success get-greet-Music", success.data.id);
    if (success) {
        yield put({
            type: actionTypes.SET_STATE,
            payload: {
                selectedMusicId: success?.data?.data?.id,
            },
        });
    } else {
        yield put({
            type: actionTypes.SET_STATE,
            payload: {
                selectedMusicId: null,
            },
        });
    }
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* CHANGE_PASSWORD({ payload }) {
    console.log(
        "post CHANGE_PASSWORD request param :",
        JSON.stringify(payload)
    );

    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });
    yield axios
        .post("/api/change-password", {
            current_password: payload.current_password,
            new_password: payload.new_password,
            new_password_confirmation: payload.new_password_confirmation,
        })
        .then((response) => {
            // alert("Password changed successfully");
            toast.success("Password changed successfully!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        })
        .catch((errors) => {
            // alert("all field required or Current Password is Invalid");
            toast.error("all field required or Current Password is Invalid", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        });
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* UPDATE_IMAGE({ payload }) {
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });
    const formData = new FormData();
    yield formData.append("image", payload.file);
    yield formData.append("greetid", payload.greet_id);
    yield formData.append("userid", payload.uId);
    yield axios
        .post("/api/update-greet-image", formData, {
            headers: {
                "Content-type": "multipart/form-data",
            },
        })
        .then((response) => {
            toast.success("Rotation saved Successfully!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            payload.onClose();
            put({
                type: actionTypes.LOADING,
                payload: {
                    isLoading: false,
                },
            });
        })
        .catch((errors) => {
            toast.error("Error in saving rotation", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            put({
                type: actionTypes.LOADING,
                payload: {
                    isLoading: false,
                },
            });
        });
    yield put({
        type: actionTypes.GET_ALL_UPLOADED_MEDIA,
        payload: {
            greet_id: payload.greet_id,
        },
    });
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* UPDATE_VIDEO({ payload }) {
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });

    yield axios
        .post("/api/update-greet-video", {
            file: payload.file,
            rotation: payload.rotation,
            uId: payload.uId,
            greet_id: payload.greet_id,
        })
        .then((response) => {
            toast.success("Rotation saved Successfully!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            payload.onClose();
            put({
                type: actionTypes.LOADING,
                payload: {
                    isLoading: false,
                },
            });
        })
        .catch((errors) => {
            toast.error("Error in saving rotation", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            put({
                type: actionTypes.LOADING,
                payload: {
                    isLoading: false,
                },
            });
        });
    yield put({
        type: actionTypes.GET_ALL_UPLOADED_MEDIA,
        payload: {
            greet_id: payload.greet_id,
        },
    });
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* POST_FILE({ payload }) {
    console.log("post POST_FILE request param :", payload);

    const id = toast.info("Uploading Please wait...", {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
    });

    const formData = new FormData();
    const filesArray = payload.file; // Replace with your array of files

    filesArray.forEach((file, index) => {
        const blob = new Blob([file], { type: file.type });
        formData.append("media[]", blob, file.name); // Append Blob with filename
    });

    formData.append("greet_id", payload.greet_id);
    formData.append("user_id", payload.uId);
    console.log("formData", formData);

    console.log("ABOUT TO UPLOAD");


    try {
        const response = yield call(
            axios.post,
            "/api/create-greet-media",
            formData,
            {
                headers: {
                    "Content-type": "multipart/form-data",
                },
                onUploadProgress: function (progressEvent) {
                    let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    console.log(`Upload progress: ${percentCompleted}%`);
                    toast.update(id, {
                        render: `Upload progress: ${percentCompleted}%`,
                        type: toast.TYPE.INFO,
                        autoClose: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        progress: percentCompleted / 100,
                        position: "bottom-right",
                        hideProgressBar: false,
                    });
                }
            }
        );

        if (response) {
            console.log("Uploaded, Response: ", response);
            toast.update(id, {
                render: "Media uploaded",
                type: toast.TYPE.SUCCESS,
                autoClose: false,
                closeOnClick: false,
                pauseOnHover: true,
                progress: undefined,
                position: "bottom-right",
                hideProgressBar: false,
            });
        }
    } catch (errors) {
        // Send error details to the server for logging
        
        console.log("Error: ", errors);
        yield call(axios.post, '/api/log-error', { error: errors.toString() });

        toast.update(id, {
            render: "Error in uploading",
            type: toast.TYPE.ERROR,
            autoClose: false,
            closeOnClick: false,
            pauseOnHover: true,
            progress: undefined,
            position: "bottom-right",
            hideProgressBar: false,
        });
    }

    yield put({
        type: actionTypes.GET_ALL_UPLOADED_MEDIA,
        payload: {
            greet_id: payload.greet_id,
        },
    });
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* POST_FILE_INVITED_USER({ payload }) {
    // yield put({
    //     type: actionTypes.LOADING,
    //     payload: {
    //         isLoading: true,
    //     },
    // });
    const id =
        payload.media &&
        toast.info("Uploading Please wait...", {
            position: "bottom-right",
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "colored",
        });
    const formData = new FormData();
    const filesArray = payload.media && payload.media; // Replace with your array of files

    payload.media &&
        filesArray.forEach((file) => {
            const blob = new Blob([file], { type: file.type });
            formData.append("media[]", blob, file.name); // Append Blob with filename
        });
    // const convertedFile = getBase64(file);
    // yield formData.append("media", payload.media);
    yield formData.append("greet_token", `${payload.greet_token}`);
    yield formData.append("first_name", payload.first_name);
    yield formData.append("last_name", payload.last_name);
    yield formData.append("email", payload.email);
    // yield axios
    //     .post("/api/upload-greet-media", formData, {
    //         headers: {
    //             "Content-type": "multipart/form-data",
    //         },
    //     })
    //     .then((response) => {
    //         yield put({
    //             type: actionTypes.SET_STATE,
    //             payload: {
    //                 greetContributedMedia: response.greetmedia,
    //             },
    //         });
    //         toast.update(id, {
    //             render: "Media uploaded",
    //             type: toast.TYPE.SUCCESS,
    //             autoClose: 5000,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             progress: undefined,
    //             position: "bottom-right",
    //             hideProgressBar: false,
    //         });
    //     })
    //     .catch((errors) => {
    //         toast.update(id, {
    //             render: "Error in uploading",
    //             type: toast.TYPE.ERROR,
    //             autoClose: 5000,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             progress: undefined,
    //             position: "bottom-right",
    //             hideProgressBar: false,
    //         });
    //     });
    try {
        const response = yield call(
            axios.post,
            "/api/upload-greet-media",
            formData,
            {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            }
        );
        if (response) {
            console.log(response);
            yield put({
                type: actionTypes.SET_STATE,
                payload: {
                    greetContributedMedia: response.data.greetmedia,
                },
            });
        }
        payload.media &&
            toast.update(id, {
                render: "Media uploaded",
                type: toast.TYPE.SUCCESS,
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
                progress: undefined,
                position: "bottom-right",
                hideProgressBar: false,
            });
    } catch (errors) {
        payload.media &&
            toast.update(id, {
                render: "Error in uploading",
                type: toast.TYPE.ERROR,
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
                progress: undefined,
                position: "bottom-right",
                hideProgressBar: false,
            });
    }

    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* POST_EDITED_USER({ payload }) {
    console.log("post POST_EDITED_USER request param :", payload);
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });
    const formData = new FormData();
    // const convertedFile = getBase64(file);
    yield formData.append("first_name", payload.first_name);
    yield formData.append("last_name", payload.last_name);
    yield formData.append("contact", payload.contact);
    yield formData.append("email", payload.email);
    yield formData.append("user_image", payload.user_image);
    yield formData.append("user_id", payload.user_id);
    // yield console.log("hey file", file);
    const success = yield axios
        .post(
            "/api/user-update",
            // {
            //     first_name: payload.first_name,
            //     last_name: payload.last_name,
            //     contact: payload.contact,
            //     email: payload.email,
            //     user_image: payload.user_image,
            // },
            formData,
            {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            }
        )
        .then((response) => {
            return response.data.user;
        })
        .catch((err) => {
            console.log("sd");
        });
    if (success) {
        yield put({
            type: actionTypes.SET_STATE,
            payload: {
                currentUser: success,
            },
        });
        toast.success("Profile updated successfully!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    } else {
        toast.error("Profile update Fail!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    yield put({
        type: actionTypes.GET_USER,
    });
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
    // window.location.reload(false);
}
export function* GET_ALL_GREET({ payload }) {
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });
    const success = yield axios
        .get(`/api/get-all-greet/${payload.user_id}`)
        .then((response) => {
            // console.log("dhruvin responsing get-greet-Music", response);
            return response;
        })
        .catch((err) => {
            console.log("sd");
        });
    console.log("/api/get-all-greet", success?.data?.allgreet);
    if (success) {
        yield put({
            type: actionTypes.SET_STATE,
            payload: {
                allGreet: success?.data?.allgreet,
            },
        });
    } else {
        yield put({
            type: actionTypes.SET_STATE,
            payload: {
                allGreet: null,
            },
        });
    }
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* GET_ALL_UPLOADED_MEDIA({ payload }) {
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });
    const success = yield axios
        .get(`/api/get-media/${payload.greet_id}`)
        .then((response) => {
            // console.log("dhruvin responsing get-greet-Music", response);
            return response;
        })
        .catch((errors) => {
            console.log("GET_ALL_UPLOADED_MEDIA")
            console.log(payload)
            console.log("there is error in get user");
        });
    console.log("/api/get-media/", success);
    if (success) {
        console.log("dhruvinnnnnn success", success);
        yield put({
            type: actionTypes.SET_STATE,
            payload: {
                uploadedMedia: success.data.greetmedia,
            },
        });
    } else {
        console.log("dhruvinnnnnnnnn failed", success);
        yield put({
            type: actionTypes.SET_STATE,
            payload: {
                uploadedMedia: null,
            },
        });
    }

    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* GET_CONTRIBUTER_MEDIA({ payload }) {
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });
    const success = yield axios
        .post(`/api/get-contributer-media`, {
            greet_token: payload.greet_token,
            first_name: payload.first_name,
            last_name: payload.last_name,
            email: payload.email,
        })
        .then((response) => {
            // console.log("dhruvin responsing get-greet-Music", response);
            return response;
        })
        .catch((errors) => {
            console.log("GET_CONTRIBUTER_MEDIA")
            console.log("there is error in get user");
        });
    if (success) {
        yield put({
            type: actionTypes.SET_STATE,
            payload: {
                greetContributedMedia: success.data.greetmedia,
            },
        });
    } else {
        console.log("dhruvinnnnnnnnn failed", success);
    }

    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* PREVIEW_MEDIA({ payload }) {
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });
    const success = yield axios
        .get(`/api/get-preview-media/${payload.greet_id}`)
        .then((response) => {
            // console.log("dhruvin responsing get-greet-Music", response);
            return response;
        })
        .catch((err) => {
            console.log("sd");
        });
    if (success) {
        yield put({
            type: actionTypes.SET_STATE,
            payload: {
                finalVideo: success.data,
            },
        });
    } else {
        yield put({
            type: actionTypes.SET_STATE,
            payload: {
                finalVideo: null,
            },
        });
    }
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* MERGE_MEDIA({ payload }) {
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });
    yield axios
        .post("/api/merge-video-image", {
            greet_id: payload.greet_id,
            media: payload.arr,
        })
        .then((response) => {
            console.log("/api/merge-video-image response", response);
        })
        .catch((errors) => {
            console.log("there is error");
        });
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* GREET_UPDATE({ payload }) {
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });
    const formData = new FormData();
    yield formData.append("user_id", payload.user_id);
    yield formData.append("occasion_name", payload.occasion_name);
    yield formData.append("occasion_date", payload.occasion_date);
    yield formData.append(
        "contribution_deadline_date",
        payload.contribution_deadline_date
    );
    yield formData.append(
        "occasions_description",
        payload.occasions_description
    );
    yield formData.append("greet_id", payload.greet_id);
    // yield formData.append("celebrants", payload.celebrants);
    // yield formData.append("celebrants", JSON.stringify(payload.celebrants));
    // yield formData.append("celebrants[]", payload.celebrants);
    // yield payload.celebrants.forEach((item) =>
    //     formData.append("celebrants", item)
    // );
    yield payload.celebrants.forEach((person, index) => {
        // formData.append(`celebrants[${index}].id`, person.id);
        formData.append(`celebrants[${index}][first_name]`, person.first_name);
        formData.append(`celebrants[${index}][last_name]`, person.last_name);
    });

    yield formData.append("greet_img_name", payload?.greet_img_name);
    console.log("formData", formData);
    const success = yield axios
        .post(
            "/api/greet-update",
            formData,
            {
                headers: {
                    "Content-type": "multipart/form-data",
                },
            }
            // {
            //     user_id: payload.user_id,
            //     occasion_name: payload.occasion_name,
            //     occasion_date: payload.occasion_date,
            //     contribution_deadline_date: payload.contribution_deadline_date,
            //     occasions_description: payload.occasions_description,
            //     greet_id: payload.greet_id,
            //     celebrants: payload.celebrants,
            //     // greet_img_name: payload.greet_img_name,

            //     // theme_id: payload.theme_id,
            //     // music_id: payload.music_id,
            //     // occasion_type: payload.occasion_type,
            //     // occasion_limit: payload.occasion_limit,
            //     // status: payload.status,
            // }
        )
        .then((response) => {
            // console.log("/api/greet-update response", response);
            return response.data.greet;
        })
        .catch((errors) => {
            console.log("there is error in greet update");
        });
    if (success) {
        yield put({
            type: actionTypes.SET_STATE,
            payload: {
                greetData: success,
            },
        });
        toast.success("Event updated successfully!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    } else {
        toast.error("Event update Fail!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* GET_USER({ payload }) {
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });

    const success = yield axios
        .post("/api/me")
        .then((response) => {
            return response.data.user;
            // if (response) {
            //     dispatch({
            //         type: ActionType.SETUSER,
            //         payload: {
            //             user: response?.data.user,
            //         },
            //     });
            //     // dispatch({
            //     //     type: actionTypes.SET_STATE,
            //     //     payload: {
            //     //         currentUser: response.data.user,
            //     //     },
            //     // });
            // }
        })
        .catch((err) => {
            console.log("sd");
        });
    yield put({
        type: ActionType.SETUSER,
        payload: {
            user: success,
        },
    });
    yield put({
        type: actionTypes.SET_STATE,
        payload: {
            currentUser: success,
        },
    });
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* GET_INVITE_LINK({ payload }) {
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });
    const success = yield axios
        .get(`/api/invite-greet/${payload.greet_id}`)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            console.log("sd");
        });
    console.log("/api/invite-greet", success.data.alluserdetail);

    yield put({
        type: actionTypes.SET_STATE,
        payload: {
            inviteLink: success.data.alluserdetail,
        },
    });
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* FORGOT_PASS({ payload }) {
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });

    yield axios
        .post("/api/forget-password", {
            email: payload.email,
        })
        .then((response) => {
            // alert("email sent");
            toast.success("email sent!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        })
        .catch((errors) => {
            // alert("there is error");
            toast.error("Something Went wrong", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        });
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* RESET_PASS({ payload }) {
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });
    // const formData = new FormData();
    // yield formData.append("token", payload.token);
    // yield formData.append("email", payload.email);
    // yield formData.append("password", payload.password);
    // yield formData.append(
    //     "password_confirmation",
    //     payload.password_confirmation
    // );
    yield axios
        .post(
            "/api/reset-password",
            // formData,
            // {
            //     headers: {
            //         "Content-type": "multipart/form-data",
            //     },
            // }
            {
                token: payload.token,
                email: payload.email,
                password: payload.password,
                password_confirmation: payload.password_confirmation,
            }
        )
        .then((response) => {
            // alert("Your password has been changed!");
            // Navigate("/signIn");
            toast.success("Password changed successfully!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        })
        .catch((errors) => {
            // alert("there is error");
            toast.error("Something Wrong", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        });
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* DELETE_MEDIA({ payload }) {
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });
    yield axios
        .get(`/api/delete-media/${payload.id}`)
        .then((response) => {
            toast.success("Media Deleted Successfully!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        })
        .catch((err) => {
            toast.error("Something Wrong!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        });
    yield put({
        type: actionTypes.GET_ALL_UPLOADED_MEDIA,
        payload: {
            greet_id: payload.greet_id,
        },
    });

    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* DELETE_MEDIA_CONTRI({ payload }) {
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });
    yield axios
        .get(`/api/delete-media/${payload.id}`)
        .then((response) => {
            toast.success("Media Deleted Successfully!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        })
        .catch((err) => {
            toast.error("Something Wrong!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        });
    yield put({
        type: actionTypes.GET_CONTRIBUTER_MEDIA,
        payload: {
            media: payload.media,
            greet_token: payload.greet_token,
            first_name: payload.first_name,
            last_name: payload.last_name,
            email: payload.email,
        },
    });

    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* CREATE_VIDEO({ payload }) {
    // yield put({
    //     type: actionTypes.LOADING,
    //     payload: {
    //         isLoading: true,
    //     },
    // });
    const id2 = toast.info("Sending Create Video request...", {
        position: "bottom-right",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
    });
    yield axios
        .post("/api/create-video", {
            greet_id: payload.greet_id,
        })
        .then((response) => {
            // console.log("/api/merge-video-image response", response);
            toast.update(id2, {
                render: "Create Video request generated successfully",
                type: toast.TYPE.SUCCESS,
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
                progress: undefined,
                position: "bottom-right",
                hideProgressBar: false,
            });
            payload.setIsButtonDisabled(true);
        })
        .catch((errors) => {
            // console.log("there is error");
            toast.update(id2, {
                render: "Error creating video",
                type: toast.TYPE.ERROR,
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
                progress: undefined,
                position: "bottom-right",
                hideProgressBar: false,
            });
        });
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* GET_CHECKOUT_DETAIL({ payload }) {
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });
    const success = yield axios
        .get(`/api/finalizegreet/${payload.greet_id}`)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            console.log("GET_CHECKOUT_DETAIL fail");
        });
    if (success) {
        console.log("dhruvinnnnnn success", success);
        yield put({
            type: actionTypes.SET_STATE,
            payload: {
                checkoutDetail: success.data.greetmedia,
            },
        });
    } else {
        console.log("dhruvinnnnnnnnn failed", success);
        yield put({
            type: actionTypes.SET_STATE,
            payload: {
                checkoutDetail: null,
            },
        });
    }
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* SEND_PAYMENT_TOKEN({ payload }) {
    // const navigate = useNavigate();
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: true,
        },
    });
    yield axios
        .post("/api/stripe", {
            greetId: payload.greetId,
            userId: payload.userId,
            amount: payload.amount,
            stripeToken: payload.stripeToken,
            plan: payload.plan
        })
        .then((response) => {
            console.log("/api/stripe", response);
            // navigate("/occasionInformation");
            // yield put(push('/occasionInformation'));
            window.location = "/occasionCheckout";
            toast.success("Payment Successfull!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        })
        .catch((errors) => {
            // console.log("there is error");
            toast.error("Payment Failed!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        });
    yield put({
        type: actionTypes.LOADING,
        payload: {
            isLoading: false,
        },
    });
}
export function* rootSaga() {
    yield all([
        takeLatest(actionTypes.GET_GREET_DATA, GET_GREET_DATA),
        takeLatest(actionTypes.ADD_OCCASION_TO_API, ADD_OCCASION_TO_API),
        takeLatest(actionTypes.GET_THEMES, GET_THEMES),
        takeLatest(actionTypes.GET_MUSICS, GET_MUSICS),
        takeLatest(actionTypes.POST_THEME, POST_THEME),
        takeLatest(actionTypes.POST_MUSIC, POST_MUSIC),
        takeLatest(actionTypes.GET_GREET_THEME, GET_GREET_THEME),
        takeLatest(actionTypes.GET_GREET_MUSIC, GET_GREET_MUSIC),
        takeLatest(actionTypes.CHANGE_PASSWORD, CHANGE_PASSWORD),
        takeLatest(actionTypes.UPDATE_IMAGE, UPDATE_IMAGE),
        takeLatest(actionTypes.UPDATE_VIDEO, UPDATE_VIDEO),
        takeLatest(actionTypes.POST_FILE, POST_FILE),
        takeLatest(actionTypes.POST_FILE_INVITED_USER, POST_FILE_INVITED_USER),
        takeLatest(actionTypes.POST_EDITED_USER, POST_EDITED_USER),
        takeLatest(actionTypes.GET_ALL_GREET, GET_ALL_GREET),
        takeLatest(actionTypes.GET_ALL_UPLOADED_MEDIA, GET_ALL_UPLOADED_MEDIA),
        takeLatest(actionTypes.GET_CONTRIBUTER_MEDIA, GET_CONTRIBUTER_MEDIA),
        takeLatest(actionTypes.PREVIEW_MEDIA, PREVIEW_MEDIA),
        takeLatest(actionTypes.MERGE_MEDIA, MERGE_MEDIA),
        takeLatest(actionTypes.GREET_UPDATE, GREET_UPDATE),
        takeLatest(actionTypes.GET_USER, GET_USER),
        takeLatest(actionTypes.GET_INVITE_LINK, GET_INVITE_LINK),
        takeLatest(actionTypes.FORGOT_PASS, FORGOT_PASS),
        takeLatest(actionTypes.RESET_PASS, RESET_PASS),
        takeLatest(actionTypes.DELETE_MEDIA, DELETE_MEDIA),
        takeLatest(actionTypes.DELETE_MEDIA_CONTRI, DELETE_MEDIA_CONTRI),
        takeLatest(actionTypes.CREATE_VIDEO, CREATE_VIDEO),
        takeLatest(actionTypes.GET_CHECKOUT_DETAIL, GET_CHECKOUT_DETAIL),
        takeLatest(actionTypes.SEND_PAYMENT_TOKEN, SEND_PAYMENT_TOKEN),
    ]);
}
