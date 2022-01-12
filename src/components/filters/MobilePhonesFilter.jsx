import React from "react";
import AsideCheckbox from "./AsideCheckbox";

const MobilePhonesFilter = ({ storageArr, filterArrName }) => {
  return (
    <>
      {/* FILTER BY INTERNAL MEMORY SIZE*/}
      <h4 className="aside-header shopCategory-header">Internal Memory Size</h4>
      <ul className="aside-list">
        {storageArr.map((filter, i) => (
          <AsideCheckbox filter={filter} filterArrName={"storage"} key={i} />
        ))}
      </ul>
    </>
  );
};

export default MobilePhonesFilter;
