import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="HeroContainer">
      <img src="/img/waves.png" alt="" className="background" />

      <div className="heading-container">
        <h1 className="hero-heading">Time for sushi</h1>
      </div>

      <div className="sushi-img-container">
        <div className="sushi-img-stamp-animation">
          <img src="/img/splash.png" alt="" className="splash-img" />
          <div className="animated-img">
            <img src="/img/sushi.png" alt="" className="sushi-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
