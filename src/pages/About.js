import React from "react";
import { Link } from "react-router-dom";
import Nav from "../comonents/Nav";
import Coffee from "../assets/coffee.jpg";
import Paramedic from "../assets/paramedic.jpg";
import MeowWolf from "../assets/meowwolf.jpg";
import styled from "styled-components";
import TechStack from "../comonents/TechStack";
import Contact from "../comonents/Contact";
import { motion} from "framer-motion";
import FadeInWhenVisible from "../comonents/FadeInWhenVisible";

const About = () => {
  const Page = styled.div``;
  const Section = styled.section`
    max-width: 850px;
    max-height 700px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.5rem;
    // border: 1px solid black;
    margin: 0 auto;
    padding: 7rem 0;
    align-items: center;
    justify-content: center;
    position: relative;
    
  `;
  const PPicture = styled(motion.img)`
    height: 100%;
    width: 100%;
    border-radius: 1rem;
  `;
  const Para = styled(motion.p)`
    line-height: 2.5rem;
    text-align: center;
    margin: 2rem;
  `;

  const sideSlideRVariants = {
    initial: {
      opacity: 0,
      x: "100vw",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        type: "spring",
        bounce: 0.2,
      },
    },
  };
  const sideSlideLVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        type: "spring",
        bounce: 0.2,
      },
    },
  };

  const aboutContainerVariants = {
    initial: {
      opacity: 0,
      x: "-100vh"
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
      },
    },
  };

  
  

  return (
    <Page
      variants={aboutContainerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Nav />
      <Section>
        <PPicture
          src={Coffee}
          alt="picture of me"
          variants={sideSlideLVariants}
          initial="initial"
          animate="animate"
        />
        <Para variants={sideSlideRVariants} initial="initial" animate="animate">
          Hello, there! My name is Sam <br />I am a Full-Stack Web Developer
        </Para>
      </Section>
      <FadeInWhenVisible>
        <Section>
          <Para>
            I used to be a Paramedic <br />
            But I taught myself how to code during the pandemic
            <br />
          </Para>
          <PPicture loading="lazy" src={Paramedic} alt="My old badge" />
        </Section>
        <Para>Now I build cool projects</Para>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PPicture
            loading="lazy"
            src={MeowWolf}
            alt="me at meow wolf"
            style={{ width: "80vw", margin: "2rem" }}
          />
          <FadeInWhenVisible>
            <Para>
              I have spent almost two years teaching myself how to build web
              applications. <br />
              <br />
              Coming from an emergency medicine background is a drastic change
              in pace and environmet,
              <br /> but as a life-long-learner,
              <br /> the world of programming offers endless intellectual
              curiosity and exploration.
              <br />
              <br />
              <strong>
                Here are some of the technologies I am now proficient with:
              </strong>
            </Para>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <TechStack />
          </FadeInWhenVisible>
          <br />
          And I am learning more everyday! Checkout my recent work{" "}
          <Link to="/projects">here!</Link>
        </section>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Contact />
      </FadeInWhenVisible>
    </Page>
  );
};

export default About;
