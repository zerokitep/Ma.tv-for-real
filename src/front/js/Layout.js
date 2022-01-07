import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import { useEffect } from "react";
import Register from "./pages/register";
import SignIn from "./pages/SignIn";
function Layout() {
  const user = null;

  useEffect(() => {});
  return (
    <div className="app">
      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        )}
        <Switch>
          <Route exact path="/Register">
            <Register />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/SignIn.js">
            <SignIn />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Layout;
