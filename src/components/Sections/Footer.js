import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <Container fluid="xxl" className="Footer_inner">
        <Row className="Footer_container">
          <Col xl="6" className="Footer_contact-1">
            <div className="Footer_contact-title">텍스트 공간입니다</div>
            <div className="Footer_contact-text">박천주</div>
            <div className="Footer_contact-adress">Adress : 49, Hanbit-ro, Dongdaemun-gu, Seoul</div>
            <div className="Footer_contact-email">Email : cjswne@gmail.com</div>
          </Col>
          <Col md="6" className="Footer_contact-2">
            <h4>Link</h4>
            <ul>
              <li><a href="#none">Project1</a></li>
              <li><a href="#none">Project2</a></li>
              <li><a href="#none">Project3</a></li>
            </ul>
          </Col>
          <Col md="6" className="Footer_contact-3">
            <h4>Portfolio</h4>
            <ul>
              <li><a href="#none">Section1</a></li>
              <li><a href="#none">Section2</a></li>
              <li><a href="#none">Section3</a></li>
              <li><a href="#none">Section4</a></li>
              <li><a href="#none">Section5</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
