import React from "react";
import { Link } from "react-router-dom";

const SidebarLeft = () => {
    return (
        <div className="aside-menu-wrapper flex-column-fluid">
            <div className="aside-menu min-h-lg-800px">
                <ul className="menu-nav">
                    <li className="menu-item menu-item-active">
                        <Link to="/dashboard" className="menu-link">
                            <span className="svg-icon menu-icon">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
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
                            <span className="menu-text">Dashboard</span>
                        </Link>
                    </li>
                    <li className="menu-section">
                        <h4 className="menu-text">Greets</h4>
                        <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
                    </li>
                    <li className="menu-item menu-item-submenu">
                        <Link
                            onClick={() => {
                                document
                                    .getElementById("myGreets")
                                    .scrollIntoView();
                            }}
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
                            <span className="menu-text">My U-Greets</span>
                            <i className="menu-arrow"></i>
                        </Link>
                    </li>
                    <li
                        className="menu-item menu-item-submenu"
                        aria-haspopup="true"
                        data-menu-toggle="hover"
                    >
                        <Link to="/startOccasion" className="menu-link">
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
                            <span className="menu-text">Start New Greet</span>
                            <i className="menu-arrow"></i>
                        </Link>
                    </li>
                    <li className="menu-section">
                        <h4 className="menu-text">My Account</h4>
                        <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
                    </li>
                    <li className="menu-item" aria-haspopup="true">
                        <Link to="/userProfile" className="menu-link">
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
                            <span className="menu-text">My Profile</span>
                        </Link>
                    </li>
                    

                    <li className="menu-section">
                        <h4 className="menu-text">Support</h4>
                        <i className="menu-icon ki ki-bold-more-hor icon-md"></i>
                    </li>
                    <li
                        className="menu-item menu-item-submenu"
                        aria-haspopup="true"
                        data-menu-toggle="hover"
                    >
                        <a href="/helpdesk" className="menu-link">
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
                            <span className="menu-text">Helpdesk</span>
                            <i className="menu-arrow"></i>
                        </a>
                    </li>
                    <li
                        className="menu-item menu-item-submenu"
                        aria-haspopup="true"
                        data-menu-toggle="hover"
                    >
                        <a href="/faq" className="menu-link">
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
                            <span className="menu-text">FAQ</span>
                            <i className="menu-arrow"></i>
                        </a>
                    </li>
                    <li
                        className="menu-item menu-item-submenu"
                        aria-haspopup="true"
                        data-menu-toggle="hover"
                    >
                        <a href="/pricing" className="menu-link">
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
                            <span className="menu-text">Pricing</span>
                            <i className="menu-arrow"></i>
                        </a>
                    </li>
                    <li
                        className="menu-item menu-item-submenu"
                        aria-haspopup="true"
                        data-menu-toggle="hover"
                    >
                        <a href="/privacypolicy" className="menu-link">
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
                            <span className="menu-text">Privacy Policy</span>
                            <i className="menu-arrow"></i>
                        </a>
                    </li>
                    <li
                        className="menu-item menu-item-submenu"
                        aria-haspopup="true"
                        data-menu-toggle="hover"
                    >
                        <a href="/privacypolicy" className="menu-link">
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
                        </a>
                    </li>
                    <li
                        className="menu-item menu-item-submenu"
                        aria-haspopup="true"
                        data-menu-toggle="hover"
                    >
                        <a
                            href="mailto:greetings@u-greet.com"
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
                            <span className="menu-text">Contact Us</span>
                            <i className="menu-arrow"></i>
                        </a>
                    </li>
                </ul>
            </div>
            {/* scroller not working */}
            {/* <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                <div
                    className="ps__thumb-x"
                    tabIndex={0}
                    style={{ left: 0, width: 0 }}
                />
            </div>
            <div
                className="ps__rail-y"
                style={{ top: 0, height: 463, right: 0 }}
            >
                <div
                    className="ps__thumb-y"
                    tabIndex={0}
                    style={{ top: 0, height: 267 }}
                />
            </div> */}
        </div>
    );
};

export default SidebarLeft;
