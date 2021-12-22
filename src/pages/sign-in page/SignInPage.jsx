import React from "react";
import { Link } from "react-router-dom";
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <>
      <div className="signIn__header">
        <Link to={"/"}>
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG7.png"
            alt="amazon logo"
          />
        </Link>
        <div className="signIn__form-container">
          <p className="form-title">Sign-In</p>
          <form action="">
            <p className="input-label">Email or mobile phone number</p>
            <input
              type="email"
              name="email"
              className="form-input"
              autoFocus
              // ref={emailInputRef}
            />
          </form>
          <button type="submit" className="submit-btn">
            Continue
          </button>
          <p className="form-footer-txt">
            By signing in, you agree to Amazon's{" "}
            <span>
              <a href="/">Conditions of use</a>
            </span>{" "}
            and{" "}
            <span>
              <a href="/">Privacy Notice.</a>
            </span>
          </p>
          <div className="form-footer-help">
            <a href="!#">Need help?</a>
          </div>
        </div>
        <div className="form-wrapper-footer">
          <p className="new-to-amazon">New to Amazon?</p>
          <button className="footer-btn">Create Your Amazon account</button>
        </div>
      </div>
      <div className="signIn-copyright-section">
        <span className="signIn-footer-links">
          <a href="/">Conditions of Use</a>
          <a href="/">Privacy Notice</a>
          <a href="/">Help</a>
        </span>
        <p>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
      </div>
    </>
  );
};

export default SignInPage;
