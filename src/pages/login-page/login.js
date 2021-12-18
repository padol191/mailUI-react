import React from "react";
import "./styles.css";
import { useState } from "react";

const LoginPage = ({ onLoginClick, loginError }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div style="height:100%;width:100%;display:inline-block">
      <div className="splitdiv" id="leftdiv">
        <div id="leftdivcard">
          <h1 style="padding-top:20px;text-align:center">Sign In</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <div style="text-align:center">
            <button id="leftbutton" className="ripple2">
              Login
            </button>
          </div>
        </div>
      </div>

      <div className="splitdiv" id="rightdiv">
        <div id="rightdivcard">
          <h1 style="padding-top:20px;text-align:center;color:white">
            New here ?
          </h1>
          <p style="color:white;text-align:center">
            Do you want to discover new things ? Just Register !
          </p>
          <div style="text-align:center">
            <button id="rightbutton" className="ripple">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
