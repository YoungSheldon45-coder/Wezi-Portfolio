// src/App.js
import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
