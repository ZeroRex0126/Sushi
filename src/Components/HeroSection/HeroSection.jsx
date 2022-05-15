import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="HeroContainer">
      <div className="heading-container">
        <h1 className="hero-heading">Time for sushi</h1>
      </div>
      <img src="/img/waves.png" alt="" className="background" />
      <div className="sushi-img-container">
        <img src="/img/splash.png" alt="" className="splash-img" />
        <div className="animated-img">
          <img src="/img/sushi.png" alt="" className="sushi-img" />
        </div>
      </div>
      <div className="animated-arrow"></div>
    </div>
  );
};

export default HeroSection;
