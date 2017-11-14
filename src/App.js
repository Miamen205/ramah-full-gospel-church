import React, { Component } from "react";
import "./App.css";
// import { Button } from "reactstrap";
import Homepage from "./components/Homepage";
import AboutPage from "./components/AboutPage";
import SignupPage from "./components/SignupPage";
import R4Cchior from "./components/R4Cchior";
import SchedulePage from "./components/Schedule";
import CalendarsPage from "./components/Calendars";
import Ctest from "./components/Ctest";
import R4CAboutPage from "./components/R4CAbout";
import LocationPage from "./components/LocationPage";
import BibleStudy from "./components/BibleStudy";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Homepage} />
          <Route path="/aboutpage" component={AboutPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/r4cchior" component={R4Cchior} />
          <Route path="/schedulepage" component={SchedulePage} />
          <Route path="/calendars" component={CalendarsPage} />
          <Route path="/ctest" component={Ctest} />
          <Route path="/r4cabout" component={R4CAboutPage} />
          <Route path="/location" component={LocationPage} />
          <Route path="/bible" component={BibleStudy} />
        </div>
      </Router>
    );
  }
}

export default App;
