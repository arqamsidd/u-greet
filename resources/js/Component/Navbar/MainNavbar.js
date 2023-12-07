import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "react-sidebar";
import SidebarRight from "../Sidebars/SidebarRight";
import SidebarLeft from "../Sidebars/SidebarLeft";
import InvitePopUp from "../InvitePopUp/InvitePopUp";

export const MainNavbar = ({ children }) => {
    const [sidebarLeftOpen, setSidebarLeftOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [mobileNavPop, setMobileNavPop] = useState(false);

    let handleSidebarRight = () => setSidebarOpen(false);
    const navigate = useNavigate();

    // const handleInviteClick = () => {
    //     <></>;
    // };

    return (
        <Sidebar
            sidebar={<SidebarRight handleSidebarRight={handleSidebarRight} />}
            open={sidebarOpen}
            onSetOpen={setSidebarOpen}
            pullRight={true}
            styles={{
                sidebar: {
                    background: "white",
                    position: "fixed",
                    display: "flex",
                    right: "0",
                    top: "0",
                    zIndex: "999999",
                },
                overlay: {
                    zIndex: "99999",
                },
            }}
        >
            <Sidebar
                sidebar={<SidebarLeft setSidebarLeftOpen />}
                open={sidebarLeftOpen}
                onSetOpen={setSidebarLeftOpen}
                // pullRight={true}
                styles={{
                    sidebar: {
                        background: "white",
                        position: "fixed",
                        display: "flex",
                        left: "0",
                        top: "0",
                        zIndex: "999999",
                    },
                    overlay: {
                        zIndex: "99999",
                    },
                }}
            >
                <div
                    className="quick-panel-right demo-panel-right offcanvas-right header-fixed header-mobile-fixed aside-enabled aside-static page-loading"
                    id="kt_body"
                >
                    {/* <Navbar /> */}
                    <InvitePopUp />
                    <div
                        id="kt_header_mobile"
                        className="header-mobile header-mobile-fixed"
                    >
                        {window.location.pathname == "/dashboard" ? (
                            <a href="/">
                                <img
                                    alt="Logo"
                                    src="assets/media/logos/logo-dark.png"
                                    className="logo-sticky max-h-35px"
                                />
                            </a>
                        ) : (
                            <Link to="/dashboard">
                                <img
                                    alt="Logo"
                                    src="assets/media/logos/logo-dark.png"
                                    className="logo-sticky max-h-35px"
                                />
                            </Link>
                        )}

                        <div className="d-flex align-items-center">
                            <button
                                className="btn p-0 burger-icon rounded-0 burger-icon-left mb-0"
                                onClick={() => setSidebarLeftOpen(true)}
                            >
                                <span className="svg-icon svg-icon-xxl svg-icon-dark-75">
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
                                            strokeWidth={1}
                                            fill="none"
                                            fillRule="evenodd"
                                        >
                                            <rect
                                                x={0}
                                                y={0}
                                                width={24}
                                                height={24}
                                            />
                                            <rect
                                                fill="#000000"
                                                opacity="0.3"
                                                x={4}
                                                y={5}
                                                width={16}
                                                height={2}
                                                rx={1}
                                            />
                                            <rect
                                                fill="#000000"
                                                opacity="0.3"
                                                x={4}
                                                y={13}
                                                width={16}
                                                height={2}
                                                rx={1}
                                            />
                                            <path
                                                d="M5,9 L13,9 C13.5522847,9 14,9.44771525 14,10 C14,10.5522847 13.5522847,11 13,11 L5,11 C4.44771525,11 4,10.5522847 4,10 C4,9.44771525 4.44771525,9 5,9 Z M5,17 L13,17 C13.5522847,17 14,17.4477153 14,18 C14,18.5522847 13.5522847,19 13,19 L5,19 C4.44771525,19 4,18.5522847 4,18 C4,17.4477153 4.44771525,17 5,17 Z"
                                                fill="#000000"
                                            />
                                        </g>
                                    </svg>
                                </span>
                            </button>
                            <button
                                className="btn btn-hover-text-primary p-0 ml-3"
                                onClick={() => setMobileNavPop(!mobileNavPop)}
                            >
                                <span className="svg-icon svg-icon-xl">
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
                            </button>
                            {/* right bar default commented dhruvin */}
                            {/* ================== */}
                            {/* <div
                        id="kt_quick_user"
                        className="offcanvas offcanvas-right p-10"
                    >
                        <div className="offcanvas-header d-flex align-items-center justify-content-between pb-5">
                            <h3 className="font-weight-bold m-0">
                                User Profile
                                <small className="text-muted font-size-sm ml-2">
                                    12 messages
                                </small>
                            </h3>
                            <Link
                                to="/#"
                                className="btn btn-xs btn-icon btn-light btn-hover-primary"
                                id="kt_quick_user_close"
                            >
                                <i className="ki ki-close icon-xs text-muted"></i>
                            </Link>
                        </div>

                        <div className="offcanvas-content pr-5 mr-n5">
                            <div className="d-flex align-items-center mt-5">
                                <div className="symbol symbol-100 mr-5">
                                    <div
                                        className="symbol-label"
                                        style={{
                                            backgroundImage:
                                                "url('assets/media/users/300_21.jpg')",
                                        }}
                                    ></div>
                                    <i className="symbol-badge bg-success"></i>
                                </div>
                                <div className="d-flex flex-column">
                                    <Link
                                        to="/#"
                                        className="font-weight-bold font-size-h5 text-dark-75 text-hover-primary"
                                    >
                                        James Jones
                                    </Link>
                                    <div className="text-muted mt-1">
                                        Application Developer
                                    </div>
                                    <div className="navi mt-2">
                                        <Link to="/#" className="navi-item">
                                            <span className="navi-link p-0 pb-2">
                                                <span className="navi-icon mr-1">
                                                    <span className="svg-icon svg-icon-lg svg-icon-primary">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            // xmlns:xlink="http://www.w3.org/1999/xlink"
                                                            width="24px"
                                                            height="24px"
                                                            viewBox="0 0 24 24"
                                                            version="1.1"
                                                        >
                                                            <g
                                                                stroke="none"
                                                                strokwidth="1"
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
                                                                    d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z"
                                                                    fill="#000000"
                                                                />
                                                                <circle
                                                                    fill="#000000"
                                                                    opacity="0.3"
                                                                    cx="19.5"
                                                                    cy="17.5"
                                                                    r="2.5"
                                                                />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                </span>
                                                <span className="navi-text text-muted text-hover-primary">
                                                    jm@softplus.com
                                                </span>
                                            </span>
                                        </Link>
                                        <Link
                                            to="/ugreetlogin.html"
                                            className="btn btn-sm btn-light-primary font-weight-bolder py-2 px-5"
                                        >
                                            Sign Out
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="separator separator-dashed mt-8 mb-5"></div>

                            <div className="navi navi-spacer-x-0 p-0">
                                <Link
                                    to="/user-profile-personal-info.html"
                                    className="navi-item"
                                >
                                    <div className="navi-link">
                                        <div className="symbol symbol-40 bg-light mr-3">
                                            <div className="symbol-label">
                                                <span className="svg-icon svg-icon-md svg-icon-success">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        // xmlns:xlink="http://www.w3.org/1999/xlink"
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
                                                                d="M13.2070325,4 C13.0721672,4.47683179 13,4.97998812 13,5.5 C13,8.53756612 15.4624339,11 18.5,11 C19.0200119,11 19.5231682,10.9278328 20,10.7929675 L20,17 C20,18.6568542 18.6568542,20 17,20 L7,20 C5.34314575,20 4,18.6568542 4,17 L4,7 C4,5.34314575 5.34314575,4 7,4 L13.2070325,4 Z"
                                                                fill="#000000"
                                                            />
                                                            <circle
                                                                fill="#000000"
                                                                opacity="0.3"
                                                                cx="18.5"
                                                                cy="5.5"
                                                                r="2.5"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="navi-text">
                                            <div className="font-weight-bold">
                                                My Profile
                                            </div>
                                            <div className="text-muted">
                                                Account settings and more
                                                <span className="label label-light-danger label-inline font-weight-bold">
                                                    update
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/dashboard" className="navi-item">
                                    <div className="navi-link">
                                        <div className="symbol symbol-40 bg-light mr-3">
                                            <div className="symbol-label">
                                                <span className="svg-icon svg-icon-md svg-icon-warning">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        // xmlns:xlink="http://www.w3.org/1999/xlink"
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
                                                                opacity="0.3"
                                                                x="12"
                                                                y="4"
                                                                width="3"
                                                                height="13"
                                                                rx="1.5"
                                                            />
                                                            <rect
                                                                fill="#000000"
                                                                opacity="0.3"
                                                                x="7"
                                                                y="9"
                                                                width="3"
                                                                height="8"
                                                                rx="1.5"
                                                            />
                                                            <path
                                                                d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z"
                                                                fill="#000000"
                                                                fillRule="nonzero"
                                                            />
                                                            <rect
                                                                fill="#000000"
                                                                opacity="0.3"
                                                                x="17"
                                                                y="11"
                                                                width="3"
                                                                height="6"
                                                                rx="1.5"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="navi-text">
                                            <div className="font-weight-bold">
                                                My Messages
                                            </div>
                                            <div className="text-muted">
                                                Inbox and tasks
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/dashboard" className="navi-item">
                                    <div className="navi-link">
                                        <div className="symbol symbol-40 bg-light mr-3">
                                            <div className="symbol-label">
                                                <span className="svg-icon svg-icon-md svg-icon-danger">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        // xmlns:xlink="http://www.w3.org/1999/xlink"
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
                                                                d="M4.85714286,1 L11.7364114,1 C12.0910962,1 12.4343066,1.12568431 12.7051108,1.35473959 L17.4686994,5.3839416 C17.8056532,5.66894833 18,6.08787823 18,6.52920201 L18,19.0833333 C18,20.8738751 17.9795521,21 16.1428571,21 L4.85714286,21 C3.02044787,21 3,20.8738751 3,19.0833333 L3,2.91666667 C3,1.12612489 3.02044787,1 4.85714286,1 Z M8,12 C7.44771525,12 7,12.4477153 7,13 C7,13.5522847 7.44771525,14 8,14 L15,14 C15.5522847,14 16,13.5522847 16,13 C16,12.4477153 15.5522847,12 15,12 L8,12 Z M8,16 C7.44771525,16 7,16.4477153 7,17 C7,17.5522847 7.44771525,18 8,18 L11,18 C11.5522847,18 12,17.5522847 12,17 C12,16.4477153 11.5522847,16 11,16 L8,16 Z"
                                                                fill="#000000"
                                                                fillRule="nonzero"
                                                                opacity="0.3"
                                                            />
                                                            <path
                                                                d="M6.85714286,3 L14.7364114,3 C15.0910962,3 15.4343066,3.12568431 15.7051108,3.35473959 L20.4686994,7.3839416 C20.8056532,7.66894833 21,8.08787823 21,8.52920201 L21,21.0833333 C21,22.8738751 20.9795521,23 19.1428571,23 L6.85714286,23 C5.02044787,23 5,22.8738751 5,21.0833333 L5,4.91666667 C5,3.12612489 5.02044787,3 6.85714286,3 Z M8,12 C7.44771525,12 7,12.4477153 7,13 C7,13.5522847 7.44771525,14 8,14 L15,14 C15.5522847,14 16,13.5522847 16,13 C16,12.4477153 15.5522847,12 15,12 L8,12 Z M8,16 C7.44771525,16 7,16.4477153 7,17 C7,17.5522847 7.44771525,18 8,18 L11,18 C11.5522847,18 12,17.5522847 12,17 C12,16.4477153 11.5522847,16 11,16 L8,16 Z"
                                                                fill="#000000"
                                                                fillRule="nonzero"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="navi-text">
                                            <div className="font-weight-bold">
                                                My Activities
                                            </div>
                                            <div className="text-muted">
                                                Logs and notifications
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <Link to="/dashboard" className="navi-item">
                                    <div className="navi-link">
                                        <div className="symbol symbol-40 bg-light mr-3">
                                            <div className="symbol-label">
                                                <span className="svg-icon svg-icon-md svg-icon-primary">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        // xmlns:xlink="http://www.w3.org/1999/xlink"
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
                                                                d="M6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,12 C19,12.5522847 18.5522847,13 18,13 L6,13 C5.44771525,13 5,12.5522847 5,12 L5,3 C5,2.44771525 5.44771525,2 6,2 Z M7.5,5 C7.22385763,5 7,5.22385763 7,5.5 C7,5.77614237 7.22385763,6 7.5,6 L13.5,6 C13.7761424,6 14,5.77614237 14,5.5 C14,5.22385763 13.7761424,5 13.5,5 L7.5,5 Z M7.5,7 C7.22385763,7 7,7.22385763 7,7.5 C7,7.77614237 7.22385763,8 7.5,8 L10.5,8 C10.7761424,8 11,7.77614237 11,7.5 C11,7.22385763 10.7761424,7 10.5,7 L7.5,7 Z"
                                                                fill="#000000"
                                                                opacity="0.3"
                                                            />
                                                            <path
                                                                d="M3.79274528,6.57253826 L12,12.5 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 Z"
                                                                fill="#000000"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="navi-text">
                                            <div className="font-weight-bold">
                                                My Tasks
                                            </div>
                                            <div className="text-muted">
                                                latest tasks and projects
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            <div className="separator separator-dashed my-7"></div>

                            <div>
                                <h5 className="mb-5">Recent Notifications</h5>

                                <div className="d-flex align-items-center bg-light-warning rounded p-5 gutter-b">
                                    <span className="svg-icon svg-icon-warning mr-5">
                                        <span className="svg-icon svg-icon-lg">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                // xmlns:xlink="http://www.w3.org/1999/xlink"
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
                                                        d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"
                                                        fill="#000000"
                                                    />
                                                    <rect
                                                        fill="#000000"
                                                        opacity="0.3"
                                                        transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519)"
                                                        x="16.3255682"
                                                        y="2.94551858"
                                                        width="3"
                                                        height="18"
                                                        rx="1"
                                                    />
                                                </g>
                                            </svg>
                                        </span>
                                    </span>
                                    <div className="d-flex flex-column flex-grow-1 mr-2">
                                        <Link
                                            to="/#"
                                            className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
                                        >
                                            Another purpose persuade
                                        </Link>
                                        <span className="text-muted font-size-sm">
                                            Due in 2 Days
                                        </span>
                                    </div>
                                    <span className="font-weight-bolder text-warning py-1 font-size-lg">
                                        +28%
                                    </span>
                                </div>

                                <div className="d-flex align-items-center bg-light-success rounded p-5 gutter-b">
                                    <span className="svg-icon svg-icon-success mr-5">
                                        <span className="svg-icon svg-icon-lg">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                // xmlns:xlink="http://www.w3.org/1999/xlink"
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
                                                        d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                                                        fill="#000000"
                                                        fillRule="nonzero"
                                                        transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)"
                                                    />
                                                    <path
                                                        d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                                                        fill="#000000"
                                                        fillRule="nonzero"
                                                        opacity="0.3"
                                                    />
                                                </g>
                                            </svg>
                                        </span>
                                    </span>
                                    <div className="d-flex flex-column flex-grow-1 mr-2">
                                        <Link
                                            to="/#"
                                            className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
                                        >
                                            Would be to people
                                        </Link>
                                        <span className="text-muted font-size-sm">
                                            Due in 2 Days
                                        </span>
                                    </div>
                                    <span className="font-weight-bolder text-success py-1 font-size-lg">
                                        +50%
                                    </span>
                                </div>

                                <div className="d-flex align-items-center bg-light-danger rounded p-5 gutter-b">
                                    <span className="svg-icon svg-icon-danger mr-5">
                                        <span className="svg-icon svg-icon-lg">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                // xmlns:xlink="http://www.w3.org/1999/xlink"
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
                                                        d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z"
                                                        fill="#000000"
                                                    />
                                                    <path
                                                        d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z"
                                                        fill="#000000"
                                                        opacity="0.3"
                                                    />
                                                </g>
                                            </svg>
                                        </span>
                                    </span>
                                    <div className="d-flex flex-column flex-grow-1 mr-2">
                                        <Link
                                            to="/#"
                                            className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1"
                                        >
                                            Purpose would be to persuade
                                        </Link>
                                        <span className="text-muted font-size-sm">
                                            Due in 2 Days
                                        </span>
                                    </div>
                                    <span className="font-weight-bolder text-danger py-1 font-size-lg">
                                        -27%
                                    </span>
                                </div>

                                <div className="d-flex align-items-center bg-light-info rounded p-5">
                                    <span className="svg-icon svg-icon-info mr-5">
                                        <span className="svg-icon svg-icon-lg">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                // xmlns:xlink="http://www.w3.org/1999/xlink"
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
                                                        d="M11.7573593,15.2426407 L8.75735931,15.2426407 C8.20507456,15.2426407 7.75735931,15.6903559 7.75735931,16.2426407 C7.75735931,16.7949254 8.20507456,17.2426407 8.75735931,17.2426407 L11.7573593,17.2426407 L11.7573593,18.2426407 C11.7573593,19.3472102 10.8619288,20.2426407 9.75735931,20.2426407 L5.75735931,20.2426407 C4.65278981,20.2426407 3.75735931,19.3472102 3.75735931,18.2426407 L3.75735931,14.2426407 C3.75735931,13.1380712 4.65278981,12.2426407 5.75735931,12.2426407 L9.75735931,12.2426407 C10.8619288,12.2426407 11.7573593,13.1380712 11.7573593,14.2426407 L11.7573593,15.2426407 Z"
                                                        fill="#000000"
                                                        opacity="0.3"
                                                        transform="translate(7.757359, 16.242641) rotate(-45.000000) translate(-7.757359, -16.242641)"
                                                    />
                                                    <path
                                                        d="M12.2426407,8.75735931 L15.2426407,8.75735931 C15.7949254,8.75735931 16.2426407,8.30964406 16.2426407,7.75735931 C16.2426407,7.20507456 15.7949254,6.75735931 15.2426407,6.75735931 L12.2426407,6.75735931 L12.2426407,5.75735931 C12.2426407,4.65278981 13.1380712,3.75735931 14.2426407,3.75735931 L18.2426407,3.75735931 C19.3472102,3.75735931 20.2426407,4.65278981 20.2426407,5.75735931 L20.2426407,9.75735931 C20.2426407,10.8619288 19.3472102,11.7573593 18.2426407,11.7573593 L14.2426407,11.7573593 C13.1380712,11.7573593 12.2426407,10.8619288 12.2426407,9.75735931 L12.2426407,8.75735931 Z"
                                                        fill="#000000"
                                                        transform="translate(16.242641, 7.757359) rotate(-45.000000) translate(-16.242641, -7.757359)"
                                                    />
                                                    <path
                                                        d="M5.89339828,3.42893219 C6.44568303,3.42893219 6.89339828,3.87664744 6.89339828,4.42893219 L6.89339828,6.42893219 C6.89339828,6.98121694 6.44568303,7.42893219 5.89339828,7.42893219 C5.34111353,7.42893219 4.89339828,6.98121694 4.89339828,6.42893219 L4.89339828,4.42893219 C4.89339828,3.87664744 5.34111353,3.42893219 5.89339828,3.42893219 Z M11.4289322,5.13603897 C11.8194565,5.52656326 11.8194565,6.15972824 11.4289322,6.55025253 L10.0147186,7.96446609 C9.62419433,8.35499039 8.99102936,8.35499039 8.60050506,7.96446609 C8.20998077,7.5739418 8.20998077,6.94077682 8.60050506,6.55025253 L10.0147186,5.13603897 C10.4052429,4.74551468 11.0384079,4.74551468 11.4289322,5.13603897 Z M0.600505063,5.13603897 C0.991029355,4.74551468 1.62419433,4.74551468 2.01471863,5.13603897 L3.42893219,6.55025253 C3.81945648,6.94077682 3.81945648,7.5739418 3.42893219,7.96446609 C3.0384079,8.35499039 2.40524292,8.35499039 2.01471863,7.96446609 L0.600505063,6.55025253 C0.209980772,6.15972824 0.209980772,5.52656326 0.600505063,5.13603897 Z"
                                                        fill="#000000"
                                                        opacity="0.3"
                                                        transform="translate(6.014719, 5.843146) rotate(-45.000000) translate(-6.014719, -5.843146)"
                                                    />
                                                    <path
                                                        d="M17.9142136,15.4497475 C18.4664983,15.4497475 18.9142136,15.8974627 18.9142136,16.4497475 L18.9142136,18.4497475 C18.9142136,19.0020322 18.4664983,19.4497475 17.9142136,19.4497475 C17.3619288,19.4497475 16.9142136,19.0020322 16.9142136,18.4497475 L16.9142136,16.4497475 C16.9142136,15.8974627 17.3619288,15.4497475 17.9142136,15.4497475 Z M23.4497475,17.1568542 C23.8402718,17.5473785 23.8402718,18.1805435 23.4497475,18.5710678 L22.0355339,19.9852814 C21.6450096,20.3758057 21.0118446,20.3758057 20.6213203,19.9852814 C20.2307961,19.5947571 20.2307961,18.9615921 20.6213203,18.5710678 L22.0355339,17.1568542 C22.4260582,16.76633 23.0592232,16.76633 23.4497475,17.1568542 Z M12.6213203,17.1568542 C13.0118446,16.76633 13.6450096,16.76633 14.0355339,17.1568542 L15.4497475,18.5710678 C15.8402718,18.9615921 15.8402718,19.5947571 15.4497475,19.9852814 C15.0592232,20.3758057 14.4260582,20.3758057 14.0355339,19.9852814 L12.6213203,18.5710678 C12.2307961,18.1805435 12.2307961,17.5473785 12.6213203,17.1568542 Z"
                                                        fill="#000000"
                                                        opacity="0.3"
                                                        transform="translate(18.035534, 17.863961) scale(1, -1) rotate(45.000000) translate(-18.035534, -17.863961)"
                                                    />
                                                </g>
                                            </svg>
                                        </span>
                                    </span>
                                    <div className="d-flex flex-column flex-grow-1 mr-2">
                                        <Link
                                            to="/#"
                                            className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1"
                                        >
                                            The best product
                                        </Link>
                                        <span className="text-muted font-size-sm">
                                            Due in 2 Days
                                        </span>
                                    </div>
                                    <span className="font-weight-bolder text-info py-1 font-size-lg">
                                        +8%
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div> */}

                            {/* ============== */}
                        </div>
                    </div>
                    {mobileNavPop ? (
                        <div className="topbar" style={{ marginTop: "55px" }}>
                            <div className="dropdown">
                                <div
                                    className="topbar-item mr-4"
                                    data-toggle="dropdown"
                                    data-offset="10px,0px"
                                >
                                    <span
                                        // to="/startOccasion"
                                        className="btn font-weight-bolder btn-sm btn-light-success px-5"
                                    >
                                        Create
                                    </span>
                                </div>

                                <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-md">
                                    <ul className="navi navi-hover py-5">
                                        <li className="navi-item">
                                            <Link
                                                to="/startOccasion"
                                                className="navi-link"
                                            >
                                                <span className="navi-icon">
                                                    <i className="flaticon2-drop"></i>
                                                </span>
                                                <span className="navi-text">
                                                    New Greet
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="navi-item">
                                            <div
                                                // onClick={
                                                //     () => handleInviteClick()
                                                //     // navigate("/occasionEdit", {
                                                //     //     state: {
                                                //     //         isInvite: true,
                                                //     //     },
                                                //     // })
                                                // }
                                                style={{ cursor: "pointer" }}
                                                className="navi-link"
                                                type="button"
                                                data-toggle="modal"
                                                data-target="#exampleModalLong"
                                            >
                                                <span className="navi-icon">
                                                    <i className="flaticon2-list-3"></i>
                                                </span>
                                                <span className="navi-text">
                                                    Send Invites
                                                </span>
                                            </div>
                                        </li>

                                        <li className="navi-separator my-3"></li>
                                        <li className="navi-item">
                                            <a
                                                href="/helpdesk"
                                                className="navi-link"
                                            >
                                                <span className="navi-icon">
                                                    <i className="flaticon2-magnifier-tool"></i>
                                                </span>
                                                <span className="navi-text">
                                                    Help
                                                </span>
                                            </a>
                                        </li>
                                        <li className="navi-item">
                                            <a
                                                href="/PrivacyPolicy"
                                                className="navi-link"
                                            >
                                                <span className="navi-icon">
                                                    <i className="flaticon2-bell-2"></i>
                                                </span>
                                                <span className="navi-text">
                                                    Privacy
                                                </span>
                                                <span className="navi-link-badge"></span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div
                                className="topbar-item mr-4"
                                onClick={() => setSidebarOpen(true)}
                            >
                                <div className="btn btn-icon btn-sm btn-clean btn-text-dark-75">
                                    <span className="svg-icon svg-icon-lg">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            // xmlnsy:Xlink="http://www.w3.org/1999/xlink"
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
                                </div>
                            </div>

                            {/* ================== */}
                        </div>
                    ) : (
                        <></>
                    )}

                    <div className="d-flex flex-column flex-root">
                        <div className="d-flex flex-row flex-column-fluid page p-0">
                            {/* sidebar left commented dhruvin */}
                            {/* ================ */}
                            {/* <div
                            className="aside aside-left d-flex flex-column flex-row-auto"
                            id="kt_aside"
                            style={{ zIndex: "99999" }}
                        >
                            <div
                                className="aside-menu-wrapper flex-column-fluid"
                                id="kt_aside_menu_wrapper"
                            >
                                <div
                                    id="kt_aside_menu"
                                    className="aside-menu min-h-lg-800px"
                                    data-menu-vertical="1"
                                    data-menu-scroll="1"
                                    data-menu-dropdown-timeout="500"
                                >
                                    <ul className="menu-nav">
                                        <li
                                            className="menu-item menu-item-active"
                                            aria-haspopup="true"
                                        >
                                            <Link
                                                to="/dashboard"
                                                className="menu-link"
                                            >
                                                <span className="svg-icon menu-icon">
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
                                                                d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z"
                                                                fill="#000000"
                                                                fillRule="nonzero"
                                                            />
                                                            <path
                                                                d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z"
                                                                fill="#000000"
                                                                opacity="0.3"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <span className="menu-text">
                                                    Dashboard
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="menu-section">
                                            <h4 className="menu-text">
                                                Greets
                                            </h4>
                                            <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
                                        </li>
                                        <li
                                            className="menu-item menu-item-submenu"
                                            aria-haspopup="true"
                                            data-menu-toggle="hover"
                                        >
                                            <Link
                                                to="/dashboard"
                                                className="menu-link "
                                            >
                                                <span className="svg-icon menu-icon">
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
                                                <span className="menu-text">
                                                    My U-Greets
                                                </span>
                                                <i className="menu-arrow"></i>
                                            </Link>
                                        </li>
                                        <li
                                            className="menu-item menu-item-submenu"
                                            aria-haspopup="true"
                                            data-menu-toggle="hover"
                                        >
                                            <Link
                                                to="/startOccasion"
                                                className="menu-link "
                                            >
                                                <span className="svg-icon menu-icon">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        // Xlink="http://www.w3.org/1999/xlink"
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
                                                                x="2"
                                                                y="6"
                                                                width="13"
                                                                height="12"
                                                                rx="2"
                                                            />
                                                            <path
                                                                d="M22,8.4142119 L22,15.5857848 C22,16.1380695 21.5522847,16.5857848 21,16.5857848 C20.7347833,16.5857848 20.4804293,16.4804278 20.2928929,16.2928912 L16.7071064,12.7071013 C16.3165823,12.3165768 16.3165826,11.6834118 16.7071071,11.2928877 L20.2928936,7.70710477 C20.683418,7.31658067 21.316583,7.31658098 21.7071071,7.70710546 C21.8946433,7.89464181 22,8.14899558 22,8.4142119 Z"
                                                                fill="#000000"
                                                                opacity="0.3"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <span className="menu-text">
                                                    Start New Greet
                                                </span>
                                                <i className="menu-arrow"></i>
                                            </Link>
                                        </li>
                                        <li className="menu-section">
                                            <h4 className="menu-text">
                                                My Account
                                            </h4>
                                            <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
                                        </li>
                                        <li
                                            className="menu-item"
                                            aria-haspopup="true"
                                        >
                                            <Link
                                                to="/user-profile-personal-info.html"
                                                className="menu-link"
                                            >
                                                <span className="svg-icon menu-icon">
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
                                                <span className="menu-text">
                                                    My Profile
                                                </span>
                                            </Link>
                                        </li>
                                        

                                        <li className="menu-section">
                                            <h4 className="menu-text">
                                                Support
                                            </h4>
                                            <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
                                        </li>
                                        <li
                                            className="menu-item menu-item-submenu"
                                            aria-haspopup="true"
                                            data-menu-toggle="hover"
                                        >
                                            <Link
                                                to="/helpdesk"
                                                className="menu-link "
                                            >
                                                <span className="svg-icon menu-icon">
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
                                                                d="M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z"
                                                                fill="#000000"
                                                            />
                                                            <path
                                                                d="M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z"
                                                                fill="#000000"
                                                                opacity="0.3"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <span className="menu-text">
                                                    Helpdesk
                                                </span>
                                                <i className="menu-arrow"></i>
                                            </Link>
                                        </li>
                                        <li
                                            className="menu-item menu-item-submenu"
                                            aria-haspopup="true"
                                            data-menu-toggle="hover"
                                        >
                                            <Link
                                                to="/downloaded/faq.html"
                                                className="menu-link "
                                            >
                                                <span className="svg-icon menu-icon">
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
                                                            <circle
                                                                fill="#000000"
                                                                opacity="0.3"
                                                                cx="12"
                                                                cy="12"
                                                                r="10"
                                                            />
                                                            <path
                                                                d="M12,16 C12.5522847,16 13,16.4477153 13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 C11,16.4477153 11.4477153,16 12,16 Z M10.591,14.868 L10.591,13.209 L11.851,13.209 C13.447,13.209 14.602,11.991 14.602,10.395 C14.602,8.799 13.447,7.581 11.851,7.581 C10.234,7.581 9.121,8.799 9.121,10.395 L7.336,10.395 C7.336,7.875 9.31,5.922 11.851,5.922 C14.392,5.922 16.387,7.875 16.387,10.395 C16.387,12.915 14.392,14.868 11.851,14.868 L10.591,14.868 Z"
                                                                fill="#000000"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <span className="menu-text">
                                                    FAQ
                                                </span>
                                                <i className="menu-arrow"></i>
                                            </Link>
                                        </li>
                                        <li
                                            className="menu-item menu-item-submenu"
                                            aria-haspopup="true"
                                            data-menu-toggle="hover"
                                        >
                                            <Link
                                                to="/downloaded/pricing.html"
                                                className="menu-link "
                                            >
                                                <span className="svg-icon menu-icon">
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
                                                                opacity="0.3"
                                                                x="11.5"
                                                                y="2"
                                                                width="2"
                                                                height="4"
                                                                rx="1"
                                                            />
                                                            <rect
                                                                fill="#000000"
                                                                opacity="0.3"
                                                                x="11.5"
                                                                y="16"
                                                                width="2"
                                                                height="5"
                                                                rx="1"
                                                            />
                                                            <path
                                                                d="M15.493,8.044 C15.2143319,7.68933156 14.8501689,7.40750104 14.4005,7.1985 C13.9508311,6.98949895 13.5170021,6.885 13.099,6.885 C12.8836656,6.885 12.6651678,6.90399981 12.4435,6.942 C12.2218322,6.98000019 12.0223342,7.05283279 11.845,7.1605 C11.6676658,7.2681672 11.5188339,7.40749914 11.3985,7.5785 C11.2781661,7.74950085 11.218,7.96799867 11.218,8.234 C11.218,8.46200114 11.2654995,8.65199924 11.3605,8.804 C11.4555005,8.95600076 11.5948324,9.08899943 11.7785,9.203 C11.9621676,9.31700057 12.1806654,9.42149952 12.434,9.5165 C12.6873346,9.61150047 12.9723317,9.70966616 13.289,9.811 C13.7450023,9.96300076 14.2199975,10.1308324 14.714,10.3145 C15.2080025,10.4981676 15.6576646,10.7419985 16.063,11.046 C16.4683354,11.3500015 16.8039987,11.7268311 17.07,12.1765 C17.3360013,12.6261689 17.469,13.1866633 17.469,13.858 C17.469,14.6306705 17.3265014,15.2988305 17.0415,15.8625 C16.7564986,16.4261695 16.3733357,16.8916648 15.892,17.259 C15.4106643,17.6263352 14.8596698,17.8986658 14.239,18.076 C13.6183302,18.2533342 12.97867,18.342 12.32,18.342 C11.3573285,18.342 10.4263378,18.1741683 9.527,17.8385 C8.62766217,17.5028317 7.88033631,17.0246698 7.285,16.404 L9.413,14.238 C9.74233498,14.6433354 10.176164,14.9821653 10.7145,15.2545 C11.252836,15.5268347 11.7879973,15.663 12.32,15.663 C12.5606679,15.663 12.7949989,15.6376669 13.023,15.587 C13.2510011,15.5363331 13.4504991,15.4540006 13.6215,15.34 C13.7925009,15.2259994 13.9286662,15.0740009 14.03,14.884 C14.1313338,14.693999 14.182,14.4660013 14.182,14.2 C14.182,13.9466654 14.1186673,13.7313342 13.992,13.554 C13.8653327,13.3766658 13.6848345,13.2151674 13.4505,13.0695 C13.2161655,12.9238326 12.9248351,12.7908339 12.5765,12.6705 C12.2281649,12.5501661 11.8323355,12.420334 11.389,12.281 C10.9583312,12.141666 10.5371687,11.9770009 10.1255,11.787 C9.71383127,11.596999 9.34650161,11.3531682 9.0235,11.0555 C8.70049838,10.7578318 8.44083431,10.3968355 8.2445,9.9725 C8.04816568,9.54816454 7.95,9.03200304 7.95,8.424 C7.95,7.67666293 8.10199848,7.03700266 8.406,6.505 C8.71000152,5.97299734 9.10899753,5.53600171 9.603,5.194 C10.0970025,4.85199829 10.6543302,4.60183412 11.275,4.4435 C11.8956698,4.28516587 12.5226635,4.206 13.156,4.206 C13.9160038,4.206 14.6918294,4.34533194 15.4835,4.624 C16.2751706,4.90266806 16.9686637,5.31433061 17.564,5.859 L15.493,8.044 Z"
                                                                fill="#000000"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <span className="menu-text">
                                                    Pricing
                                                </span>
                                                <i className="menu-arrow"></i>
                                            </Link>
                                        </li>
                                        <li
                                            className="menu-item menu-item-submenu"
                                            aria-haspopup="true"
                                            data-menu-toggle="hover"
                                        >
                                            <Link
                                                to="/PrivacyPolicy"
                                                className="menu-link "
                                            >
                                                <span className="svg-icon menu-icon">
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
                                                                d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z"
                                                                fill="#000000"
                                                                opacity="0.3"
                                                            />
                                                            <path
                                                                d="M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z"
                                                                fill="#000000"
                                                                opacity="0.3"
                                                            />
                                                            <path
                                                                d="M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 C14.5228466,17 11.463736,17 7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z"
                                                                fill="#000000"
                                                                opacity="0.3"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <span className="menu-text">
                                                    Privacy Policy
                                                </span>
                                                <i className="menu-arrow"></i>
                                            </Link>
                                        </li>
                                        <li
                                            className="menu-item menu-item-submenu"
                                            aria-haspopup="true"
                                            data-menu-toggle="hover"
                                        >
                                            <Link
                                                to="/#"
                                                className="menu-link "
                                            >
                                                <span className="svg-icon menu-icon">
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
                                                                d="M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z"
                                                                fill="#000000"
                                                                opacity="0.3"
                                                            />
                                                            <path
                                                                d="M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z"
                                                                fill="#000000"
                                                            />
                                                            <rect
                                                                fill="#000000"
                                                                opacity="0.3"
                                                                x="10"
                                                                y="9"
                                                                width="7"
                                                                height="2"
                                                                rx="1"
                                                            />
                                                            <rect
                                                                fill="#000000"
                                                                opacity="0.3"
                                                                x="7"
                                                                y="9"
                                                                width="2"
                                                                height="2"
                                                                rx="1"
                                                            />
                                                            <rect
                                                                fill="#000000"
                                                                opacity="0.3"
                                                                x="7"
                                                                y="13"
                                                                width="2"
                                                                height="2"
                                                                rx="1"
                                                            />
                                                            <rect
                                                                fill="#000000"
                                                                opacity="0.3"
                                                                x="10"
                                                                y="13"
                                                                width="7"
                                                                height="2"
                                                                rx="1"
                                                            />
                                                            <rect
                                                                fill="#000000"
                                                                opacity="0.3"
                                                                x="7"
                                                                y="17"
                                                                width="2"
                                                                height="2"
                                                                rx="1"
                                                            />
                                                            <rect
                                                                fill="#000000"
                                                                opacity="0.3"
                                                                x="10"
                                                                y="17"
                                                                width="7"
                                                                height="2"
                                                                rx="1"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <span className="menu-text">
                                                    Terms & Conditions
                                                </span>
                                                <i className="menu-arrow"></i>
                                            </Link>
                                        </li>
                                        <li
                                            className="menu-item menu-item-submenu"
                                            aria-haspopup="true"
                                            data-menu-toggle="hover"
                                        >
                                            <Link
                                                to="/#"
                                                className="menu-link "
                                            >
                                                <span className="svg-icon menu-icon">
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
                                                                d="M14,13.381038 L14,3.47213595 L7.99460483,15.4829263 L14,13.381038 Z M4.88230018,17.2353996 L13.2844582,0.431083506 C13.4820496,0.0359007077 13.9625881,-0.12427877 14.3577709,0.0733126292 C14.5125928,0.15072359 14.6381308,0.276261584 14.7155418,0.431083506 L23.1176998,17.2353996 C23.3152912,17.6305824 23.1551117,18.1111209 22.7599289,18.3087123 C22.5664522,18.4054506 22.3420471,18.4197165 22.1378777,18.3482572 L14,15.5 L5.86212227,18.3482572 C5.44509941,18.4942152 4.98871325,18.2744737 4.84275525,17.8574509 C4.77129597,17.6532815 4.78556182,17.4288764 4.88230018,17.2353996 Z"
                                                                fill="#000000"
                                                                fillRule="nonzero"
                                                                transform="translate(14.000087, 9.191034) rotate(-315.000000) translate(-14.000087, -9.191034) "
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                                <span className="menu-text">
                                                    Contact Us
                                                </span>
                                                <i className="menu-arrow"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                            {/* ======== */}
                            <div
                                className="d-flex flex-column flex-row-fluid wrapper"
                                id="kt_wrapper"
                            >
                                <div
                                    id="kt_header"
                                    className="header header-fixed"
                                >
                                    <div className="container d-flex align-items-stretch justify-content-between">
                                        <div className="d-none d-lg-flex align-items-center mr-3">
                                            {/* sidebar left commented dhruvin */}
                                            {/* ================ */}
                                            {/* <button
                                            className="btn btn-icon aside-toggle ml-n3 mr-10"
                                            id="kt_aside_desktop_toggle"
                                        >
                                            <span className="svg-icon svg-icon-xxl svg-icon-dark-75">
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
                                                            opacity="0.3"
                                                            x="4"
                                                            y="5"
                                                            width="16"
                                                            height="2"
                                                            rx="1"
                                                        />
                                                        <rect
                                                            fill="#000000"
                                                            opacity="0.3"
                                                            x="4"
                                                            y="13"
                                                            width="16"
                                                            height="2"
                                                            rx="1"
                                                        />
                                                        <path
                                                            d="M5,9 L13,9 C13.5522847,9 14,9.44771525 14,10 C14,10.5522847 13.5522847,11 13,11 L5,11 C4.44771525,11 4,10.5522847 4,10 C4,9.44771525 4.44771525,9 5,9 Z M5,17 L13,17 C13.5522847,17 14,17.4477153 14,18 C14,18.5522847 13.5522847,19 13,19 L5,19 C4.44771525,19 4,18.5522847 4,18 C4,17.4477153 4.44771525,17 5,17 Z"
                                                            fill="#000000"
                                                        />
                                                    </g>
                                                </svg>
                                            </span>
                                        </button> */}
                                            <button
                                                className="btn btn-icon aside-toggle ml-n3 mr-10"
                                                onClick={() =>
                                                    setSidebarLeftOpen(true)
                                                }
                                            >
                                                <span className="svg-icon svg-icon-xxl svg-icon-dark-75">
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
                                                                opacity="0.3"
                                                                x="4"
                                                                y="5"
                                                                width="16"
                                                                height="2"
                                                                rx="1"
                                                            />
                                                            <rect
                                                                fill="#000000"
                                                                opacity="0.3"
                                                                x="4"
                                                                y="13"
                                                                width="16"
                                                                height="2"
                                                                rx="1"
                                                            />
                                                            <path
                                                                d="M5,9 L13,9 C13.5522847,9 14,9.44771525 14,10 C14,10.5522847 13.5522847,11 13,11 L5,11 C4.44771525,11 4,10.5522847 4,10 C4,9.44771525 4.44771525,9 5,9 Z M5,17 L13,17 C13.5522847,17 14,17.4477153 14,18 C14,18.5522847 13.5522847,19 13,19 L5,19 C4.44771525,19 4,18.5522847 4,18 C4,17.4477153 4.44771525,17 5,17 Z"
                                                                fill="#000000"
                                                            />
                                                        </g>
                                                    </svg>
                                                </span>
                                            </button>
                                            {/* ======== */}
                                            {window.location.pathname ==
                                            "/dashboard" ? (
                                                <a href="/">
                                                    <img
                                                        alt="Logo"
                                                        src="assets/media/logos/logo-dark.png"
                                                        className="logo-sticky max-h-35px"
                                                    />
                                                </a>
                                            ) : (
                                                <Link to="/dashboard">
                                                    <img
                                                        alt="Logo"
                                                        src="assets/media/logos/logo-dark.png"
                                                        className="logo-sticky max-h-35px"
                                                    />
                                                </Link>
                                            )}
                                        </div>

                                        <div className="topbar">
                                            <div className="dropdown">
                                                <div
                                                    className="topbar-item mr-4"
                                                    data-toggle="dropdown"
                                                    data-offset="10px,0px"
                                                >
                                                    <span
                                                        // to="/startOccasion"
                                                        className="btn font-weight-bolder btn-sm btn-light-success px-5"
                                                    >
                                                        Create
                                                    </span>
                                                </div>

                                                <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-md">
                                                    <ul className="navi navi-hover py-5">
                                                        <li className="navi-item">
                                                            <Link
                                                                to="/startOccasion"
                                                                className="navi-link"
                                                            >
                                                                <span className="navi-icon">
                                                                    <i className="flaticon2-drop"></i>
                                                                </span>
                                                                <span className="navi-text">
                                                                    New Greet
                                                                </span>
                                                            </Link>
                                                        </li>
                                                        <li className="navi-item">
                                                            <div
                                                                // onClick={() =>
                                                                //     navigate(
                                                                //         "/occasionEdit",
                                                                //         {
                                                                //             state: {
                                                                //                 isInvite: true,
                                                                //             },
                                                                //         }
                                                                //     )
                                                                // }
                                                                style={{
                                                                    cursor: "pointer",
                                                                }}
                                                                className="navi-link"
                                                                type="button"
                                                                data-toggle="modal"
                                                                data-target="#exampleModalLong"
                                                            >
                                                                <span className="navi-icon">
                                                                    <i className="flaticon2-list-3"></i>
                                                                </span>
                                                                <span className="navi-text">
                                                                    Send Invites
                                                                </span>
                                                            </div>
                                                        </li>

                                                        <li className="navi-separator my-3"></li>
                                                        <li className="navi-item">
                                                            <a
                                                                href="/helpdesk"
                                                                className="navi-link"
                                                            >
                                                                <span className="navi-icon">
                                                                    <i className="flaticon2-magnifier-tool"></i>
                                                                </span>
                                                                <span className="navi-text">
                                                                    Help
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li className="navi-item">
                                                            <a
                                                                href="/PrivacyPolicy"
                                                                className="navi-link"
                                                            >
                                                                <span className="navi-icon">
                                                                    <i className="flaticon2-bell-2"></i>
                                                                </span>
                                                                <span className="navi-text">
                                                                    Privacy
                                                                </span>
                                                                <span className="navi-link-badge"></span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* right bar default commented dhruvin */}
                                            {/* ================== */}
                                            {/* <div className="topbar-item mr-4">
                                        <div
                                            className="btn btn-icon btn-sm btn-clean btn-text-dark-75"
                                            id="kt_quick_user_toggle"
                                        >
                                            <span className="svg-icon svg-icon-lg">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    // xmlnsy:Xlink="http://www.w3.org/1999/xlink"
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
                                        </div>
                                    </div> */}

                                            <div
                                                className="topbar-item mr-4"
                                                onClick={() =>
                                                    setSidebarOpen(true)
                                                }
                                            >
                                                <div className="btn btn-icon btn-sm btn-clean btn-text-dark-75">
                                                    <span className="svg-icon svg-icon-lg">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            // xmlnsy:Xlink="http://www.w3.org/1999/xlink"
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
                                                </div>
                                            </div>

                                            {/* ================== */}
                                        </div>
                                    </div>
                                </div>

                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </Sidebar>
        </Sidebar>
    );
};
