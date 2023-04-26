import React, { useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "../css/Section3.css";

export default function Section3() {
  // const bg = useRef(null);
  // const thumb = useRef(null);
  // const img = useRef(null);

  // function scroll() {
  //   const bgH = bg.current.clientHeight;
  //   const imgH = img.current.clientHeight;
  //   const scrollVal = bgH - imgH;
  //   thumb.current.style.top = scrollVal + "px";

  //   console.log(bgH, imgH, scrollVal);
  // }

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
              {/* <Col className="col-xl-4 col-lg-4">
                <div className="grid-item filter-1 filter-4">
                  <div className="Section3_project">
                    <div className="Section3_project-top">
                      <div className="Section3_top-text">
                        <div className="Section3_text-color">
                          <span className="Section3_project-name">영동군청 리뉴얼</span>
                          <span className="Section3_project-day">2022.12</span>
                        </div>
                        <h3 className="Section3_title-name">영동군청</h3>
                      </div>
                      <div className="wrap">
                        <div
                          ref={bg}
                          className="bg"
                          onMouseOver={() => {
                            scroll();
                          }}
                          onMouseLeave={() => {
                            thumb.current.style.top = 0;
                          }}
                        >
                          <a ref={thumb} href="#none" className="thumb">
                            <span ref={img}></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col> */}
              <Col className="col-xl-4 col-lg-4">
                <div className="grid-item filter-1 filter-4">
                  <div className="Section3_project">
                    <div className="Section3_project-top">
                      <img src="/images/project_1.png" alt="project" />
                      <div className="Section3_top-text">
                        <div className="Section3_text-color">
                          <span className="Section3_project-name">영동군청 리뉴얼</span>
                          <span className="Section3_project-day">2022.12</span>
                        </div>
                        <h3 className="Section3_title-name">영동군청</h3>
                      </div>
                    </div>
                    <div className="Section3_project-bottom">
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
              </Col>
              <Col className="col-xl-4 col-lg-4">
                <div className="grid-item filter-1 filter-4">
                  <div className="Section3_project">
                    <div className="Section3_project-top">
                      <img src="/images/project_1.png" alt="project" />
                      <div className="Section3_top-text">
                        <div className="Section3_text-color">
                          <span className="Section3_project-name">영동군청 리뉴얼</span>
                          <span className="Section3_project-day">2022.12</span>
                        </div>
                        <h3 className="Section3_title-name">영동군청</h3>
                      </div>
                    </div>
                    <div className="Section3_project-bottom">
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
              </Col>
              <Col className="col-xl-4 col-lg-4">
                <div className="grid-item filter-1 filter-4">
                  <div className="Section3_project">
                    <div className="Section3_project-top">
                      <img src="/images/project_1.png" alt="project" />
                      <div className="Section3_top-text">
                        <div className="Section3_text-color">
                          <span className="Section3_project-name">영동군청 리뉴얼</span>
                          <span className="Section3_project-day">2022.12</span>
                        </div>
                        <h3 className="Section3_title-name">영동군청</h3>
                      </div>
                    </div>
                    <div className="Section3_project-bottom">
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
              </Col>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
}
