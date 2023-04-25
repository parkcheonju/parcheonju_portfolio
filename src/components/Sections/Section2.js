import React, { useEffect } from "react";
import { Html, Js, LottieReact, Figma } from "../Lottie/lottie";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "../css/Section2.css";

export default function Section2() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="Section2">
      <Container fluid="xxl" className="Section2_inner">
        <Row className="Section2_comtainer">
          <Col lg="3" className="Section2_left" data-aos="fade-up" data-aos-delay="500">
            <div className="Section2_left-title">
              <h2>Skills</h2>
            </div>
            <div className="Section2_left-text">
              <p>
                기능적이면서도 매력적인 디자인의
                <br />
                웹과 앱을 개발할 수 있습니다.
              </p>
            </div>
          </Col>
          <Col lg="8" className="Section2_right offset-lg-1">
            <div className="Section2_right-container" >
              <div className="Section2_right-item" data-aos="fade-up" data-aos-delay="500">
                <Html />
                <div className="Section2_right-title">
                  <h5>HTML/CSS</h5>
                </div>
                <div className="Section2_right-content">
                  <p>
                    사용자 친화적이고 시각적으로 매력적인 <br />웹 페이지를 만드는 것을 지향합니다.
                  </p>
                </div>
              </div>
              <div className="Section2_right-item" data-aos="fade-up" data-aos-delay="500">
                <Js />
                <div className="Section2_right-title">
                  <h5>Javascript</h5>
                </div>
                <div className="Section2_right-content">
                  <p>
                    사용자의 경험을 고려하여 <br />
                    다양한 상호 작용을 구현합니다
                  </p>
                </div>
              </div>
              <div className="Section2_right-item" data-aos="fade-up" data-aos-delay="500">
                <LottieReact />
                <div className="Section2_right-title">
                  <h5>React</h5>
                </div>
                <div className="Section2_right-content">
                  <p>
                    성능의 최적화를 고려하며,
                    <br />
                    웹과 앱 개발을 지향합니다.
                  </p>
                </div>
              </div>
              <div className="Section2_right-item" data-aos="fade-up" data-aos-delay="500">
                <Figma />
                <div className="Section2_right-title">
                  <h5>Figma</h5>
                </div>
                <div className="Section2_right-content">
                  <p>
                    아이디어를 시각화 하여 <br />
                    협업을 효율있게 진행합니다.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
