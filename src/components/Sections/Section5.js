import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "../css/Section5.css";

export default function Section5() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="Section5">
      <Container fluid="container-xxl" className="Section5_inner">
        <Row className="Section5_container">
          <Col lg="4" className="Section5_left" data-aos="fade-up" data-aos-delay="500">
            <div className="Section5_left-title">
              <h2>History</h2>
            </div>
            <div className="Section5_left-text">
              <p>경력사항을 한 눈에 보실 수 있습니다.</p>
            </div>
          </Col>
          <Col lg="8" className="Section5_right" >
            <div className="Section5_right-history Section5_pd-bottom30 Section5_pd-top30">
              <div className="Section5_history-container" data-aos="fade-up" data-aos-delay="500">
                <div className="Section5_history-year">2014.03 ~</div>
                <div className="Section5_history-marker">
                  <img src="/images/university.png" alt="linkicon" />
                </div>
                <div className="Section5_history-description">청강문화산업대학 조리학과 졸업</div>
                <div className="Section5_history-end">2019.03</div>
              </div>
            </div>
            <div className="Section5_right-history Section5_history-line">
              <div className="Section5_history-container" data-aos="fade-up" data-aos-delay="500">
                <div className="Section5_history-year">2019.10 ~</div>
                <div className="Section5_history-marker">
                  <img src="/images/samsung.png" alt="linkicon" />
                </div>
                <div className="Section5_history-description">삼성웰스토리 외식부 조리사 근무</div>
                <div className="Section5_history-end">2022.10</div>
              </div>
            </div>
            <div className="Section5_right-history Section5_pd-top30">
              <div className="Section5_history-container" data-aos="fade-up" data-aos-delay="500">
                <div className="Section5_history-year">2022.11 ~</div>
                <div className="Section5_history-marker">
                  <img src="/images/green.png" alt="linkicon" />
                </div>
                <div className="Section5_history-description">
                  프로젝트기반 프론트엔드(React,Vue)
                  <br />
                  웹&앱 SW개발자 양성과정 수료
                </div>
                <div className="Section5_history-end">2023.05</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
