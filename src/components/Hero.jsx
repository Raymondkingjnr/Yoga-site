import React from "react";
import heroimg from "../assets/hero.png";
import greenhalf from "../assets/greenEllipse.png";
import orangehalf from "../assets/orangeEllipse.png";

function Hero() {
  const javascriptRelease = Date.parse("04 Dec 1995 00:12:00 GMT");

  console.log(javascriptRelease);

  return (
    <div className="hero-sec">
      <article className="article">
        <h1>
          Yoga to <br /> Release Stress
        </h1>
        <div className="green_half">
          <img src={greenhalf} alt="" />
        </div>
        <p>
          Yoga is a way of life, rather than a chore. Counteract the stresses of
          modern life by becoming more mindful and compassionate.
        </p>
        <aside>
          <button type="button" className="btn hero-btn">
            Get started
          </button>
          <button type="button" className="btn hero-btn">
            learn more
          </button>
          <div className="orange_half">
            <img src={orangehalf} alt="" />
          </div>
        </aside>
      </article>
      <div className="hero-img">
        <div className="hero-circle"></div>
        <img src={heroimg} alt="heroimg" />
      </div>
    </div>
  );
}

export default Hero;
