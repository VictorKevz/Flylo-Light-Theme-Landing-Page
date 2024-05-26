import React, { useState } from "react";
import "./css/form.css";

function Form() {
  const [userEmail, setUserEmail] = useState("");
  const [isValid, setValid] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleChange(e) {
    const newVal = e.target.value;
    setUserEmail(newVal);
    setValid(emailRegex.test(newVal));
  }

  function handleSubmission(e) {
    setClicked(true);
    e.preventDefault();
    if(isValid){
    setUserEmail("");
    }

  }

  return (
    <form onSubmit={handleSubmission}>
      <label for="email">
        <input
          value={userEmail}
          name="email"
          id="email"
          placeholder="Enter your email"
          onChange={handleChange}
          className={isClicked && !isValid?"error":""}
        />
        {isClicked && !isValid && (
          <span className="error-message">Please Check Your Email</span>
        )}
      </label>

      <button type="submit">Get Started</button>
    </form>
  );
}
export default Form;
