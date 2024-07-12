import React from "react";
import Cooks from "../../components/Cooks/Cooks";
import "../HomePage/HomePage.scss";
import HeroImage from "../../assets/images/heroImage.jpg";

export default function HomePage() {
  return (
    <main>
      <div className="main__heroDiv">
        <img className="main__hero" src={HeroImage} alt="Food Image" />
      </div>
      <Cooks />
    </main>
  );
}
