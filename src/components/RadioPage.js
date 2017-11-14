import React, { Component } from "react";
import Navbar from "./Navbar";
import { Row, Col } from "reactstrap";
import { Card, CardImg, CardTitle, CardSubtitle } from "reactstrap";

class RadioPage extends Component {
  render() {
    return (
      <div id="R4C-Body">
        <Navbar />
        <audio controls="controls">
          <source
            src="http://radiosidewinder.out.airtime.pro:8000/radiosidewinder_b"
            type="audio/mp3"
          />
        </audio>
      </div>
    );
  }
}
export default RadioPage;
