import React from "react";
import "./ItemsSlider.css";
import { scrollNext, scrollBack } from "../utils";

const ItemsSlider = ({ deals, id }) => {
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
          onClick={() => scrollBack(id)}
        >
          <span> &#10094;</span>
        </button>
        <div className={`slides-wrapper slider-${id}`}>
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
          onClick={() => scrollNext(id)}
        >
          <span> &#10095;</span>
        </button>
      </div>
    </div>
  );
};

export default ItemsSlider;
