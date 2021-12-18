import React from "react";
import "./ItemsSlider.css";

const scrollNext = (scroll) => {
  const wrapper = document.querySelector(".slides-wrapper");
  console.log(wrapper.scrollWidth);
  wrapper.scrollLeft += 1400;
  scroll += 1400;
  return console.log(scroll);
};
const scrollBack = (scroll) => {
  const wrapper = document.querySelector(".slides-wrapper");
  wrapper.scrollLeft -= 1400;
  scroll -= 1400;
  return console.log(scroll);
};

const handleScroll = (dir) => {
  let scroll = 0;
  dir === "next" ? scrollNext(scroll) : scrollBack(scroll);
};

const ItemsSlider = ({ deals }) => {
  return (
    <div className="items-slider__container">
      <div className="items-slider__track">
        <div className="items-slider__header">
          <h2 className="items-slider__title">
            <strong>Today's Deals</strong>
          </h2>
          <a className="items-slider__link" href="/">
            See all deals
          </a>
        </div>
        <button
          className="items-slider__btn items-slider__btn--prev"
          onClick={() => handleScroll("back")}
        >
          <span> &#10094;</span>
        </button>
        <div className="slides-wrapper">
          {deals.map((deal) => (
            <div className="slider-item">
              <div
                className="slider-item__img"
                // style={{
                //   background: `url(${deal.imageUrl})`,
                // }}
              >
                <img src={deal.imageUrl} alt="" />
              </div>
              <p className="price">{`${deal.currency} ${deal.priceRange.from} - ${deal.priceRange.to}`}</p>
            </div>
          ))}
        </div>
        <button
          className="items-slider__btn items-slider__btn--next"
          onClick={() => handleScroll("next")}
        >
          <span> &#10095;</span>
        </button>
      </div>
    </div>
  );
};

export default ItemsSlider;
