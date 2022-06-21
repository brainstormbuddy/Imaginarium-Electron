import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/initial layout/Header/header";
import Navbar from "../layout/initial layout/Navbar/navbar";
import "../assets/scss/register.scss";

function Register() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="register">
        <div className="content">
          <img
            className="content-screen"
            src="assets/img/screen1.png"
            alt="screen1"
          />
          <div>
            <img
              className="content-screen-deviant"
              src="assets/img/Deviant Art.png"
              alt="Deviant Art"
            />
          </div>
          <div className="background-text">ART BY @FANTASYLADY</div>
          <div className="register-content">
            <div className="union">
              <img
                className="content-screen-union"
                src="assets/img/Union.png"
                alt="Union1"
              />
              <div className="content-logotextgroup">
                <div className="content-imaginarium-text">imaginarium</div>
                <div className="content-version-text">1.0</div>
              </div>
            </div>
            <div className="login-content-text">Create Your Account</div>
            <div className="name-group">
              <div className="firstname-group">
                <label htmlFor="firstname">FIRST NAME</label>
                <input
                  className="firstname"
                  type="text"
                  placeholer="firstname"
                />
              </div>
              <div className="lastname-group">
                <label htmlFor="lastname">LAST NAME</label>
                <input
                  className="lastname"
                  type="text"
                  placeholer="last name"
                />
              </div>
            </div>
            <div className="form-group username-group">
              <label htmlFor="username">Username</label>
              <input
                className="form-group"
                type="username"
                placeholder="Username"
              />
            </div>

            <div className="form-group email-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-group"
                type="email"
                placeholder="Email"
              />
            </div>

            <div className="form-group password-group">
              <label htmlFor="password">Password</label>
              <input
                className="form-group"
                type="password"
                placeholder="Password"
              />
            </div>

            <div className="form-group confirm-password-group">
              <label htmlFor="confirm password">Confirm Password</label>
              <input
                className="form-group"
                type="password"
                placeholder="Confirm Password"
              />
            </div>
            <button className="gradient-btn">REGISTER</button>

            <Link className="register-login-btn" to="/login">
              LOG IN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
