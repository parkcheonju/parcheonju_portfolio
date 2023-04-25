import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "../css/Section4.css";

export default function Section4() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="Section4">
      <Container fluid="container-xxl" className="Section4_inner Section4_pd">
        <div className="Section4_container">
          <div className="Section4_top" data-aos="fade-up" data-aos-delay="500">
            <h2>Approach</h2>
          </div>
          <Row className="Section4_bottom" data-aos="fade-up" data-aos-delay="500">
            <Col xl="4" className="Section4_bottom-approach">
              <div className="Section4_approach-title">
                <span>첫째</span>
                <h3>도전</h3>
              </div>
              <div className="Section4_approach-description">
                <p>
                  새로운 일에 두려움 없이 도전합니다.
                  <br />
                  예상치 못한 문제에 직면해도 긍정적인 태도로 대처합니다.
                </p>
              </div>
            </Col>
            <Col xl="4" className="Section4_bottom-approach">
              <div className="Section4_approach-title">
                <span>둘째</span>
                <h3>열정</h3>
              </div>
              <div className="Section4_approach-description">
                <p>
                  처음 해보는 일에 겁먹지 않고 개발을 즐깁니다
                  <br />
                  배우는 것을 즐기며 능력을 최대한 발휘하기 위해 노력합니다.
                </p>
              </div>
            </Col>
            <Col xl="4" className="Section4_bottom-approach">
              <div className="Section4_approach-title">
                <span>셋째</span>
                <h3>성실함</h3>
              </div>
              <div className="Section4_approach-description">
                <p>
                  맡은 일에 대해 책임감을 가지고 업무를 수행합니다.
                  <br />
                  세심하게 업무의 성공을 위해 최선을 다하고자 합니다.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
