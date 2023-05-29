import React from "react";
import { images } from "../../contants";
import "./getstarted.css";
export default function GetStarted() {
  return (
    <section className="getstarted-sec">
      {/*  */}
      <div className="start-orange-arc">
        <img src={images.orangearc} alt="" />
      </div>
      <div className="start-green-arc">
        <img src={images.greenarc} alt="" />
      </div>
      {/*  */}
      <article>
        <div className="yoga-img">
          <img src={images.girl} alt="" />
        </div>
        <main>
          <div className="started-text">
            <div className="line"></div>
            <h2>
              The Better Way to <br /> Start Yoga
            </h2>
          </div>
          <aside>
            <div>
              <p>
                Practice anywhere, anytime. Explore a new way to exercise and
                learn more about yourself. We are providing the best.
              </p>
              <button type="button" className="btn start-btn">
                Get Started
              </button>
            </div>
            <img src={images.greenarc} alt="" />
          </aside>
        </main>
      </article>
    </section>
  );
}
