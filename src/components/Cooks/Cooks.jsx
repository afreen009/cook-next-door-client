import React from "react";
import Dropdown from "../DropDown/DropDown";
import FilterPills from "../FilterPills/FilterPills";
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
  const onChipsChange = (e) => {
    console.log(e);
  };
  return (
    <article className="cooks">
      <div className="cooks__div">
        <h2 className="cooks__title">Cooks</h2>
        {/* <div className="cooks__dropdown"> */}
        <Dropdown options={options} onSelect={handleSelect} />
        {/* </div> */}
        <FilterPills initialChips={["veg", "non-veg", "halal"]} />
      </div>
    </article>
  );
}
