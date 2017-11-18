import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { Card, CardImg, CardTitle, CardSubtitle } from "reactstrap";
import Navbar from "./Navbar";
import FooterPage from "./Footer";

class Ctest extends Component {
  render() {
    return (
      <div>
        <div id="Calendar2">
          <Navbar />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <center>
            <iframe
              id="calendar-iframe"
              src="https://calendar.google.com/calendar/b/1/embed?height=600&amp;wkst=1&amp;hl=en&amp;bgcolor=%2333ccff&amp;src=eddiemiamen2%40gmail.com&amp;color=%231B887A&amp;src=%23contacts%40group.v.calendar.google.com&amp;color=%2328754E&amp;src=en.usa%23holiday%40group.v.calendar.google.com&amp;color=%23125A12&amp;ctz=America%2FPhoenix"
              width="800"
              height="600"
              frameborder="0"
              scrolling="no"
            />
          </center>
          <br />
          <br />
          <br />
          <br />
          <br />
          <FooterPage />
        </div>
      </div>
    );
  }
}
export default Ctest;
