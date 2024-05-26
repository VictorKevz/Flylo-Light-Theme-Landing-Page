import React from "react";
import logo from "../assets/images/logo.svg";
import logoFooter from "../assets/images/logo_footer.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";
import iconPhone from "../assets/images/icon-phone.svg";
import iconEmail from "../assets/images/icon-email.svg";
import "./css/footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <img src={logoFooter} alt="Fylo-logo" />
      <div className="footer-links-container">
      <div className="phone-email-container">
        <div className="phone-container">
          <img src={iconPhone} alt="icon-phone" />
          <p>Phone: +1-543-123-4567</p>
        </div>
        <div className="email-container">
          <img src={iconEmail} alt="icon-email" />
          <p>example@fylo.com</p>
        </div>
      </div>

      <div className="about-us-container">
        <div className="about-us-list">
          <ul>
            <li>About us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>
      </div>

      <div className="contact-us-container">
        <div className="contact-us-list">
          <ul>
            <li>Contact us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
      <div className="social-links-container">
      <IconContext.Provider value={{ className: "react-icons" }}>
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </IconContext.Provider>
      </div>
      </div>
    </div>
  );
}
export default Footer;
