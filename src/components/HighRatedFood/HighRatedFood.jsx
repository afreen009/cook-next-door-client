import React from "react";
import FoodImage1 from "../../assets/images/1.jpg";
import "../../components/HighRatedFood/HighRatedFood.scss";
import StarRating from "../StarRating/StarRating";
import Marker from "../../assets/icons/marker.png";

export default function HighRatedFood({ menuList }) {
  return (
    <section className="high-rate">
      <h2 className="high-rate__title">High Rated Food Near You</h2>
      <div className="high-rate__grid">
        {menuList.map((menu, index) => (
          <div key={index} className="high-rate__gridItem">
            <img
              className="high-rate__img"
              src={`${menu.food_url}` || FoodImage1}
              alt="Food Image"
            />
            <div className="high-rate__content">
              <div className="high-rate__foodName">{menu.menu_name}</div>
              {menu.categories.split(",").map((e, index) => (
                <div key={index} className="high-rate__categories">
                  <p className="high-rate__greenDot"></p>
                  <p className="high-rate__category">{e}</p>
                </div>
              ))}
              <div className="high-rate__cook">
                <p className="high-rate__cooksName">{menu.name}</p>
                <img
                  src={Marker}
                  className="high-rate__marker"
                  alt="location marker"
                />
              </div>
              <StarRating rating={menu.rating} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
