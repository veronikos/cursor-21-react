import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoPathFound from "./pages/404";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/signIn">Sign In</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/signIn">
          <SignIn></SignIn>
          </Route>
          <Route path="/signUp">
          <SignUp></SignUp>
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="*">
            <NoPathFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}