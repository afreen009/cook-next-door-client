import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Cooks from "../../components/Cooks/Cooks";
import "../HomePage/HomePage.scss";
import Header from "../../components/Header/Header";
import { Navigate } from "react-router-dom";
import HighRatedFood from "../../components/HighRatedFood/HighRatedFood";

export default function HomePage() {
  const anchorRef = useRef(null);
  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    setCart([...cart, food]);
  };

  const removeFromCart = (foodId) => {
    setCart(cart.filter((food) => food.food_id !== foodId));
  };
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [failedAuth, setFailedAuth] = useState(false);
  const [cookList, setCookLists] = useState([]);
  const [menu, setmenu] = useState([]);
  const [allLocation, setallLocation] = useState([]);
  const [maxDistance, setMaxDistance] = useState(400);

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };
  const token = sessionStorage.getItem("JWTtoken");

  useEffect(() => {
    handleGetLocation();
    if (!token) {
      setFailedAuth(true);
    }

    const fetchCooks = async () => {
      try {
        const cooksResponse = await axios.get("http://localhost:8080/cooks");
        const menuItemResponse = await axios.get(
          "http://localhost:8080/menu_tem"
        );
        const getAllCooskLocation = await axios.get(
          "http://localhost:8080/cooks/allLocation"
        );
        setCookLists(cooksResponse.data);
        setmenu(menuItemResponse.data);
        setallLocation(getAllCooskLocation.data);
      } catch (error) {
        console.log(error);
        setError(`${error.response.data.error.message}. Fill all the details.`);
      }
    };
    fetchCooks();
  }, []);

  if (failedAuth) {
    return <Navigate to="/login" />;
  }

  return !cookList ? (
    <h1>Loading...</h1>
  ) : (
    <main>
      <Header cart={cart} removeFromCart={removeFromCart} />
      <div className="main__overlay"></div>
      <div className="main__heroDiv">
        <div className="main__titleDiv">
          <h1 className="main__title">Cook Next Door</h1>
          <p className="main__para">
            A food app that connects users with neighboring cooks
          </p>
          {/* <a href={`#${anchorRef.current.id}`}> */}
          <button className="main__btn">Check our menu</button>
          {/* </a> */}
        </div>
      </div>
      <Cooks
        cooksList={cookList}
        allLocation={allLocation}
        userLocation={location}
      />
      <div id="anchor-id" ref={anchorRef}>
        <HighRatedFood menuList={menu} />
      </div>
    </main>
  );
}
