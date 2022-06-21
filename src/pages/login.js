import React from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import AppleLogin from "react-apple-login";
import Header from "../layout/initial layout/Header/header";
import Navbar from "../layout/initial layout/Navbar/navbar";
import "../assets/scss/login.scss";

function Login() {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="login">
      <Header />
      <Navbar />
      <div>
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
          <div className="login-content">
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
            <div className="login-content-text">Sign into Your Account</div>
            <div className="form-group login-email-group">
              <label htmlFor="email">Email</label>
              <input className="form-group" type="text" placeholder="Email" />
            </div>
            <div className="form-group login-password-group">
              <div className="forgot-password-group">
                <label htmlFor="password">Password</label>
                <Link className="forgot-password" to="/reset-email">
                  Forgot?
                </Link>
              </div>
              <input
                className="form-group"
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="gradient-btn">LOG IN</button>

            <div className="google-login">
              <GoogleLogin
                clientId="299862850495-2gkvdsg2qhda3k1akosvnijj2rqfrvre.apps.googleusercontent.com"
                render={(renderProps) => (
                  <button
                    className="google-login-btn"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <img src="assets/img/Google.png" alt="google" />
                    <div className="google-login-btn-text">
                      LOG IN WITH GOOGLE
                    </div>
                  </button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </div>

            <div className="apple-login">
              <AppleLogin
                // clientId="299862850495-2gkvdsg2qhda3k1akosvnijj2rqfrvre.apps.googleusercontent.com"
                clientId="com.react.apple.login"
                render={(renderProps) => (
                  <button
                    className="apple-login-btn"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <img
                      style={{ height: "100%" }}
                      src="assets/img/Apple.png"
                      alt="google"
                    />
                    <div className="apple-login-btn-text">
                      LOG IN WITH APPLE
                    </div>
                  </button>
                )}
                // redirectURI="https://redirectUrl.com"
              />
            </div>

            <Link className="login-register-btn" to="/register">
              CREATE ACCOUNT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
