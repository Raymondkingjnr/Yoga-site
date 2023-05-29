import React from "react";
import "./newsletter.css";

function Newsletter() {
  return (
    <div className="newsletter-sec">
      <main className="newsletter-content">
        <h2>Subscribe Our Newsletter</h2>
        <p>Subscribe our newsletter for further updates about us</p>
        <div className="input">
          <input type="text" placeholder="✉ Enter Email Address" />
          <button type="button" className="input-btn">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
}

export default Newsletter;
