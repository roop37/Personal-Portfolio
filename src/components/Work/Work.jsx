import React, { useState } from "react";
import "./Work.css";
import { Certificates } from "../../data";
export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(
          currentSlide < Certificates.length - 1 ? currentSlide + 1 : 0
        );
  };

  return (
    <div className="work" id="work">
      <h1>Certificates</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {Certificates.map((item) => (
          <div className="container">
            <div className="item">
              <img src={item.img} alt="" />
              <div className="row">
                <h2>{item.title}</h2>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  Open Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
