import React from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import R4Cchior from "./R4Cchior";

class DropDown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle>More Contents</DropdownToggle>

          <DropdownMenu>
            <DropdownItem href="/r4cchior">R4C Chior</DropdownItem>
            <DropdownItem href="#">Ramah Chior</DropdownItem>
            <DropdownItem href="calendars">Prayer Time</DropdownItem>
            <DropdownItem />
            <DropdownItem href="#">Bible Studay</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default DropDown;
