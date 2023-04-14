import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Section1.css";

export default function Section1() {
  return (
    <div className="Section1">
      <Container fluid="xxl" className="Section1_inner">
        <Row className="Section1_container">
          <Col xl="9" className="Section1_left">
            <div className="Section1_left-title">
              <h1>
                맛있는 코드는
                <br />
                성능도 맛있다!
                <br />
              </h1>
            </div>
            <Col xl="8" className="Section1_left-text1">
              <p>
                코드를 요리하여
                <br />
                성능을 맛있게!
              </p>
            </Col>
            <div className="Section1_left-site">
              <div className="Section1_left-btn">
                <a href="#none">깃허브</a>
              </div>
            </div>
          </Col>
          <div className="Section1_right">
          </div>
        </Row>
      </Container>
    </div>
  );
}
