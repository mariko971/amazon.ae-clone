import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  //   const emailInputRef = React.useRef(null);

  // React.useEffect(()=>{
  //   emailInputRef.current.focus();
  // }, []);
  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  return (
    <>
      <div className="signUp__header">
        <Link to={"/"}>
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG7.png"
            alt="amazon logo"
          />
        </Link>
        <div className="signUp__form-container">
          <p className="form-title">Create Account</p>
          <form action="">
            {/* CUSTOMER NAME */}
            <label
              htmlFor="customer-name"
              className="signUp-input-label"
              ref={nameInputRef}
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              className="signUp-form-input"
              id="customer-name"
            />
            {/* CUSTOMER EMAIL */}
            <label htmlFor="customer-email" className="signUp-input-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="signUp-form-input"
              id="customer-email"
            />
            {/* PASSWORD */}
            <label htmlFor="customer-password" className="signUp-input-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="signUp-form-input"
              id="customer-password"
            />
            <p className="signUp-txt">Passwords must be atleast 6 characters</p>
            <p className="signUp-txt">
              By enrolling a mobile phone number, you consent to receiving
              automated security notifications via text message from Amazon. You
              can opt out by removing your mobile number on the Login & Security
              page located in Your Account settings. Message and data rates may
              apply.
            </p>
            <button type="submit" className="submit-btn">
              Create your Account
            </button>
          </form>
          <p className="signUp-form-footer-txt">
            By creating an account, you agree to Amazon's
            <span>
              <a href="/"> Conditions of use </a>
            </span>
            and
            <span>
              <a href="/"> Privacy Notice. </a>
            </span>
          </p>
          <div className="signUp-form-footer">
            Already have an account? <Link to={"/sign-in"}> Sign in</Link>
          </div>
        </div>
      </div>
      <div className="signUp-copyright-section">
        <span className="signUp-footer-links">
          <a href="/">Conditions of Use</a>
          <a href="/">Privacy Notice</a>
          <a href="/">Help</a>
        </span>
        <p>© 1996-2021, Amazon.com, Inc. or its affiliates</p>
      </div>
    </>
  );
};

export default SignUp;
