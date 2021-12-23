import React from "react";
import "./Header_nav.css";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
// import ArrowDropDown from "@material-ui/icons/ArrowDropDown";

export const Header_nav = () => {
  return (
    <div className="header-nav">
      {/* hamburger menu */}
      <div className="header-nav__menu">
        <MenuIcon />
        <p className="menu-text">All</p>
      </div>
      {/* category links */}
      <div className="header-nav__links">
        {/* <Link to="/">
          <p className="header-nav-link">Sell</p>
        </Link> */}
        <Link to="/shop">
          <p className="header-nav-link">Best Sellers</p>
        </Link>
        <Link to="/">
          <p className="header-nav-link">Today's Deals</p>
        </Link>
        {/* <Link to="/">
          <p className="header-nav-link">Customer Service</p>
        </Link> */}
        <Link to="/">
          <p className="header-nav-link">Mobile Phones</p>
        </Link>
        <Link to="/">
          <p className="header-nav-link">Electronics</p>
        </Link>
        <Link to="/">
          <p className="header-nav-link">Fashion</p>
        </Link>
        {/* <Link to="/">
          <p className="header-nav-link">New Releases</p>
        </Link> */}
        <Link to="/">
          <p className="header-nav-link">Health & Personal Care</p>
        </Link>
        {/* <Link to="/">
          <p className="header-nav-link prime">
            Prime <ArrowDropDown />
          </p>
        </Link> */}
      </div>
      {/* Shopping benefits image link */}
      <Link to={"/"} className="header-nav__benefits">
        <img src="/assets/Header-Trust-Image.jpg" alt="benefits" />
      </Link>
    </div>
  );
};

export default Header_nav;
