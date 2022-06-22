import React from "react";
import SearchIcon from "@material-ui/icons/Search";
//import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import "./SearchInput.css";

const SearchInput = () => {
  return (
    <div className="nav-main__search">
      <div className="search">
        <form className="search-form">
          <div className="search-form__container">
            {/* <div className="search-form__card">
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
            </div> */}
            <input type="text" className="search-input" />
            <button className="search-btn">
              <SearchIcon className="search-icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchInput;
