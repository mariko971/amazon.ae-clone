import React from "react";

import AsideCheckbox from "./AsideCheckbox";

const FashionFilter = ({ genderArr }) => {
  return (
    <>
      {/* FILTER BY GENDER*/}
      <h4 className="aside-header shopCategory-header">Gender</h4>
      <ul className="aside-list">
        {genderArr.map((filter, i) => (
          <AsideCheckbox filter={filter} filterArrName={"gender"} key={i} />
        ))}
      </ul>
    </>
  );
};

export default FashionFilter;
