import React, { useState, useEffect } from "react";
import SignInPage from "./Component/signinpage/SignInPage";
import Signup from "./Component/signuppage/Signup";
import PassReset from "./Component/PassReset";
import HomePage from "./Component/homepage/homepage";
// import { Route, Router } from 'react-router-dom';

import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div>
      {/* <h1>{message}</h1> */}
      {/* <SignInPage/> */}
      <div className="main-container">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
