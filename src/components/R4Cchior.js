import React, { Component } from "react";
import Navbar from "./Navbar";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardTitle, CardSubtitle } from "reactstrap";
import FooterPage from "./Footer";
import ReactPlayer from "react-player";
// import Filestack from "./Filestack.jsx";

class R4Cchior extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div id="R4C-Chior-Body">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <center>
            <h2>Welcome To R4C Nation</h2>
            <h3>This Section Is Only For The R4C Chior </h3>
          </center>
          {/* <Filestack /> */}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row>
            <Col />
            <Col>
              <CardTitle> R4C Chior Practice</CardTitle>
            </Col>
            <Col />
            <Col />
          </Row>
          <br />
          <Container>
            <Row>
              <Col xs="6" sm="4">
                <ReactPlayer
                  id="chior-video1"
                  width="80"
                  url="https://www.youtube.com/embed/vBmgTJNIdKw"
                />
              </Col>
              <Col xs="6" sm="4">
                <ReactPlayer
                  id="chior-video2"
                  width="80"
                  url="https://www.youtube.com/embed/CuPIa0uMiwk"
                />
              </Col>
              <Col xs="6" sm="4">
                <ReactPlayer
                  id="chior-video3"
                  width="80"
                  url="https://www.youtube.com/embed/CuPIa0uMiwk"
                />
              </Col>
            </Row>
          </Container>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row>
            <Col />
            <Col>
              <CardTitle> R4C Concert</CardTitle>
            </Col>
            <Col />
            <Col />
          </Row>
          <br />
          <Container>
            <Row>
              <Col xs="6" sm="4">
                <ReactPlayer
                  id="chior-video4"
                  width="30"
                  url="https://www.youtube.com/embed/fuTL-5EJXLY"
                />
              </Col>
              <Col xs="6" sm="4">
                <ReactPlayer
                  id="chior-video5"
                  width="30"
                  url="https://www.youtube.com/embed/j_enibmqDro"
                />
              </Col>
              <Col xs="6" sm="4">
                <ReactPlayer
                  id="chior-video6"
                  width="30"
                  url="https://youtu.be/ttRZbhEsKXs"
                />
              </Col>
            </Row>
          </Container>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <FooterPage />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
export default R4Cchior;
