import React from "react";
import Nav from "../comonents/Nav";
import Contact from "../comonents/Contact";
import styled from "styled-components";


const Projects = () => {

  const Title = styled.h1`
    text-align: center;
    width: 50vw;
    margin: 0 auto;
    padding: 2rem
  `
  const Project = styled.section`
    border: 1px solid black;
    width: 90vw;
    height: 50vh;
    margin: 1rem auto;
    display: grid:
  `;
  return (
    <div>
      <Nav />
      <Title>-----Projects-----</Title>
      <Project>
        {/* title of the project */}
        {/* image of the project at work */}
        {/* summary of the project */}
        {/* technologies used */}
        {/* link to the repo and the live website if it has one */}
      </Project>
      <Project></Project>
      <Project></Project>

      <Contact />
    </div>
  );
};

export default Projects;
