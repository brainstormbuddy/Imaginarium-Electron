import * as React from "react";
import "../assets/css/splash.css";

function Splash() {
  return (
    <div className="splash">
      <img
        className="background"
        src="assets/img/Unsplash.png"
        alt="Upsplash"
      />
      <div className="content">
        <div>
          <img
            className="content-union"
            src="assets/img/Union.png"
            alt="Union"
          />
          <img
            className="content-imaginarium"
            src="assets/img/imaginarium.png"
            alt="imaginarium"
          />
        </div>

        <div className="content-text">Loading components...</div>
      </div>

      <div className="background-text">ART BY @FANTASYLADY</div>
    </div>
  );
}

export default Splash;
