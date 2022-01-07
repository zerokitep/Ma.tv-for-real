import React from "react";
import "../../styles/SignUp.css";
import { useState } from "react";
// import { sign } from "jsonwebtoken";

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <form>
      <div>
        <label htmlFor="exampleInputEmail" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-Control"
          id="exampleInputEmail"
          aria-describedby="emailHelp"
          value={email}
          onChange={ev == setEmail(ev.target.value)}
        />
        <div id="emailHelp" className="form-text">
          We will share your email with everyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          password
        </label>
        <input
          type="password"
          className="form-Control"
          id="exampleInputPassword"
          value={password}
          onChange={ev == setPassword(ev.target.value)}
        />
      </div>
{/* 
      <button type="submit" className="btn btn-primary" onClick={() => {
        fetch[process.env.BACKEND_URL  "/api/register",
               method:"POST"] */}

      }}>
        submit
      </button>
    </form>
  );
};
export default SignIn;
// function SignUp() {
//   return (
//     <div className="signupScreen">
//       <form>
//         <h1>Sign In</h1>
//         <input placeholder="Username" type="username" />
//         <input placeholder="Password" type="password" />
//         <button type="submit">Sign In</button>

//         <h4>
//           <span className="signUpScreen__gray">New to Ma-TV? </span>
//           <span className="singUpScreen__link">Sign Up now.</span>
//         </h4>
//       </form>
//     </div>
//   );
// }

// export default SignUp;
