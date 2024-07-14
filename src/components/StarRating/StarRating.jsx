import React from "react";
import "../StarRating/StarRating.scss";

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const fullStar = "★";
  const halfStar = "☆";
  const emptyStar = "☆";

  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    if (i < Math.floor(rating)) {
      stars.push(<span key={i}>{fullStar}</span>);
    } else if (i < rating) {
      stars.push(
        <span key={i} className="star-rating__half-star">
          {fullStar}
        </span>
      );
    } else {
      stars.push(<span key={i}>{emptyStar}</span>);
    }
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
