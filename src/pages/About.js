import React from "react";
import { Link } from "react-router-dom";
import Nav from "../comonents/Nav";
import UpdatedPic from "../assets/updatedPic.jpg";
import Paramedic from "../assets/paramedic.jpg";
import MeowWolf from "../assets/meowwolf.jpg";
import styled from "styled-components";
import TechStack from "../comonents/TechStack";
import Contact from "../comonents/Contact";
import { motion} from "framer-motion";
import FadeInWhenVisible from "../comonents/FadeInWhenVisible";
import UseTitle from "../hooks/useTitle";

const About = () => {
  UseTitle("TheFivePips - About")
  const Page = styled.div`
    width: 100vw
    
  `;
  const Section = styled.section`
    max-width: 850px;
    max-height 650px;
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
    @media (width <= 500px){
      width: 95vw;
      padding: 2rem 0;
    }
    @media (width > 1200px) {
      grid-gap: 10rem;
      margin: 2rem auto;
    }
    
    
  `;
  const PPicture = styled(motion.img)`
    height: 100%;
    width: 100%;
    border-radius: 1rem;
    @media (width <= 500px) {
      width: 100%;
      
    }
    @media (width > 1200px){
      width: 90%
    }
  `;
  const LPicture = styled.img`
    border-radius: 1rem;
    @media (width <= 500px) {
      width: 100%;
      margin: 1rem
    }
    @media (width > 1200px) {
      width: 60%;
    }
  `;
  const Para = styled(motion.p)`
    line-height: 2.3rem;
    text-align: center;
    margin: 2rem;
    @media (width <= 500px) {
      margin: 0.5rem;
      line-height: 1.3rem;
    }
    @media (width > 1200px) {
      line-height: 3.3rem;
      font-size: 1.3rem
    }
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
        delay: 0.3,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
        duration: 0.7,
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
        delay: 0.3,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
        duration: 0.7,
      },
    },
  };

  const aboutContainerVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.6,
      },
    },
    exit: {
      x: "-100vw",
      transition: {
        ease: "easeInOut",
        duration: 0.7,
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
          src={UpdatedPic}
          alt="picture of me"
          variants={sideSlideLVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        />
        <Para
          variants={sideSlideRVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          Hello, there! My name is Sam <br />I am a Full-Stack Web Developer and
          IT Professional
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
        <Para>
          <strong>Now I build cool projects</strong>
        </Para>
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
          <LPicture loading="lazy" src={MeowWolf} alt="me at meow wolf" />
          <FadeInWhenVisible>
            <Para>
              I have spent two years teaching myself how to build web
              applications and earning IT certifications. <br />
              <br />
              Coming from an emergency medicine background is a drastic change
              in pace and environmet,
              <br /> but as a life-long-learner,
              <br /> tech offers endless intellectual curiosity and exploration.
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
          <Para>
            <strong>Certifications:</strong>
            <br />
            -CompTIA A+
            <br />
            -Google IT Technical Support
            <br />
            <br />
            <br />
            And I am learning more everyday! Checkout my recent work{" "}
            <Link to="/projects">here!</Link>
          </Para>
        </section>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <Contact />
      </FadeInWhenVisible>
    </Page>
  );
};

export default About;
