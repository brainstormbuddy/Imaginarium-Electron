import React, { useState } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Header from "../layout/initial layout/Header/header";
import Navbar from "../layout/initial layout/Navbar/navbar";
import "../assets/scss/onboard.scss";

function Onboard() {
  const [indexOfSlide, setIndexOfSlide] = useState(0);

  const carouselProp = {
    showStatus: false,
    useKeyboardArrows: true,
    infiniteLoop: true,
    stopOnHover: true,
    emulateTouch: true,
    showArrows: true,
    showThumbs: false,
    onChange: (index) => {
      setIndexOfSlide(index);
    },
    renderArrowPrev: (clickHandler, hasPrev, label) => {},
    renderArrowNext: (clickHandler, hasNext, label) => {
      if (indexOfSlide === 2)
        return (
          <div>
            <Link type="button" className="arrow-signup" to="/register">
              SIGN UP
            </Link>

            <Link className="arrow-login" to="/login">
              LOG IN
            </Link>
          </div>
        );
      else
        return (
          <button className="arrow-right" onClick={() => clickHandler()}>
            <div className="icon-keyboard_next">Next</div>
          </button>
        );
    },
  };

  return (
    <div className="onboard">
      <Header />
      <Navbar />
      <Carousel {...carouselProp}>
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
            <div className="union">
              <img
                className="content-screen-union"
                src="assets/img/Union1.png"
                alt="Union1"
              />
              <div className="content-imaginarium-text">imaginarium</div>
            </div>

            <div className="content-screen-text">
              There are a lot of untold stories
            </div>
          </div>
        </div>
        <div>
          <div className="content">
            <img
              className="content-screen"
              src="assets/img/screen2.png"
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
            <div className="union">
              <img
                className="content-screen-union"
                src="assets/img/Union1.png"
                alt="Union1"
              />
              <div className="content-imaginarium-text">imaginarium</div>
            </div>
            <div className="content-screen-text">
              There are a lot of untold stories
            </div>
          </div>
        </div>
        <div>
          <div className="content">
            <img
              className="content-screen"
              src="assets/img/screen3.png"
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
            <div className="union">
              <img
                className="content-screen-union"
                src="assets/img/Union1.png"
                alt="Union1"
              />
              <div className="content-imaginarium-text">imaginarium</div>
            </div>
            <div className="content-screen-text">
              There are a lot of untold stories
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Onboard;
