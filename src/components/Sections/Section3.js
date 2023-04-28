import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "../css/Section3.css";

export default function Section3() {
  // eslint-disable-next-line no-unused-vars
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const handleHover2 = () => {
    setIsHovered2(true);
  };

  const handleLeave2 = () => {
    setIsHovered2(false);
  };

  const handleHover3 = () => {
    setIsHovered3(true);
  };

  const handleLeave3 = () => {
    setIsHovered3(false);
  };

  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="Section3">
      <Container fluid="container-xxl" className="Section3_inner">
        <div className="Section3_container" data-aos="fade-up" data-aos-delay="500">
          <div className="Section3_top">
            <div className="Section3_top-title">
              <h2>Projects</h2>
            </div>
            <div className="Section3_left-text">
              <p>제작한 프로젝트를 한 눈에 보실 수 있습니다.</p>
            </div>
          </div>
          <Row className="gx-3.75 gy-7.5" data-aos="fade-up" data-aos-duration="3000">
            <div className="Section3_container-flex">
              <Col className="col-xl-4 col-lg-4">
                <div className="grid-item filter-1 filter-4">
                  <div className="Section3_project">
                    <div
                      className="Section3_project-top"
                      onMouseEnter={handleHover}
                      onMouseLeave={handleLeave}
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        width: "450px",
                        height: "600px",
                        zIndex: "4",
                      }}
                    >
                      <img src="/images/project_1.png" alt="project" />
                      <div
                        className="Section3_project-bottom"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "450px",
                          height: "100%",
                          left: 0,
                          position: "absolute",
                          top: isHovered ? 0 : 600,
                          // top: 0,
                          zIndex: "3",
                          backgroundColor: "#fa4529a5",
                          transform: "translateY(0)",
                          transition: "top 0.5s ease-in-out",
                        }}
                      >
                        <div className="Section3_bottom-header">
                          <div className="Section3_header-style">
                            <span className="Section3_project-name">영동군청 리뉴얼</span>
                            <span className="Section3_project-day">2022.12</span>
                          </div>
                          <h3 className="Section3_bottom-review">
                            <a href="https://github.com/parkcheonju/project" target="_blank" rel="noopener noreferrer">
                              Review project
                            </a>
                          </h3>
                          <ul className="Section3_bottom-ul">
                            <li>구현기술 : Html, Css, JQuery</li>
                            <li>배포매체 : PC </li>
                            <li>작업기간 : 3주</li>
                            <li>본인기여도 : 100% </li>
                          </ul>
                          <div className="Section3_bottom-btn">
                            <div className="Section3_left-btn">
                              <a href="https://github.com/parkcheonju/project" target="_blank" rel="noopener noreferrer">
                                깃허브
                              </a>
                            </div>
                            <div className="Section3_left-btn2">
                              <a href="https://parkcheonju.github.io/project/">페이지</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="col-xl-4 col-lg-4">
                <div className="grid-item filter-1 filter-4">
                  <div className="Section3_project">
                    <div
                      className="Section3_project-top"
                      onMouseEnter={handleHover2}
                      onMouseLeave={handleLeave2}
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        width: "450px",
                        height: "600px",
                        zIndex: "4",
                      }}
                    >
                      <img src="/images/project_2.png" alt="project" />
                      <div
                        className="Section3_project-bottom"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "450px",
                          height: "100%",
                          left: 0,
                          position: "absolute",
                          top: isHovered2 ? 0 : 600,
                          // top: 0,
                          zIndex: "3",
                          backgroundColor: "#fa4529a5",
                          transform: "translateY(0)",
                          transition: "top 0.5s ease-in-out",
                        }}
                      >
                        <div className="Section3_bottom-header">
                          <div className="Section3_header-style">
                            <span className="Section3_project-name">PERPET</span>
                            <span className="Section3_project-day">2023.04</span>
                          </div>
                          <h3 className="Section3_bottom-review">
                            <a href="https://react-perpet-front.vercel.app/" target="_blank" rel="noopener noreferrer">
                              Review project
                            </a>
                          </h3>
                          <ul className="Section3_bottom-ul">
                            <li>구현기술 : Html, Css, React, Node.js, Figma</li>
                            <li>배포매체 : PC </li>
                            <li>작업기간 : 3주</li>
                            <li>본인기여도 : 35% </li>
                          </ul>
                          <div className="Section3_bottom-btn">
                            <div className="Section3_left-btn">
                              <a href="https://github.com/parkcheonju/react_perpet-front" target="_blank" rel="noopener noreferrer">
                                깃허브
                              </a>
                            </div>
                            <div className="Section3_left-btn2">
                              <a href="https://react-perpet-front.vercel.app/">페이지</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="col-xl-4 col-lg-4">
                <div className="grid-item filter-1 filter-4">
                  <div className="Section3_project">
                    <div
                      className="Section3_project-top"
                      onMouseEnter={handleHover3}
                      onMouseLeave={handleLeave3}
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        width: "450px",
                        height: "600px",
                        zIndex: "4",
                      }}
                    >
                      <img src="/images/project_1.png" alt="project" />
                      <div
                        className="Section3_project-bottom"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "450px",
                          height: "100%",
                          left: 0,
                          position: "absolute",
                          top: isHovered3 ? 0 : 600,
                          // top: 0,
                          zIndex: "3",
                          backgroundColor: "#fa4529a5",
                          transform: "translateY(0)",
                          transition: "top 0.5s ease-in-out",
                        }}
                      >
                        <div className="Section3_bottom-header">
                          <div className="Section3_header-style">
                            <span className="Section3_project-name">영동군청 리뉴얼</span>
                            <span className="Section3_project-day">2022.12</span>
                          </div>
                          <h3 className="Section3_bottom-review">
                            <a href="https://parkcheonju.github.io/project/" target="_blank" rel="noopener noreferrer">
                              Review project
                            </a>
                          </h3>
                          <ul className="Section3_bottom-ul">
                            <li>구현기술 : Html, Css, JQuery</li>
                            <li>배포매체 : PC </li>
                            <li>작업기간 : 3주</li>
                            <li>본인기여도 : 100% </li>
                          </ul>
                          <div className="Section3_bottom-btn">
                            <div className="Section3_left-btn">
                              <a href="https://github.com/parkcheonju" target="_blank" rel="noopener noreferrer">
                                깃허브
                              </a>
                            </div>
                            <div className="Section3_left-btn2">
                              <a href="#none">페이지</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
}
