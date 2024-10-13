import React from "react";
import ReactDOM from "react-dom/client";
import SignInPage from "./Component/signinpage/SignInPage";
import HomePage from "./Component/homepage/homepage";
import Signup from "./Component/signuppage/Signup";

// import Dashboard from './Component/dashboard/dash';
import FormPage from "./Component/orgpage/orgpage";

import Dashboard from "./Component/dashboard/dash";
// import Dashboard from './Component/dashboard/dashboard';
// import './index.css';
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="login" element={<SignInPage />} />
      <Route path="reg" element={<Signup />} />
      <Route path="org" element={<FormPage />} />
      <Route path="dash" element={<Dashboard />} />
      {/* <Route path='Dashboard' element={<Dashboard />} /> */}
    </Routes>
  </BrowserRouter>
);
