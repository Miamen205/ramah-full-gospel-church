import React, { Component } from "react";
import Navbar from "./Navbar";
import { Container, Row, Col } from "reactstrap";
import { Card, CardImg, CardTitle, CardSubtitle } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import FooterPage from "./Footer";

class SchedulePage extends Component {
  render() {
    return (
      <div id="Schedule-Body">
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
        <br />
        <br />
        <br />
        <Container>
          <ListGroup id="Schedule">
            <CardTitle> Every Sunday Schedule</CardTitle>
            <ListGroupItem>Sunday School start at 9:30am </ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Morbi leo risus</ListGroupItem>
            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Container>
          <ListGroup id="Schedule">
            <CardTitle> Praying Schedule </CardTitle>
            <ListGroupItem>
              {" "}
              Every Tuesday are fasting days 5:00am to 6:00pm{" "}
            </ListGroupItem>
            <ListGroupItem>
              Every Thursday are fasting days 5:00am to 6:00pm
            </ListGroupItem>
            <ListGroupItem>
              Wednesday is pray for the church day 3 hour praying
            </ListGroupItem>
            <ListGroupItem>
              Friday is pray for the leader day 3 hour praying
            </ListGroupItem>
            <ListGroupItem>Everday pray for the Ramah family</ListGroupItem>
          </ListGroup>
        </Container>
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
      </div>
    );
  }
}
export default SchedulePage;
