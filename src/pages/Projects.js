import React, { useLayoutEffect} from "react";
import Nav from "../comonents/Nav";
import Contact from "../comonents/Contact";
import styled from "styled-components";
import Project from "../comonents/Project";

import WorkoutBuddyImg from "../assets/WorkoutBuddy.png";
import Colors from "../assets/Colors.png";
import StrykThru from "../assets/StrykThru.png";

const Projects = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }); 
  const Title = styled.h1`
    text-align: center;
    width: 50vw;
    margin: 0 auto;
    padding: 2rem;
  `;

  return (
    <div>
      <Nav />
      <Title>--My Latests Projects--</Title>
      <Project
        title="Workout Buddy"
        src={WorkoutBuddyImg}
        summary="Exercise tracker App that allows a user to log their exercises by name and keep a record of the exercises weight, repititons, and number of sets. It is a full stack application and makes use of authorization and validation. "
        tech={[
          "React",
          "MongoDB",
          "Express",
          "Mongoose",
          "Postman",
          "Context",
          "Node",
          "bcrypt",
          "jsonwebtokens",
          "valdator.js",
          "date-fns",
          "React-router-v6",
        ]}
        codelink="https://github.com/TheFivePips/Exercise-Tracker"
        demolink="Coming soon"
      />
      <Project
        title="PalettePicker"
        src={Colors}
        summary="This app allows a user to create beautiful color palettes. It features drag and drop elements, a color shade picker, and supports multiple color formats."
        tech={[
          "React",
          "Material UI",
          "Chroma.js",
          "Emoji-Mart",
          "React-copy-to-clipboard",
          "React-sortable-hoc",
          "React-form-validator",
          "Sass",
          "React-Router-v6",
          "React-transition-group",
        ]}
        codelink="https://github.com/TheFivePips/Color-App"
        demolink="https://thefivepips.github.io/Color-App/"
      />
      <Project
        title="StrykThru"
        src={StrykThru}
        summary="This is a pure Javascript todo app that allows the user to add, edit, or delete project folders. Users can also create and edit new tasks with due-dates and priorities."
        tech={["JavaScript", "date-fns", "Webpack", "CSS", "UUID"]}
        codelink="https://github.com/TheFivePips/Todo-Project"
        demolink="https://thefivepips.github.io/Todo-Project/"
      />

      <Contact />
    </div>
  );
};

export default Projects;
