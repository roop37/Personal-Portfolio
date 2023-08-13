import React, { useState, useEffect } from "react";
import "./Intro.css";

const textOptions = [
  "Full-Stack Developer",
  "Flutter Developer",
  "UI/UX Designer",
  "Petrol Head",
];

export default function Intro() {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let interval;

    if (isTyping) {
      if (currentText.length === textOptions[textIndex].length) {
        setIsTyping(false);
        setTimeout(() => {
          setIsTyping(true);
          setCurrentText("");
          setTextIndex((textIndex + 1) % textOptions.length);
        }, 1000); // Pause before starting to type again
      } else {
        interval = setInterval(() => {
          setCurrentText(
            textOptions[textIndex].substr(0, currentText.length + 1)
          );
        }, 225); // Typing speed
      }
    } else {
      interval = setInterval(() => {
        if (currentText.length === 0) {
          setIsTyping(true);
          clearInterval(interval);
        } else {
          setCurrentText(currentText.substr(0, currentText.length - 1));
        }
      }, 50); // Backspacing speed
    }

    return () => clearInterval(interval);
  }, [textIndex, currentText, isTyping]);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets\3.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Sanbedan Paul</h1>
          <h3>
            {currentText}
            <span className="cursor">|</span>
          </h3>
        </div>
        <div className="scroll-icon__container">
          <a href="#projects">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
