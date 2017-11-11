import React, { Component } from "react";
import Navbar from "./Navbar";
import FooterPage from "./Footer";
import {
  Row,
  Card,
  Button,
  CardTitle,
  CardText,
  Col,
  CardSubtitle,
  CardImg
} from "reactstrap";
import Carousel from "./Carousel";
import MediaQuery from "react-responsive";
import { Container } from "reactstrap";
import ReactPlayer from "react-player";

class Homepage extends Component {
  render() {
    return (
      <div id="Homepage">
        <div id="Hmoe-Body">
          <MediaQuery query="(min-device-width: 1224px)">
            <div id="Home-Background">
              <Navbar />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Carousel />
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
              <Container>
                <Row>
                  <Col>
                    {" "}
                    <Card className="Card">
                      <CardImg
                        top
                        width="100%"
                        src="https://i.imgur.com/TvoqlSz.jpg"
                        alt="Card image cap"
                      />
                      <CardTitle>Bible Study</CardTitle>
                      <CardSubtitle>
                        Place Of Learning And A Place To Failed Your Spirit
                      </CardSubtitle>
                      <br />
                      <CardText>
                        Come and here the great plan of God that he have for
                        you. When you read God words, you get to see that his
                        plan for you is to make your life better.his word said,
                        "The Lord your God is in your midst, a mighty one who
                        will save; he will rejoice over you with gladness; he
                        will quiet you by his love; he will exult over you with
                        loud singing."
                      </CardText>
                      <Button href="#" id="button">
                        Bible Study
                      </Button>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="Card">
                      <CardImg
                        top
                        width="100%"
                        src="https://i.imgur.com/NMusg5w.jpg"
                        alt="Card image cap"
                      />

                      <CardTitle>Sunday Service </CardTitle>
                      <CardSubtitle>Let Sunday Be A Day For You</CardSubtitle>
                      <br />
                      <CardText>
                        Psalm 122 David said,"I was glad when they said unto me,
                        Let us go into the house of the Lord." Do not let Sunday
                        be taken from you. If your soul has no Sunday, it
                        becomes an orphan.
                      </CardText>
                      <CardText />
                      <Button href="#" id="button">
                        Sunday Service
                      </Button>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="Card">
                      <CardImg
                        top
                        width="100%"
                        src="https://i.imgur.com/BDEO3ql.jpg"
                        alt="Card image cap"
                      />

                      <CardTitle>Harmony Kids Childcare & Academy </CardTitle>
                      <CardSubtitle>Enriching Our Children</CardSubtitle>
                      <br />
                      <CardText>
                        The mission of Harmony Kids Childcare and Academy is to
                        ensure that each child is in a warm, nurturing, safe
                        environment where he or she can learn, grow, and have a
                        rich experience that allows them to develop and blossom.
                        ​ We welcome all prospective students for a visit
                        anytime. Ask for Jenny.
                      </CardText>
                      <CardText />
                      <Button href="https://www.harmonykidsa.com/" id="button">
                        Harmony Kids Childcare & Academy
                      </Button>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card id="animated" className="Card">
                      <CardImg
                        top
                        width="100%"
                        src="https://i.imgur.com/qqWxxDQ.jpg"
                        alt="Card image cap"
                      />

                      <CardTitle>R4C Nation </CardTitle>
                      <CardSubtitle>Let Sunday Be A Day For You</CardSubtitle>
                      <br />
                      <CardText>
                        I've been saying for a couple of years now that people
                        need to let God out of the Sunday morning box, that He
                        doesn't want to just be with you for an hour or two on
                        Sunday morning and then put back in His box to sit there
                        until you have an emergency, but He wants to invade your
                        Monday, Tuesday, Wednesday, Thursday, Friday, Saturday,
                        and Sunday.
                      </CardText>
                      <CardText />
                      <Button href="#" id="button">
                        {" "}
                        Youth Sunday Service
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </Container>
              <br />
              <br />
              <br />
              <Container>
                <Row>
                  <Col>
                    {" "}
                    <Card className="Card">
                      <CardImg
                        top
                        width="100%"
                        src="https://i.imgur.com/PscZLn5.jpg"
                        alt="Card image cap"
                      />

                      <CardTitle>R4C Nation kids Summer Camp</CardTitle>
                      <CardSubtitle>
                        Let The Kids Learning About Respect With Their Peers
                      </CardSubtitle>
                      <br />
                      <CardText>
                        Proverbs 22:6 Train up a child in the way he should go,
                        And when he is old he will not depart from it.This camp
                        is design to have a lectured with kids,to show them the
                        importance of obeying their parents and the blessing
                        that comes with it as well as the curse and disasters
                        that comes with disobedience. They also learn to respect
                        not only their elders but their peers as well, who might
                        have a different opinion or belief system from theirs.
                        They learn how to treat everyone with the respect they
                        deserve because respect is reciprocal.
                      </CardText>
                      <CardText />
                      <Button
                        href="https://www.r4cnation.com/kids-summer-camp/"
                        id="button"
                      >
                        {" "}
                        KR4C Summer Camp
                      </Button>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="Card">
                      <CardImg
                        top
                        width="100%"
                        src="https://static1.squarespace.com/static/57ec107bf7e0abae9fb9ba06/t/58e1dd743a0411db1e36d19a/1491197631135/394787_10200590293783997_1607276049_n.jpg?format=500w"
                        alt="Card image cap"
                      />

                      <CardTitle>R4C Nation Community Service</CardTitle>
                      <CardSubtitle>Community Service</CardSubtitle>
                      <br />
                      <CardText>
                        R4C is also involved in various community service to
                        make our community a better place.“For I was hungry and
                        you gave me food, I was thirsty and you gave me drink, I
                        was a stranger and you welcomed me,”
                      </CardText>
                      <CardText />
                      <Button
                        href="https://www.r4cnation.com/community-services/"
                        id="button"
                      >
                        {" "}
                        Community Service
                      </Button>
                    </Card>
                  </Col>
                  <Col>
                    {" "}
                    <Card className="Card">
                      <CardImg
                        top
                        width="100%"
                        src="https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/11075169_10206173047115460_448319818436627277_n.jpg?oh=79aae430271a409aa3b802687ae0b9c4&oe=5A9A2A80"
                        alt="Card image cap"
                      />

                      <CardTitle>Ramah Chior</CardTitle>
                      <CardSubtitle>Glorious Voices</CardSubtitle>
                      <br />
                      <CardText>
                        Ramah chior been around for a while, it's always good to
                        hear the glorious voices lead congregation into worship
                        and praise every Sunday.The bible tell us a true
                        worshiper worship God in spirit and in truth. glorious
                        voices will always give you the chill and goosebums
                        every Sunday service.
                      </CardText>
                      <CardText />
                      <Button href="#" id="button">
                        {" "}
                        Glorious Voices
                      </Button>
                    </Card>
                  </Col>
                  <Col>
                    <Card className="Card">
                      <CardImg
                        top
                        width="100%"
                        src="https://scontent.fphx1-2.fna.fbcdn.net/v/t1.0-9/10404889_10206173017874729_276765804500666656_n.jpg?oh=de7ff26e8fe83b0d2fd64e5cbc74d9c3&oe=5AA4DB0E"
                        alt="Card image cap"
                      />

                      <CardTitle> Prayer Time</CardTitle>
                      <CardSubtitle>
                        Days We interced through prayers for the church
                      </CardSubtitle>
                      <br />
                      <CardText>
                        Rejoice always, pray continually, give thanks in all
                        circumstances; for this is God’s will for you in Christ
                        Jesus.Do not be anxious about anything, but in every
                        situation, by prayer and petition, with thanksgiving,
                        present your requests to God. And the peace of God,
                        which transcends all understanding, will guard your
                        hearts and your minds in Christ Jesus.This is the
                        confidence we have in approaching God: that if we ask
                        anything according to his will, he hears us.
                      </CardText>
                      <CardText />
                      <Button href="#" id="button">
                        {" "}
                        Prayer Time
                      </Button>
                    </Card>
                  </Col>
                </Row>
              </Container>
              <br />
              <br />
              {/* <ReactPlayer
                url="https://soundcloud.com/jolayemi-kolawole-micheal/travis-greene-the-hill"
                playing
              /> */}

              <Row>
                <Col />
                <Col>
                  <ReactPlayer
                    url="https://youtu.be/A_YQzKo5Ows?list=PLe7pR0zMzLmc0Ir_Sm1yvA6iwEOzL07AL"
                    playing
                  />
                </Col>
                <Col />
                <Col />
              </Row>
              <br />
              <Container>
                <FooterPage />
              </Container>
              <br />
              <br />
              <br />
            </div>
          </MediaQuery>
        </div>
      </div>
    );
  }
}
export default Homepage;
