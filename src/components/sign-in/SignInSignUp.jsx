import React from "react";
import "./SignInSignUp.css";

const SignInSignUp = () => {
  return (
    <div className="signIn-container">
      <div className="signIn-wrapper">
        <p style={{ fontSize: "13px" }}>See personalized recommendations</p>
        <button
          className="signIn-btn"
          style={{ background: `url(/assets/btn-bg.jpg)` }}
        >
          Sign in
        </button>
        <p>
          New customer ?
          <span>
            <a href="/">Start here.</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignInSignUp;
