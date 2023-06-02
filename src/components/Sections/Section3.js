import { Container, Row, Col } from "react-bootstrap";
import "../css/Section3.css";

export default function Section3() {


  const projects = [
    {
      id: 1,
      projectName: "영동군청 리뉴얼",
      projectDate: "2022.12",
      imageSrc: "/images/project_1-1.png",
      description1: "1. 구현기술 : Html, Css, Js, JQuery",
      description2: "2. 개인 프로젝트 (기여도 100%)",
      description3: "3. JQury를 이용하여 게시판 탭 이동 기능 구현",
      description4: "4. bx slider 활용하여 캐로셀 기능 구현",
      description5: "5. 구글 애널리틱스적용하여 방문자의 데이터 웹 로그 분석",
      description6: "6. 공공데이터포털api 활용, 기상정보 및 대기환경 정보 파싱",
      githubLink: "https://github.com/parkcheonju/project",
      pageLink: "https://parkcheonju.github.io/project/",
    },
    {
      id: 2,
      projectName: "Weather4U",
      projectDate: "2023.02",
      imageSrc: "/images/w4u.png",
      description1: "1. 구현기술 : Html, Css, Js, Bootstrap, Figma",
      description2: "2. 4인 팀 프로젝트 기획 담당 (기여도 35%)",
      description3: "3. Weather4U Figma 활용 구조 작성",
      description4: "4. openweathermap 활용하여 Pure Js로 기능 구현 제안",
      description5: "5. JQury를 활용하여 Sidebar 기능 구현 제안",
      description6: "6. JQury를 활용하여 Login 기능 구현 제안",
      githubLink: "https://github.com/parkcheonju/Weather4U",
      pageLink: "https://parkcheonju.github.io/Weather4U/",
    },
    {
      id: 3,
      projectName: "Visual Canvas",
      projectDate: "2023.05",
      imageSrc: "/images/project_3-1.png",
      description1: "1. 구현기술 : Html, Css, Vue.js, Node.js",
      description2: "2. 개인 프로젝트 (기여도 100%)",
      description3: "3. Vue.js 제공 문법 사용 (v-if, v-for 등)",
      description4: "4. NodeJs + Express 사용, Server 파일 업로드 로직 구축",
      description5: "5. Axios RESTful API 요청을 보내고 응답 값 파싱 및 처리",
      description6: "6. Mitt 라이브러리 사용, 다른 컴포넌트로 데이터 전송 로직 작성",
      githubLink: "https://github.com/parkcheonju/vue_sns_project",
      pageLink: "https://vue-sns-project-psi35kw8e-parkcheonju.vercel.app/",
    },
  ];

  const projects2 = [
    {
      id: 4,
      projectName: "PERPET-Front",
      projectDate: "2023.04",
      imageSrc: "/images/project_2-1.png",
      description1: "1. 구현기술 : Html, Css, React, Node.js, Figma",
      description2: "2. 4인 팀 프로젝트 기획, 백엔드 담당 (기여도 35%)",
      description3: "3. Kakao Login 기능 구현",
      description4: "4. NodeJs + Express 사용, Server 파일 업로드 로직 구축",
      description5: "5. Axios RESTful API 요청을 보내고 응답 값 파싱 및 처리",
      description6: "6. PWA(Progressive Web Application)앱 배포",
      githubLink: "https://github.com/parkcheonju/react_perpet-front",
      pageLink: "https://react-perpet-front.vercel.app/",
    },
    {
      id: 5,
      projectName: "PERPET-Server",
      projectDate: "2023.04",
      imageSrc: "/images/perpet-server.png",
      description1: "1. 구현기술 : Node.js",
      description2: "2. 4인 팀 프로젝트 백엔드 담당 (기여도 80%)",
      description3: "3. NodeJs + Express 사용, Server 파일 업로드 로직 구축",
      description4: "4. sequelize 활용 Product Table 구조 작성",
      description5: "5. Axios RESTful API 요청을 보내고 응답 값 파싱 및 처리",
      description6: "6. Restful 방식으로 Front에서 상품 정보를 페이지에 정보 전달",
      githubLink: "https://github.com/parkcheonju/react_perpet-server/tree/main",
      pageLink: "https://port-0-react-perpet-server-duzu222alg4pw0ie.sel3.cloudtype.app/products",
    },
    {
      id: 6,
      projectName: "PortFolio",
      projectDate: "2023.05",
      imageSrc: "/images/portfolio.png",
      description1: "1. 구현기술 : Html, Css, React, Lottie, EmailJs",
      description2: "2. 개인 프로젝트 (기여도 100%)",
      description3: "3. React useEffect Hook 활용 구조 작성",
      description4: "4. Lottie 활용 동적 페이지 구현",
      description5: "5. EmailJS 활용 실시간 Mail 기능 구현",
      description6: "6. useMeasure 활용 마우스 동적 기능 구현",
      githubLink: "https://github.com/parkcheonju/parkcheonju_portfolio",
      pageLink: "https://parkcheonju-portfolio.vercel.app/",
    },
  ];
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
            <div className="Section3_container-flex Section3_flex-inner">
              {projects.map((project) => (
                <Col className="col-xl-4 col-lg-4 Section3_container-flex2" key={project.id}>
                  <div className="grid-item filter-1 filter-4">
                    <div className="Section3_project">
                      <div className="Section3_project-top">
                        <img src={project.imageSrc} alt="project" />
                      </div>
                    </div>
                  </div>
                  <div className="Section3_bottom-dsc">
                    <span>Project {project.id}</span>
                    <h2>{project.projectName}</h2>
                    <ul className="Section3_bottom-ul2">
                      <li className="Section3_bottom-li2 pd-30">{project.description1}</li>
                      <li className="Section3_bottom-li2">{project.description2}</li>
                      <li className="Section3_bottom-li2">{project.description3}</li>
                      <li className="Section3_bottom-li2">{project.description4}</li>
                      <li className="Section3_bottom-li2">{project.description5}</li>
                      <li className="Section3_bottom-li2">{project.description6}</li>
                    </ul>
                    <div className="Section3_bottom-btn2">
                      <div className="Section3_left-btn">
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          깃허브 바로가기
                        </a>
                      </div>
                      <div className="Section3_left-btn2">
                        <a href={project.pageLink} target="_blank" rel="noopener noreferrer">
                          페이지 바로가기
                        </a>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </div>
            <div className="Section3_container-flex Section3_flex-inner">
                {projects2.map((project) => (
                  <Col className="col-xl-4 col-lg-4 Section3_container-flex2" key={project.id}>
                    <div className="grid-item filter-1 filter-4">
                      <div className="Section3_project">
                        <div className="Section3_project-top">
                          <img src={project.imageSrc} alt="project" />
                        </div>
                      </div>
                    </div>
                    <div className="Section3_bottom-dsc">
                      <span>Project {project.id}</span>
                      <h2>{project.projectName}</h2>
                      <ul className="Section3_bottom-ul2">
                        <li className="Section3_bottom-li2 pd-30">{project.description1}</li>
                        <li className="Section3_bottom-li2">{project.description2}</li>
                        <li className="Section3_bottom-li2">{project.description3}</li>
                        <li className="Section3_bottom-li2">{project.description4}</li>
                        <li className="Section3_bottom-li2">{project.description5}</li>
                        <li className="Section3_bottom-li2">{project.description6}</li>
                      </ul>
                      <div className="Section3_bottom-btn2">
                        <div className="Section3_left-btn">
                          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            깃허브 바로가기
                          </a>
                        </div>
                        <div className="Section3_left-btn2">
                          <a href={project.pageLink} target="_blank" rel="noopener noreferrer">
                            페이지 바로가기
                          </a>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
}
