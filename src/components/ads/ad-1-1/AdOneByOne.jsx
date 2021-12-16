import React from "react";
import "./AdOneByOne.css";

const AdOneByOne = ({ title, imageUrl, description }) => {
  return (
    <div className="ad-info">
      <h2 className="ad-info__title">
        <strong>{title}</strong>
      </h2>
      <div className="ad-info__image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="ad-info__link">
        <a href="/">{description}</a>
      </div>
    </div>
  );
};

export default AdOneByOne;
