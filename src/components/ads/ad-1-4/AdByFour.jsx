import React from "react";
import { Link } from "react-router-dom";
import "./AdByFour.css";

const AdByFour = ({ title, ads, description, linkUrl }) => {
  return (
    <div className="ad-info">
      <h2 className="ad-info__title">
        <strong>{title}</strong>
      </h2>
      <div className="byFourAd-info__layout">
        {ads.map((ad, index) => (
          <Link to={`${linkUrl}`} key={index} id="sm-ad">
            <div className="sm-ad">
              <img src={ad.imageUrl} alt="" />
              <div className="sm-ad-description">
                <p>{ad.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="ad-info__link sm-ad-link">
        <Link to={`${linkUrl}`}>{description}</Link>
      </div>
    </div>
  );
};

export default AdByFour;
