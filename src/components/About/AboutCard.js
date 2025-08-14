import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Madhumitha Seshaiah </span>
            from <span className="purple"> Chicago, Illinois</span>
            <br />
            I am currently a Master’s Student in UNIVERSITY OF ILLINOIS AT CHICAGO.
            <br />
    
            <br />
            <br />
            
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Developing Web Applications
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {" "}
          </p>
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
