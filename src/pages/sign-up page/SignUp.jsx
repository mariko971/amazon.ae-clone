import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, createCustomerProfile } from "../../firebase/firebase.utils";

const SignUp = () => {
  const [formState, setFormState] = useState({
    displayName: "",
    email: "",
    password: "",
  });

  const { displayName, email, password } = formState;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        createCustomerProfile(cred.user, { displayName });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

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
          <form id="signUp-form" onSubmit={handleSubmit}>
            {/* CUSTOMER NAME */}
            <label htmlFor="customer-name" className="signUp-input-label">
              Your Name
            </label>
            <input
              type="text"
              name="displayName"
              value={displayName}
              required
              className="signUp-form-input"
              id="customer-name"
              autoFocus
              onChange={handleChange}
            />
            {/* CUSTOMER EMAIL */}
            <label htmlFor="customer-email" className="signUp-input-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              required
              className="signUp-form-input"
              id="customer-email"
              onChange={handleChange}
            />
            {/* PASSWORD */}
            <label htmlFor="customer-password" className="signUp-input-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              required
              className="signUp-form-input"
              id="customer-password"
              onChange={handleChange}
            />
            <p className="signUp-txt">Passwords must be atleast 6 characters</p>
            <p className="signUp-txt">
              By enrolling your email, you consent to receiving automated
              security notifications via text message. You can opt out by
              removing your email on the Login & Security page located in Your
              Account settings. Message and data rates may apply.
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
