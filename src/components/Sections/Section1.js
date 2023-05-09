import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Section1.css";

export default function Section1() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="Section1">
      <Container fluid="xxl" className="Section1_inner">
        <Row className="Section1_container">
          <Col xl="9" className="Section1_left">
            <div className="Section1_left-title" data-aos="fade-up" data-aos-delay="300">
              <h1>
                맛있는 코드는
                <br />
                성능도 맛있다!
                <br />
              </h1>
            </div>
            <Col xl="8" className="Section1_left-text1">
              <div data-aos="fade-up" data-aos-delay="1000">
                <p>
                  사이드 이펙트를 잡아
                  <br />
                  성능의 감칠맛을 살렸습니다.
                </p>
              </div>
            </Col>
            <div className="Section1_left-site" data-aos="fade-up" data-aos-delay="300">
              <div className="Section1_left-btn">
                <a href="https://github.com/parkcheonju" target="_blank" rel="noopener noreferrer">
                  깃허브
                </a>
              </div>
              <div className="Section1_left-btn2">
                <a href="#none">이력서</a>
              </div>
            </div>
          </Col>
          <div className="Section1_right"></div>
        </Row>
      </Container>
    </div>
  );
}
