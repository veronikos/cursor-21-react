import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navigation } from "./components/navigation";
import "./App.css";
import { appRoutes } from "./routes/index";
import NoPathFound from "./pages/404";

const links = [
  {
    to: "/21-routing",
    label: "Home",
  },
  {
    to: "/photos",
    label: "Photos",
  },
  {
    to: "/media",
    label: "Media",
  },
  {
    to: "/contacts",
    label: "Contacts",
  },
]

export default function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <Navigation links={links}></Navigation>
        </header>
        <Switch>
        {appRoutes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
            <Route path="*">
              <NoPathFound></NoPathFound>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}