import React from "react";
import "./AnimatedTitle.css";

const AnimatedTitle = ({ title, animated }) => {
  // for (let i = 0; i < title.length; i++) {
  //   return <p>{title[i]}</p>;
  // }

  return (
    <div className="animated-heading">
      {title.length
        ? [...Array(title.length)].map((e, i) => (
            <span className={animated ? "animated-letter" : ""} key={i}>
              {title[i]}
            </span>
          ))
        : "No Title"}
    </div>
  );
};

export default AnimatedTitle;
