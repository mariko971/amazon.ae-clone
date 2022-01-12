import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AsideCheckbox from "./AsideCheckbox";
import CustomerReviewFilter from "./CustomerReviewFilter";

const GeneralFilter = ({ brandsArr }) => {
  const [itemsBrand, setItemsBrand] = useState(brandsArr);
  const params = useParams().category;

  useEffect(() => {
    setItemsBrand(brandsArr);
  }, [brandsArr]);

  return (
    <>
      <h4 className="shop_aside-header">Brand</h4>
      <ul className="shop_aside-list">
        {itemsBrand.map((filter, i) => (
          <AsideCheckbox
            filter={filter}
            filterArrName={"brand"}
            key={`${params}-${i}`}
          />
        ))}
      </ul>
      <h4 className="shop_aside-header">Avg. Customer Review</h4>
      <CustomerReviewFilter />
    </>
  );
};

export default GeneralFilter;
