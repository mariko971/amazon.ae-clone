import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./ShopCategory.css";

import { filteredData } from "../../../components/utils";
import { resetFilters } from "../../../slices/appSlices";
import CategoryPage from "./CategoryPage";

const ShopCategory = ({ params }) => {
  const dispatch = useDispatch();
  const shop = useSelector((state) => state.appData.shop_Data);
  const filters = useSelector((state) => state.filters);
  const category = params?.category;
  const categoryArray = shop.filter((item) => item.category === category)[0]
    .data;
  const dat = filteredData(categoryArray, filters);

  useEffect(() => {
    return dispatch(resetFilters());
  }, [category, dispatch]);

  return (
    <>
      <CategoryPage categoryArray={categoryArray} params={params} dat={dat} />
    </>
  );
};

export default ShopCategory;
