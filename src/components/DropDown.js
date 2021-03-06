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
          <DropdownToggle>R4C Contents</DropdownToggle>

          <DropdownMenu>
            <DropdownItem href="/r4cchior">R4C Chior</DropdownItem>
            <DropdownItem href="r4cabout">About R4C</DropdownItem>
            {/* <DropdownItem href="#">Prayer Time</DropdownItem> */}
            <DropdownItem />
            {/* <DropdownItem href="#">Bible Studay</DropdownItem> */}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default DropDown;
