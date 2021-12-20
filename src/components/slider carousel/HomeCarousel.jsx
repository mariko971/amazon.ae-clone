import React from "react";
import "./HomeCarousel.css";
import { ads_Data } from "../../DATA";

const HomeCarousel = () => {
  const { carouselUrls } = ads_Data;
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {carouselUrls.map((imageUrl, index) => {
          const active = "active";
          return (
            <div
              className={`carousel-item ${index === 0 ? active : ""}`}
              key={index}
            >
              <img src={imageUrl} className="d-block w-100" alt="gift guide" />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev prev-btn"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon prev-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next next-btn"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon next-icon"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HomeCarousel;
