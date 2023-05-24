import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import "../css/Section1.css";

const data = [
  {
    text: "깃허브 바로가기",
    link: "https://github.com/parkcheonju",
  },
  {
    text: "이력서 바로가기",
    link: "https://docs.google.com/document/d/1OfY1v3XOsVrikwZKIMZte3HPyvTAMXJz/edit?usp=sharing&ouid=108809604076029378011&rtpof=true&sd=true",
  },
  {
    text: "블로그 바로가기",
    link: "https://cjswn0701.tistory.com/",
  },
  {
    text: "코드노트 바로가기",
    link: "https://www.notion.so/085b4ee26d9c4d1e9a60128f3fe395c0?v=49c77f2320ad467ea2ada1cce3da59b9",
  },
];

export default function Section1() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="Section1">
      <Container fluid="xxl" className="Section1_inner">
        <Row className="Section1_container">
          <Col xl="9" className="Section1_left">
            <div className="Section1_left-title" data-aos="fade-up" data-aos-delay="300">
              <h1>
                잘만든 코드는
                <br />
                성능도 맛있다!
                <br />
              </h1>
            </div>
            <Col xl="8" className="Section1_left-text1">
              <div data-aos="fade-up" data-aos-delay="1000">
                <p>
                  사이드 이펙트를 잡아
                  <br />
                  성능의 감칠맛을 살렸습니다.
                </p>
              </div>
            </Col>
            <div className="Section1_left-site" data-aos="fade-up" data-aos-delay="300">
              {data.map((item, index) => (
                <div key={index} className={`Section1_left-btn`}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.text}
                  </a>
                </div>
              ))}
            </div>
          </Col>
          <div className="Section1_right"></div>
        </Row>
      </Container>
    </div>
  );
}
