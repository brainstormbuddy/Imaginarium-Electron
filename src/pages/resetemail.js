import React from "react";
import { Link } from "react-router-dom";
import Header from "../layout/initial layout/Header/header";
import Navbar from "../layout/initial layout/Navbar/navbar";
import "../assets/scss/reset.scss";

function ResetEmail() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="reset-email">
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
          <div className="reset-email-content">
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
            <div className="login-content-text">Reset Password</div>
            <div className="form-group email-group">
              <label htmlFor="email">Email</label>
              <input className="form-group" type="email" placeholder="Email" />
            </div>
            {/* <button className="gradient-btn">
              <Link to="/reset-password">RESET</Link>
            </button> */}

            <Link className="gradient-btn" to="/reset-password">
              RESET
            </Link>

            <Link className="register-login-btn" to="/login">
              LOG IN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetEmail;
