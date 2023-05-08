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
            <div className="Section3_container-flex mt-3">
              <Col className="col-xl-4 col-lg-4 Section3_container-flex2">
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
                        height: "300px",
                      }}
                    >
                      <img src="/images/project_1-1.png" alt="project" />
                      <div
                        className="Section3_project-bottom"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "410px",
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
                          <h3 className="Section3_bottom-review">Review project</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Section3_bottom-dsc">
                  <span>Project 01</span>
                  <h2>영동군청 리뉴얼</h2>
                  <ul className="Section3_bottom-ul2">
                    <li className="Section3_bottom-li2">1. 구현기술 : Html, Css, Js, JQuery</li>
                    <li>2. 개인 프로젝트 (기여도 100%)</li>
                    <li>3. JQury를 이용하여 게시판 탭 이동 기능</li>
                    <li>4. bx slider 활용하여 캐로셀 기능</li>
                    <li>5. 구글 애널리틱스적용하여 방문자의 데이터 웹 로그 분석</li>
                    <li>6. 공공데이터포털api를 활용하여 기상정보 및 대기환경 정보 파싱</li>
                  </ul>
                  <div className="Section3_bottom-btn2">
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
              </Col>
              <Col className="col-xl-4 col-lg-4 Section3_container-flex2">
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
                        height: "300px",
                      }}
                    >
                      <img src="/images/project_2-1.png" alt="project" />
                      <div
                        className="Section3_project-bottom"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "410px",
                          height: "100%",
                          left: 0,
                          position: "absolute",
                          top: isHovered2 ? 0 : 600,
                          // top: 0,
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
                          <h3 className="Section3_bottom-review">Review project</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Section3_bottom-dsc">
                  <span>Project 02</span>
                  <h2>React Team Project - PERPET</h2>
                  <ul className="Section3_bottom-ul2">
                    <li className="Section3_bottom-li2">1. 구현기술 : Html, Css, React, Node.js, Figma</li>
                    <li>2. 4인 팀 프로젝트 기획, 백엔드 담당 (기여도 35%)</li>
                    <li>3. Kakao Login 기능 구현</li>
                    <li>4. NodeJs + Express 사용, Server Multer 파일 업로드 로직 구축</li>
                    <li>5. Axios RESTful API 요청을 보내고 응답 값 파싱 및 처리</li>
                    <li>6. PWA(Progressive Web Application)앱 배포</li>
                  </ul>
                  <div className="Section3_bottom-btn2">
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
              </Col>
              <Col className="col-xl-4 col-lg-4 Section3_container-flex2">
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
                        height: "300px",
                      }}
                    >
                      <img src="/images/project_3-1.png" alt="project" />
                      <div
                        className="Section3_project-bottom"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "410px",
                          height: "100%",
                          left: 0,
                          position: "absolute",
                          top: isHovered3 ? 0 : 600,
                          // top: 0,
                          backgroundColor: "#fa4529a5",
                          transform: "translateY(0)",
                          transition: "top 0.5s ease-in-out",
                        }}
                      >
                        <div className="Section3_bottom-header">
                          <div className="Section3_header-style">
                            <span className="Section3_project-name">Visual Canvas</span>
                            <span className="Section3_project-day">2023.05</span>
                          </div>
                          <h3 className="Section3_bottom-review">Review project</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Section3_bottom-dsc">
                  <span>Project 03</span>
                  <h2>Vue.js Toy Project - Visual Canvas</h2>
                  <ul className="Section3_bottom-ul2">
                    <li className="Section3_bottom-li2">1. 구현기술 : Html, Css, Vue.js, Node.js</li>
                    <li>2. 1인 토이 프로젝트 (기여도 100%)</li>
                    <li>3. Vue.js 제공 문법 사용 (v-if, v-for 등)</li>
                    <li>4. NodeJs + Express 사용, Server Multer 파일 업로드 로직 구축</li>
                    <li>5. Axios RESTful API 요청을 보내고 응답 값 파싱 및 처리</li>
                    <li>6. Mitt 라이브러리 사용, 다른 컴포넌트로 데이터 전송 로직 작성</li>
                  </ul>
                  <div className="Section3_bottom-btn2">
                    <div className="Section3_left-btn">
                      <a href="https://github.com/parkcheonju/vue_sns_project" target="_blank" rel="noopener noreferrer">
                        깃허브
                      </a>
                    </div>
                    <div className="Section3_left-btn2">
                      <a href="https://vue-sns-project-psi35kw8e-parkcheonju.vercel.app/">페이지</a>
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
