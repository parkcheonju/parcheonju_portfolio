import React from "react";
import { Container } from "react-bootstrap";
import "../css/Header.css";
// import {Lottie} from "../Lottie/lottie";

export default function Header() {
  return (
    <div className="Header">
      <Container fluid="xxl" className="Header_inner">
        {/* <div className="Header_logo">
          <Lottie />
        </div>
        <div className="Header_nav">
          <div className="Header_nav-container">
            <div className="Header_nav-info" id="color-white">
              <a href="#none">HOME</a>
            </div>
            <div className="Header_nav-info"><a href="#none">PORTFOLIO</a></div>
            <div className="Header_nav-info"><a href="#none">BLOG</a></div>
            <div className="Header_nav-info"><a href="#none">PAGES</a></div>
          </div>
        </div>
        <div className="Header_menu">
          <div>search</div>
          <div>menu</div>
        </div> */}
      </Container>
    </div>
  );
}
