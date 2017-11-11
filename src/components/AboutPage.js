import React, { Component } from "react";
import Navbar from "./Navbar";
import { Row, Col } from "reactstrap";
import { Card, CardImg, CardTitle, CardSubtitle } from "reactstrap";
import FooterPage from "./Footer";

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
                width="100%"
                src="https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/11055254_10206173043955381_722213628481418412_n.jpg?oh=0655e9b7cbfd949b6719d369b358fd42&oe=5A6D3D91"
                alt="Card image cap"
              />
              <CardTitle>Pastor Hypolite Kayenda-Muntu</CardTitle>
              <CardSubtitle>Head Pastor Of Ramah</CardSubtitle>
            </Card>
          </Col>
          <Col id="about-pargraph">
            {" "}
            <h5>
              {" "}
              Greeting ladies and Gentlemen. We are the Revolution For Christ
              young adults group, based on Ramah Full Gospel Ministry here in
              phoenix arizona. Our history isnt different from others, but our
              goals for the kingdom work might be different. Our projection is
              to bring young adults into the kingdom of work, and establishing
              the next future. This generation is growing to becoming parents,
              without a great fundation we arent going to be able to accomplish
              anything for the next 40 to 50 years. Thats why we took upon
              ourselves to devote our youth in the presence of God so he can
              help us to be better young man and you women in the futurem It
              easy to criticise but it hard to build. Our goals with our youth
              is to empower others with the word of God and establish a bond
              that can't be broken easily by the influemce of our generation or
              the society.
            </h5>
          </Col>
          <Col />
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
