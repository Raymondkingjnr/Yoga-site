import React from "react";
import { data } from "../../contants";
import { BsCheck } from "react-icons/bs";
import "./price.css";
function Price() {
  return (
    <div className="packages-sec">
      <article className="packages-contents">
        <div className="packages-header">
          <h1>Pick a Pricing Plan</h1>
          <p>
            Pick a pricing plan and get started your journey with us for build
            your body and mind
          </p>
        </div>
        <main className="packages-layout">
          {data.plans.map((item, index) => {
            const { head, price, text, packages, recommended } = item;
            return (
              <div className="packages" key={index}>
                <div
                  className={recommended ? "recommened-head " : "package-head"}
                >
                  {recommended ? (
                    <h4 className="recommended-text">recommended</h4>
                  ) : (
                    ""
                  )}

                  <h2>{head}</h2>
                  <h1>{price}.</h1>
                  <hr style={{ marginTop: "3rem", color: "#F4F5F7 " }} />
                </div>

                <p style={{ paddingLeft: "2.5rem" }}>{text}</p>
                <li className="package-lists">
                  {packages.map((item, index) => (
                    <p key={index} className="package-list">
                      <span className="list-icon">
                        <BsCheck />
                      </span>{" "}
                      {item}
                    </p>
                  ))}
                </li>

                <button
                  type="button"
                  className={recommended ? "recommended-btn" : "package-btn"}
                >
                  Book now
                </button>
              </div>
            );
          })}
        </main>
      </article>
    </div>
  );
}

export default Price;
