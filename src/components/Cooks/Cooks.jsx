import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "../DropDown/DropDown";
import FilterPills from "../FilterPills/FilterPills";
import Marker from "../../assets/icons/marker.png";
import "../Cooks/Cooks.scss";
// import { AnimatedTooltip } from "../ui/animated-tooltip";

export default function Cooks({ cooksList, allLocation }) {
  const navigate = useNavigate();
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
  const svgIcon = (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      version="1.1"
    >
      <path
        d="M 1664.500 0.579 C 1662.850 0.800, 1655.875 1.483, 1649 2.096 C 1595.351 6.882, 1536.713..."
        stroke="none"
        fill="currentColor"
        fill-rule="evenodd"
      ></path>
    </svg>
  );
  const options = [
    { value: "all", label: "Select" },
    { value: "option1", label: "400m" },
    { value: "option2", label: "600m" },
    { value: "option3", label: "Under 1km" },
  ];

  const handleSelect = (option) => {
    console.log("Selected option:", option);
  };
  const cooksLocation = (lat, long) => {
    const data = { lat: lat, long: long };
    // navigate("/cooksLocation", { state: data });
  };
  const showAllCooks = async (e) => {
    e.preventDefault();
    try {
      navigate("/allCooksMap", { state: { allLocation } });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <article className="cooks">
      <div className="cooks__div">
        <h2 className="cooks__title">Cooks</h2>
        <div className="cooks__filter">
          <Dropdown options={options} onSelect={handleSelect} />
          <FilterPills initialChips={["Veg", "Non-Veg", "Halal"]} />
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
            <section key={i} className="cooks__card">
              <div className="cooks__avatarDiv">
                <img
                  className="cooks__commentAvatarCircle"
                  src={profileUrl[i]?.profile_url || svgIcon}
                />
              </div>
              <div>
                <div className="cooks__nameMarker">
                  <div className="cooks__name">{cook.name}</div>
                  {/* <Link
                    to={{
                      pathname: "/cooksLocation",
                      state: { lat: cook.lat, long: cook.long },
                    }}
                  > */}
                  <img
                    // onClick={cooksLocation(`${cook.lat}`, `${cook.long}`)}
                    src={Marker}
                    className="cooks__AllMarker"
                    alt="location marker"
                  />
                  {/* </Link> */}
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
          ))}
        </div>
      </div>
    </article>
  );
}
