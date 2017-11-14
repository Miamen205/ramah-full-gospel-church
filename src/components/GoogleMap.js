import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Card, CardImg, CardTitle, CardSubtitle } from "reactstrap";

class GoogleMap extends Component {
  render() {
    return (
      <div id="GoogleMap-Body">
        <center>
          <iframe
            id="GoogleMap"
            width="900"
            height="600"
            frameborder="0"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJaRRp-aprK4cRcYJ-aJ_iOoY&key=AIzaSyCfB6cC1_3Rt-RsPfrH0aM2bZ4hcuj6dAI"
            allowfullscreen
          />
        </center>
      </div>
    );
  }
}
export default GoogleMap;
