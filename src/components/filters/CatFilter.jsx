import React from "react";

import AsideCheckbox from "./AsideCheckbox";

const CatFilter = ({ filterObj }) => {
  const { filterArr, filterName, filtertitle } = filterObj;
  return (
    <>
      {/* FILTER BY OPERATING SYSTEM*/}
      <ul className="shop_aside-list">
        <h4 className="shop_aside-header">{filtertitle}</h4>
        {filterArr.map((filter, i) => (
          <AsideCheckbox filter={filter} filterArrName={filterName} key={i} />
        ))}
      </ul>
    </>
  );
};

export default CatFilter;
