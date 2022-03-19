import React from "react";
import "./Products.css";
// import { useSelector } from "react-redux";

import AdOneByOne from "../ads/ad-1-1/AdOneByOne";
import AdByFour from "../ads/ad-1-4/AdByFour";
import ItemsSlider from "../slider multiple-items/ItemsSlider";
import { ads_Data } from "../../DATA";

const Products = () => {
  // const homeData = useSelector((state) => state.appData);
  // const { promo, deals, holidayGuide } = homeData.ads_Data;
  const { promo, deals, holidayGuide } = ads_Data;

  return (
    <div className="products-container">
      <div className="area1">
        {promo.map((ad, index) =>
          ad.type === "byOne" ? (
            <div className="ad-container" key={index}>
              <AdOneByOne
                title={ad.title}
                imageUrl={ad.imageUrl}
                description={ad.description}
                linkUrl={ad.linkUrl}
              />
            </div>
          ) : (
            <div className="ad-container" key={index}>
              <AdByFour
                title={ad.title}
                ads={ad.ads}
                description={ad.description}
                linkUrl={ad.linkUrl}
              />
            </div>
          )
        )}
      </div>
      <ItemsSlider deals={deals} id={0} />
      <ItemsSlider deals={holidayGuide} id={1} />
    </div>
  );
};

export default Products;
