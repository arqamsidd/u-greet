import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Sidebar from "react-sidebar";
import SidebarRight from "../../Component/Sidebars/SidebarRight";
import SidebarLeft from "../../Component/Sidebars/SidebarLeft";
import Footer from "../../Component/Footer/Footer";
import { MainNavbar } from "../../Component/Navbar/MainNavbar";
import AuthContext from "../../context/authContext";
import { useContext } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import actionTypes from "../../State/actions/actionTypes";
import GreetCard from "../../Component/dashboard/GreetCard";
import { useSelector } from "react-redux";
// import AuthContext from "../../context/authContext";
// import { useAuth } from "../../hooks/useAuth";
// // CSS import
// import "./../../assets/Front/plugins/custom/fullcalendar/fullcalendar.bundle-v=7.2.7.css";
// // import "./../../assets/Front/plugins/global/plugins.bundle-v=7.2.7.css";
// import "./../../assets/Front/plugins/global/plugins_bundle.css";
// import "./../../assets/Front/plugins/custom/prismjs/prismjs.bundle-v=7.2.7.css";
// // import "./../../assets/Front/css/style.bundle-v=7.2.7.css";
// import "./../../assets/Front/css/style_bundle.css";
// import Navbar from "../../Layout/Navbar";

export const Dashboard = (props) => {
    const element = document.getElementById("ugreetAppHtml");
    if (element?.classList?.contains("f-style-bundle")) {
    } else {
        element?.classList?.add("f-style-bundle");
    }

    const { state } = useContext(AuthContext);
    const dispatch = useDispatch();
    const { allGreet } = useSelector((state) => state);

    const navigate = useNavigate();

    useEffect(() => {
        if (state?.user?.id) {
            dispatch({
                type: actionTypes.GET_ALL_GREET,
                payload: { user_id: state?.user?.id },
            });
        }
    }, []);

    return (
        <div className=" style-bundle-fsize style-bundle-poppin page-impstyle-bundle stypage-plr-out">
            <MainNavbar>
                <div
                    className="content d-flex flex-column flex-column-fluid"
                    id="kt_content"
                >
                    <div className="d-flex flex-column-fluid">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8">
                                    <div className="card card-custom gutter-b card-stretch card-shadowless">
                                        <div className="card-body p-0">
                                            <ul
                                                className="dashboard-tabs nav nav-pills nav-danger row row-paddingless m-0 p-0 flex-column flex-sm-row"
                                                role="tablist"
                                            >
                                                <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
                                                    <Link
                                                        className={`nav-link ${
                                                            !allGreet?.length >
                                                                0 && "active"
                                                        } border py-10 d-flex flex-grow-1 rounded flex-column align-items-center`}
                                                        to="/startOccasion"
                                                    >
                                                        <span className="nav-icon py-2 w-auto">
                                                            <span className="svg-icon svg-icon-3x">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                    width="24px"
                                                                    height="24px"
                                                                    viewBox="0 0 24 24"
                                                                    version="1.1"
                                                                >
                                                                    <g
                                                                        stroke="none"
                                                                        strokeWidth="1"
                                                                        fill="none"
                                                                        fillRule="evenodd"
                                                                    >
                                                                        <rect
                                                                            x="0"
                                                                            y="0"
                                                                            width="24"
                                                                            height="24"
                                                                        />
                                                                        <path
                                                                            d="M6,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,19 C20,20.1045695 19.1045695,21 18,21 L6,21 C4.8954305,21 4,20.1045695 4,19 L4,5 C4,3.8954305 4.8954305,3 6,3 Z M5.5,5 C5.22385763,5 5,5.22385763 5,5.5 L5,6.5 C5,6.77614237 5.22385763,7 5.5,7 L6.5,7 C6.77614237,7 7,6.77614237 7,6.5 L7,5.5 C7,5.22385763 6.77614237,5 6.5,5 L5.5,5 Z M17.5,5 C17.2238576,5 17,5.22385763 17,5.5 L17,6.5 C17,6.77614237 17.2238576,7 17.5,7 L18.5,7 C18.7761424,7 19,6.77614237 19,6.5 L19,5.5 C19,5.22385763 18.7761424,5 18.5,5 L17.5,5 Z M5.5,9 C5.22385763,9 5,9.22385763 5,9.5 L5,10.5 C5,10.7761424 5.22385763,11 5.5,11 L6.5,11 C6.77614237,11 7,10.7761424 7,10.5 L7,9.5 C7,9.22385763 6.77614237,9 6.5,9 L5.5,9 Z M17.5,9 C17.2238576,9 17,9.22385763 17,9.5 L17,10.5 C17,10.7761424 17.2238576,11 17.5,11 L18.5,11 C18.7761424,11 19,10.7761424 19,10.5 L19,9.5 C19,9.22385763 18.7761424,9 18.5,9 L17.5,9 Z M5.5,13 C5.22385763,13 5,13.2238576 5,13.5 L5,14.5 C5,14.7761424 5.22385763,15 5.5,15 L6.5,15 C6.77614237,15 7,14.7761424 7,14.5 L7,13.5 C7,13.2238576 6.77614237,13 6.5,13 L5.5,13 Z M17.5,13 C17.2238576,13 17,13.2238576 17,13.5 L17,14.5 C17,14.7761424 17.2238576,15 17.5,15 L18.5,15 C18.7761424,15 19,14.7761424 19,14.5 L19,13.5 C19,13.2238576 18.7761424,13 18.5,13 L17.5,13 Z M17.5,17 C17.2238576,17 17,17.2238576 17,17.5 L17,18.5 C17,18.7761424 17.2238576,19 17.5,19 L18.5,19 C18.7761424,19 19,18.7761424 19,18.5 L19,17.5 C19,17.2238576 18.7761424,17 18.5,17 L17.5,17 Z M5.5,17 C5.22385763,17 5,17.2238576 5,17.5 L5,18.5 C5,18.7761424 5.22385763,19 5.5,19 L6.5,19 C6.77614237,19 7,18.7761424 7,18.5 L7,17.5 C7,17.2238576 6.77614237,17 6.5,17 L5.5,17 Z"
                                                                            fill="#000000"
                                                                            opacity="0.3"
                                                                        />
                                                                        <path
                                                                            d="M11.3521577,14.5722612 L13.9568442,12.7918113 C14.1848159,12.6359797 14.2432972,12.3248456 14.0874656,12.0968739 C14.0526941,12.0460053 14.0088196,12.002002 13.9580532,11.9670814 L11.3533667,10.1754041 C11.1258528,10.0189048 10.8145486,10.0764735 10.6580493,10.3039875 C10.6007019,10.3873574 10.5699997,10.4861652 10.5699997,10.5873545 L10.5699997,14.1594818 C10.5699997,14.4356241 10.7938573,14.6594818 11.0699997,14.6594818 C11.1706891,14.6594818 11.2690327,14.6290818 11.3521577,14.5722612 Z"
                                                                            fill="#000000"
                                                                        />
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="nav-text font-size-lg py-2 font-weight-bolder text-center">
                                                            Start
                                                            <br />
                                                            U-Greet
                                                        </span>
                                                    </Link>
                                                </li>

                                                <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
                                                    <Link
                                                        className={`nav-link ${
                                                            allGreet?.length >
                                                                0 && "active"
                                                        } border py-10 d-flex flex-grow-1 rounded flex-column align-items-center`}
                                                        data-toggle="pill"
                                                        // to="/#tab_forms_widget_2"
                                                        onClick={() => {
                                                            document
                                                                .getElementById(
                                                                    "myGreets"
                                                                )
                                                                .scrollIntoView();
                                                        }}
                                                    >
                                                        <span className="nav-icon py-2 w-auto">
                                                            <span className="svg-icon svg-icon-3x">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                    width="24px"
                                                                    height="24px"
                                                                    viewBox="0 0 24 24"
                                                                    version="1.1"
                                                                >
                                                                    <g
                                                                        stroke="none"
                                                                        strokeWidth="1"
                                                                        fill="none"
                                                                        fillRule="evenodd"
                                                                    >
                                                                        <rect
                                                                            x="0"
                                                                            y="0"
                                                                            width="24"
                                                                            height="24"
                                                                        />
                                                                        <rect
                                                                            fill="#000000"
                                                                            x="4"
                                                                            y="4"
                                                                            width="7"
                                                                            height="7"
                                                                            rx="1.5"
                                                                        />
                                                                        <path
                                                                            d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z"
                                                                            fill="#000000"
                                                                            opacity="0.3"
                                                                        />
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="nav-text font-size-lg py-2 font-weight-bolder text-center">
                                                            My <br />
                                                            U-Greets
                                                        </span>
                                                    </Link>
                                                </li>

                                                <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-3 mb-3 mb-lg-0">
                                                    <Link
                                                        className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center"
                                                        to="/userProfile"
                                                    >
                                                        <span className="nav-icon py-2 w-auto">
                                                            <span className="svg-icon svg-icon-3x">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                    width="24px"
                                                                    height="24px"
                                                                    viewBox="0 0 24 24"
                                                                    version="1.1"
                                                                >
                                                                    <g
                                                                        stroke="none"
                                                                        strokeWidth="1"
                                                                        fill="none"
                                                                        fillRule="evenodd"
                                                                    >
                                                                        <polygon points="0 0 24 0 24 24 0 24" />
                                                                        <path
                                                                            d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                                                                            fill="#000000"
                                                                            fillRule="nonzero"
                                                                            opacity="0.3"
                                                                        />
                                                                        <path
                                                                            d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                                                                            fill="#000000"
                                                                            fillRule="nonzero"
                                                                        />
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="nav-text font-size-lg py-2 font-weight-bold text-center">
                                                            My <br />
                                                            Profile
                                                        </span>
                                                    </Link>
                                                </li>

                                                <li className="nav-item d-flex col-sm flex-grow-1 flex-shrink-0 mr-0 mb-3 mb-lg-0">
                                                    <a
                                                        className="nav-link border py-10 d-flex flex-grow-1 rounded flex-column align-items-center"
                                                        // data-toggle="pill"
                                                        href="/Helpdesk"
                                                    >
                                                        <span className="nav-icon py-2 w-auto">
                                                            <span className="svg-icon svg-icon-3x">
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                    width="24px"
                                                                    height="24px"
                                                                    viewBox="0 0 24 24"
                                                                    version="1.1"
                                                                >
                                                                    <g
                                                                        stroke="none"
                                                                        strokeWidth="1"
                                                                        fill="none"
                                                                        fillRule="evenodd"
                                                                    >
                                                                        <polygon points="0 0 24 0 24 24 0 24" />
                                                                        <path
                                                                            d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                                                                            fill="#000000"
                                                                            fillRule="nonzero"
                                                                            opacity="0.3"
                                                                        />
                                                                        <path
                                                                            d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                                                                            fill="#000000"
                                                                            fillRule="nonzero"
                                                                        />
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <span className="nav-text font-size-lg py-2 font-weight-bolder text-center">
                                                            Customer
                                                            <br />
                                                            Support
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>

                                            <div className="tab-content m-0 p-0">
                                                <div
                                                    className="tab-pane active"
                                                    id="forms_widget_tab_1"
                                                    role="tabpanel"
                                                ></div>
                                                <div
                                                    className="tab-pane"
                                                    id="forms_widget_tab_2"
                                                    role="tabpanel"
                                                ></div>
                                                <div
                                                    className="tab-pane"
                                                    id="forms_widget_tab_3"
                                                    role="tabpanel"
                                                ></div>
                                                <div
                                                    className="tab-pane"
                                                    id="forms_widget_tab_4"
                                                    role="tabpanel"
                                                ></div>
                                                <div
                                                    className="tab-pane"
                                                    id="forms_widget_tab_6"
                                                    role="tabpanel"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div
                                        className="card card-custom bgi-no-repeat bgi-size-cover gutter-b card-stretch"
                                        style={{
                                            backgroundImage:
                                                "url('assets/media/free.jpg')",
                                        }}
                                    >
                                        <div className="card-body p-0 d-flex">
                                            <div className="d-flex align-items-start justify-content-start flex-grow-1 p-8 card-rounded flex-grow-1 position-relative">
                                                <div className="d-flex flex-column align-items-start flex-grow-1 h-100">
                                                    <div className="p-1 flex-grow-1">
                                                        <h4 className="text-danger font-weight-bolder">
                                                            Try Sweet Greet for
                                                            free
                                                        </h4>
                                                        <p className="text-dark-10 font-weight-bold mt-3">
                                                            Pay $0 for 3
                                                            minutes.
                                                        </p>
                                                    </div>
                                                    <Link
                                                        to="/occasionCreate"
                                                        className="btn btn-link btn-link-danger font-weight-bold"
                                                    >
                                                        Start Now
                                                        <span className="svg-icon svg-icon-lg svg-icon-danger">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                width="24px"
                                                                height="24px"
                                                                viewBox="0 0 24 24"
                                                                version="1.1"
                                                            >
                                                                <g
                                                                    stroke="none"
                                                                    strokeWidth="1"
                                                                    fill="none"
                                                                    fillRule="evenodd"
                                                                >
                                                                    <polygon points="0 0 24 0 24 24 0 24" />
                                                                    <rect
                                                                        fill="#000000"
                                                                        opacity="0.3"
                                                                        transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000)"
                                                                        x="11"
                                                                        y="5"
                                                                        width="2"
                                                                        height="14"
                                                                        rx="1"
                                                                    />
                                                                    <path
                                                                        d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                                                                        fill="#000000"
                                                                        fillRule="nonzero"
                                                                        transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997)"
                                                                    />
                                                                </g>
                                                            </svg>
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row" id="myGreets">
                                <div className="col-xl-12">
                                    <div className="card card-custom bg-gray-100 gutter-b card-stretch card-shadowless">
                                        <div className="card-header h-auto border-0">
                                            <div className="card-title py-5">
                                                <h3 className="card-label">
                                                    <span className="d-block text-dark font-weight-bolder">
                                                        Your U-Greets
                                                    </span>
                                                    <span className="d-block text-dark-50 mt-2 font-size-sm">
                                                        Access completed or
                                                        upcoming U-Greets
                                                    </span>
                                                </h3>
                                            </div>

                                            <div className="card-toolbar"></div>
                                        </div>

                                        <div className="card-body row">
                                            {allGreet?.length > 0 ? (
                                                <GreetCard />
                                            ) : (
                                                <div>
                                                    <p>
                                                        You have no greet
                                                        created, please create
                                                        one.
                                                    </p>
                                                    <button
                                                        className="bg-10 bold color-white"
                                                        onClick={() =>
                                                            navigate(
                                                                "/startOccasion"
                                                            )
                                                        }
                                                    >
                                                        Create Greet
                                                    </button>
                                                </div>
                                            )}

                                            {/* <div className="col-xl-4">
                                                <div
                                                    className="card card-custom bgi-no-repeat bgi-size-cover gutter-b card-stretch img-gradient"
                                                    style={{
                                                        backgroundImage:
                                                            "url('assets/media/wed1.jpg')",
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
                                                                Lori's Wedding
                                                            </h3>
                                                            <p className="text-white pt-10 pb-5 font-size-h3 font-weight-bolder line-height-lg">
                                                                Start with a
                                                                branding
                                                                <br />
                                                                for your
                                                                greeting
                                                                <br />
                                                                and send it
                                                            </p>
                                                            <Link
                                                                to="/occasionInformation"
                                                                className="btn btn-danger font-weight-bold py-2 px-6"
                                                            >
                                                                View Now
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4">
                                                <div
                                                    className="card card-custom bgi-no-repeat bgi-size-cover gutter-b card-stretch img-gradient"
                                                    style={{
                                                        backgroundImage:
                                                            "url('assets/media/baby1.jpg')",
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
                                                                Our Baby
                                                            </h3>
                                                            <p className="text-white pt-10 pb-5 font-size-h3 font-weight-bolder line-height-lg">
                                                                Start with a
                                                                branding
                                                                <br />
                                                                for your
                                                                greeting
                                                                <br />
                                                                and send it
                                                            </p>
                                                            <Link
                                                                to="/occasionInformation"
                                                                className="btn btn-danger font-weight-bold py-2 px-6"
                                                            >
                                                                View Now
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100">
                    <Footer />
                </div>
            </MainNavbar>
        </div>
    );
};
