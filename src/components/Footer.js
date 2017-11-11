import React, { Component } from "react";
import { CardTitle } from "reactstrap";

class FooterPage extends Component {
  render() {
    return (
      <div id="footer" className="footer">
        {/* Footer for the website */}
        <footer class="text-muted">
          <CardTitle>Social Media Page</CardTitle>
          <div class="col l4 offset-l2 s12">
            <ul>
              <button class="btn btn-default btn-lg pull-xs-right">
                <a href="#">
                  <img id="link-img" src="https://i.imgur.com/IxMPieF.png" />
                </a>
              </button>
              <button class="btn btn-default btn-lg pull-xs-right">
                <a href="#">
                  <img id="link-img" src="https://i.imgur.com/KNfjMhB.png" />
                </a>
              </button>
              <button class="btn btn-default btn-lg pull-xs-right">
                <a href="#">
                  <img id="link-img" src="https://i.imgur.com/HNrsmck.png" />
                </a>
              </button>
              <button class="btn btn-default btn-lg pull-xs-right">
                <a href="#">
                  <img id="link-img" src="https://i.imgur.com/XOhfzMp.png" />
                </a>
              </button>
              <button class="btn btn-default btn-lg pull-xs-right">
                <a href="#">
                  <img id="link-img" src="https://i.imgur.com/BpQzx9V.png" />
                </a>
              </button>
              <button class="btn btn-default btn-lg pull-xs-right">
                <a href="#">
                  <img id="link-img" src="https://i.imgur.com/sKrAS4V.png" />
                </a>
              </button>
            </ul>
            <p>
              <a href="https://www.facebook.com/eddie.miamen">Eddie Facebook</a>
            </p>
            <p> Coded By Eddie Miamen</p>
          </div>
          <ul>
            <li>
              <a
                class="grey-text text-lighten-3"
                href="https://www.harmonykidsa.com/"
              >
                Harmony Kids Childcare & Academy
              </a>
            </li>
            <li>
              <a
                class="grey-text text-lighten-3"
                href="https://www.r4cnation.com/"
              >
                R4C Nation
              </a>
            </li>
            <li>
              <a
                class="grey-text text-lighten-3"
                href="https://www.r4cnation.com/music/"
              >
                R4C Nation Music
              </a>
            </li>
            <li>
              <a
                class="grey-text text-lighten-3"
                href="https://www.facebook.com/profile.php?id=100009148798873"
              >
                Ramah Facebook
              </a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}
export default FooterPage;
