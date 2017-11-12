import React, { Component } from "react";
import Navbar from "./Navbar";
import { Container } from "reactstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import { CardTitle } from "reactstrap";
import FooterPage from "./Footer";

class SignupPage extends Component {
  render() {
    return (
      <div id="signupPage-Body">
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
        <br />
        <br />
        <Container>
          <ListGroup>
            <CardTitle> Contact Us </CardTitle>
            <ListGroupItem>
              Email: harmonykids111@gmail.com
              <button class="btn btn-default btn-lg pull-xs-right">
                <a href="https://mail.google.com">
                  <img src="https://i.imgur.com/fiwv1Rl.png" />
                </a>
              </button>
            </ListGroupItem>
            <ListGroupItem>Phone: 623-322-5295</ListGroupItem>
            <ListGroupItem>
              revolutionforchrist@yahoo.com{" "}
              <button class="btn btn-default btn-lg pull-xs-right">
                <a href="https://login.yahoo.com/?.src=ym&.intl=us&.done=https%3A%2F%2Fmail.yahoo.com%2F">
                  <img id="yahoo" src="https://i.imgur.com/YXd78Og.png" />
                </a>
              </button>
            </ListGroupItem>
            <ListGroupItem> Phone: 623-806-4296</ListGroupItem>
          </ListGroup>
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
        <FooterPage />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default SignupPage;
