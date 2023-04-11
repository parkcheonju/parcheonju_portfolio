import React from "react";
import "../css/Section1.css";

export default function Section1() {
  return (
    <div className="Section1">
      <div className="Section1_inner">
        <div className="Section1_container">
          <div className="Section1_left">
            <div className="Section1_left-title">
              <h1>맛있는 코드는<br/>성능도 맛있다!<br/></h1>
            </div>
            <div className="Section1_left-text1">
              <p>
                상단부 텍스트를 입력
                <br />
                상단부 텍스트를 입력
              </p>
            </div>
            <div className="Section1_left-site">
              <div className="Section1_left-btn">
                <a href="#none">깃허브</a>
              </div>
            </div>
          </div>
          <div className="Section1_right"></div>
        </div>
      </div>
    </div>
  );
}
