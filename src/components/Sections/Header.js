import React from "react";
import { Container } from "react-bootstrap";
import "../css/Header.css";

export default function Header() {
  return (
    <div className="Header">
      <Container fluid="xxl" className="Header_inner">
        <div className="Header_logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="Header_nav">
          <div className="Header_nav-container">
            <div className="Header_nav-info" id="color-white">
              HOME
            </div>
            <div className="Header_nav-info">PORTFOLIO</div>
            <div className="Header_nav-info">BLOG</div>
            <div className="Header_nav-info">PAGES</div>
          </div>
        </div>
        <div className="Header_menu">
          <div>search</div>
          <div>menu</div>
        </div>
      </Container>
    </div>
  );
}
