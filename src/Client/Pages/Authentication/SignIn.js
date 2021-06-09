import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import fastdelivery from "../../../Assets/SVGs/fastdelivery.svg";
import savings from "../../../Assets/SVGs/savings.svg";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="auth-main-div">
      <Row className="auth-row">
        <Col lg={5} className="auth-info-col">
          <div className="auth-info-main-div">
            <Card className="auth-info-card card-one">
              <img src={savings} alt="Savings" />
              <h4>Get More Savings!</h4>
              <p>Get the best quality products at affordable prices.</p>
            </Card>
            <Card className="auth-info-card card-two">
              <img src={fastdelivery} alt="Savings" />
              <h4>Get Fast Delivery!</h4>
              <p>Our expert delivery partners delivery really fast.</p>
            </Card>
            <h1>All you want and need in one place.</h1>
            <p className="auth-info-text">We have everything to offer so you don't have to go looking somewhere else.</p>
          </div>
        </Col>
        <Col lg={7} className="auth-form-div"></Col>
      </Row>
    </div>
  );
}

export default SignIn;
