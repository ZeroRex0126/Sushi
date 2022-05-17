import React from "react";
import "./HeroSection.css";
import AnimatedBtn from "../animatedBtn/animatedBtn";

const HeroSection = () => {
  return (
    <div className="HeroContainer">
      <div className="sushi-img-container">
        <div className="sushi-img-stamp-animation">
          <img src="/img/splash.png" alt="" className="splash-img" />
          <div className="animated-img">
            <img src="/img/sushi.png" alt="" className="sushi-img" />
          </div>
        </div>
      </div>

      <div className="details-container">
        <div className="heading-container">
          <h1 className="hero-heading">Time for sushi</h1>
          <div className="hero-btn">
            <AnimatedBtn
              navTo={"menu"}
              title={"menu"}
              color={{ "--btn-color": "green" }}
            />
          </div>
          <div className="hero-btn">
            <AnimatedBtn
              navTo={"ContactUs"}
              title={"contact us"}
              color={{ "--btn-color": "green" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
