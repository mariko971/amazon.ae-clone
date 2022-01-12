import React from "react";

import {
  MobilePhonesFilter,
  TvsFilter,
  GeneralFilter,
  TabletsFilter,
  LaptopsFilter,
  FashionFilter,
} from "../../components/filters";

const ShopFilter = ({ categoryArray, params }) => {
  // const [cat, setCat] = useState();
  // const categry = params.category;

  // useEffect(() => {
  //   setCat(categoryArray);
  // }, [categoryArray]);

  const brandsArr = [];
  categoryArray.map(
    (item) => !brandsArr.includes(item.brand) && brandsArr.push(item.brand)
  );

  const storageArr = [];
  categoryArray.map(
    (item) =>
      !storageArr.includes(item.storage) && storageArr.push(item.storage)
  );

  const screenSizeArr = [];
  categoryArray.map(
    (item) =>
      !screenSizeArr.includes(item.screenSize) &&
      screenSizeArr.push(item.screenSize)
  );

  const osArr = [];
  categoryArray.map((item) => !osArr.includes(item.OS) && osArr.push(item.OS));

  const memoryArr = [];
  categoryArray.map(
    (item) => !memoryArr.includes(item.memory) && memoryArr.push(item.memory)
  );

  const CPUArr = [];
  categoryArray.map(
    (item) => !CPUArr.includes(item.CPU) && CPUArr.push(item.CPU)
  );

  const genderArr = [];
  categoryArray.map(
    (item) => !genderArr.includes(item.gender) && genderArr.push(item.gender)
  );

  return (
    <div className="shop-category_aside">
      <GeneralFilter brandsArr={brandsArr} />
      {params.category === "Mobile Phones" ? (
        <MobilePhonesFilter storageArr={storageArr} />
      ) : params.category === "Tvs" ? (
        <TvsFilter screenSizeArr={screenSizeArr} />
      ) : params.category === "Tablets" ? (
        <TabletsFilter osArr={osArr} />
      ) : params.category === "Laptops" ? (
        <LaptopsFilter memoryArr={memoryArr} CPUArr={CPUArr} />
      ) : params.category === "Fashion" ? (
        <FashionFilter genderArr={genderArr} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ShopFilter;
