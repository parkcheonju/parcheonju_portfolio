import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <Container fluid="xxl" className="Footer_inner">
        <Row className="Footer_container">
          <Col xl="6" className="Footer_contact-1">
            <div className="Footer_contact-title">Contact Me</div>
            <div className="Footer_contact-text">박천주</div>
            <div className="Footer_contact-adress">Adress : 49, Hanbit-ro, Dongdaemun-gu, Seoul</div>
            <div className="Footer_contact-email">Email : cjswne@gmail.com</div>
            <div className="Footer_contact-call">Call : 010 - 6880 - 2880</div>
          </Col>
          <Col md="6" className="Footer_contact-2">
            <h4>Link</h4>
            <ul>
              <li><a href="#none">Project 1</a></li>
              <li><a href="#none">Project 2</a></li>
              <li><a href="#none">Project 3</a></li>
              <li><a href="#none">Project 4</a></li>
              <li><a href="#none">Project 5</a></li>
            </ul>
          </Col>
          <Col md="6" className="Footer_contact-3">
            <h4>Portfolio</h4>
            <ul>
              <li><a href="#none">Section 1</a></li>
              <li><a href="#none">Section 2</a></li>
              <li><a href="#none">Section 3</a></li>
              <li><a href="#none">Section 4</a></li>
              <li><a href="#none">Section 5</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
