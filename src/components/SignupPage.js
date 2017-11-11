import React, { Component } from "react";
import Navbar from "./Navbar";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

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
        <Form id="Form">
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleNumber">Number</Label>
            <Input
              type="phone-number"
              name="number"
              id="exampleNumber"
              placeholder="(602)-###-####"
            />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}
export default SignupPage;
