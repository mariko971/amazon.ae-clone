import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./ShopCategory.css";

import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import { filteredData } from "../../../components/utils";
import { resetFilters } from "../../../slices/appSlices";
import CategoryPage from "./CategoryPage";

const ShopCategory = ({ params }) => {
  const dispatch = useDispatch();
  const shop = useSelector((state) => state.shop);
  const filters = useSelector((state) => state.filters);
  const category = params?.category;
  const categoryArray = shop.shopData.filter(
    (item) => item.category === category
  )[0].data;
  const dat = filteredData(categoryArray, filters);
  // console.log(dat);
  // const handleFilterChange = () => setCategoryNow(dat);

  useEffect(() => {
    console.log("USE EFFECT RAN");
    return dispatch(resetFilters());
  }, [category, dispatch]);

  return (
    <>
      <Header />
      <CategoryPage categoryArray={categoryArray} params={params} dat={dat} />
      <Footer />
    </>
  );
};

export default ShopCategory;
