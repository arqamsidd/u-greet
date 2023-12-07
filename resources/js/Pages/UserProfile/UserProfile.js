import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/authContext";
import { MainNavbar } from "../../Component/Navbar/MainNavbar";
import { useDispatch } from "react-redux";
import actionTypes from "../../State/actions/actionTypes";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";
import Footer from "../../Component/Footer/Footer";
import Loader from "../../Component/Loader/Loader";

const UserProfile = () => {
    const element = document.getElementById("ugreetAppHtml");
    if (element?.classList?.contains("f-style-bundle")) {
    } else {
        element?.classList?.add("f-style-bundle");
    }

    const { state } = useContext(AuthContext);
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    var validRegexEmail =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // const { currentUser } = useSelector((state) => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loginUserOnStartupCheck } = useAuth();
    // const [state?.user, setNewUser] = useState(state.user);
    // console.log("dddd currentUser", currentUser);
    console.log("dddd state.user", state.user);
    // console.log("dddd new user", state?.user);
    const [newFirstName, setNewFirstName] = useState();
    const [newLastName, setNewLastName] = useState();
    const [newContact, setNewContact] = useState();
    const [newEmail, setNewEmail] = useState();
    const [userImage, setUserImage] = useState();
    const [profileImage, setProfileImage] = useState();
    const [preview, setPreview] = useState();
    const [error, setError] = useState(false);
    const reader = new FileReader();

    useEffect(() => {
        setNewFirstName(state?.user?.first_name);
        setNewLastName(state?.user?.last_name);
        setNewContact(state?.user?.contact);
        setNewEmail(state?.user?.email);
        setProfileImage(state?.user?.profile_image_link);
    }, [state.user]);
    // useEffect(() => {
    // }, [state?.user?.profile_image_link]);

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!userImage) {
            setPreview(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(userImage);
        setPreview(objectUrl);
        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl);
    }, [userImage]);

    const postEditedData = () => {
        // console.log("dhruvin newContact", newContact, !re.test(newContact));
        if (
            newFirstName == "" ||
            newLastName == "" ||
            newEmail == "" ||
            newContact == "" ||
            !newFirstName ||
            !newLastName ||
            !newContact ||
            !newEmail ||
            !validRegexEmail.test(newEmail) ||
            !re.test(newContact)
        ) {
            setError(true);
            toast.error("Please fill all form details", {
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
            dispatch({
                type: actionTypes.POST_EDITED_USER,
                payload: {
                    first_name: newFirstName,
                    last_name: newLastName,
                    contact: newContact,
                    email: newEmail,
                    user_image: userImage,
                    user_id: state?.user?.id,
                },
            });
            // get user in post_edit
            // dispatch({
            //     type: actionTypes.GET_USER,
            // });
            loginUserOnStartupCheck();
            // window.location.reload(false);

            // setNewUser(currentUser);
        }
    };

    return (
        <div className="page-impstyle-bundle stypage-plr-out">
            {/* {!state.user && <Loader />} */}
            <MainNavbar>
                <div>
                    <div
                        className="content d-flex flex-column flex-column-fluid"
                        id="kt_content"
                    >
                        <div className="d-flex flex-column-fluid">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-4">
                                        <div className="card card-custom">
                                            <div className="card-body pt-15">
                                                <div className="text-center mb-10">
                                                    <div className="symbol symbol-60 symbol-circle symbol-xl-90">
                                                        {profileImage ? (
                                                            <div
                                                                className="symbol-label"
                                                                style={{
                                                                    backgroundImage: `url(${
                                                                        profileImage
                                                                        // ? profileImage
                                                                        // : "assets/images/300_15.jpg"
                                                                    })`,
                                                                    // 'url("assets/images/300_15.jpg")',
                                                                }}
                                                            />
                                                        ) : (
                                                            <div
                                                                className="symbol-label"
                                                                style={{
                                                                    backgroundImage:
                                                                        "url(assets/media/users/blank.png)",
                                                                }}
                                                            />
                                                        )}

                                                        <i className="symbol-badge symbol-badge-bottom bg-success" />
                                                    </div>
                                                    <h4 className="font-weight-bold my-2">
                                                        {
                                                            state?.user
                                                                ?.first_name
                                                        }{" "}
                                                        {state?.user?.last_name}
                                                    </h4>
                                                    <span className="label label-light-warning label-inline font-weight-bold label-lg">
                                                        Active
                                                    </span>
                                                </div>
                                                {/* <div className="mb-10 text-center">
                                                    <a
                                                        href="#"
                                                        className="btn btn-icon btn-circle btn-light-facebook mr-2"
                                                    >
                                                        <i className="socicon-facebook" />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="btn btn-icon btn-circle btn-light-twitter mr-2"
                                                    >
                                                        <i className="socicon-twitter" />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="btn btn-icon btn-circle btn-light-google"
                                                    >
                                                        <i className="socicon-google" />
                                                    </a>
                                                </div> */}
                                                <a
                                                    // href="user-profile-personal-info.html"
                                                    className="btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 text-center btn-block active"
                                                >
                                                    Personal info
                                                </a>
                                                <Link
                                                    to="/changePass"
                                                    className="btn btn-hover-light-primary font-weight-bold py-3 px-6 mb-2 ml-0 text-center btn-block"
                                                >
                                                    Change Password
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8">
                                        <div className="card card-custom card-stretch">
                                            <div className="card-header py-3">
                                                <div className="card-title align-items-start flex-column">
                                                    <h3 className="card-label font-weight-bolder text-dark">
                                                        Personal Information
                                                    </h3>
                                                    <span className="text-muted font-weight-bold font-size-sm mt-1">
                                                        Update your personal
                                                        informaiton
                                                    </span>
                                                </div>
                                                <div className="card-toolbar">
                                                    <button
                                                        type="reset"
                                                        onClick={() =>
                                                            postEditedData()
                                                        }
                                                        className="btn btn-success mr-2"
                                                    >
                                                        Save Changes
                                                    </button>
                                                    <button
                                                        type="reset"
                                                        onClick={() =>
                                                            navigate(
                                                                "/dashboard"
                                                            )
                                                        }
                                                        className="btn btn-secondary"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                            <form className="form">
                                                <div className="card-body">
                                                    <div className="row">
                                                        <label className="col-xl-3" />
                                                        <div className="col-lg-9 col-xl-6">
                                                            <h5 className="font-weight-bold mb-6">
                                                                Customer Info
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-xl-3 col-lg-3 col-form-label">
                                                            Avatar
                                                        </label>
                                                        <div className="col-lg-9 col-xl-6">
                                                            <div
                                                                className="image-input image-input-outline"
                                                                id="kt_profile_avatar"
                                                                style={{
                                                                    backgroundImage:
                                                                        'url("assets/media/users/blank.png")',
                                                                }}
                                                            >
                                                                {preview ? (
                                                                    <div
                                                                        className="image-input-wrapper"
                                                                        style={{
                                                                            backgroundImage: `url(${preview})`,
                                                                        }}
                                                                    />
                                                                ) : profileImage ? (
                                                                    <div
                                                                        className="image-input-wrapper"
                                                                        style={{
                                                                            backgroundImage: `url(${profileImage})`,
                                                                        }}
                                                                    />
                                                                ) : (
                                                                    <></>
                                                                )}

                                                                <label
                                                                    className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                                                                    data-action="change"
                                                                    data-toggle="tooltip"
                                                                    data-original-title="Change avatar"
                                                                >
                                                                    <i className="fa fa-pen icon-sm text-muted" />
                                                                    <input
                                                                        type="file"
                                                                        name="profile_avatar"
                                                                        accept=".png, .jpg, .jpeg"
                                                                        onChange={(
                                                                            e
                                                                        ) => {
                                                                            setUserImage(
                                                                                e
                                                                                    .target
                                                                                    .files[0]
                                                                            );
                                                                            // console.log(
                                                                            //     "etargetfiles[0]",
                                                                            //     e
                                                                            //         .target
                                                                            //         .files[0]
                                                                            // );
                                                                        }}
                                                                    />
                                                                    {/* <form onSubmit={handleSubmit} encType="multipart/form-data">
                                                                        <h1>React File Upload</h1>
                                                                        <input type="file" onChange={handleChange} />
                                                                        <button type="submit">Upload</button>
                                                                    </form> */}
                                                                    <input
                                                                        type="hidden"
                                                                        name="profile_avatar_remove"
                                                                    />
                                                                </label>
                                                                <span
                                                                    className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                                                                    data-action="cancel"
                                                                    data-toggle="tooltip"
                                                                    data-original-title="Cancel avatar"
                                                                >
                                                                    <i className="ki ki-bold-close icon-xs text-muted" />
                                                                </span>
                                                                {/* <span
                                                                    // onClick={() => {
                                                                    //     setPreview(
                                                                    //         "assets/media/users/blank.png"
                                                                    //     );
                                                                    //     setUserImage(
                                                                    //         ""
                                                                    //     );
                                                                    // }}
                                                                    className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
                                                                    data-action="remove"
                                                                    data-toggle="tooltip"
                                                                    data-original-title="Remove avatar"
                                                                >
                                                                    <i className="ki ki-bold-close icon-xs text-muted" />
                                                                </span> */}
                                                            </div>
                                                            <span className="form-text text-muted">
                                                                Allowed file
                                                                types: png, jpg,
                                                                jpeg.
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-xl-3 col-lg-3 col-form-label">
                                                            First Name
                                                        </label>
                                                        <div className="col-lg-9 col-xl-6">
                                                            <input
                                                                className="form-control form-control-lg form-control-solid"
                                                                type="text"
                                                                value={
                                                                    newFirstName
                                                                }
                                                                onChange={(e) =>
                                                                    setNewFirstName(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                            {error &&
                                                                newFirstName ==
                                                                    "" && (
                                                                    <span className="form-text  text-danger">
                                                                        Please
                                                                        enter
                                                                        First
                                                                        name
                                                                    </span>
                                                                )}
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-xl-3 col-lg-3 col-form-label">
                                                            Last Name
                                                        </label>
                                                        <div className="col-lg-9 col-xl-6">
                                                            <input
                                                                className="form-control form-control-lg form-control-solid"
                                                                type="text"
                                                                value={
                                                                    newLastName
                                                                }
                                                                onChange={(e) =>
                                                                    setNewLastName(
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                            {error &&
                                                                newLastName ==
                                                                    "" && (
                                                                    <span className="form-text  text-danger">
                                                                        Please
                                                                        enter
                                                                        Last
                                                                        name
                                                                    </span>
                                                                )}
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <label className="col-xl-3" />
                                                        <div className="col-lg-9 col-xl-6">
                                                            <h5 className="font-weight-bold mt-10 mb-6">
                                                                Contact Info
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-xl-3 col-lg-3 col-form-label">
                                                            Contact Phone
                                                        </label>
                                                        <div className="col-lg-9 col-xl-6">
                                                            <div className="input-group input-group-lg input-group-solid">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text">
                                                                        <i className="la la-phone" />
                                                                    </span>
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="form-control form-control-lg form-control-solid"
                                                                    value={
                                                                        newContact
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setNewContact(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    placeholder="Phone"
                                                                />
                                                            </div>
                                                            {error &&
                                                                !re.test(
                                                                    newContact
                                                                ) && (
                                                                    <span className="form-text  text-danger">
                                                                        Please
                                                                        enter a
                                                                        valid
                                                                        phone
                                                                        number
                                                                    </span>
                                                                )}
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <label className="col-xl-3 col-lg-3 col-form-label">
                                                            Email Address
                                                        </label>
                                                        <div className="col-lg-9 col-xl-6">
                                                            <div className="input-group input-group-lg input-group-solid">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text">
                                                                        <i className="la la-at" />
                                                                    </span>
                                                                </div>
                                                                <input
                                                                    type="text"
                                                                    className="form-control form-control-lg form-control-solid"
                                                                    value={
                                                                        newEmail
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setNewEmail(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    placeholder="Email"
                                                                />
                                                            </div>
                                                            {error &&
                                                                !validRegexEmail.test(
                                                                    newEmail
                                                                ) && (
                                                                    <span className="form-text  text-danger">
                                                                        Please
                                                                        enter
                                                                        Valid
                                                                        Email
                                                                        address
                                                                    </span>
                                                                )}
                                                            <span className="form-text text-muted">
                                                                We'll never
                                                                share your email
                                                                with anyone
                                                                else.
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </MainNavbar>
        </div>
    );
};

export default UserProfile;
