import React, { useState } from "react";
import "../DropDown/DropDown.scss";

const Dropdown = ({ handle }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const options = [
    { value: "", label: "Select" },
    { value: 400, label: "400m" },
    { value: 600, label: "600m" },
    { value: 1000, label: "Under 1km" },
  ];
  const handleOptionClick = (option) => {
    console.log("here", option.value);
    handle(option.value);
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : "Select"}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div
              key={option.value}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
