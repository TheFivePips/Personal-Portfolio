import React from "react";
// import styled from "styled-components";
import Nav from "../comonents/Nav";
import Coffee from "../assets/coffee.jpg"
import styled from "styled-components";

const Home = () => {

  const Section = styled.section`
    width: 850px;
    height 700px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    // border: 1px solid black;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    
  `;
  const PPicture = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 1rem;
    

  `
  const Para = styled.p`
    line-height: 2.5rem;
    text-align: center;
  `;
    

  return (
    <div>
      <Nav />
      <Section>
        <PPicture src={Coffee} alt="picutre of me" />
        <Para>Hello, there! My name is Sam <br/>I am a Full-Stack Web Developer</Para>
      </Section>
    </div>
  );
};

export default Home;
