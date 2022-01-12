import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ShopCategory from "../shopCategory/ShopCategory";

const ShopMain = () => {
  let params = useParams();
  const [shopItemsCategory, setShopItemsCategory] = useState();

  useEffect(() => {
    setShopItemsCategory(params);
  }, [params]);
  return (
    <>
      <ShopCategory params={shopItemsCategory ? shopItemsCategory : params} />
    </>
  );
};

export default ShopMain;
