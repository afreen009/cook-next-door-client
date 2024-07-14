import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../DropDown/DropDown";
import FilterPills from "../FilterPills/FilterPills";
import Marker from "../../assets/icons/marker.png";
import "../Cooks/Cooks.scss";

export default function Cooks({ cooksList }) {
  const navigate = useNavigate();
  const options = [
    { value: "all", label: "Select" },
    { value: "option1", label: "400m" },
    { value: "option2", label: "600m" },
    { value: "option3", label: "Under 1km" },
  ];

  const handleSelect = (option) => {
    console.log("Selected option:", option);
  };
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      navigate("/allCooksMap");
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
            onClick={handleClick}
            className="cooks__AllMarker cooks__AllMarker--filter"
            src={Marker}
            alt="location marker"
          />
        </div>
      </div>
      <div className="cooks__container">
        <div className="cooks__carousel">
          {cooksList.map((cook, index) => (
            <section key={index} className="cooks__card">
              <div className="cooks__avatarDiv">
                <div className="cooks__commentAvatarCircle"></div>
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
          ))}
        </div>
      </div>
    </article>
  );
}
