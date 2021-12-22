import React from "react";
import { Link } from "react-router-dom";
import "./SignInSignUp.css";

const SignInSignUp = () => {
  return (
    <div className="signIn-container">
      <div className="signIn-wrapper">
        <p style={{ fontSize: "13px" }}>See personalized recommendations</p>
        <Link to={"/sign-in"}>
          <button
            className="signIn-btn"
            style={{ background: `url(/assets/btn-bg.jpg)` }}
          >
            Sign in
          </button>
        </Link>
        <p>
          New customer ?
          <span className="start-here">
            <Link to={"/sign-up"}>Start here.</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignInSignUp;
