import React, { useLayoutEffect} from "react";
import Nav from "../comonents/Nav";
import Contact from "../comonents/Contact";
import styled from "styled-components";
import Project from "../comonents/Project";

// import techNotes from '../assets/techNotes.png'
import technotes from '../assets/techNotes.gif'
import WorkoutBuddygif from "../assets/workoutBuddy.gif";
import Colors from "../assets/colors.gif";
import StrykThru from "../assets/strykthru.gif";
import { motion } from "framer-motion";
import FadeInWhenVisible from "../comonents/FadeInWhenVisible";
import UseTitle from "../hooks/useTitle";
const Projects = () => {

  UseTitle("TheFivePips - Projects");
  

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
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.3,
          type: "spring",
          bounce: 0.2,
        }}
      >
        --My Latests Projects--
      </Title>
      <FadeInWhenVisible>
        <Project
          title="TechNotes"
          src={technotes}
          summary="Ticket app for employees of DanD's computer repair shop. It is a MERN stack application that allows employees, depending on their credentials, to view, create, update, and delete employee's and their respective tickets."
          tech={[
            "React",
            "MongoDB",
            "Express",
            "Mongoose",
            "Postman",
            "Redux Toolkit",
            "RTK Query",
            "Node",
            "bcrypt",
            "jsonwebtokens",
            "React-router-v6",
          ]}
          codelink="https://github.com/TheFivePips/Tech-Notes-Frontend"
          demolink="https://technotes-5j75.onrender.com"
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
        <Project
          title="Workout Buddy"
          src={WorkoutBuddygif}
          summary="Exercise tracker App that allows a user to log their exercises by name and keep a record of the exercise's weight, repetitons, and number of sets. It is a full stack application and requires authorization and validation. "
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
        />
        <p>Live demo Coming soon!</p>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Contact />
      </FadeInWhenVisible>
    </motion.div>
  );
};

export default Projects;
