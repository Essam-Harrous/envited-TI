import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import CreateEvent from "./pages/CreateEvent";
import EventPage from "./pages/EventPage";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/create">
          <CreateEvent />
        </Route>
        <Route path="/event">
          <EventPage />
        </Route>
      </Switch>
    </Router>
  );
}
