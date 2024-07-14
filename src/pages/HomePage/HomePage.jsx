import React, { useState, useEffect } from "react";
import axios from "axios";

import Cooks from "../../components/Cooks/Cooks";
import "../HomePage/HomePage.scss";
import Header from "../../components/Header/Header";
import { Navigate } from "react-router-dom";
import HeroImage from "../../assets/images/4.jpg";
import HighRatedFood from "../../components/HighRatedFood/HighRatedFood";

export default function HomePage() {
  const food_item = [
    {
      food_id: 1,
      food_url:
        "https://images.unsplash.com/photo-1478749485505-2a903a729c63?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 2,
      menu_name: "Pho",
      rating: 5,
      price: "$30",
      description:
        "Pho is a Vietnamese noodle soup consisting of broth, linguine-shaped",
    },
    {
      food_id: 2,
      food_url:
        "https://images.unsplash.com/photo-1533450823749-791a21b4692a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cook_id: 3,
      menu_name: "Spaghetti",
      rating: 4.5,
      price: "$40",
      description: "Spaghetti is a long, thin, solid, cylindrical pasta.",
    },
  ];

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

  const nearByCooks = () => {
    cookList.filter((cook) => {
      console.log(cook);
    });
    // cookList.filter((cook) => {
    // setMaxDistance(option?.value || 400);
    //   const distance = haversineDistance(
    //     { lat: 42.932808045065364, long: -81.2573763063707 },
    //     {
    //       lat: cook.lat,
    //       long: cook.long,
    //     }
    //   );
    //   setCookLists(distance <= maxDistance);
    //   return;
    // });
  };

  function haversineDistance(loc1, loc2) {
    const R = 6371;
    const lat1 = (loc1.lat * Math.PI) / 180;

    const lon1 = (loc1.long * Math.PI) / 180;
    const lat2 = (loc2.lat * Math.PI) / 180;
    const lon2 = (loc2.long * Math.PI) / 180;

    const dLat = lat2 - lat1;
    const dLon = lon2 - lon1;

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c * 1000;

    return distance;
  }
  const handleSelect = (event) => {
    console.log("kjasdfb");
    console.log(event);
    // setMaxDistance(option);
    // event === undefined ? setMaxDistance(option?.label) : "";
    nearByCooks();
    // if (option === undefined) {
    //   return;
    // } else {
    //   console.log("option");

    // }
  };
  if (failedAuth) {
    console.log("Ran");
    return <Navigate to="/login" />;
  }

  return !cookList ? (
    <h1>Loading...</h1>
  ) : (
    <main>
      <Header cart={cart} removeFromCart={removeFromCart} />
      <div className="main__heroDiv">
        <img className="main__hero" src={HeroImage} alt="Food Image" />
      </div>
      <Cooks
        cooksList={cookList}
        allLocation={allLocation}
        userLocation={location}
        nearByCooks={handleSelect}
      />
      <HighRatedFood menuList={menu} />
    </main>
  );
}
