import React from "react";
import "./ItemsSlider.css";

const scrollNext = (scroll) => {
  const wrapper = document.querySelector(".slides-wrapper");
  console.log(wrapper.scrollWidth);
  wrapper.scrollLeft += 1400;
};

const scrollBack = (scroll) => {
  const wrapper = document.querySelector(".slides-wrapper");
  wrapper.scrollLeft -= 1400;
};

const ItemsSlider = ({ deals }) => {
  const { title, link, collection } = deals;
  return (
    <div className="items-slider__container">
      <div className="items-slider__track">
        <div className="items-slider__header">
          <h2 className="items-slider__title">
            <strong>{title}</strong>
          </h2>
          <a className="items-slider__link" href="/">
            {link}
          </a>
        </div>
        <button
          className="items-slider__btn items-slider__btn--prev"
          onClick={() => scrollBack()}
        >
          <span> &#10094;</span>
        </button>
        <div className="slides-wrapper">
          {collection.map((deal, index) => (
            <a href="/" className="slides-wrapper__link" key={index}>
              <div className="slider-item">
                <div className="slider-item__img">
                  <img src={deal.imageUrl} alt="" />
                </div>
                {deal.currency && deal.priceRange ? (
                  <p className="price">{`${deal.currency} ${deal.priceRange.from} - ${deal.priceRange.to}`}</p>
                ) : null}
              </div>
            </a>
          ))}
        </div>
        <button
          className="items-slider__btn items-slider__btn--next"
          onClick={() => scrollNext()}
        >
          <span> &#10095;</span>
        </button>
      </div>
    </div>
  );
};

export default ItemsSlider;
