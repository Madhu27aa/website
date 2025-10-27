import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiKotlin,
  SiSwift,
  SiHtml5,
  SiCss3,
  SiAngular,
  SiVuedotjs,
  SiDotnet,
  SiSpring,
  SiDjango,
  SiFlask,
  SiFigma,
  SiAws,
  SiAzure,
  SiGooglecloud,
  SiHadoop,
  SiApachekafka,
  SiDocker,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiOpencv,
  SiNltk,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><CgCPlusPlus /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSwift /></Col>
      <Col xs={4} md={2} className="tech-icons"><TbBrandGolang /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiKotlin /></Col>

      {/* Web Technologies */}
      <Col xs={4} md={2} className="tech-icons"><SiHtml5 /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCss3 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAngular /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiVuedotjs /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDotnet /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSpring /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDjango /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFlask /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFigma /></Col>

      {/* Tools & Cloud */}
      <Col xs={4} md={2} className="tech-icons"><SiAws /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAzure /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGooglecloud /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiHadoop /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiApachekafka /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDocker /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiMongodb /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFirebase /></Col>

      {/* AI/ML */}
      <Col xs={4} md={2} className="tech-icons"><SiTensorflow /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiKeras /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPytorch /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiOpencv /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNltk /></Col>
    </Row>
  );
}

export default Techstack;

