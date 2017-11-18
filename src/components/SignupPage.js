import React, { Component } from "react";
import Navbar from "./Navbar";
import { Container } from "reactstrap";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";
import { CardTitle } from "reactstrap";
import FooterPage from "./Footer";

class SignupPage extends Component {
  state = {
    contactSubmission: false
  };
  contactSubmit = () => {
    let email = this.refs.email.value;
    let fullName = this.refs.fullName.value;
    let phoneNumber = this.refs.phoneNumber.value;
    let message = this.refs.message.value;
    let subject = this.refs.subject.value;
    this.props.contactSubmit(email, fullName, phoneNumber, subject, message);
    this.setState({ sent: true, contactSubmision: true });
    console.log("CONTACT FORM SUBMITED");
  };
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
