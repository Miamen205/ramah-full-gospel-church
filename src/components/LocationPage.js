import React, { Component } from "react";
import Navbar from "./Navbar";
import { Row, Col } from "reactstrap";
import { Card, CardImg, CardTitle, CardSubtitle } from "reactstrap";
import GoogleMap from "./GoogleMap";
import FooterPage from "./Footer";

class LocationPage extends Component {
  render() {
    return (
      <div id="LocationPage-Body">
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <GoogleMap />
        <br />
        <br />
        <FooterPage />
      </div>
    );
  }
}
export default LocationPage;
