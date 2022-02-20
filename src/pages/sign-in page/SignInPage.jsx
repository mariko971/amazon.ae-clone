import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignInPage.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.utils";

const SignInPage = () => {
  // form control
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  // form state handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const navigate = useNavigate();
  // Sign in with firebase authentication
  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formState;
    console.log(password);
    signInWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log("Signed in successfully", cred.user);
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
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
          <form className="signIn-form" onSubmit={handleSubmit}>
            <p className="input-label">Your Email</p>
            <input
              type="email"
              name="email"
              className="form-input email-input"
              value={formState.email}
              onChange={handleChange}
              autoFocus
            />
            <p className="input-label">Your Password</p>
            <input
              type="password"
              name="password"
              className="form-input password-input"
              value={formState.password}
              onChange={handleChange}
            />
            <button type="submit" className="submit-btn">
              Continue
            </button>
          </form>

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
          <Link to={"/sign-up"}>
            <button className="footer-btn">Create Your Amazon account</button>
          </Link>
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
