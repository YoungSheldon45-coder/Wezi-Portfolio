import React from "react";
import styled from "styled-components";
import heroImage from "../assets/hero-image.jpg"; // Make sure to replace this path with the correct path to your image

const Hero = () => {
  return (
    <Section>
      <img src={heroImage} alt="Wezi Kanyenda" className="hero-image" />
      <h1>Wezi Kanyenda</h1>
      <p>BSc Pharmacy Graduate | Research Assistant</p>
      <a href="mailto:wewekanyenda@gmail.com" className="cta">Contact Me</a>
    </Section>
  );
};

const Section = styled.section`
  text-align: center;
  padding: 70px 20px;
  background: #f9f9f9;

  .hero-image {
    width: 200px;
    height: 250px;
    border-radius: 7px;
    object-fit: cover;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 2rem;
    margin: 0;
  }

  p {
    margin: 20px 0;
    font-size: 1.2rem;
    color: #555555;
  }

  .cta {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background: #000000;
    color: #ffffff;
    border-radius: 5px;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:hover {
      background: #555555;
    }
  }
`;

export default Hero;
