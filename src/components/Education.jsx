import React from "react";
import styled from "styled-components";

const Education = () => {
  return (
    <Section id="education">
      <h2>Education</h2>
      <div className="education">
        <div>
          <h3>Bachelor of Science in Pharmacy (First Class Honors)</h3>
          <h4>Kamuzu University of Health Sciences | Aug 2018 – Dec 2023</h4>
        </div>
        <div>
          <h3>Malawi School Certificate of Education (MSCE)</h3>
          <h4>Atsikana pa Ulendo | Sept 2013 - July 2017</h4>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  padding: 60px 20px;
  background: #ffffff;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .education {
    display: flex;
    flex-direction: column;
    gap: 20px;

    div {
      background: #f9f9f9;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
      }

      h3 {
        margin-bottom: 10px;
        font-size: 1.5rem;
        color: #333333;
      }

      h4 {
        font-size: 1rem;
        color: #777777;
      }
    }
  }
`;

export default Education;
