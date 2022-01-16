import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Header.css";
import HeaderNav from "./header-nav/Header_nav";

import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { userSignOut } from "../../firebase/firebase.utils";

const Header = ({ currentUser }) => {
  const cartItemsQty = useSelector((state) => state.cart.totalCartQuantity);
  return (
    <div className="header" id="top-page">
      <div className="header__nav-main">
        {/* logo */}
        <Link to={"/"}>
          <div className="nav-main__logo">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="amazon logo"
              className="logo__img"
            />
            <span className="dot-region">.ae</span>
          </div>
        </Link>
        {/* Deliver to */}
        <Link to={"/"}>
          <div className="nav-main__location">
            <img
              src="assets/location2.svg"
              alt="location pin"
              className="location-pin"
            />
            <div className="deliver-to">
              <span id="delivert-to-top">Deliver to</span>
              <span id="delivert-to-bottom">United Arab Emirates</span>
            </div>
          </div>
        </Link>
        {/* Search */}
        <div className="nav-main__search">
          <div className="search">
            <form className="search-form">
              <div className="search-form__container">
                <div className="search-form__card">
                  <div className="card-container">
                    <span className="card-label">All</span>
                    <ArrowDropDownIcon className="card-dropdown" />
                  </div>
                  <select name="categories" id="categories">
                    <option defaultValue="all">All Categories</option>
                    <option value="Mobile Phones">Mobile Phones</option>
                    <option value="Fashion">Amazon Fashion</option>
                    <option value="Laptops">Laptops</option>
                    <option value="Headphones">Headphones</option>
                    <option value="Speakers">Speakers</option>
                    <option value="Tvs">Tvs</option>
                    <option value="Health & Personal Care">
                      Health & Personal Care
                    </option>
                    <option value="Gaming">Gaming</option>
                  </select>
                </div>
                <input type="text" className="search-input" />
                <button className="search-btn" action>
                  <SearchIcon className="search-icon" />
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* language */}
        {/* sign in*/}
        {/* Returns & orders*/}
        {/* cart*/}
        <div className="nav-main__user">
          <Link to={"/"}>
            <div className="user__option language-option">
              <img src="/assets/UAE-Flag.svg" alt="" />
              <span className="user__optionLineTwo">
                <ArrowDropDownIcon />
              </span>
            </div>
          </Link>
          <Link
            to={currentUser ? "/" : "/sign-in"}
            onClick={currentUser ? userSignOut : null}
          >
            <div className="user__option">
              <span className="user__optionLineOne">
                Hello{currentUser ? `, ${currentUser.displayName}` : ""}
              </span>
              <span className="user__optionLineTwo">
                {currentUser ? `Sign Out` : `Sign In`}
              </span>
            </div>
          </Link>
          <Link to={"/"}>
            <div className="user__option">
              <span className="user__optionLineOne">Returns</span>
              <span className="user__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <Link to={"/cart"}>
            <div className="user__optionBasket">
              <div className="optionBasket__cart-container">
                <strong className="cart-container__count">
                  {cartItemsQty}
                </strong>
              </div>
              <strong className="optionBasket-text">Cart</strong>
            </div>
          </Link>
        </div>
      </div>
      <HeaderNav />
    </div>
  );
};

export default Header;
