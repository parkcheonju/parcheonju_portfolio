import React, { useEffect,useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "../css/Section3.css";

export default function Section3() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const projects = [
    {
      id: 1,
      title: "영동군청 리뉴얼",
      date: "2022.12",
      img: "/images/project_1.png",
      description: "제작한 프로젝트를 한 눈에 보실 수 있습니다.",
      color: "#fa4529a5",
    },
    {
      id: 2,
      title: "프로젝트 제목2",
      date: "2022.12",
      img: "/images/project_2.png",
      description: "제작한 프로젝트를 한 눈에 보실 수 있습니다.",
      color: "#a5fafa29",
    },
    {
      id: 3,
      title: "프로젝트 제목3",
      date: "2022.12",
      img: "/images/project_3.png",
      description: "제작한 프로젝트를 한 눈에 보실 수 있습니다.",
      color: "#29fa4580",
    },
  ];


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
                    <div className="Section3_project-top"
                      onMouseEnter={handleHover}
                      onMouseLeave={handleLeave}
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        width: "450px",
                        height: "600px",
                        zIndex: "4",
                      }}>
                      <img src="/images/project_1.png" alt="project" />
                      <div className="Section3_project-bottom"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "450px",
                          height: "100%",
                          left: 0,
                          position: "absolute",
                          top: isHovered ? 0 : 600,
                          zIndex: "3",
                          backgroundColor: "#fa4529a5",
                          transform: "translateY(0)",
                          transition: "top 0.5s ease-in-out",
                        }}>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="col-xl-4 col-lg-4">
                <div className="grid-item filter-1 filter-4">
                  <div className="Section3_project">
                    <div className="Section3_project-top"
                      onMouseEnter={handleHover}
                      onMouseLeave={handleLeave}
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        width: "450px",
                        height: "600px",
                        zIndex: "4",
                      }}>
                      <img src="/images/project_1.png" alt="project" />
                      <div className="Section3_project-bottom"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "450px",
                          height: "100%",
                          left: 0,
                          position: "absolute",
                          top: isHovered ? 0 : 600,
                          zIndex: "3",
                          backgroundColor: "#fa4529a5",
                          transform: "translateY(0)",
                          transition: "top 0.5s ease-in-out",
                        }}>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="col-xl-4 col-lg-4">
                <div className="grid-item filter-1 filter-4">
                  <div className="Section3_project">
                    <div className="Section3_project-top"
                      onMouseEnter={handleHover}
                      onMouseLeave={handleLeave}
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        width: "450px",
                        height: "600px",
                        zIndex: "4",
                      }}>
                      <img src="/images/project_1.png" alt="project" />
                      <div className="Section3_project-bottom"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          width: "450px",
                          height: "100%",
                          left: 0,
                          position: "absolute",
                          top: isHovered ? 0 : 600,
                          zIndex: "3",
                          backgroundColor: "#fa4529a5",
                          transform: "translateY(0)",
                          transition: "top 0.5s ease-in-out",
                        }}>
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
