import React from "react";
import { data } from "../../contants";
import "./courses.css";

function Courses() {
  return (
    <div className="course-sec">
      <article className="course-top">
        <h2>Popular Courses</h2>
        <p>
          Practice anywhere, anytime. Explore a new way to exercise and learn
          more about yourself. We are providing the best.
        </p>
      </article>
      <main className="course_layout">
        {data.courses.map((item, index) => {
          const { image, text, subText, rating } = item;
          return (
            <div key={index} className="course-item">
              <img src={image} alt="" />
              <h3>{text}</h3>
              <p>{subText}</p>
              <article>
                <div className="rating-div">
                  <img src={rating} alt="rating" />
                  <h5>(18)</h5>
                </div>
                <h5 className="p_san">Get Started</h5>
              </article>
            </div>
          );
        })}
      </main>
      <button type="button" className="course-btn">
        Browse More
      </button>
    </div>
  );
}

export default Courses;
