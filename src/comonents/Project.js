import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Project = ({title, src, summary, tech, codelink, demolink}) => {

    const Project = styled.section`
      // border: 1px solid black;
      width: 95vw;
      height: 95vh;
      margin: 1rem auto;
      display: grid;
      grid-template-rows: 1fr 10fr 1fr 2fr 1fr 2fr 1fr;
      grid-template-columns: 1fr 1fr;
      border-bottom: 1px solid white;
    
    
    `;
    const Htwo = styled.h2`
      grid-area: 1/1/2/3;
    `

    const ProjectImg = styled.img`
      width: 100%;
      height: 100%;
      grid-area: 2/1/3/3;

  `
    const SummaryTitle = styled.h3`
      grid-area: 3/1/4/3;
      margin-left: 1rem;
  
    `
    const Summary = styled.p`
      grid-area: 4/1/5/3;
      margin-left: 1rem;
    `;
    const TechTitle = styled.h3`
      grid-area: 5/1/6/3;
      margin-left: 1rem;
    `;
    const List1 = styled.ul`
      grid-area: 6/1/7/2;
      font-size: 0.85rem;
      margin: 0 4rem;

    `
    const List2 = styled.ul`
      grid-area: ; 6/2/7/3;
      font-size: 0.85rem;
      margin: 0 4rem;
     `;

    const CodeLink = styled(motion.a)`
      grid-area: 7/1/8/2;
      margin: 1rem 2rem;
    `;
    const DemoLink = styled(motion.a)`
      grid-area: 7/2/8/3;
      margin: 1rem 4rem;

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
          See the Code
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
      </Project>
    );
}

export default Project;
