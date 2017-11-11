import React, { Component } from "react";
import Navbar from "./Navbar";
import { Row, Col } from "reactstrap";
import { Card, CardImg, CardTitle, CardSubtitle } from "reactstrap";
class CalendarsPage extends Component {
  render() {
    return (
      <div id="R4C-Body">
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
        <h1 class="title text-center"> November 2017 </h1>
        <div id="calendar-body" class="calendar" data-toggle="calendar">
          <div class="row">
            <div class="col-xs-12 calendar-day calendar-no-current-month">
              <time datetime="2014-06-29">29</time>
            </div>
            <div class="col-xs-12 calendar-day calendar-no-current-month">
              <time datetime="2014-06-30">30</time>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-01">01</time>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-02">02</time>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-03">03</time>
              <div class="events">
                <div class="event">
                  <h4>Mid Day Dance Break - SELF CARE</h4>
                  <div class="desc">
                    <p>
                      Take a Break and enjoy Live dance and Art from Eries own
                      local Talent
                    </p>
                    <p>
                      Support for this program is provided in part from an Erie
                      Arts & Culture Project Grant, made possible by community
                      contributions to the Combined Arts & Cultural Campaign and
                      the Erie Arts Endowment.
                    </p>
                  </div>
                  <div class="location">
                    {" "}
                    <span class="glyphicon glyphicon-map-marker" /> State St and
                    Rt 5, Erie, Pa.
                  </div>
                  <div class="datetime">
                    {" "}
                    <span class="glyphicon glyphicon-time" /> 12:00am - 1:00pm
                  </div>
                  <div class="attending">
                    <img src="http://api.randomuser.me/portraits/women/54.jpg" />
                    <img src="http://api.randomuser.me/portraits/men/27.jpg" />
                    <img src="http://api.randomuser.me/portraits/men/61.jpg" />
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="6"
                      aria-valuemin="0"
                      aria-valuemax="134"
                    >
                      <span class="sr-only">4.477% Filled</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-04">04</time>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-05">05</time>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-06">06</time>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-07">07</time>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-08">08</time>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-09">09</time>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-10">10</time>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-11">11</time>
              <div class="events">
                <div class="event">
                  <h4>Local artist showing, meet and greet and feature film</h4>
                  <div class="desc">
                    <p>
                      We will be showing local artists films on our new 16 foot
                      movie screen with feature film last "Carnival Of Souls",
                      come see the new BT, hang out and socialize while enjoying
                      some local talent. FREE event, suggested $2 or $3
                      donation. Concessions, popcorn, soda etc available so come
                      hungry!!
                    </p>
                    <p>
                      *This event is all ages welcomed and also handicapped
                      accessible (side entrance ramp)
                    </p>
                    <p>Featuring :</p>
                    <ul>
                      <li>
                        <a href="https://www.youtube.com/user/walrys11/videos">
                          Jack Rys
                        </a>
                      </li>
                      <li>
                        <a href="http://society6.com/wombglow">Alex Wilson</a>
                      </li>
                      <li>
                        <a href="http://www.erieartcompany.com/">Brad Ford</a>
                      </li>
                      <li>
                        <a href="http://www.youtube.com/watch?v=dkTz0EvfEiY">
                          Carnival of Souls
                        </a>{" "}
                        (Trailer)
                      </li>
                    </ul>
                  </div>
                  <div class="location">
                    {" "}
                    <span class="glyphicon glyphicon-map-marker" /> 145 West
                    11th Street, Erie, Pa.
                  </div>
                  <div class="datetime">
                    {" "}
                    <span class="glyphicon glyphicon-time" /> 7:00pm - ?
                  </div>
                  <div class="attending">
                    <img src="http://api.randomuser.me/portraits/women/31.jpg" />
                    <img src="http://api.randomuser.me/portraits/women/47.jpg" />
                    <img src="http://api.randomuser.me/portraits/women/93.jpg" />
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="43"
                      aria-valuemin="0"
                      aria-valuemax="368"
                    >
                      <span class="sr-only">11.68% Filled</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-12">12</time>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-13">13</time>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-14">14</time>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-15">15</time>
              <div class="events">
                <div class="event">
                  <h4>Erie Art Museum 91st Annual Spring Show</h4>
                  <div class="desc">
                    <p>
                      This juried, regional multi-media exhibition, open to all
                      artists living within a 250-mile radius of Erie represents
                      all media and showcases the most current and finest
                      artwork created in the area.
                    </p>
                  </div>
                  <div class="location">
                    {" "}
                    <span class="glyphicon glyphicon-map-marker" /> Presque Isle
                    State Park{" "}
                  </div>
                  <div class="datetime">
                    {" "}
                    <span class="glyphicon glyphicon-time" /> ALL DAY
                  </div>
                  <div class="attending">
                    <img src="http://api.randomuser.me/portraits/men/10.jpg" />
                    <img src="http://api.randomuser.me/portraits/men/23.jpg" />
                    <img src="http://api.randomuser.me/portraits/men/66.jpg" />
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="69"
                      aria-valuemin="0"
                      aria-valuemax="320"
                    >
                      <span class="sr-only">21.56% Filled</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-16">16</time>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-17">17</time>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-18">18</time>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-19">19</time>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-20">20</time>
              <div class="events">
                <div class="event">
                  <h4>Mouse0270's 24th Birthday</h4>
                  <div class="desc">
                    <p>
                      Friendships are one of the few things that improve with
                      age<br />
                      The family and friends of <br />
                      Mouse0270 <br />
                      invite you to celebrate his <br />
                      24th Birthday and a lifetime of good friendship
                    </p>
                  </div>
                  <div class="location">
                    {" "}
                    <span class="glyphicon glyphicon-map-marker" /> Erie, Pa{" "}
                  </div>
                  <div class="datetime">
                    {" "}
                    <span class="glyphicon glyphicon-time" /> 10:00pm - 2:00am{" "}
                  </div>
                  <div class="attending">
                    <img src="https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xfa1/t1.0-9/417157_4897339837183_626079670_n.jpg" />
                  </div>
                  <div class="progress">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      aria-valuenow="1"
                      aria-valuemin="0"
                      aria-valuemax="336"
                    >
                      <span class="sr-only">0.29% Filled</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-21">21</time>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-22">22</time>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-23">23</time>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-24">24</time>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-25">25</time>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-26">26</time>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-27">27</time>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-28">28</time>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-29">29</time>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-30">30</time>
            </div>
            <div class="col-xs-12 calendar-day">
              <time datetime="2014-07-31">31</time>
            </div>
            <div class="col-xs-12 calendar-day calendar-no-current-month">
              <time datetime="2014-08-01">01</time>
            </div>
            <div class="col-xs-12 calendar-day calendar-no-current-month">
              <time datetime="2014-08-02">02</time>
            </div>
          </div>
        </div>
        <p class="text-center">
          No this is not a working calendar. It is purely for design. You are
          more than welcome to make it work, I sure am!
        </p>
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
      </div>
    );
  }
}
export default CalendarsPage;
