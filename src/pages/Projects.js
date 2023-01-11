import React from "react";
import Nav from "../comonents/Nav";
import Contact from "../comonents/Contact";
import styled from "styled-components";
import Project from "../comonents/Project";

import WorkoutBuddyImg from '../assets/WorkoutBuddy.png'


const Projects = () => {

  const Title = styled.h1`
    text-align: center;
    width: 50vw;
    margin: 0 auto;
    padding: 2rem
  `
  
  return (
    <div>
      <Nav />
      <Title>--My Latests Projects--</Title>
      <Project 
        title="Workout Buddy"
        src={WorkoutBuddyImg}
        summary="Exercise tracker App that allows a user to log their exercises by name and keep a record of the exercises weight, repititons, and number of sets. It is a full stack application. "
        tech={["React", "MongoDB", "Express","Mongoose", "Postman", "Context", "Node", "bcrypt", "jsonwebtokens", "valdator.js", "date-fns", "React-router-v6"]}
        codelink="https://github.com/TheFivePips/Exercise-Tracker"
        demolink="Coming soon"
      />

      <Contact />
    </div>
  );
};

export default Projects;
