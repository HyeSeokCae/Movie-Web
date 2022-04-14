import React from "react";
import {Link} from "react-router-dom";

import "./choice.css";
function Choice() {
  return (
    // Main Page
    <div className="wrap">
      {/* Title Text */}
      <div className="titleBox">
        <h1>MCU Infinity SAGA Time Line</h1>
        <p>
          Click Dots <br /> show Infinity SAGA <br /> Movie and TVShow shot Info
        </p>
      </div>
      {/* Phase Dots */}
      <Link to="/phase1">
        <div className="dots dot1">
          <p className="phaseText">Phase 1</p>
        </div>
      </Link>
      <Link to="/phase2">
        <div className="dots dot2">
          <p className="phaseText">Phase 2</p>
        </div>
      </Link>
      <Link to="/phase3">
        <div className="dots dot3">
          <p className="phaseText">Phase 3</p>
        </div>
      </Link>
      <Link to="phase4">
        <div className="dots dot4">
          <p className="phaseText">Phase 4</p>
        </div>
      </Link>
      {/* Time Line Bar */}
      <div className="line"></div>
    </div>
  );
}

export default Choice;
