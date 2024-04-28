import React from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Project from "./Projects/Projects";
import Skills from "./Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="Home">
        <Home />
      </section>
      <div className="borderHome"></div>
      <section id="Projects">
        <Project />
      </section>
      <div className="borderHome"></div>
      <section id="Skills">
        <Skills />
      </section>
    </div>
  );
}

export default App;
