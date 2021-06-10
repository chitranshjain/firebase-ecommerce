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

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

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
            <p className="auth-info-text">
              We have everything to offer so you don't have to go looking
              somewhere else.
            </p>
          </div>
        </Col>
        <Col lg={7} className="auth-form-div">
          <img src={logo} alt="Logo" />
          <h4>Login</h4>
          <p>Check out an entire universe of products</p>
          <button className="google-signin-btn">
            <FcGoogle className="google-icon" />
            Sign In With Google
          </button>
          <Row className="divider-div">
            <Col lg={4}>
              <hr className="or-divider" />
            </Col>
            <Col lg={4} className="or-text">
              or Sign in with Email
            </Col>
            <Col lg={4}>
              <hr className="or-divider" />
            </Col>
          </Row>
          <Input
            name="email"
            type="email"
            label="Email"
            id="email"
            placeholder="Your email address"
          />
          <Input
            name="password"
            type={showPassword ? "text" : "password"}
            label="Password"
            id="password"
            placeholder="Your password"
          />
          <Row>
            <Col className="showpass-col">
              <Form.Check
                type="checkbox"
                label="Show Password"
                checked={showPassword}
                onClick={() => {
                  setShowPassword((prev) => {
                    return !prev;
                  });
                }}
              />
            </Col>
            <Col className="link-col">
              <Link to="/" className="link">
                Forgot Password?
              </Link>
            </Col>
          </Row>
          <Button text="Login"/>
          <div className="create-account">
            Not registered yet?&nbsp;&nbsp;
              <Link to="/signup" className="link">
                Create an account
              </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SignIn;
