import { Container, Row, Col } from "react-bootstrap";
import { Html, Js, LottieReact, Lottievue, Figma, Lottiegithub, Lottienodejs } from "../Lottie/lottie";

import "../css/Section6.css";

export default function Section6() {
  return (
    <div className="Section6">
      <Container fluid="container-xxl" className="Section6_inner Section6_pd">
        <div className="Section6_div">
          <div className="Section6_container">
            <div className="Section6_top" data-aos="fade-up" data-aos-delay="500">
              <h2>About Me</h2>
            </div>
            <Row className="Section6_bottom" data-aos="fade-up" data-aos-delay="500">
              <Col className="Section6_bottom-approach">
                <div className="Section6_approach-title">
                  <span>첫번째 도전</span>
                  <h3>요리전문가</h3>
                </div>
                <div className="Section6_approach-description">
                  <ul>
                    <li>2013 - 국제요리대회 4인 라이브 부분 금상</li>
                    <li>2014 - 국제요리대회 1인 전시 부분 은상</li>
                    <li>2015 - 현역 입대 조리병 근무</li>
                    <li>2016 - 한식조리자격증 취득</li>
                    <li>2017 - 양식조리자격증 취득</li>
                    <li>2018 - 제주신화월드 인턴쉽</li>
                    <li>2019 - 삼성웰스토리 입사</li>
                    <li>2022 - 삼성웰스토리 사원 평가 EX등급</li>
                  </ul>
                </div>
              </Col>
              <div className="Section6_pd-top">
                <Col className="Section6_bottom-approach">
                  <div className="Section6_approach-title">
                    <span>두번째 도전</span>
                    <h3>프론트엔드 개발자</h3>
                  </div>
                  <div className="Section6_approach-description">
                    <ul>
                      <li>2022- 프로젝트기반 프론트엔드(React,Vue) 웹&앱 SW개발자 과정 시작</li>
                      <li>2023- 프로젝트기반 프론트엔드(React,Vue) 웹&앱 SW개발자 과정 수료</li>
                    </ul>
                  </div>
                </Col>
              </div>
            </Row>
          </div>
        </div>
        <div className="Section6_div">
          <div className="Section6_container">
            <div className="Section6_top" data-aos="fade-up" data-aos-delay="500">
              <h2>Skills</h2>
            </div>
            <Row className="Section6_bottom" data-aos="fade-up" data-aos-delay="500">
              <Col className="Section6_bottom-approach">
                <div className="Section6_approach-title">
                  <span>Developer</span>
                  <h3>프론트엔드</h3>
                </div>
                <div className="Section6_approach-description">
                 <ul className='Section6_approach-flex Section6_pd2'>
                  <li><Html /></li>
                  <li><Js /></li>
                  <li><LottieReact /></li>
                  <li><Lottievue /></li>
                 </ul>
                 <ul className='Section6_approach-flex2 Section6_pd2'>
                 <li><Lottienodejs/></li>
                  <li className='Section6_pd3'><Lottiegithub /></li>
                  <li className='Section6_pd3'><Figma /></li>
                 </ul>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}
