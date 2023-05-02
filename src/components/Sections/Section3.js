import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "../css/Section3.css";

export default function Section3() {
  // eslint-disable-next-line no-unused-vars
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

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
            <div className="Section3_container-flex mt-3">
              <Col className="col-xl-6 col-lg-6">
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
              <Col className="col-xl-6 col-lg-6">
                <div>
                  <h4>영동군청 리뉴얼</h4>
                  <ul>
                    <li>제작기간 3주</li>
                    <li>기여도 100%</li>
                    <li>배포 github</li>
                  </ul>
                </div>
                <div className="mg_top60">
                  <h4>주요 기능</h4>
                  <ul>
                    <li>- 사용기술 : Html, Css, Js, JQuery</li>
                    <li>- jQury를 이용하여 게시판 탭 이동 기능</li>
                    <li>- bx slider 활용하여 캐로셀 기능</li>
                    <li>- 구글 애널리틱스적용하여 방문자의 데이터 웹 로그 분석</li>
                    <li>- 공공데이터포털api를 활용하여 기상정보 및 대기환경 정보 파싱</li>
                  </ul>
                </div>
              </Col>
            </div>
          </Row>
          <Row className="gx-3.75 gy-7.5" data-aos="fade-up" data-aos-duration="3000">
            <div className="Section3_container-flex">
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
              <Col className="col-xl-6 col-lg-6">
                <div>
                  <h4>PROJECT - PERPET</h4>
                  <ul>
                    <li>제작기간 : 3주</li>
                    <li>기여도 : 35%</li>
                    <li>배포 : github, vercel, cloudtype</li>
                  </ul>
                </div>
                <div className="mg_top60">
                  <h4>주요 기능</h4>
                  <ul>
                    <li>- 사용기술 : Html, Css, React, Node.js, Figma</li>
                    <li>- PERPET PROJECT 기획</li>
                    <li>- kakao login 기능 구현</li>
                    <li>- NodeJs + Express 사용, Web-server 구축 </li>
                    <li>- NodeJs + Multer 파일 업로드 처리</li>
                    <li>- axios RESTful API 요청을 보내고 응답 값 파싱 및 처리</li>
                  </ul>
                </div>
              </Col>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
}
