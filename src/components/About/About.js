import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/Top.jpg";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
      <h1 className="project-heading" style={{ marginTop: "40px" }}>
          Previous <strong className="purple">Experiences</strong>
        </h1>
        <div className="experience-section" style={{ marginBottom: "40px" }}>
          {/* Experience 1 */}
          <Row style={{ marginBottom: "30px" }}>
            <Col md={4} sm={12}>
              <span style={{ fontWeight: "bold", color: "#6c63ff", fontSize: "1.1em" }}>
                Software Developer Intern<br />
                <span style={{ color: "#fff", background: "#6c63ff", padding: "2px 6px", borderRadius: "4px" }}>[Idexcel Pvt Ltd]</span>
              </span>
            </Col>
            <Col md={8} sm={12}>
              <p style={{ paddingLeft: "20px", marginBottom: 0 }}>
                Designed a real-time distributed notification system that learns user behavior patterns and adapts context variation. Built a scalable log ingestion pipeline on AWS EMR with custom MapReduce jobs for intelligent partitioning. Integrated Kafka Spark for parallel log analysis processing over 10M+ records daily, storing them in Hadoop HDFS. Developed AWS Lambda functions for behavior anomaly detection, enabling sub-second decisions and reducing query latency by ~70%. Notified via personalized alerts using Amazon SES and APNs, boosting engagement by 35%.
              </p>
            </Col>
          </Row>
          {/* Experience 2 */}
          <Row style={{ marginBottom: "30px" }}>
            <Col md={4} sm={12}>
              <span style={{ fontWeight: "bold", color: "#6c63ff", fontSize: "1.1em" }}>
                Software Developer Consultant<br />
                <span style={{ color: "#fff", background: "#6c63ff", padding: "2px 6px", borderRadius: "4px" }}>E2E E-Commerce Website</span>
              </span>
            </Col>
            <Col md={8} sm={12}>
              <p style={{ paddingLeft: "20px", marginBottom: 0 }}>
                Built a responsive, user-friendly web application using React and Node.js, automating manual order processing to boost operational efficiency by 73%, and improving scalability for high-volume SMBs. Integrated MongoDB for order lifecycle management, implemented a secure Indian payment gateway via API-authenticated REST endpoints for seamless checkout, and .env-based configuration to protect sensitive information.
              </p>
            </Col>
          </Row>
          {/* Experience 3 */}
          <Row style={{ marginBottom: "30px" }}>
            <Col md={4} sm={12}>
              <span style={{ fontWeight: "bold", color: "#6c63ff", fontSize: "1.1em" }}>
                Research Assistant<br />
                <span style={{ color: "#fff", background: "#6c63ff", padding: "2px 6px", borderRadius: "4px" }}>[ANNA UNIVERSITY]</span>
              </span>
            </Col>
            <Col md={8} sm={12}>
              <p style={{ paddingLeft: "20px", marginBottom: 0 }}>
                Trained a Deep Learning model combining CNNs for spatial feature 
                extraction and RNNs for temporal analysis on 20K+ sequential lung scan images for COVID-19 detection, achieving 92.8% accuracy and a 97.2% ROC-AUC score. Accelerated model training and inference using TensorFlow with CUDA-enabled GPU optimization and mixed-precision training. Reduced processing time by ~70% and enabled 10x faster convergence on high-resolution image data.
              </p>
            </Col>
          </Row>
          {/* Experience 4 */}
          <Row style={{ marginBottom: "30px" }}>
            <Col md={4} sm={12}>
              <span style={{ fontWeight: "bold", color: "#6c63ff", fontSize: "1.1em" }}>
                Software Engineering Intern<br />
                <span style={{ color: "#fff", background: "#6c63ff", padding: "2px 6px", borderRadius: "4px" }}>[VISION ISOFTECH PVT LTD]</span>
              </span>
            </Col>
            <Col md={8} sm={12}>
              <p style={{ paddingLeft: "20px", marginBottom: 0 }}>
                Developed a recommendation engine using Python, MySQL, and FastAPI, delivering 150+ product suggestions/min and visualizing usage trends with AngularJS and Chart.js. Engineered a custom image similarity algorithm with TensorFlow and Pandas, extracting grayscale embeddings for visual product matching, resulting in a 30% boost in user engagement.
              </p>
            </Col>
          </Row>
        </div>


        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
