import React from 'react'
import Typewriter from "typewriter-effect";
import "./hero.css"
import "./background.css";

function Hero() {
  return (
    <div className="main">
        {/* <div className="hero1">
        <div className="xyz">
          <div className="drop"></div>
          <div className="wave"></div>
        </div>
        </div> */}
      <div className="hero_logo relative">
        <Typewriter
          options={{
            strings: ["Join The Greatest Detective"],
            // strings:["2022"],
            autoStart: true,
            pauseFor: 2500,
            loop: true,
          }}
        />
      </div>
      {/* <h1 className="hero_slogan">
        <span className="spn-slgn">Sherlock</span>
        <span className="spn-slgn">Holmes</span>
        <span className="spn-slgn">is </span>
        <span className="spn-slgn">,Hiring</span>
        <span className="spn-slgn">an</span>
        <span className="spn-slgn">Assistant</span>
        <span className="spn-slgn">Detective</span>
        <span className="spn-slgn">!</span>
      </h1> */}
      {/* </div> */}
      <div className="register">
        <button className="btn rounded">
          <a href="/apply">
            <span className="btn-span">Click to Apply</span>
          </a>
        </button>
      </div>
    </div>
  );
}

export default Hero 