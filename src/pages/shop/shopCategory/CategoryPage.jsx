import React from "react";

import { ShopFilter } from "../../../components/filters";
import ShopItem from "../../../components/shopItem/ShopItem";

const CategoryPage = ({ categoryArray, params, dat }) => {
  return (
    <div className="shop-category">
      <div className="shop-category_main">
        {/* ASIDE MENU */}
        <ShopFilter categoryArray={categoryArray} params={params} />
        {/* MAIN PRODUCTS SECTION */}
        <div className="shop-main-main">
          <header className="shop_header">
            <h1>Amazon {params.category}</h1>
          </header>
          <section className="category-container">
            {dat.map((item, i) => (
              <ShopItem item={item} key={i} category={params.category} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
