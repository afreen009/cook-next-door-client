import React from "react";
import "./FoodCard.scss";
import StarRating from "../StarRating/StarRating";
import cartIcon from "../../assets/icons/cart.png";

const FoodCard = ({ food, large }) => {
  return (
    <div className={`food-card ${large ? "large" : ""}`}>
      <div className="food-card-left">
        <img src={food?.food_url} alt={food?.menu_name} />
      </div>
      <div className="food-card-right">
        {large ? (
          <>
            <h2 style={{ color: "grey" }}>Alex's Special</h2>
            <h1>{food?.menu_name}</h1>
            <p>{food?.description}</p>
            <StarRating rating={food?.rating} />
            <p>
              <strong>Price:</strong> {food?.price}
            </p>
            <button className="add-to-cart-btn">
              <img src={cartIcon} alt="Cart Icon" className="cart-icon" />
              <span>Add to Cart</span>
            </button>
          </>
        ) : (
          <>
            <h2>{food?.menu_name}</h2>
            <p>{food?.description}</p>
            <StarRating rating={food?.rating} />
            <div className="food-card-bottom">
              <p>
                <strong>Price:</strong> {food?.price}
              </p>
              <img src={cartIcon} alt="Cart Icon" className="cart-icon" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FoodCard;
