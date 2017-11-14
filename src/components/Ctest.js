import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Card, CardImg, CardTitle, CardSubtitle } from "reactstrap";
import Navbar from "./Navbar";

class Ctest extends Component {
  render() {
    return (
      <div id="Calendar-Body">
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <center>
          <iframe
            id="calendar-iframe"
            src="https://calendar.google.com/calendar/embed?src=eddiemiamen2%40gmail.com&ctz=America/Phoenix"
            width="800"
            height="600"
            frameborder="0"
            scrolling="no"
          />
        </center>
      </div>
    );
  }
}
export default Ctest;
