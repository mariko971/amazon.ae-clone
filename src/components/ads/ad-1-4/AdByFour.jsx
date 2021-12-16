import React from "react";
import "./AdByFour.css";

const AdByFour = ({ title, ads, description }) => {
  return (
    <div className="ad-info">
      <h2 className="ad-info__title">
        <strong>{title}</strong>
      </h2>
      <div className="byFourAd-info__layout">
        {ads.map((ad) => (
          <a href="/">
            <div className="sm-ad">
              <div
                className="sm-ad-image"
                style={{ background: `url(${ad.imageUrl}) center` }}
              ></div>
              <div className="sm-ad-description">
                <p>{ad.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="ad-info__link sm-ad-link">
        <a href="/">{description}</a>
      </div>
    </div>
  );
};

export default AdByFour;
