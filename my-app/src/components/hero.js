import React from "react";
import "./hero.css";
import { Button } from "antd";
export default function Hero() {
  return (
    <div className="container">
      <div id="heading">
        Your own AI tutor <br></br>
        <div class="typewriter">
          <h1>Anytime, Anywhere</h1>
        </div>
        <h3 className="subheadingHero">
          "Unlock Your Potential with Endless Learning - Explore a World of{" "}
          <br></br> Learning Opportunities Today!"
        </h3>
        <button
          className="button"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/SignUp";
          }}
        >
          Start Chat
        </button>
      </div>

      <div>
        <img id="image1" src="/bot.png" alt="img"></img>
      </div>
    </div>
  );
}
