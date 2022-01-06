import React from "react";
import { Button } from "react-bootstrap";
import "../../styles/register.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
      <div className="registerScreen">
        <img className="loginScreen_logo" src={logo} alt="main-logo" />
        <form>
          <h1>Sign Up</h1>
          <input placeholder="Full Name" type="text" />
          <input placeholder="Email" type="email" />
          <input placeholder="Password" type="password" />
          <Button className="register_button" variant="dark">
            Register
          </Button>
          <br></br>
          <br></br>
          <h4>
            <span className="si_gray">Already have an account? </span>
            <Link to="/Register">
              <span className="signup_link">Login now.</span>
            </Link>
          </h4>
        </form>
      </div>
    </div>
  );
}

export default Register;
