import React from "react";
import Form from "./Form";
import "./css/signIn.css"
function SignIn() {
  return (
    <section className="sign-in-container">
      <div className="item sign-in-text">
        <h4>Get early access today</h4>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <Form/>
    </section>
  );
}
export default SignIn;
