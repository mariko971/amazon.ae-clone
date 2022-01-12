import React from "react";

import AsideCheckbox from "./AsideCheckbox";

const TabletsFilter = ({ osArr }) => {
  return (
    <>
      {/* FILTER BY OPERATING SYSTEM*/}
      <h4 className="aside-header shopCategory-header">Operating System</h4>
      <ul className="aside-list">
        {osArr.map((filter, i) => (
          <AsideCheckbox filter={filter} filterArrName={"OS"} key={i} />
        ))}
      </ul>
    </>
  );
};

export default TabletsFilter;
