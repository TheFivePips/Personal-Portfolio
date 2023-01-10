import React from "react";
import { Link } from "react-router-dom";
import Nav from "../comonents/Nav";
import Coffee from "../assets/coffee.jpg"
import Paramedic from '../assets/paramedic.jpg'
import MeowWolf from '../assets/meowwolf.jpg'
import styled, {keyframes} from "styled-components";
import TechStack from "../comonents/TechStack";
import Contact from "../comonents/Contact";



const About = () => {

  

  const fadein = keyframes`
    0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  `
  const Page = styled.div`
    
    
  `;
  const Section = styled.section`
    max-width: 750px;
    max-height 600px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.5rem;
    // border: 1px solid black;
    margin: 0 auto;
    padding: 2rem 0px;
    align-items: center;
    justify-content: center;
    position: relative;
    
  `;
  const PPicture = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 1rem;
    animation: ${fadein} 2s;
    
  `;
  const Para = styled.p`
    line-height: 2.5rem;
    text-align: center;
    margin: 2rem;
    animation: ${fadein} 2s;
  `;
    

  return (
    <Page>
      <Nav />
      <Section>
        <PPicture src={Coffee} alt="picture of me" />
        <Para>
          Hello, there! My name is Sam <br />I am a Full-Stack Web Developer
        </Para>
      </Section>
      <Section>
        <Para>
          I used to be a Paramedic <br />
          But I taught myself how to code
          <br />
          <sub>(this used to be one of my badges)</sub>
        </Para>
        <PPicture src={Paramedic} alt="My old badge" />
      </Section>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <PPicture
          src={MeowWolf}
          alt="me at meow wolf"
          style={{ width: "80vw", margin: "2rem" }}
        />
        <Para>
          I have spent almost two years teaching myself how to build web
          applications. <br />
          <br />
          Coming from an emergency medicine background is a drastic change in
          pace,
          <br /> but as a life-long-learner,
          <br /> the world of programming offers endless intellectual curiosity
          and exploration. <br />
          <br />
          Here are some of the technologies I am now proficient with:
        </Para>
        <TechStack />
        <br />
        And I am learning more everyday! Checkout my recent work{" "}
        <Link to="/projects">here!</Link>
      </section>
      <Contact />
    </Page>
  );
};

export default About;
