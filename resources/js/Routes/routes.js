import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Cookies } from "react-cookie";
import { useSelector } from "react-redux";
import authContext from "../context/authContext";
import Protected from "./ProtectedRoute";
import StyledRoute from "./StyledRoute";
import StyledRoute2 from "./StyledRoute2";

import { Home } from "../Pages/Home";
import { Signup } from "../Pages/Auth/Signup";
import { Welcome } from "../Pages/Welcome";
import { Dashboard } from "../Pages/Dashboard/Dashboard";
import { Signin } from "../Pages/Auth/Signin";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import ErrorPage from "../Pages/ErrorPage";
import StartOccasion from "../Pages/Occasion/StartOccasion";
import OccasionCreate from "../Pages/Occasion/OccasionCreate";
import OccasionPersons from "../Pages/Occasion/OccasionPersons";
import OccasionDate from "../Pages/Occasion/OccasionDate";
import OccasionInformation from "../Pages/Occasion/OccasionInformation";
import OccasionEdit from "../Pages/Occasion/OccasionEdit";
import OccasionThemes from "../Pages/Occasion/OccasionThemes";
import OccasionMusic from "../Pages/Occasion/OccasionMusic";
import OccasionTransition from "../Pages/Occasion/OccasionTransition";
import OccasionPreview from "../Pages/Occasion/OccasionPreview";
import OccasionCheckout from "../Pages/Occasion/OccasionCheckout";
import UserProfile from "../Pages/UserProfile/UserProfile";
import ChangePass from "../Pages/UserProfile/ChangePass";
import UserCards from "../Pages/UserProfile/UserCards";
import About from "../Pages/WebsitePages/About";
import Blog from "../Pages/WebsitePages/Blog";
import HowItWorks from "../Pages/WebsitePages/HowItWorks";
import Pricing from "../Pages/WebsitePages/Pricing";
import WorkWithUGreet from "../Pages/WebsitePages/WorkWithUGreet";
import Faq from "../Pages/WebsitePages/Faq";
import Helpdesk from "../Pages/WebsitePages/Helpdesk";
import PrivacyPolicy from "../Pages/WebsitePages/PrivacyPolicy";
import Reviews from "../Pages/WebsitePages/Reviews";
import Loader from "../Component/Loader/Loader";
import SweetGreet from "../Pages/WebsitePages/Greets/SweetGreet";
import Uage from "../Pages/WebsitePages/Greets/Uage";
import Uwed from "../Pages/WebsitePages/Greets/Uwed";
import Uremember from "../Pages/WebsitePages/Greets/Uremember";
import Ulove from "../Pages/WebsitePages/Greets/Ulove";
import Umiss from "../Pages/WebsitePages/Greets/Umiss";
import Ubaby from "../Pages/WebsitePages/Greets/Ubaby";
import Uparent from "../Pages/WebsitePages/Greets/Uparent";
import Ugraduate from "../Pages/WebsitePages/Greets/Ugraduate";
import Uretire from "../Pages/WebsitePages/Greets/Uretire";
import Ucelebrate from "../Pages/WebsitePages/Greets/Ucelebrate";
import Ugreet from "../Pages/WebsitePages/Greets/Ugreet";
import ResetPassword from "../Pages/Auth/ResetPassword";
import InvitedToGreet from "../Pages/InvitedToGreet/InvitedToGreet";
import OccasionCheckoutPayment from "../Pages/Occasion/OccasionCheckoutPayment";
import Blog1 from "../Pages/WebsitePages/Blogs/Blog1";
import Blog2 from "../Pages/WebsitePages/Blogs/Blog2";
import Blog3 from "../Pages/WebsitePages/Blogs/Blog3";
import Blog4 from "../Pages/WebsitePages/Blogs/Blog4";
import Blog5 from "../Pages/WebsitePages/Blogs/Blog5";
import Blog6 from "../Pages/WebsitePages/Blogs/Blog6";
import Blog7 from "../Pages/WebsitePages/Blogs/Blog7";

