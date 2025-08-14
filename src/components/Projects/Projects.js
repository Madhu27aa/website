import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="VoiceBrief"
              description="An iOS app in Swift using Xcode that converts documents from Files, Box, and iCloud into podcast-style audio
using a lightweight LLM API through LangChain"
              ghLink="https://github.com/Madhu27aa/Audio-to-speech-IOS"
              demoLink="https://github.com/Madhu27aa/Audio-to-speech-IOS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="E2E Ecommerece Website"
              description="Responsive, user-friendly web application using React and Node.js"
              ghLink="https://github.com/Madhu27aa/Bakeery-Ecommerce"
              demoLink="https://github.com/Madhu27aa/Bakeery-Ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="LipReader.IO"
              description="a visual recognition model using 3D CNNs and BiLSTM architectures to process audio-less videos"
              ghLink="https://github.com/Madhu27aa"
              demoLink="https://github.com/Madhu27aa"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Edge-Assisted Suspicious Activity Detection system"
              description="real-time video surveillance web app to stream data through a DAG pipeline of ST-GCN for suspicious
activity recognition and OpenPose for human pose detection"
              ghLink="https://github.com/Madhu27aa/Edge-Assisted-Suspicious-Activity-Detection-system-"
              demoLink="https://github.com/Madhu27aa/Edge-Assisted-Suspicious-Activity-Detection-system-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="E-mail Summarizer"
              description="The project is a fullstack React Router app that uses the Vercel AI SDK, Neon Postgres, and Drizzle ORM to build an AI workflow that processes incoming emails."
              ghLink="https://github.com/Madhu27aa/Email-summarizer"
            // demoLink="https://github.com/Madhu27aa/Email-summarizer" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Nightlife coordinator App"
              description="A nightlife coordination app by which anyone can see how many people are going on  tonight. )
To try on your system"
              ghLink="https://github.com/Madhu27aa/Nightlife-coordination-app"
            // demoLink="https://github.com/Madhu27aa/Nightlife-coordination-app"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
