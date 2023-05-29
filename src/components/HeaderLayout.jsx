import React from "react";
import { images } from "../contants";

function HeaderLayout() {
  return (
    <div className="header-layout">
      <main className="content">
        <div className="content1">
          <div className="container">
            <article>
              <h4>
                Make Your <br /> Own Plan For <br /> Yoga.
              </h4>
              <h3>1</h3>
            </article>
            <img src={images.manStanding} alt="ray" />
          </div>
          <div className="container">
            <article>
              <h4>
                Find a <br /> Yoga Mentor For <br /> You.
              </h4>
              <h3>2</h3>
            </article>
            <img src={images.youngcouple} alt="" />
          </div>
        </div>
        <div className="long-content">
          <aside>
            <main className="long-content_main">
              <h4>
                Every-Day <br /> Open Master <br /> Classes.
              </h4>
              <h3>3</h3>
            </main>
            <p>
              We’re boosting online yoga by enabling anyone in the world to
              learn from the best
            </p>
          </aside>
          <img src={images.younglady} alt="" />
        </div>
      </main>
    </div>
  );
}

export default HeaderLayout;