function AppRoutes(props) {
    const { state } = useContext(authContext);
    
    const cookie = new Cookies();
    const cookieAuth = state?.isLoggedIn || cookie?.get("is_auth");
    const { isLoading } = useSelector((state) => state);
   
    return (
        <>
            {isLoading && <Loader />}
            <Routes>
                {/* website pages */}
                <Route
                    exact
                    path="/"
                    element={
                        <StyledRoute>
                            <Welcome />
                        </StyledRoute>
                    }
                />

                <Route
                    path="/About"
                    element={
                        <StyledRoute>
                            <About />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/Blog"
                    element={
                        <StyledRoute>
                            <Blog />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/Blog1"
                    element={
                        <StyledRoute>
                            <Blog1 />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/Blog2"
                    element={
                        <StyledRoute>
                            <Blog2 />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/Blog3"
                    element={
                        <StyledRoute>
                            <Blog3 />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/Blog4"
                    element={
                        <StyledRoute>
                            <Blog4 />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/Blog5"
                    element={
                        <StyledRoute>
                            <Blog5 />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/Blog6"
                    element={
                        <StyledRoute>
                            <Blog6 />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/Blog7"
                    element={
                        <StyledRoute>
                            <Blog7 />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/HowItWorks"
                    element={
                        <StyledRoute>
                            <HowItWorks />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/Pricing"
                    element={
                        <StyledRoute>
                            <Pricing />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/WorkWithUGreet"
                    element={
                        <StyledRoute>
                            <WorkWithUGreet />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/Faq"
                    element={
                        <StyledRoute>
                            <Faq />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/Helpdesk"
                    element={
                        <StyledRoute>
                            <Helpdesk />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/PrivacyPolicy"
                    element={
                        <StyledRoute>
                            <PrivacyPolicy />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/Reviews"
                    element={
                        <StyledRoute>
                            <Reviews />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/SweetGreet"
                    element={
                        <StyledRoute>
                            <SweetGreet />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/U-Age"
                    element={
                        <StyledRoute>
                            <Uage />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/U-Wed"
                    element={
                        <StyledRoute>
                            <Uwed />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/U-Remember"
                    element={
                        <StyledRoute>
                            <Uremember />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/U-Love"
                    element={
                        <StyledRoute>
                            <Ulove />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/U-Miss"
                    element={
                        <StyledRoute>
                            <Umiss />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/U-Baby"
                    element={
                        <StyledRoute>
                            <Ubaby />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/U-Parent"
                    element={
                        <StyledRoute>
                            <Uparent />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/U-Grad"
                    element={
                        <StyledRoute>
                            <Ugraduate />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/U-Retire"
                    element={
                        <StyledRoute>
                            <Uretire />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/U-Celebrate"
                    element={
                        <StyledRoute>
                            <Ucelebrate />
                        </StyledRoute>
                    }
                />
                <Route
                    path="/U-Greet"
                    element={
                        <StyledRoute>
                            <Ugreet />
                        </StyledRoute>
                    }
                />

                {/* invite to occasion rote page*/}
                <Route
                    path="/InvitedToGreet/:token"
                    // path="/occasionInformation/:token"
                    element={
                        // <Protected isLoggedIn={cookieAuth}>
                        <InvitedToGreet />
                        // </Protected>
                    }
                />
                {/* extra rote page*/}
                <Route
                    path="/home"
                    element={
                        <Protected isLoggedIn={cookieAuth}>
                            <Home />
                        </Protected>
                    }
                />
                {/* auth route page*/}
                {/* auth route page*/}
                {/* auth route page*/}
                <Route
                    path="/signin"
                    element={
                        <StyledRoute2>
                            <Signin />
                        </StyledRoute2>
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <StyledRoute2>
                            <Signup />
                        </StyledRoute2>
                    }
                />
                <Route
                    path="/forgotPassword"
                    element={
                        <StyledRoute2>
                            <ForgotPassword />
                        </StyledRoute2>
                    }
                />
                <Route
                    exact
                    path="/resetPassword/:token"
                    element={
                        <StyledRoute2>
                            <ResetPassword />
                        </StyledRoute2>
                    }
                />
                {/* video creator pages */}
                {/* video creator pages */}
                {/* video creator pages */}
                {/* video creator pages */}
                {/* video creator pages */}

                <Route
                    path="/dashboard"
                    element={
                        <Protected isLoggedIn={cookieAuth}>
                            <Dashboard />
                        </Protected>
                    }
                />
                <Route
                    path="/startOccasion"
                    element={
                        <Protected isLoggedIn={cookieAuth}>
                            <StartOccasion />
                        </Protected>
                    }
                />
                <Route
                    path="/occasionCreate"
                    element={
                        <Protected isLoggedIn={cookieAuth}>
                            <OccasionCreate />
                        </Protected>
                    }
                />
                <Route
                    path="/occasionPersons"
                    element={
                        <Protected isLoggedIn={cookieAuth}>
                            <OccasionPersons />
                        </Protected>
                    }
                />
                <Route
                    path="/occasionDate"
                    element={
                        <Protected isLoggedIn={cookieAuth}>
                            <OccasionDate />
                        </Protected>
                    }
                />
                <Route
                    path="/occasionInformation"
                    element={
                        <Protected isLoggedIn={cookieAuth}>
                            <OccasionInformation />
                        </Protected>
                    }
                />
                <Route
                    path="/occasionEdit"
                    element={
                        <Protected isLoggedIn={cookieAuth}>
                            <OccasionEdit />
                        </Protected>
                    }
                />
                <Route
                    path="/occasionThemes"
                    element={
                        <Protected isLoggedIn={cookieAuth}>
                            <OccasionThemes />
                        </Protected>
                    }
                />
                <Route
                    path="/occasionMusic"
                    element={
                        <Protected isLoggedIn={cookieAuth}>
                            <OccasionMusic />
                        </Protected>
                    }
                />
                <Route
                    path="/occasionTransition"
                    element={
                        <Protected isLoggedIn={cookieAuth}>
                            <OccasionTransition />
                        </Protected>
                    }
                />
                <Route
                    path="/occasionPreview"
                    element={
                        <Protected isLoggedIn={cookieAuth}>
                            <OccasionPreview />
                        </Protected>
                    }
                />
                <Route
                    path="/occasionCheckout"
                    element={
                        <Protected isLoggedIn={cookieAuth}>
                            <OccasionCheckout />
                        </Protected>
                    }
                />
                <Route
                    path="/occasionCheckout/payment"
                    element={
                        <Protected isLoggedIn={cookieAuth}>
                            <OccasionCheckoutPayment />
                        </Protected>
                    }
                />
                <Route
                    path="/userProfile"
                    element={
                        <Protected isLoggedIn={cookieAuth}>
                            <UserProfile />
                        </Protected>
                    }
                />
                <Route
                    path="/changePass"
                    element={
                        <Protected isLoggedIn={cookieAuth}>
                            <ChangePass />
                        </Protected>
                    }
                />
                <Route
                    path="/userCards"
                    element={
                        <Protected isLoggedIn={cookieAuth}>
                            <UserCards />
                        </Protected>
                    }
                />
                <Route
                    path="*"
                    element={
                        <Protected isLoggedIn={cookieAuth}>
                            <ErrorPage />
                        </Protected>
                    }
                />
            </Routes>
        </>
    );
}

export default AppRoutes;
