import React from "react";
import { Link } from "react-router-dom";
import "./AdOneByOne.css";

const AdOneByOne = ({ title, imageUrl, description, linkUrl }) => {
  return (
    <div className="ad-info">
      <h2 className="ad-info__title">
        <strong>{title}</strong>
      </h2>
      <div className="ad-info__image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="ad-info__link">
        <Link to={`${linkUrl}`}>{description}</Link>
      </div>
    </div>
  );
};

export default AdOneByOne;
