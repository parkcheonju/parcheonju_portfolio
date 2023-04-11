import React from "react";
import "../css/Section5.css";

export default function Section5() {
  return (
    <div className="Section5">
      <div className="Section5_inner">
        <div className="Section5_container">
          <div className="Section5_left">
            <div className="Section5_left-title">
              <h2>
                My
                <br />
                history
              </h2>
            </div>
            <div className="Section5_left-text">
              <p>텍스트 공간입니다</p>
            </div>
          </div>
          <div className="Section5_right">
            <div className="Section5_right-history Section5_pd-bottom30 Section5_pd-top30">
              <div className="Section5_history-container">
                <div className="Section5_history-year">Year</div>
                <div className="Section5_history-marker">
                  <img src="/images/dummyicon.png" alt="linkicon" />
                </div>
                <div className="Section5_history-description">텍스트 공간입니다</div>
                <div className="Section5_history-year">Year</div>
              </div>
            </div>
            <div className="Section5_right-history Section5_history-line">
              <div className="Section5_history-container">
                <div className="Section5_history-year">Year</div>
                <div className="Section5_history-marker">
                  <img src="/images/dummyicon.png" alt="linkicon" />
                </div>
                <div className="Section5_history-description">텍스트 공간입니다</div>
                <div className="Section5_history-year">Year</div>
              </div>
            </div>
            <div className="Section5_right-history Section5_pd-top30">
              <div className="Section5_history-container">
                <div className="Section5_history-year">Year</div>
                <div className="Section5_history-marker">
                  <img src="/images/dummyicon.png" alt="linkicon" />
                </div>
                <div className="Section5_history-description">텍스트 공간입니다</div>
                <div className="Section5_history-year">Year</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
