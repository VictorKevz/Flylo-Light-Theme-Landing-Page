import React from "react";
import logo from "../assets/images/logo.svg";
import illustration1 from "../assets/images/illustration-1.svg";
import Form from "./Form";
import "./css/home.css";
function Home() {
  return (
    <div className="home-container">
      <nav>
        <div className="logo-container">
          <img src={logo} alt="fylo-logo" />
        </div>
        <ul className="nav-links">
          <li>Features</li>
          <li>Team</li>
          <li>Sign In</li>
        </ul>
      </nav>
      <div className="welcome-container">
        <div className="item image">
          <img src={illustration1} className="illustration-1" alt="illustration-1" />
        </div>
        <div className="item text">
          <div>
            <h1>All your files in one secure location, accessible anywhere.</h1>
            <p>
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers
            </p>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
