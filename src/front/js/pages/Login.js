import React, { useState } from "react";
import "../../styles/LoginScreen.css";
import logo from "./logo.png";
import Button from "react-bootstrap/Button";
import SignIn from "./SignIn";

function Login() {
  const [signIn, setSignIn] = useState(false);
  //  const [home, setHome] = usestate(false)
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img className="loginScreen__logo" src={logo} alt="main-logo" />
        <Button
          onClick={() => setSignIn(true)}
          className="loginScreen__button"
          variant="dark"
          size="lg"
        >
          Sign In
        </Button>
        <div className="loginScreen__gradient" />
        <div className="loginScreen__body">
          {signIn ? (
            <SignIn />
          ) : (
            <>
              <h1>Very limited films, TV programs and more </h1>
              <h2>Ma.tv</h2>
              <h3>
                Ready to kinda watch? enter Email to register or log in if you
                already have an account
              </h3>
              <div className="login__imput">
                <form>
                  <input type="Email" placeholder="Email" />
                  <Button
                    onClick={() => setSignIn(true)}
                    className="login__button"
                    variant="dark"
                    size="lg"
                  >
                    Join now
                  </Button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
