import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/pic.png"
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am pursuing my Master’s in Computer Science at UNIVERSITY OF ILLINOIS, CHICAGO, blending technical expertise with product-focused thinking.
              <br />
              <br />
                             I’m a software engineer and Machine Learning enthusiast, passionate about building intelligent, user-focused solutions.

              Experienced in Java, Python and full-stack development, with projects spanning AI, data science, and backend engineering.
              <i>
                <b className="purple">  </b>
              </i>
              <br />
              <br />
              
              📊 Skilled at transforming complex datasets into actionable insights and efficient systems. &nbsp;
              <i>
                <b className="purple">🧠 Regularly sharpen problem-solving skills on platforms like LeetCode—because elegant code is never an accident. </b>
                {" "}
                <b className="purple">

                </b>
              </i>
              <br />
              <br />
               <b className="purple"></b> 
              <i>
                <b className="purple">
                  {" "}
                  
                </b>
              </i>
              &nbsp; 
              <i>
                <b className="purple"> </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find me on </h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">

              <li className="social-icons">
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                 <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/madhumitha-seshaiah/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
