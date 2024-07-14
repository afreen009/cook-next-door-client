import React, { useState, useEffect } from "react";
import axios from "axios";

import Cooks from "../../components/Cooks/Cooks";
import "../HomePage/HomePage.scss";
import Header from "../../components/Header/Header";
import { Navigate } from "react-router-dom";
import HeroImage from "../../assets/images/4.jpg";
import HighRatedFood from "../../components/HighRatedFood/HighRatedFood";

export default function HomePage() {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  const [usersList, setUsersList] = useState(null);
  const [failedAuth, setFailedAuth] = useState(false);
  const [cookList, setCookLists] = useState([]);
  const [menu, setmenu] = useState([]);
  const [allLocation, setallLocation] = useState([]);
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
    // handleGetLocation();
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
    console.log("Ran");
    return <Navigate to="/login" />;
  }

  return !cookList ? (
    <h1>Loading...</h1>
  ) : (
    <main>
      <Header />
      <div className="main__heroDiv">
        <img className="main__hero" src={HeroImage} alt="Food Image" />
      </div>
      <Cooks cooksList={cookList} allLocation={allLocation} />
      <HighRatedFood menuList={menu} />
    </main>
  );
}
