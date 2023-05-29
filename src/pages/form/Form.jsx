import React from "react";
import { images } from "../../contants";
import "./form.css";
function Form() {
  return (
    <div className="form-sec">
      <div className="translate-bg">
        <img src={images.formRectangle} alt="" />
      </div>
      <main className="form-main">
        <div className="form-side_note">
          <h2>
            Get in Touch With <br /> Us for Yoga Course.
          </h2>
          <p>
            Get in touch with us for any kind of help. We are here to give you
            the best and also here to help you to find your yoga course.
          </p>
        </div>

        <form action="" className="form">
          <input type="text" placeholder="First Name" name="" id="" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <textarea name="text" id="" cols="30" rows="10"></textarea>
          <main className="check">
            <input type="checkbox" name="" id="" />

            <p>
              by clicking here you agree to our{" "}
              <span style={{ color: "#FF9F66" }}>terms and policy.</span>
            </p>
          </main>
        </form>
      </main>
    </div>
  );
}

export default Form;
