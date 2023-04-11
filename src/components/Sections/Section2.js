import React from "react";
import "../css/Section2.css";

export default function Section2() {
  return (
    <div className="Section2">
      <div className="Section2_inner">
        <div className="Section2_comtainer">
          <div className="Section2_left">
            <div className="Section2_left-title">
              <h2>
                My
                <br />
                Skills
              </h2>
            </div>
            <div className="Section2_left-text">
              <p>스킬을 설명하는 공간입니다.<br/>시각적으로 매력적이고 기능적인 웹앱을 만들 수 있습니다.<br/>Figma를 이용하여 직관적이고 <br/>사용자 친화적인 인터페이스를 디자인하며, 구조를 설계합니다.</p>
            </div>
          </div>
          <div className="Section2_right">
            <div className="Section2_right-container">
              <div className="Section2_right-item">
                <img src="/images/dummyicon.png" alt="icon" />
                <div className="Section2_right-title">
                  <h5>HTML/CSS</h5>
                </div>
                <div className="Section2_right-content">
                  <p>We build and activate brands throung cultural insight &amp;amp; strategic vision.</p>
                </div>
                <div className="Section2_right-link">
                  <img src="/images/dummyicon.png" alt="linkicon" />
                </div>
              </div>
              <div className="Section2_right-item">
                <img src="/images/dummyicon.png" alt="icon" />
                <div className="Section2_right-title">
                  <h5>Javascript</h5>
                </div>
                <div className="Section2_right-content">
                  <p> We build and activate brands throung cultural insight &amp;amp; strategic vision.</p>
                </div>
                <div className="Section2_right-link">
                  <img src="/images/dummyicon.png" alt="linkicon" />
                </div>
              </div>
              <div className="Section2_right-item">
                <img src="/images/dummyicon.png" alt="icon" />
                <div className="Section2_right-title">
                  <h5>React</h5>
                </div>
                <div className="Section2_right-content">
                  <p> We build and activate brands throung cultural insight &amp;amp; strategic vision.</p>
                </div>
                <div className="Section2_right-link">
                  <img src="/images/dummyicon.png" alt="linkicon" />
                </div>
              </div>
              <div className="Section2_right-item">
                <img src="/images/dummyicon.png" alt="icon" />
                <div className="Section2_right-title">
                  <h5>Figma</h5>
                </div>
                <div className="Section2_right-content">
                  <p> We build and activate brands throung cultural insight &amp;amp; strategic vision.</p>
                </div>
                <div className="Section2_right-link">
                  <img src="/images/dummyicon.png" alt="linkicon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
