import React from "react";
import Slider from "react-slick";
import { data, images } from "../../contants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./reviews.css";
function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="review-sec">
      <div className="pattern-img">
        <img src={images.Pattern} alt="" />
      </div>
      <div className="vector-img">
        <img src={images.vector} alt="" />
      </div>
      <div className="ellipse-img">
        <img src={images.ellipse} alt="" />
      </div>
      <Slider {...settings} className="review-items">
        {data.reviews.map((items, index) => {
          const { image, comments, name, job } = items;
          return (
            <main className="review-item" key={index}>
              <article className="review-img">
                <img src={image} alt="" />
                <p>{comments}</p>
              </article>
              <h4>{name}</h4>
              <h5>{job}</h5>
            </main>
          );
        })}
      </Slider>
    </div>
  );
}

export default Reviews;
