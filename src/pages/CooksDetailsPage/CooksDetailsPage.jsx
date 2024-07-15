import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../CooksDetailsPage/CooksDetailsPage.scss";
import FoodCard from "../../components/FoodCard/FoodCard";
import CooksLocation from "../CooksLocation/CooksLocation";

export default function CooksDetailsPage() {
  const { cooksId } = useParams();
  const [cooksDetails, setcooksDetails] = useState([]);
  const getCooksMenu = async () => {
    try {
      let res = await axios.get(`http://localhost:8080/cooks/${cooksId}`);
      setcooksDetails(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCooksMenu();
  }, [cooksId]);

  const [firstItem, ...otherItems] = cooksDetails;

  return cooksDetails ? (
    <div className="menu_item">
      <div className="menu_item__large-food--card">
        <FoodCard food={firstItem} large />
      </div>
      <h1>Special Menu</h1>
      <div className="menu_item__food-card--container">
        {otherItems.map((food) => (
          <FoodCard key={food.food_id} food={food} />
        ))}
      </div>
      <div>
        <CooksLocation
          lat={cooksDetails[0]?.lat}
          long={cooksDetails[0]?.long}
        />
      </div>
    </div>
  ) : (
    <>
      <div>No Menu</div>
    </>
  );
}
