import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dropdown from "../DropDown/DropDown";
import FilterPills from "../FilterPills/FilterPills";
import Marker from "../../assets/icons/marker.png";
import "../Cooks/Cooks.scss";

export default function Cooks() {
  const navigate = useNavigate();

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
            className="cooks__AllMarker"
            src={Marker}
            alt="location marker"
          />
        </div>
      </div>
      <div className="cooks__list">
        <Slider {...settings}>
          <div className="cooks__card">
            <h3 className="cooks__cookName">Alex</h3>
          </div>
          <div className="cooks__card">
            <h3>2</h3>
          </div>
          <div className="cooks__card">
            <h3>3</h3>
          </div>
          <div className="cooks__card">
            <h3>4</h3>
          </div>
          <div className="cooks__card">
            <h3>5</h3>
          </div>
          <div className="cooks__card">
            <h3>6</h3>
          </div>
          <div className="cooks__card">
            <h3>7</h3>
          </div>
          <div className="cooks__card">
            <h3>8</h3>
          </div>
        </Slider>
      </div>
    </article>
  );
}
