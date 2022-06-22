import React from "react";
import SearchIcon from "@material-ui/icons/Search";

import "./SearchMobile.css";

const SearchMobile = () => {
  return (
    <div className="nav-mobile__search">
      <div className="mobile-search">
        <form className="mobile-search-form">
          <div className="mobile-search-form__container">
            <input type="text" className="mobile-search-input" />
            <button className="mobile-search-btn">
              <SearchIcon className="mobile-search-icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchMobile;
