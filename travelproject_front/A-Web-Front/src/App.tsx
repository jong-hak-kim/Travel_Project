import React from "react";
import "./App.css";
import MainView from "./view/MainView";
import SignUpView from "./view/Authentication/SignUpView";
import SignInView from "./view/Authentication/SignInView";
import { Route, Routes } from "react-router-dom";
import FindEmailView from "./view/Authentication/FindEmailView";
import FindPasswordView from "./view/Authentication/FindPasswordView";
import RecommendationMainView from "./view/Recommendation/MainView";
import Navigation from "./view/Navigation";
import Footer from "./view/Footer";
import { Box } from "@mui/material";
import CustomerServiceSideNavigation from "./view/CustomerService/CustomerServiceSideNavigation";
import CustomerServiceNotice from "./view/CustomerService/Notice";
import CustomerServiceInquiry from "./view/CustomerService/Inquiry";
import DestinationCourseMain from "./view/DestinationCourse";
import DestinationCourseDetail from "./view/DestinationCourse/Detail";
import DestinationCourseWrite from "./view/DestinationCourse/Write";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/auth">
          <Route path="sign-in" element={<SignInView />} />
          <Route path="sign-up" element={<SignUpView />} />
          <Route path="find-email" element={<FindEmailView />} />
          <Route path="find-password" element={<FindPasswordView />} />
        </Route>
        <Route path="/course">
          <Route index element={<DestinationCourseMain />} />
          <Route path="detail" element={<DestinationCourseDetail />} />
          <Route path="write" element={<DestinationCourseWrite />} />
        </Route>
        <Route path="/recommedation">
          <Route index element={<RecommendationMainView />} />
        </Route>
        <Route path="/customer-service">
          <Route index element={<CustomerServiceNotice />} />
          <Route path="notice" element={<CustomerServiceNotice />} />
          <Route path="inquiry" element={<CustomerServiceInquiry />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
