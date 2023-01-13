import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Project = ({title, src, summary, tech, codelink, demolink}) => {

    const Project = styled.section`
      // border: 1px solid black;
      width: 95%;
      margin: 1rem auto;
      padding: 1rem 0;
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid white;
      @media( width > 1200px){
        width: 75%;
        margin: 2rem auto
        padding: 2rem 0;
      }
    
    
    `;
    const Htwo = styled.h2`
      margin-bottom: 1rem;
      @media (width > 1200px) {
        font-size: 2rem;
        margin-top: 1.5rem
      }
    `;

    const ProjectImg = styled.img`
      width: 100%;

  `
    const SummaryTitle = styled.h3`
    @media (width > 1200px){
      margin-top: 1rem;
      font-size: 2rem;
    }
    @media (500px < width < 1200px){
        margin-top: 2rem;
      }
      
    `;
    const Summary = styled.p`
      margin: 1rem 1rem;
      @media (width > 1200px) {
        font-size: 1.5rem;
      }
      
    `;
    const TechTitle = styled.h3`
      @media (width > 1200px) {
        font-size: 2rem;
      }
    `;
    const TechContainer = styled.div`
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    `
    const List1 = styled.ul`
      font-size: 0.7rem;
      margin: 0 4rem;
      @media (width > 500px) {
        font-size: 1.2rem;
      }
    `;
    const List2 = styled.ul`
      font-size: 0.7rem;
      margin: 0 4rem;
      @media (width > 1200px) {
        font-size: 1.2rem;
      }
      @media (width > 500px) {
        font-size: 1.2rem;
      }
    `;
    const LinkContainer = styled.div`
      width: 90%;
      margin-top: 1rem;
      display: flex;
      justify-content: space-around;
      @media(width > 1200px) {
        width: 95%;
      }
    `

    const CodeLink = styled(motion.a)`
      font-size: 1.5rem;
      @media(width <=500px){
        font-size: 1rem;
      }
      @media(500px < width < 1200px){
        font-size: 1.3rem
      }
    `;
    const DemoLink = styled(motion.a)`
      font-size: 1.5rem;
      @media (width <=500px) {
        font-size: 1rem;
      }
      @media(500px < width < 1200px){
        font-size: 1.3rem
      }
    `;
    const frontTech = tech.slice(0,Math.round((tech.length/2)))
    const backTech = tech.slice(Math.round(tech.length/2))
  

    return (
      <Project>
        <Htwo>{title}</Htwo>
        <ProjectImg loading="lazy" src={src} alt="project img"></ProjectImg>
        <SummaryTitle>Summary:</SummaryTitle>
        <Summary>{summary}</Summary>
        <TechTitle>Technology used:</TechTitle>
        <TechContainer>
          <List1>
            {frontTech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </List1>
          <List2>
            {backTech.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </List2>
        </TechContainer>
        <TechTitle>Links:</TechTitle>
        <LinkContainer>
          {" "}
          <CodeLink
            target="_blank"
            href={codelink}
            whileHover={{
              scale: 1.025,
              textShadow: "0 0 1px white",
              transition: {
                duration: 0.7,
              },
            }}
          >
            The Code
          </CodeLink>
          <DemoLink
            target="_blank"
            href={demolink}
            whileHover={{
              scale: 1.025,
              textShadow: "0 0 1px white",
              transition: {
                duration: 0.7,
              },
            }}
          >
            Live Demo
          </DemoLink>
        </LinkContainer>
      </Project>
    );
}

export default Project;
