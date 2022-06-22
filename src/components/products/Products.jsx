import React, { useState, useEffect } from "react";
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
  // Create a condition that targets viewports at least 768px wide
  const mediaQuery = ""; //window.matchMedia("(min-width: 768px)");
  const [matches, setMatches] = useState(window.matchMedia(mediaQuery).matches);
  const newPromo = matches ? promo : promo.slice(0, promo.length - 2);

  useEffect(() => {
    const mediaMatch = window.matchMedia("(min-width: 1240px)");
    if (matches !== mediaMatch.matches) setMatches(mediaMatch.matches);
    const mediaListener = () => setMatches(mediaMatch.matches);
    mediaMatch.addEventListener("change", mediaListener);
    return () => mediaMatch.addEventListener("change", mediaListener);
  }, [matches]);

  return (
    <div className="products-container">
      <div className="area1">
        {newPromo.map((ad, index) =>
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
