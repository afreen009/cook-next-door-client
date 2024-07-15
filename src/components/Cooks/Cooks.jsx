import React, { Component, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "../DropDown/DropDown";
import FilterPills from "../FilterPills/FilterPills";
import Marker from "../../assets/icons/marker.png";
import "../Cooks/Cooks.scss";

export default function Cooks({ cooksList, allLocation, userLocation }) {
  const navigate = useNavigate();
  const [cookList, setCookLists] = useState(cooksList);
  const [saveRange, setsaveRange] = useState(400);

  const profileUrl = [
    {
      profile_url:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      profile_url:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      profile_url:
        "https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      profile_url:
        "https://images.unsplash.com/photo-1482849297070-f4fae2173efe?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      profile_url:
        "https://images.unsplash.com/photo-1504834636679-cd3acd047c06?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      profile_url:
        "https://images.unsplash.com/photo-1450297350677-623de575f31c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      profile_url:
        "https://images.unsplash.com/photo-1489980478712-2ab535aa775f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      profile_url:
        "https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      profile_url:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      profile_url:
        "https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      profile_url:
        "https://images.unsplash.com/photo-1482849297070-f4fae2173efe?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      profile_url:
        "https://images.unsplash.com/photo-1504834636679-cd3acd047c06?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      profile_url:
        "https://images.unsplash.com/photo-1450297350677-623de575f31c?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      profile_url:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const showAllCooks = async (e) => {
    e.preventDefault();
    try {
      navigate("/allCooksMap", { state: { allLocation } });
    } catch (error) {
      console.log(error);
    }
  };

  function nearByCooks() {
    cookList.filter((cook) => {
      setsaveRange(saveRange);
      const distance = haversineDistance(
        { lat: 42.932808045065364, long: -81.2573763063707 },
        {
          lat: cook.lat,
          long: cook.long,
        }
      );
      setCookLists(distance <= saveRange);
      return;
    });
  }

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
  useEffect(() => {
    nearByCooks();
  }, []);

  function handle(value) {
    console.log(value);
    setsaveRange(value);
    nearByCooks();
  }
  return (
    <article className="cooks">
      <div className="cooks__div">
        <h2 className="cooks__title">Cooks</h2>
        <div className="cooks__filter">
          <Dropdown handle={handle} />
          {userLocation ? (
            <FilterPills initialChips={["Veg", "Non-Veg", "Halal"]} />
          ) : (
            <></>
          )}
          <img
            onClick={showAllCooks}
            className="cooks__AllMarker cooks__AllMarker--filter"
            src={Marker}
            alt="location marker"
          />
        </div>
      </div>
      <div className="cooks__container">
        <div className="cooks__carousel">
          {cooksList.map((cook, i) => (
            <Link to={`/cooks/${cook.id}`} key={i}>
              <section className="cooks__card">
                <div className="cooks__avatarDiv">
                  <img
                    className="cooks__commentAvatarCircle"
                    src={profileUrl[i]?.profile_url}
                  />
                </div>
                <div>
                  <div className="cooks__nameMarker">
                    <div className="cooks__name">{cook.name}</div>
                    <img
                      src={Marker}
                      className="cooks__AllMarker"
                      alt="location marker"
                    />
                  </div>
                  {cook.categories.split(",").map((e, index) => (
                    <div key={index} className="cooks__categories">
                      <div className="cooks__greenDot"></div>
                      <div className="cooks__category">{e}</div>
                    </div>
                  ))}
                  <div className="cooks__delivery">{cook.delivery_options}</div>
                </div>
              </section>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
