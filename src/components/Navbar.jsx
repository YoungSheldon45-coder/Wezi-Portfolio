import React, { useState } from "react";
import styled from "styled-components";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Nav>
      <div className="logo">Wezi Kanyenda</div>
      <Hamburger onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <ul className={isMenuOpen ? "open" : ""}>
        <li onClick={toggleMenu}><a href="#about">About</a></li>
        <li onClick={toggleMenu}><a href="#experience">Experience</a></li>
        <li onClick={toggleMenu}><a href="#education">Education</a></li>
        <li onClick={toggleMenu}><a href="#skills">Skills</a></li>
        <li onClick={toggleMenu}><a href="#contact">Contact</a></li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }

  ul {
    list-style: none;
    display: flex;

    li {
      margin-left: 20px;
    }

    a {
      font-size: 1rem;
      text-decoration: none;
      color: #000000;
    }
  }

  // Hide the navigation links on smaller screens
  @media (max-width: 768px) {
    ul {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 60px;
      right: 20px;
      background: #ffffff;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      padding: 10px 20px;
    }

    ul.open {
      display: flex;
    }

    li {
      margin: 10px 0;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 3px;
    width: 25px;
    background: #000000;
    margin-bottom: 5px;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export default Navbar;
