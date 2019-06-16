import React from "react";
import {
  Card,
  Col,
  Row,
  CardHeader,
  CardBody,
  CardFooter,
  Button
} from "reactstrap";
import {
  faSearch,
  faEdit,
  faShare,
  faThumbsUp
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import starbucks from "./assets/img/starbucks1.png";
import starlogo from "./assets/img/footer-logo.png";
import mobile from "./assets/img/mobile.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Row className="row">
        <Col>
          <Card>
            <CardHeader className="header">
              <Row className="row-container">
                <Col>
                  <div>
                    <FontAwesomeIcon icon={faEdit} className="icon-edit" />
                  </div>
                </Col>
                <Col className="containers">
                  <div>
                    <div className="Starbuks">Sturbucks</div>
                    <div>Activity</div>
                  </div>
                </Col>
                <Col>
                  <div>
                    <FontAwesomeIcon icon={faSearch} className="icon-search" />
                  </div>
                </Col>
              </Row>
            </CardHeader>
            <CardBody>
              <div class="corner-ribbon top-right sticky blue">Closed</div>
              <div className="background" />
              <Row className="main-container">
                <Col>
                  <img src={starbucks} className="icon-starbucks" />
                </Col>
              </Row>
              <Row className="main-title">
                <Col>
                  <div>Starbuks</div>
                </Col>
              </Row>
              <Row className="main-subtitle">
                <Col>
                  <div>@N. San Antonio Rd,Los Altos</div>
                </Col>
              </Row>
              <Row className="Cricles">
                <Col>
                  <img src={mobile} className="icon-pin" />
                </Col>
                <Col>
                  <img src={mobile} className="icon-pin" />
                </Col>
                <Col>
                  <img src={mobile} className="icon-pin" />
                </Col>
              </Row>
              <Row>
                <div className="follower-container">
                  <Row>
                    <Col className="fonts-container">
                      <div className="bold"> 868</div>
                      <div className="grayword"> Follower</div>
                    </Col>
                    <Col className="fonts-container">
                      <div className="bold"> 868</div>
                      <div className="grayword"> Boddies</div>
                    </Col>
                    <Col className="fonts-container">
                      <div className="bold"> 868</div>
                      <div className="grayword"> ThumbsUp</div>
                    </Col>
                  </Row>
                </div>
              </Row>
              <Row className="buttons">
                <div className="button-container">
                  <div className="following">
                    <Button className="leftitem">Following</Button>
                  </div>
                  <div className="share-container row">
                    <div className="svgcontent col">
                      <FontAwesomeIcon
                        icon={faThumbsUp}
                        className="icon-search"
                      />
                    </div>
                    <div className="svgcontent col">
                      <FontAwesomeIcon icon={faShare} className="icon-search" />
                    </div>
                  </div>
                </div>
              </Row>
              <Row className="padding-container">
                <Col>
                  <div className="sturbucks-container">
                    <img src={starlogo} className="footer-logo" />
                    <div className="margin-container">
                      <p className="starbucks-logo">Starbucks</p>
                      <br />
                      <p className="address-logo">@Castro St,Mountain View</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </CardBody>
            <CardFooter className="footer">
              <Row>
                <Col className="button">
                  <div className="pres">Social aggregate</div>
                </Col>
                <Col className="button-pres">Activity</Col>
                <Col className="button presleft">this</Col>
              </Row>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default App;
