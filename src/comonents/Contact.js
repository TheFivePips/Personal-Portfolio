import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import ClipboardJS from "clipboard";



const Contact = () => {

  const Div = styled.div`
    
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr 1fr;
    place-items: center;
    object-fit: contain;
    @media (width <= 500px) {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(5, 1fr)
    }
  `;


  const H2 = styled.h2`
    text-align: center;
    margin: 6rem;
    grid-area: 1/1/2/3;
    @media (width <= 500px){
      font-size: 1.5rem;
      margin: 3rem;
      grid-area: 1/1/2/2
      
    }
  `

  const Section = styled.section`
    // border: 1px solid black;
    width: 50%;
    margin: .5rem auto;
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
      p{
        margin: 1.5rem;
      }
      svg:hover{
        opacity: 0.7;
        cursor: copy;
      }
      i:hover{
        opacity: 0.7;
        cursor: pointer;
      }

  `
  new ClipboardJS('.icon')

  const faEmailIcon = (
    <FontAwesomeIcon
      className="icon"
      data-clipboard-text="samgardner20@gmail.com"
      icon={faEnvelope}
      size="2xl"
    />
  );
  const faPhoneIcon = (
    <FontAwesomeIcon
      className="icon"
      data-clipboard-text="315-316-7989"
      icon={faPhoneAlt}
      size="lg"
    />
  );
  
  return (
    <Div>
      <H2>Want to get in touch?</H2>
      <Section>
        
          {faEmailIcon}
        
        <p> samgardner20@gmail.com</p>
      </Section>
      <Section>
        {faPhoneIcon}
        <p>315-316-7989</p>
      </Section>
      <Section>
        <a href="https://github.com/TheFivePips" aria-label="Link to my github page">
          <i
            class="devicon-github-original-wordmark"
            style={{ fontSize: "3rem" }}
          ></i>
        </a>
      </Section>
      <Section>
        <a href="https://www.linkedin.com/in/sam-gardner-b012b2a3/" aria-label="Link to my linkedin page">
          <i class="devicon-linkedin-plain" style={{ fontSize: "3rem" }}></i>
        </a>
      </Section>
    </Div>
  );
};

export default Contact;
