import React, { Component } from "react";
import DropDown from "./DropDown";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
class NavbarPage extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar id="Navbar" color="faded" light>
          <h2 id="h2" content="width=device-width, initial-scale=1.0">
            Welcome To Ramah Full Gospel Church
          </h2>
          <h5 id="h5" content="width=device-width, initial-scale=1.0">
            We Don't Believe In Church Member We Belive in Family
          </h5>
          <NavbarBrand href="/" className="mr-auto">
            <img id="Logo" src="https://i.imgur.com/zkuief8.jpg" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <center>
                <NavItem>
                  <NavLink className="NavLink-center" href="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/signup">Contact Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/aboutpage">About Ramah</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">About R4C</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="calendars">Calendars</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/schedulepage">Ramah Chior</NavLink>
                </NavItem>
              </center>
            </Nav>
            <DropDown />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default NavbarPage;
