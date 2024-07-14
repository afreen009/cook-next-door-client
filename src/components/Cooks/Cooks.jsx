import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "../DropDown/DropDown";
import FilterPills from "../FilterPills/FilterPills";
import Marker from "../../assets/icons/marker.png";
import "../Cooks/Cooks.scss";

export default function Cooks({ cooksList }) {
  const navigate = useNavigate();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const options = [
    { value: "all", label: "Select" },
    { value: "option1", label: "400m" },
    { value: "option2", label: "600m" },
    { value: "option3", label: "Under 1km" },
  ];
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

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
