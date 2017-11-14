import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Card, CardImg, CardTitle, CardSubtitle } from "reactstrap";
import Navbar from "./Navbar";
import FooterPage from "./Footer";

class BibleStudy extends Component {
  render() {
    return (
      <div id="BibleStudy-Body">
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <center>
          <iframe src="https://www.bible.com" height="600" width="900" />
        </center>
        <br />
        <br />

        <br />
        <br />
        <FooterPage />
      </div>
    );
  }
}
export default BibleStudy;
