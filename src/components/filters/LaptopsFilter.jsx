import React from "react";

import AsideCheckbox from "./AsideCheckbox";

const LaptopsFilter = ({ memoryArr, CPUArr }) => {
  return (
    <>
      {/* FILTER BY PROCESSOR*/}
      <h4 className="aside-header shopCategory-header">CPU Type</h4>
      <ul className="aside-list">
        {CPUArr.map((filter, i) => (
          <AsideCheckbox filter={filter} filterArrName={"CPU"} key={i} />
        ))}
      </ul>
      {/* FILTER BY RAM*/}
      <h4 className="aside-header shopCategory-header">Installed RAM</h4>
      <ul className="aside-list">
        {memoryArr.map((filter, i) => (
          <AsideCheckbox filter={filter} filterArrName={"memory"} key={i} />
        ))}
      </ul>
    </>
  );
};

export default LaptopsFilter;
