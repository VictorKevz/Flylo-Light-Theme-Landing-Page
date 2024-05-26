import React from "react";
import illustration2 from "../assets/images/illustration-2.svg";
import iconArrow from "../assets/images/icon-arrow.svg";
import iconQuotes from "../assets/images/icon-quotes.svg";
import kyle from "../assets/images/avatar-testimonial.jpg";
import "./css/features.css";

function Features() {
  return (
    <div className="features-container">
      <div className="item image">
        <img
          src={illustration2}
          className="illustration-2"
          alt="illustration-1"
        />
      </div>
      <div className="item features-text">
        <div className="features-text">
          <h2>Stay productive, wherever you are</h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </p>
        </div>
        <div className="features-link">
          <a>See how Fylo works</a>
          <img src={iconArrow} alt="icon-arrow" />
        </div>
        <div className="features-testimonial-container">
          <div className="testimonial">
            <img src={iconQuotes} alt="icon-quotes" />
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <figure className="profile">
              <img src={kyle} alt="kyle's-avatar" />
              <figcaption>
                <h3>Kyle Burton</h3>
                <p>Founder & CEO, Huddle</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Features;
