import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "../css/Footer.css";

export default function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_1cla81e", "template_xkjh2he", form.current, "LZgzT7_AAp6dNl5iS").then(
      (result) => {
        alert("이메일 전송이 완료되었습니다. 보내주셔서 감사합니다! 빠르게 회신하겠습니다!:)");
        console.log(result.text);
      },
      (error) => {
        alert("이메일 전송이 실패하였습니다. 이용에 불편을 드려서 죄송합니다");
        console.log(error.text);
      }
    );
  };
  return (
    <div className="Footer">
      <Container fluid="xxl" className="Footer_inner">
        <Row className="Footer_container">
          <Col xl="6" className="Footer_contact-1" data-aos="fade-up" data-aos-duration="3000">
            <div className="Footer_contact-title">Thanks For Read</div>
            <div className="Footer_contact-text">박천주</div>
            <div className="Footer_contact-adress">Adress : 서울특별시 동대문구 한빛로 49</div>
            <div className="Footer_contact-email">Email : cjswne@gmail.com</div>
            <div className="Footer_contact-call">Call : 010 - 6880 - 2880</div>
          </Col>
          <Col md="6" className="Footer_contact-2" data-aos="fade-up" data-aos-duration="3000">
            <div className="Footer_contact-email2">Email Contact</div>
            <form ref={form} onSubmit={sendEmail} className="form_email">
              <label>보내시는 분의 성함을 입력하는 공간입니다</label>
              <br />
              <input type="text" name="user_name" className="input_email" required />
              <hr />
              <label>보내시는 분의 이메일 주소를 입력하는 공간입니다</label>
              <br />
              <input type="email" name="user_email" className="input_email" required />
              <hr />
              <label>보내고 싶은 메시지와 회사 정보를 입력하는 공간입니다</label>
              <br />
              <textarea name="message" className="input_email" rows="10" cols="54" required />
              <br />
              <input type="submit" value="보내기" className="send_email" />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
