import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Section3_test.css";

export default function Section3() {
  return (
    <div className="Section3">
      <Container fluid="container-xxl" className="Section3_inner">
        <div className="Section3_container">
          <div className="Section3_top">
            <div className="Section3_top-title">
              <h2>Projects</h2>
            </div>
          </div>

          <Row class="gx-3.75 gy-7.5">
            <div className="Section3_container-flex">
              <Col className="col-xl-4 col-lg-4">
                <div class="grid-item filter-1 filter-4">
                  <div className="Section3_project">
                    <div className="Section3_project-top">
                      <img src="/images/dummy.png" alt="" />
                      <div className="Section3_top-text">
                        <div className="Section3_text-color">
                          <span class="Section3_project-name">영동군청 리뉴얼</span>
                          <span class="Section3_project-day">2022.12</span>
                        </div>
                        <h3 class="Section3_title-name">영동군청</h3>
                      </div>
                    </div>
                    <div className="Section3_project-bottom">
                      <div className="Section3_bottom-header">
                        <div className="Section3_header-style">
                          <span class="Section3_project-name">영동군청 리뉴얼</span>
                          <span class="Section3_project-day">2022.12</span>
                        </div>
                        <h3 className="Section3_bottom-review">
                          <a href="#none">Review product BWIB</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="col-xl-4 col-lg-4">
                <div class="grid-item filter-1 filter-4">
                  <div className="Section3_project">
                    <div className="Section3_project-top">
                      <img src="/images/dummy.png" alt="" />
                      <div className="Section3_top-text">
                        <div className="Section3_text-color">
                          <span class="Section3_project-name">영동군청 리뉴얼</span>
                          <span class="Section3_project-day">2022.12</span>
                        </div>
                        <h3 class="Section3_title-name">영동군청</h3>
                      </div>
                    </div>
                    <div className="Section3_project-bottom">
                      <div className="Section3_bottom-header">
                        <div className="Section3_header-style">
                          <span class="Section3_project-name">영동군청 리뉴얼</span>
                          <span class="Section3_project-day">2022.12</span>
                        </div>
                        <h3 className="Section3_bottom-review">
                          <a href="#none">Review product BWIB</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col className="col-xl-4 col-lg-4">
                <div class="grid-item filter-1 filter-4">
                  <div className="Section3_project">
                    <div className="Section3_project-top">
                      <img src="/images/dummy.png" alt="" />
                      <div className="Section3_top-text">
                        <div className="Section3_text-color">
                          <span class="Section3_project-name">영동군청 리뉴얼</span>
                          <span class="Section3_project-day">2022.12</span>
                        </div>
                        <h3 class="Section3_title-name">영동군청</h3>
                      </div>
                    </div>
                    <div className="Section3_project-bottom">
                      <div className="Section3_bottom-header">
                        <div className="Section3_header-style">
                          <span class="Section3_project-name">영동군청 리뉴얼</span>
                          <span class="Section3_project-day">2022.12</span>
                        </div>
                        <h3 className="Section3_bottom-review">
                          <a href="#none">Review product BWIB</a>
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
