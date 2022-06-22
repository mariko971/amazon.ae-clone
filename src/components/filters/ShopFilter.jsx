import React from "react";

import CatFilter from "./CatFilter";
import CustomerReviewFilter from "./CustomerReviewFilter";
import "./ShopFilter.css";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import CloseIcon from "@material-ui/icons//Close";
import { getShopFilters } from "../utils";

const ShopFilter = ({ categoryArray, params }) => {
  const catArray = getShopFilters(categoryArray, params);

  const filterBody = document.querySelector(".shop-category_aside-body");

  const toggleFilter = () => {
    filterBody.style.left = "0";
    document.body.style.setProperty("overflow", "hidden");
  };
  const closeFilter = () => {
    filterBody.style.left = "-110%";
    document.body.style.setProperty("overflow", "initial");
  };

  return (
    <div className="shop-category_aside">
      <h4 className="shop-category_aside-title" onClick={() => toggleFilter()}>
        Filter by:
        <ArrowRightIcon id="shopFilter-arrowRight" />
      </h4>
      <div className="shop-category_aside-body">
        <CloseIcon id="shopFilter-close" onClick={() => closeFilter()} />
        <CustomerReviewFilter />
        {catArray.map((filterObj, i) => (
          <CatFilter
            filterObj={filterObj}
            key={`${filterObj.filterName}${i}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopFilter;
