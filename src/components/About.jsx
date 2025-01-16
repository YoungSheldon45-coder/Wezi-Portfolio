// src/components/About.jsx
import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Section id="about">
      <h2>About Me</h2>
      <p>
        I am a First Class BSc Pharmacy graduate with practical experience as a Pharmacist Intern at Kamuzu 
        Central Hospital and a Research Assistant for Leipzig University. I am passionate about advancing 
        healthcare through evidence-based practices and innovative pharmaceutical solutions. I possess strong 
        analytical, organizational, and collaborative abilities that drive impactful healthcare initiatives.
      </p>
    </Section>
  );
};

const Section = styled.section`
  padding: 30px 20px;
  background: #f9f9f9;
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: #555555;
    line-height: 1.6;
    max-width: 800px;
    margin: 0 auto;
  }
`;

export default About;
