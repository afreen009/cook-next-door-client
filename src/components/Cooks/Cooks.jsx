import React from "react";
import Dropdown from "../DropDown/DropDown";
import FilterPills from "../FilterPills/FilterPills";
import Marker from "../../assets/icons/marker.png";
import "../Cooks/Cooks.scss";

export default function Cooks() {
  const options = [
    { value: "all", label: "Select" },
    { value: "option1", label: "400m" },
    { value: "option2", label: "600m" },
    { value: "option3", label: "Under 1km" },
  ];

  const handleSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <article className="cooks">
      <div className="cooks__div">
        <h2 className="cooks__title">Cooks</h2>
        <div className="cooks__filter">
          <Dropdown options={options} onSelect={handleSelect} />
          <FilterPills initialChips={["Veg", "Non-Veg", "Halal"]} />
          <img
            className="cooks__AllMarker"
            src={Marker}
            alt="location marker"
          />
        </div>
      </div>
      <section className="cooks__list">
        <div className="cooks__card">
          <div className="cooks__imageDiv">
            {/* <img
              src="/assets/images//Mohan-muruge.jpg"
              class="cooks__imgCircle"
              alt="users iamage"
            /> */}
          </div>
          <div className="">
            <span>Alex</span>
          </div>
        </div>
      </section>
    </article>
  );
}
