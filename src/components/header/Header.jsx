import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./Header.css";
import HeaderNav from "./header-nav/Header_nav";
import HeaderDropdown from "./headerDropdown/HeaderDropdown";
import SearchInput from "./search/SearchInput";
import SearchMobile from "./search mobile/SearchMobile";

// import MenuIcon from "@material-ui/icons/Menu";
//import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { userSignOut } from "../../firebase/firebase.utils";
import { clearBuyCart } from "../../slices/appSlices";
import { persistor } from "../../store";

const Header = ({ currentUser }) => {
  const cartItems = currentUser
    ? currentUser.cart.cartItems
      ? currentUser.cart.cartItems
      : []
    : [];

  const cartItemsQty = cartItems.length
    ? cartItems.reduce((acc, item) => acc + item.qty, 0)
    : 0;

  const dispatch = useDispatch();

  const handleSignOut = () => {
    userSignOut();
    dispatch(clearBuyCart());
    persistor.purge();
  };

  const toggleDropDown = () => {
    const dropDown = document.querySelector(".headerDropdown");
    !dropDown.style.display
      ? (dropDown.style.display = "flex")
      : (dropDown.style.display = "");
  };

  return (
    <div className="header" id="top-page">
      <div className="header__nav-main">
        {/* <div className="header-hamburger">
          <MenuIcon />
        </div> */}
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
        <Link to={"/"} id="header-location">
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
        <SearchInput />
        {/* language */}
        {/* sign in*/}
        {/* Returns & orders*/}
        {/* cart*/}
        <div className="nav-main__user">
          <Link to={"/"} id="language">
            <div className="user__option language-option">
              <img src="/assets/UAE-Flag.svg" alt="" />
              <span className="user__optionLineTwo">
                <ArrowDropDownIcon />
              </span>
            </div>
          </Link>
          <div className="user__option user-dropdown" onClick={toggleDropDown}>
            <span id="userName">
              {currentUser ? `${currentUser.displayName}` : ""}
            </span>
            <span id="userIcon">
              <img src="/assets/userIcon.svg" alt="" />
            </span>
            <div className="headerDropdown">
              <HeaderDropdown
                currentUser={currentUser}
                handleSignOut={handleSignOut}
              />
            </div>
          </div>
          <div className="dropdown"></div>
          <Link
            id="account"
            to={currentUser ? "/" : "/sign-in"}
            onClick={currentUser ? handleSignOut : null}
          >
            <div className="user__option account">
              <span className="user__optionLineOne">
                Hello{currentUser ? `, ${currentUser.displayName}` : ""}
              </span>
              <span className="user__optionLineTwo">
                {currentUser ? `Sign Out` : `Sign In`}
              </span>
            </div>
          </Link>
          <Link to={currentUser ? "/orders" : "/sign-in"}>
            <div className="user__option orders">
              <span className="user__optionLineOne">Returns</span>
              <span className="user__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <Link to={currentUser ? "/cart" : "/sign-in"}>
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
      <SearchMobile />
      <HeaderNav />
    </div>
  );
};

export default Header;
