import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

const Header = () => {
  return (
    <div className="header">
      <div className="header__nav-main">
        {/* logo */}
        <div className="nav-main__logo">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon logo"
            className="logo__img"
          />
          <span className="dot-region">.ae</span>
        </div>
        {/* Deliver to */}
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
        {/* Search */}
        <div className="nav-main__search">
          <div className="search">
            <form action="" className="search-form">
              <div className="search-form__container">
                <div className="search-form__card">
                  <div className="card-container">
                    <span className="card-label">All</span>
                    <ArrowDropDownIcon className="card-dropdown" />
                  </div>
                  <select name="categories" id="categories">
                    <option selected="selected" value="all">
                      All Categories
                    </option>
                    <option value="amazon-devices">Amazon Devices</option>
                    <option value="fashion">Amazon Fashion</option>
                    <option value="amazon-global-store">
                      Amazon Global Store
                    </option>
                    <option value="warehouse-deals">Amazon Warehouse</option>
                    <option value="appliances">Appliances</option>
                    <option value="automotive">
                      Automotive Parts & Accessories
                    </option>
                    <option value="baby">Baby</option>
                    <option value="beauty">Beauty & Personal Care</option>
                    <option value="stripbooks">Books</option>
                    <option value="computers">Computer & Accessories</option>
                    <option value="electronics">Electronics</option>
                    <option value="gift-cards">Gift Cards</option>
                    <option value="grocery">Grocery & Gourmet Food</option>
                    <option value="health-household-baby">
                      Health, Household & Baby Care
                    </option>
                    <option value="services">Home & Business Services</option>
                    <option value="home-garden">Home & Garden</option>
                    <option value="kitchen">Kitchen & Dining</option>
                    <option value="fashion-luggage">
                      Luggage & Travel Gear
                    </option>
                    <option value="music-instruments">
                      Musical Instruments
                    </option>
                    <option value="office-products">Office Products</option>
                    <option value="pets">Pet Supplies</option>
                    <option value="prime-video">Prime Video</option>
                    <option value="sports">Sports</option>
                    <option value="tools">Tools & Home Improvement</option>
                    <option value="toys">Toys & Games</option>
                    <option value="videogames">Video Games</option>
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
          <div className="user__option language-option">
            <img src="/assets/UAE-Flag.svg" alt="" />
            <span className="user__optionLineTwo">
              <ArrowDropDownIcon />
            </span>
          </div>
          <div className="user__option">
            <span className="user__optionLineOne">Hello, Sign in</span>
            <span className="user__optionLineTwo">Account & Lists</span>
          </div>
          <div className="user__option">
            <span className="user__optionLineOne">Returns</span>
            <span className="user__optionLineTwo">& Orders</span>
          </div>

          <div className="user__optionBasket">
            <ShoppingCartOutlinedIcon />
            <span className="user__optionLineTwo user__basketCount">0</span>
          </div>
        </div>
      </div>
      <div className="header__nav-secondary">
        {/* hamburger menu */}
        {/* category links */}
        {/* Shopping benefits image link */}
      </div>
    </div>
  );
};

export default Header;
