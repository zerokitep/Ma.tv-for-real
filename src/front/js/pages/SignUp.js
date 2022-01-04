import React from "react";
import "../../styles/SignUp.css";

function SignUp() {
  return (
    <div className="signupScreen">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Username" type="username" />
        <input placeholder="Password" type="password" />
        <button type="submit">Sign In</button>

        <h4>
          <span className="signUpScreen__gray">New to Ma-TV? </span>
          <span className="singUpScreen__link">Sign Up now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignUp;
