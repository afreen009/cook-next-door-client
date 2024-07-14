import React from "react";
import FoodImage1 from "../../assets/images/1.jpg";
import "../../components/HighRatedFood/HighRatedFood.scss";

export default function HighRatedFood({ cooksList }) {
  const foodMenu = cooksList.map((cook, index) => cook.menu);

  return (
    <section className="high-rate">
      <h2>High Rated Food Near You</h2>
      <div className="high-rate__grid">
        {cooksList.map((cooks, index) => (
          <div key={index} className="high-rate__gridItem">
            <img className="high-rate__img" src={FoodImage1} alt="Food Image" />
            <div className="high-rate__content">
              <div>Text</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
