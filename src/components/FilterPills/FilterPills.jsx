import React, { useState } from "react";
import "./FilterPills.scss";

export default function FilterPills({ initialChips, onChipsChange }) {
  const [chips, setChips] = useState(initialChips);
  const [selectedChips, setSelectedChips] = useState([]);

  const handleChipSelect = (chip) => {
    if (selectedChips.includes(chip)) {
      setSelectedChips(selectedChips.filter((c) => c !== chip));
    } else {
      setSelectedChips([...selectedChips, chip]);
    }
  };

  return (
    <div className="chips-container">
      {chips.map((chip, index) => (
        <div
          style={{
            backgroundColor: selectedChips.includes(chip) ? "gray" : "white",
          }}
          className="chip"
          key={index}
          onClick={() => handleChipSelect(chip)}
        >
          {chip}
        </div>
      ))}
    </div>
  );
}
