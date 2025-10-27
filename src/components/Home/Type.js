import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
       strings: [
  "Software Engineer",
  "Android Developer",
  "iOS Developer",
  "Fullstack Developer",
  "Cloud Developer",
  "Machine Learning Engineer / Applied AI Engineer",
  "AI Researcher"
]
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
