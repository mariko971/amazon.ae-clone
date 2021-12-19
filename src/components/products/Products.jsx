import React from "react";
import "./Products.css";

import AdOneByOne from "../ads/ad-1-1/AdOneByOne";
import AdByFour from "../ads/ad-1-4/AdByFour";
import ItemsSlider from "../slider multiple-items/ItemsSlider";
import { ads_Data } from "../../DATA";

const Products = () => {
  const { promo, deals, holidayGuide } = ads_Data;
  return (
    <div class="products-container">
      <div className="area1">
        {promo.map((ad) =>
          ad.type === "byOne" ? (
            <div className="ad-container">
              <AdOneByOne
                title={ad.title}
                imageUrl={ad.imageUrl}
                description={ad.description}
              />
            </div>
          ) : (
            <div className="ad-container">
              <AdByFour
                title={ad.title}
                ads={ad.ads}
                description={ad.description}
              />
            </div>
          )
        )}
      </div>
      <ItemsSlider deals={deals} />
      <ItemsSlider deals={holidayGuide} />
    </div>
  );
};

export default Products;
