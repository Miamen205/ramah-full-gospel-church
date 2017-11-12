import React, { Component } from "react";
import Navbar from "./Navbar";
import FooterPage from "./Footer";
import { Row, Col } from "reactstrap";
import { Card, CardImg, CardTitle, CardSubtitle } from "reactstrap";
class CalendarsPage extends Component {
  render() {
    return (
      <div>
        <div id="CalendarsPage-Body">
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
          <br />
          <br />
          <br />
          <br />
          <center>
            <h1 id="calendar-title" class="title text-center">
              {" "}
              Ramah Schedule Calendar{" "}
            </h1>
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
                  <div id="event" class="events">
                    <div class="event">
                      <h2 id="h2-tiltle"> Every Tuseday is Fasting Day</h2>
                      <div class="desc">
                        <p>
                          There are Some day you just have to spend some time in
                          the pressence of God.
                        </p>
                        <p>
                          Every Tuesday the pastor go to the church to fast.
                          Fasting start 5:00am to 6:00pm every Tuesday. You know
                          the more time you spend in God pressence the more you
                          get to know him, and also know what his plans are for
                          you.
                        </p>
                      </div>
                      <div class="location">
                        {" "}
                        <span class="glyphicon glyphicon-map-marker" />Addres
                        is: 5949 w Northern ave Glendale Arizona 85301
                      </div>
                      <div class="datetime">
                        {" "}
                        <span class="glyphicon glyphicon-time" /> 6:00pm -
                        7:00pm
                      </div>
                      <div class="attending">
                        <img
                          id="bush-photo"
                          src="https://i.imgur.com/Ow1B4b9.jpg"
                        />
                        <img
                          id="bush-photo"
                          src="https://i.imgur.com/dpoyk3z.jpg"
                        />
                        <img
                          id="bush-photo2"
                          src="https://i.imgur.com/D2hSdu4.jpg"
                        />
                      </div>
                      <div id="line" class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="6"
                          aria-valuemin="0"
                          aria-valuemax="18"
                        >
                          <span class="sr-only">4.477%</span>
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
                  <div id="event2" class="events">
                    <div class="event">
                      <h2 id="h2-tiltle">Thursday Bible Study</h2>
                      <div class="desc">
                        <p>
                          Come and here the great plan of God that he have for
                          you. When you read God words, you get to see that his
                          plan for you is to make your life better.his word
                          said, "The Lord your God is in your midst, a mighty
                          one who will save; he will rejoice over you with
                          gladness; he will quiet you by his love; he will exult
                          over you with loud singing."
                        </p>
                      </div>
                      <div class="location">
                        {" "}
                        <span class="glyphicon glyphicon-map-marker" />Addres
                        is: 5949 w Northern ave Glendale Arizona 85301
                      </div>
                      <div class="datetime">
                        <span class="glyphicon glyphicon-time" /> Thursday Bible
                        Study <span class="glyphicon glyphicon-time" /> 7:30pm -
                        8:30pm
                      </div>
                      <div class="attending">
                        <img
                          id="bush-photo"
                          src="https://i.imgur.com/wMKFyca.jpg"
                        />
                        <img
                          id="bush-photo"
                          src="https://i.imgur.com/oOahluu.jpg"
                        />
                        <img
                          id="bush-photo"
                          src="https://i.imgur.com/7FmqERm.jpg"
                        />
                      </div>
                      <div id="line" class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="6"
                          aria-valuemin="0"
                          aria-valuemax="18"
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
                  <div id="event3" class="events">
                    <div class="event">
                      <h2 id="h2-tiltle2">
                        Tuesday And Saturday Chior Practice
                      </h2>
                      <div class="desc">
                        <p>
                          Ramah chior been around for a while, it's always good
                          to hear the glorious voices lead congregation into
                          worship and praise every Sunday.The bible tell us a
                          true worshiper worship God in spirit and in truth.
                          glorious voices will always give you the chill and
                          goosebums every Sunday service.
                        </p>
                      </div>
                      <div class="location">
                        {" "}
                        <span class="glyphicon glyphicon-map-marker" />Addres
                        is: 5949 w Northern ave Glendale Arizona 85301{" "}
                      </div>
                      <div class="datetime">
                        <span class="glyphicon glyphicon-map-marker" /> Saturday
                        Practice <span class="glyphicon glyphicon-time" />{" "}
                        7:00pm - 8:30pm{" "}
                        <span class="glyphicon glyphicon-map-marker" /> Tuesday
                        Practice <span class="glyphicon glyphicon-time" />{" "}
                        6:30pm - 8:30pm
                      </div>
                      <div class="attending">
                        <img
                          id="bush-photo"
                          src="https://i.imgur.com/hFgjruX.jpg"
                        />
                        <img
                          id="bush-photo"
                          src="https://i.imgur.com/a4lXYDN.jpg"
                        />
                        <img
                          id="bush-photo"
                          src="https://i.imgur.com/58ZbLAH.jpg"
                        />
                      </div>
                      <div id="line" class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="6"
                          aria-valuemin="0"
                          aria-valuemax="18"
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
                  <div id="event4" class="events">
                    <div class="event">
                      <center>
                        <h2 id="h2-tiltle">Sunday Sernice</h2>
                      </center>
                      <div class="desc">
                        <center>
                          <p>
                            Psalm 122 David said,"I was glad when they said unto
                            me, Let us go into the house of the Lord." Do not
                            let Sunday be taken from you. If your soul has no
                            Sunday, it becomes an orphan.
                          </p>
                        </center>
                      </div>
                      <div class="location">
                        {" "}
                        <span class="glyphicon glyphicon-map-marker" />Addres
                        is: 5949 w Northern ave Glendale Arizona 85301{" "}
                      </div>
                      <div class="datetime">
                        <span class="glyphicon glyphicon-map-marker" /> Sunday
                        Service <span class="glyphicon glyphicon-time" />{" "}
                        10:30am - 12:30pm{" "}
                        <span class="glyphicon glyphicon-map-marker" /> Sunday
                        School <span class="glyphicon glyphicon-time" /> 9:30am
                        - 10:30am {" "}
                      </div>
                      <div class="attending">
                        <img
                          id="bush-photo"
                          src="https://i.imgur.com/hFgjruX.jpg"
                        />
                        <img
                          id="bush-photo"
                          src="https://i.imgur.com/a4lXYDN.jpg"
                        />
                      </div>
                      <div id="line" class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="1"
                          aria-valuemin="0"
                          aria-valuemax="34"
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
            <br />
            <h4 class="text-center">Hope You Like What You See On This App</h4>
          </center>
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
        </div>
      </div>
    );
  }
}
export default CalendarsPage;
