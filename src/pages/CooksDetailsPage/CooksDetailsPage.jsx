import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../CooksDetailsPage/CooksDetailsPage.scss";

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
  }, []);
  const [firstItem, ...otherItems] = cooksDetails;
  return (
    <div className="App">
      <div className="large-food-card">
        {/* <FoodCard food={firstItem} large /> */}
      </div>
      <h1>Special Menu</h1>
      <div className="food-card-container">
        {/* {otherItems.map((food) => (
          <FoodCard key={food.food_id} food={food} />
        ))} */}
      </div>
    </div>
  );
}
