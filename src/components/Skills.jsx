// src/components/Skills.jsx
import React from "react";
import styled from "styled-components";

const Skills = () => {
  return (
    <Section id="skills">
      <h2>Skills</h2>
      <div className="skills">
        <ul>
          <li><strong>Technical Skills:</strong> Data collection and management, statistical analysis, Microsoft Office Suite, medical dispensing, and patient counselling.</li>
          <li><strong>Research Skills:</strong> Clinical observation, patient monitoring, data integrity management, recruitment, and follow-up tracking.</li>
          <li><strong>Communication Skills:</strong> Team collaboration, report writing, and patient interaction.</li>
          <li><strong>Soft Skills:</strong> Attention to detail, problem-solving, organizational skills, and adaptability.</li>
        </ul>
      </div>
    </Section>
  );
};

const Section = styled.section`
  padding: 60px 20px;
  background: #f9f9f9;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .skills {
    max-width: 800px;
    margin: 0 auto;

    ul {
      list-style: none;
      padding: 0;

      li {
        margin-bottom: 15px;
        font-size: 1.1rem;

        strong {
          color: #000000;
        }
      }
    }
  }
`;

export default Skills;
