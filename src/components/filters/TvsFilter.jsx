import React from "react";
import AsideCheckbox from "./AsideCheckbox";

const TvsFilter = ({ screenSizeArr }) => {
  return (
    <>
      {/* FILTER BY SCREEN SIZE*/}
      <h4 className="aside-header shopCategory-header">By Screen Size</h4>
      <ul className="aside-list">
        {screenSizeArr.map((filter, i) => (
          <AsideCheckbox filter={filter} filterArrName={"screenSize"} key={i} />
        ))}
      </ul>
    </>
  );
};

export default TvsFilter;
