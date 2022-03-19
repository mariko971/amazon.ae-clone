import React from "react";
import { useDispatch } from "react-redux";
import { filterByReview } from "../../slices/appSlices";

const CustomerReviewFilter = () => {
  const dispatch = useDispatch();
  return (
    <ul className="aside-review-filter">
      <li className="review-filter" onClick={() => dispatch(filterByReview(4))}>
        <img src="/assets/stars/4.0-star.jpg" alt="four star and above" />
        <span> & up</span>
      </li>
      <li className="review-filter" onClick={() => dispatch(filterByReview(3))}>
        <img src="/assets/stars/3.0-star.jpg" alt="four star and above" />
        <span> & up</span>
      </li>
      <li className="review-filter" onClick={() => dispatch(filterByReview(2))}>
        <img src="/assets/stars/2.0-star.jpg" alt="four star and above" />
        <span> & up</span>
      </li>
      <li className="review-filter" onClick={() => dispatch(filterByReview(1))}>
        <img src="/assets/stars/1.0-star.jpg" alt="four star and above" />
        <span> & up</span>
      </li>
    </ul>
  );
};

export default CustomerReviewFilter;
