// src/components/Footer.jsx
import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <h3>Contact Me</h3>
      <p>Wezi Kanyenda</p>
      <p>Lilongwe, Malawi</p>
      <p>Cell: (+265)880313347 / (+265)993539758</p>
      <p>Email: <a href="mailto:wewekanyenda@gmail.com">wewekanyenda@gmail.com</a></p>
      <div className="socials">
        <a href="https://www.linkedin.com/in/wezi-kanyenda" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:wewekanyenda@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Wezi Kanyenda. All rights reserved.</p>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: #000000;
  color: #ffffff;
  text-align: center;
  padding: 40px 20px;

  h3 {
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }

  a {
    color: #ffffff;
    margin: 0 10px;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #555555;
    }
  }

  .socials {
    margin: 20px 0;
  }
`;

export default Footer;
