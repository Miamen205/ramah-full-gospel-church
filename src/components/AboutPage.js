import React, { Component } from "react";
import Navbar from "./Navbar";
import { Row, Col } from "reactstrap";
import { Card, CardImg, CardTitle, CardSubtitle } from "reactstrap";
import FooterPage from "./Footer";
import ReactPlayer from "react-player";

class AboutPage extends Component {
  render() {
    return (
      <div id="About-Body">
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row>
          <Col>
            {" "}
            <Card id="card-about-img">
              <CardImg
                top
                width="260"
                src="https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/11055254_10206173043955381_722213628481418412_n.jpg?oh=0655e9b7cbfd949b6719d369b358fd42&oe=5A6D3D91"
                alt="Card image cap"
              />
              <h4 id="pastor-name">Pastor Hypolite Kayenda-Muntu</h4>
              <CardSubtitle>Head Pastor Of Ramah</CardSubtitle>
            </Card>
          </Col>
          <Col id="about-pargraph">
            {" "}
            <center>
              <h5 id="about-speach">
                {" "}
                It has been a challenge year. As we see challenge we know that
                there will be a good result. We cannot have a test without
                having a testimony. We can Not have a message without no mess,
                mess must be there. We go through a lot of challenges and we
                been through a lot of challenges. But it allowed us to grow, it
                allowed us to come together as a church and as a family. And we
                discover also which part of the member are part of the family.<br
                />{" "}
                Because if the church don’t come together as a leader,and don’t
                stay together. then that is not a church. But we discovered
                those friends and we see a lot of friends, brothers and sisters
                that was with us. But they left, we can just stay like this is
                good. Because as they leave we discover other challenges for
                other people. We saw the choir come together. Saw the youth come
                together. In our leadership we dating really miss anybody,
                because the majority of the leader the group stay together. 2014
                have been a real challenge but we thank God because today we
                have office, we have a day program. We have a child care, we
                have a church place we can call home. The entire building is
                empty, just alone you can see our name on the board......
              </h5>
            </center>
          </Col>
          <Col>
            {" "}
            <ReactPlayer url="https://youtu.be/PxrjSdWPgls" playing />{" "}
            <CardTitle id="speach-title">
              Pastor Hypolite Kayenda-Muntu
            </CardTitle>
            <CardSubtitle id="speach-title">Talk About The Church</CardSubtitle>
          </Col>
          <Col />
        </Row>
        <br />
        <br />
        <br />
        <br />
        <Row>
          <Col>
            {" "}
            <Card id="card-about-img">
              <CardImg
                top
                width="260"
                src="https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/11055254_10206173043955381_722213628481418412_n.jpg?oh=0655e9b7cbfd949b6719d369b358fd42&oe=5A6D3D91"
                alt="Card image cap"
              />
              <h4 id="pastor-name">Pastor Hypolite Kayenda-Muntu</h4>
              <CardSubtitle>Head Pastor Of Ramah</CardSubtitle>
            </Card>
          </Col>
          <Col id="about-pargraph">
            {" "}
            <center>
              <h5 id="about-speach">
                {" "}
                It has been a challenge year. As we see challenge we know that
                there will be a good result. We cannot have a test without
                having a testimony. We can Not have a message without no mess,
                mess must be there. We go through a lot of challenges and we
                been through a lot of challenges. But it allowed us to grow, it
                allowed us to come together as a church and as a family. And we
                discover also which part of the member are part of the family.<br
                />{" "}
                Because if the church don’t come together as a leader,and don’t
                stay together. then that is not a church. But we discovered
                those friends and we see a lot of friends, brothers and sisters
                that was with us. But they left, we can just stay like this is
                good. Because as they leave we discover other challenges for
                other people. We saw the choir come together. Saw the youth come
                together. In our leadership we dating really miss anybody,
                because the majority of the leader the group stay together. 2014
                have been a real challenge but we thank God because today we
                have office, we have a day program. We have a child care, we
                have a church place we can call home. The entire building is
                empty, just alone you can see our name on the board......
              </h5>
            </center>
          </Col>
          <Col>
            {" "}
            <ReactPlayer url="https://youtu.be/PxrjSdWPgls" />{" "}
            <CardTitle id="speach-title">
              Pastor Hypolite Kayenda-Muntu
            </CardTitle>
            <CardSubtitle id="speach-title">Talk About The Church</CardSubtitle>
          </Col>
          <Col />
        </Row>
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
        <div />
      </div>
    );
  }
}
export default AboutPage;
