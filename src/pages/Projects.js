import React, { useLayoutEffect} from "react";
import Nav from "../comonents/Nav";
import Contact from "../comonents/Contact";
import styled from "styled-components";
import Project from "../comonents/Project";

import WorkoutBuddyImg from "../assets/WorkoutBuddy.png";
import Colors from "../assets/Colors.png";
import StrykThru from "../assets/StrykThru.png";
import { motion } from "framer-motion";
import FadeInWhenVisible from "../comonents/FadeInWhenVisible";

const Projects = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }); 
  const Title = styled(motion.h1)`
    text-align: center;
    width: 50vw;
    margin: 0 auto;
    padding-top: 2rem;
    @media (width <=500px){
      font-size: 0.75rem;
    }
  `;

  const projectsContainerVariants = {
    initial: {
      opacity: 0,
      x: "100vw",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.6,
        type: "spring",
        bounce: 0.2,
      },
    },
    exit: {
      x: "100vw",
      transition: {
        ease: "easeInOut",
        duration: 0.7,
      },
    },
  };

  return (
    <motion.div
      variants={projectsContainerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Nav />
      <Title
        initial={{
          x: "-200vw",
          opacity: 0 
        }}
        animate={{ 
          x: 0,
          opacity: 1 
        }}
        transition={{
          duration: 1,
          delay: 0.3,
          type: "spring",
          bounce: 0.2
        }}
      >
        --My Latests Projects--
      </Title>
      <FadeInWhenVisible>
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
      </FadeInWhenVisible>
      <FadeInWhenVisible>
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
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Project
          title="StrykThru"
          src={StrykThru}
          summary="This is a pure Javascript todo app that allows the user to add, edit, or delete project folders. Users can also create and edit new tasks with due-dates and priorities."
          tech={["JavaScript", "date-fns", "Webpack", "CSS", "UUID"]}
          codelink="https://github.com/TheFivePips/Todo-Project"
          demolink="https://thefivepips.github.io/Todo-Project/"
        />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Contact />
      </FadeInWhenVisible>
    </motion.div>
  );
};

export default Projects;
