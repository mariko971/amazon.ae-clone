import React from "react";
import { Link } from "react-router-dom";

import "./HeaderDropdown.css";

const HeaderDropdown = ({ currentUser, handleSignOut }) => {
  return (
    <div className="dropDown-container">
      <Link
        className="dropDown-link"
        to={currentUser ? "/" : "/sign-in"}
        onClick={currentUser ? handleSignOut : null}
      >
        <p>{currentUser ? `Sign Out` : `Sign In`}</p>
      </Link>
      <Link className="dropDown-link" to={currentUser ? "/orders" : "/sign-in"}>
        <p>Orders</p>
      </Link>
    </div>
  );
};

export default HeaderDropdown;
