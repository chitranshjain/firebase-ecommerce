import React, { useState } from "react";
import { Card, Col, Form, Row } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

import logo from "../../../Assets/Images/logo.png";
import fastdelivery from "../../../Assets/SVGs/fastdelivery.svg";
import savings from "../../../Assets/SVGs/savings.svg";
import Button from "../../../Shared/Components/Button";
import Input from "../../../Shared/Components/Input";
import "./SignIn.css";

function UserRegistration() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-main-div">
      <Row className="auth-row">
        <Col md={12} sm={12} lg={7} className="auth-form-div">
          <img src={logo} alt="Logo" />
          <h4>My Details</h4>
          <p>
            Please enter your details below so we could get your favourite
            products delivered to your doorsteps
          </p>
          <Row className="divider-div">
            <Col lg={4}>
              <hr className="or-divider" />
            </Col>
            <Col lg={4} className="or-text">
              Enter the following details
            </Col>
            <Col lg={4}>
              <hr className="or-divider" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                name="firstName"
                type="text"
                label="First Name"
                id="firstName"
                placeholder="First Name"
              />
            </Col>
            <Col>
              <Input
                name="lastName"
                type="text"
                label="Last Name"
                id="lastName"
                placeholder="Last Name"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                name="email"
                type="email"
                label="Email"
                id="email"
                placeholder="Email"
              />
            </Col>
            <Col>
              <Input
                name="phone"
                type="text"
                label="Phone Number"
                id="phone"
                placeholder="Phone Number"
              />
            </Col>
          </Row>
          <div className="input-div">
            <label className="input-label" for="address">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              className="input"
              placeholder="Address"
              rows={3}
              
            />
          </div>
          <Button text="Register" />
        </Col>
        <Col md={0} sm={0} lg={5} className="auth-info-col">
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
            <p className="auth-info-text">
              We have everything to offer so you don't have to go looking
              somewhere else.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default UserRegistration;
