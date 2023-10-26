import { useState } from "react";

import "./review.css";

import { FaLessThan, FaGreaterThan } from "react-icons/fa";

import { reviews } from "../../constants";

const Reviews = ({ index, prevReview, nextReview }) => {
  const [data, setData] = useState(reviews);

  const { country, name, image, text } = data[index];

  const nextReviewHandler = () => {
    nextReview();
  };

  const preReviewHandler = () => {
    prevReview();
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="season-img" />
      </div>
      <div className="place">{country}</div>
      <div className="season">{name}</div>
      <p className="info">{text}</p>
      <div className="btn">
        <button className="btn-prev" onClick={preReviewHandler}>
          <FaLessThan />
        </button>
        <button className="btn-next" onClick={nextReviewHandler}>
          <FaGreaterThan />
        </button>
      </div>
    </article>
  );
};
export default Reviews;
