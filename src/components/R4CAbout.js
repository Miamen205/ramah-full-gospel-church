import React, { Component } from "react";
import Navbar from "./Navbar";
import { Row, Col } from "reactstrap";
import { Card, CardImg, CardTitle, CardSubtitle } from "reactstrap";
import FooterPage from "./Footer";
import ReactPlayer from "react-player";

class R4CAboutPage extends Component {
  render() {
    return (
      <div id="R4C-About-Body">
        <Navbar />
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
          <h2>R4C Nation</h2>
        </center>
        <br />
        <br />
        <Row>
          <Col>
            {" "}
            <Card id="card-about-img">
              <CardImg
                top
                width="260"
                src="https://static1.squarespace.com/static/57ec107bf7e0abae9fb9ba06/t/5914fc5a6a496381cb77f622/1494548114833/faustin.jpg?format=300w"
                alt="Card image cap"
              />
              <h4 id="pastor-name">Faustin Kapelemba </h4>
              <CardSubtitle>R4C President</CardSubtitle>
            </Card>
          </Col>
          <Col id="about-pargraph">
            {" "}
            <center>
              <h5 id="about-speach2">
                Greeting ladies and Gentlemen. My name is Faustin Kapelemba we
                are the Revolution For Christ young adults group, based on Ramah
                Full Gospel Ministry here in phoenix arizona. Our history isnt
                different from others, but our goals for the kingdom work might
                be different. Our projection is to bring young adults into the
                kingdom of work, and establishing the next future. This
                generation is growing to becoming parents, without a great
                fundation we arent going to be able to accomplish anything for
                the next 40 to 50 years. Thats why we took upon ourselves to
                devote our youth in the presence of God so he can help us to be
                better young man and you women in the futurem It easy to
                criticise but it hard to build. Our goals with our youth is to
                empower others with the word of God and establish a bond that
                can't be broken easily by the influemce of our generation or the
                society.
              </h5>
            </center>
          </Col>
          <Col>
            {" "}
            <ReactPlayer url="https://youtu.be/PxrjSdWPgls" playing />{" "}
            <CardTitle id="speach-title2">Faustin Kapelemba</CardTitle>
            <CardSubtitle id="speach-title2">Talk About The R4C</CardSubtitle>
          </Col>
          <Col />
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            {" "}
            <Card id="card-about-img">
              <CardImg
                top
                width="260"
                src="https://static1.squarespace.com/static/57ec107bf7e0abae9fb9ba06/t/5981ffdc37c5811f0ed938d8/1501692024388/20590919_10214406578462479_555640049_o.jpg?format=500w"
                alt="Card image cap"
              />
              <h4 id="pastor-name">William Harris</h4>
              <CardSubtitle>R4C Vice President and Music Director</CardSubtitle>
            </Card>
          </Col>
          <Col id="about-pargraph">
            {" "}
            <center>
              <h5 id="about-speach2">
                Greeting ladies and Gentlemen. We are the Revolution For Christ
                young adults group, based on Ramah Full Gospel Ministry here in
                phoenix arizona. Our history isnt different from others, but our
                goals for the kingdom work might be different. Our projection is
                to bring young adults into the kingdom of work, and establishing
                the next future. This generation is growing to becoming parents,
                without a great fundation we arent going to be able to
                accomplish anything for the next 40 to 50 years. Thats why we
                took upon ourselves to devote our youth in the presence of God
                so he can help us to be better young man and you women in the
                futurem It easy to criticise but it hard to build. Our goals
                with our youth is to empower others with the word of God and
                establish a bond that can't be broken easily by the influemce of
                our generation or the society.
              </h5>
            </center>
          </Col>
          <Col>
            {" "}
            <ReactPlayer url="https://youtu.be/PxrjSdWPgls" />{" "}
            <CardTitle id="speach-title">William Harris</CardTitle>
            <CardSubtitle id="speach-title">Talk About The R4C</CardSubtitle>
          </Col>
          <Col />
        </Row>
        <br />
        <br />
        <Row>
          <Col>
            {" "}
            <Card id="card-about-img">
              <CardImg
                top
                width="260"
                src="https://static1.squarespace.com/static/57ec107bf7e0abae9fb9ba06/t/58ab3672d482e974648b3fef/1494548137513/16864405_10212709174828449_163998922964711473_n.jpg?format=300w"
                alt="Card image cap"
              />
              <h4 id="pastor-name">Barisuka Nsagane</h4>
              <CardSubtitle>R4C Program Coordinator</CardSubtitle>
            </Card>
          </Col>
          <Col id="about-pargraph">
            {" "}
            <center>
              <h5 id="about-speach2">
                Greeting ladies and Gentlemen. We are the Revolution For Christ
                young adults group, based on Ramah Full Gospel Ministry here in
                phoenix arizona. Our history isnt different from others, but our
                goals for the kingdom work might be different. Our projection is
                to bring young adults into the kingdom of work, and establishing
                the next future. This generation is growing to becoming parents,
                without a great fundation we arent going to be able to
                accomplish anything for the next 40 to 50 years. Thats why we
                took upon ourselves to devote our youth in the presence of God
                so he can help us to be better young man and you women in the
                futurem It easy to criticise but it hard to build. Our goals
                with our youth is to empower others with the word of God and
                establish a bond that can't be broken easily by the influemce of
                our generation or the society.
              </h5>
            </center>
          </Col>
          <Col>
            {" "}
            <ReactPlayer url="https://youtu.be/PxrjSdWPgls" />{" "}
            <CardTitle id="speach-title">William Harris</CardTitle>
            <CardSubtitle id="speach-title">Talk About The R4C</CardSubtitle>
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
        <br />
        <br />
        <br />
        <br />
        <FooterPage />
        <div />
      </div>
    );
  }
}
export default R4CAboutPage;
