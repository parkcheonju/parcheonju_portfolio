import { Container, Row, Col } from "react-bootstrap";
import "../css/Section6.css";

export default function Section6() {
  return (
    <div className="Section6">
      <Container fluid="container-xxl" className="Section6_inner Section6_pd">
        <div className="Section6_container">
          <div className="Section6_top" data-aos="fade-up" data-aos-delay="500">
            <h2>About Me</h2>
          </div>
          <Row className="Section6_bottom" data-aos="fade-up" data-aos-delay="500">
            <Col xl="6" className="Section6_bottom-approach">
              <div className="Section6_approach-title">
                <span>첫번째 도전</span>
                <h3>조리전문가</h3>
              </div>
              <div className="Section6_approach-description">
                <p>2013 - 국제요리대회 4인 라이브 부분 금상</p>
                <p>2014 - 국제요리대회 1인 전시 부분 은상</p>
                <p>2015 - 현역 입대 조리병 근무</p>
                <p>2016 - 한식조리자격증 취득</p>
                <p>2017 - 양식조리자격증 취득</p>
                <p>2018 - 제주신화월드 인턴쉽</p>
                <p>2019 - 삼성웰스토리 입사</p>
                <p>2022 - 삼성웰스토리 사원 평가 EX등급</p>
              </div>
            </Col>
            <Col xl="6" className="Section6_bottom-approach">
              <div className="Section6_approach-title">
                <span>두번째 도전</span>
                <h3>프론트엔드 개발자</h3>
              </div>
              <div className="Section6_approach-description">
                <p>2022- 프로젝트기반 프론트엔드(React,Vue) 웹&앱 SW개발자 과정 시작</p>
                <p>2023- 어떤 "성과"를 원하십니까?</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
