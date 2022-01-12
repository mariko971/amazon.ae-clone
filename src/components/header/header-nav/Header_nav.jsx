import React from "react";
import "./Header_nav.css";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";

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
        <Link to="/best-sellers">
          <p className="header-nav-link">Best Sellers</p>
        </Link>
        <Link to="/Mobile Phones">
          <p className="header-nav-link">Mobile Phones</p>
        </Link>
        <Link to="/Tablets">
          <p className="header-nav-link">Tablets</p>
        </Link>
        <Link to="/Fashion">
          <p className="header-nav-link">Fashion</p>
        </Link>
        <Link to="/Laptops">
          <p className="header-nav-link">Laptops</p>
        </Link>
        <Link to="/Tvs">
          <p className="header-nav-link">Tvs</p>
        </Link>
        <Link to="/Speakers">
          <p className="header-nav-link">Speakers</p>
        </Link>
        <Link to="/Headphones">
          <p className="header-nav-link">Headphones</p>
        </Link>
        <Link to="/Health & Personal Care">
          <p className="header-nav-link">Health & Personal Care</p>
        </Link>
      </div>
      {/* Shopping benefits image link */}
      <Link to={"/"} className="header-nav__benefits">
        <img src="/assets/Header-Trust-Image.jpg" alt="benefits" />
      </Link>
    </div>
  );
};

export default Header_nav;
