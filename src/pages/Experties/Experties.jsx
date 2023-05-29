import React from "react";
import { data, images } from "../../contants";
import "./experties.css";
function Experties() {
  return (
    <section className="expert-section">
      <main>
        <div className="qualify-section">
          {data.qulification.map((item, index) => {
            const { head, title, subtitle } = item;
            return (
              <div key={index}>
                <h1>{head}</h1>
                <h4>{title}</h4>
                <p>{subtitle}</p>
              </div>
            );
          })}
        </div>
        <div className="john-cena_sec">
          <h1>
            Relaxe And Enjoy a <br /> Personalized Day <br /> Yoga With Us.
          </h1>
          <img src={images.cena} alt="cena" />
          <aside>
            <h4>
              John Cena /<span className="founder">founder</span>
            </h4>
            <img src={images.greenarc} alt="green" />
          </aside>
        </div>
      </main>
    </section>
  );
}

export default Experties;
