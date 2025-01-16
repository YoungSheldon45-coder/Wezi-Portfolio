import React from "react";
import styled from "styled-components";

const Experience = () => {
  return (
    <Section id="experience">
      <h2>Work Experience</h2>
      <div className="experience">
        <div>
          <h3>Pharmacy Intern</h3>
          <h4>Kamuzu Central Hospital | Sept 2023 - Present</h4>
          <ul>
            <li>Dispensed medications accurately and guided patients on proper usage.</li>
            <li>Reviewed patient medication regimens to prevent drug-drug interactions.</li>
          </ul>
        </div>
        <div>
          <h3>Research Assistant</h3>
          <h4>Leipzig University | Nov 2023 - Present</h4>
          <ul>
            <li>Collaborated on studies identifying predictors of wound infections and mortality.</li>
            <li>Maintained data integrity and coordinated microbiological sample collection.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  padding: 60px 20px;
  background: #f9f9f9;

  h2 {
    text-align: center;
    margin-bottom: 40px;
  }

  .experience {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;

    div {
      background: #ffffff;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
      }

      h3 {
        font-size: 1.5rem;
        margin-bottom: 10px;
        color: #333333;
      }

      h4 {
        font-size: 1rem;
        margin-bottom: 20px;
        color: #666666;
      }

      ul {
        margin-top: 10px;
        list-style-type: disc;
        padding-left: 20px;
        text-align: left;
      }

      li {
        margin-bottom: 10px;
        font-size: 1rem;
        color: #555555;
      }
    }
  }
`;

export default Experience;
