import React from "react";
import "./HomeCarousel.css";

const HomeCarousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/assets/carousel/holiday-gift-guide.jpg"
            className="d-block w-100"
            alt="gift guide"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/assets/carousel/holiday-list.jpg"
            className="d-block w-100"
            alt="holiday list"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/assets/carousel/holiday&beauty.jpg"
            className="d-block w-100"
            alt="holiday beauty"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/assets/carousel/jewelry-accessories.jpg"
            className="d-block w-100"
            alt="jewelry"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/assets/carousel/alexa-hello.jpg"
            className="d-block w-100"
            alt="jewelry"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/assets/carousel/tablets.jpg"
            className="d-block w-100"
            alt="jewelry"
          />
        </div>
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
