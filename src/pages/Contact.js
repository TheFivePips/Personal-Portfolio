import React from "react";
import styled from "styled-components";
import Nav from "../comonents/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";



const Contact = () => {

  const H2 = styled.h2`
    text-align: center;
    margin: 6rem;
  `

  const Section = styled.section`
    // border: 1px solid black;
    width: 40%;
    margin: 1rem auto;
    display: flex;
    justify-content: space-between;
    text-align: start;
    align-items: center;

  `
  const faEmailIcon = <FontAwesomeIcon icon={faEnvelope} size= 'lg'/>
  const faPhoneIcon = <FontAwesomeIcon icon={faPhoneAlt} size="lg" />;
  
  return (
    <div>
      <Nav />
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
        <i
          class="devicon-github-original-wordmark"
          style={{ fontSize: "2rem" }}
        ></i>
        <Link to="https://github.com/TheFivePips">TheFivePips</Link>
      </Section>
      <Section>
        <i class="devicon-linkedin-plain"></i>

        <Link to="https://www.linkedin.com/in/sam-gardner-b012b2a3/">
        </Link>
      </Section>
    </div>
  );
};

export default Contact;
