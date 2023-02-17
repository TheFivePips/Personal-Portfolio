import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TechStack = () => {

  const StackContainer = styled.div`
    width: 80vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    margin: 1rem;
    @media (width <=500px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `;
  const IconContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin 4rem;
    text-align: center;
    width: 5rem;
    :hover {
        transform: scale(1.2);
        text-shadow: 0 0 4px white;
      }
    i {
      font-size: 4rem;
      margin: 0.5rem;
      
    }
    @media (width <=500px) {
      margin: 2rem;
    }
  `;


//  should add in jest
  return (
    <StackContainer>
      <IconContainer>
        <i class="devicon-html5-plain colored"></i>
        <span>HTML5</span>
      </IconContainer>

      <IconContainer>
        <i class="devicon-css3-plain colored"></i>
        <span>CSS</span>
      </IconContainer>

      <IconContainer>
        <i class="devicon-javascript-plain colored"></i>
        <span>JavaScript</span>
      </IconContainer>

      <IconContainer>
        <i class="devicon-react-original colored"></i>
        <span>React</span>
      </IconContainer>

      <IconContainer>
        <i class="devicon-express-original colored"></i>
        <span>Express</span>
      </IconContainer>

      <IconContainer>
        <i class="devicon-mongodb-plain colored"></i>
        <span>MongoDB</span>
      </IconContainer>

      <IconContainer>
        <i class="devicon-nodejs-plain colored"></i>
        <span>Node</span>
      </IconContainer>

      <IconContainer>
        <i class="devicon-git-plain colored"></i>
        <span>Git</span>
      </IconContainer>

      <IconContainer>
        <i class="devicon-github-original colored"></i>
        <span>Github</span>
      </IconContainer>

      <IconContainer>
        <i class="devicon-sass-original colored"></i>
        <span>Sass</span>
      </IconContainer>

      <IconContainer>
        <i class="devicon-npm-original-wordmark colored"></i>
        <span>NPM</span>
      </IconContainer>

      <IconContainer>
        <i class="devicon-webpack-plain colored"></i>
        <span>Webpack</span>
      </IconContainer>

      <IconContainer>
        <i class="devicon-redux-original colored"></i>
        <span>Redux</span>
      </IconContainer>

      <IconContainer>
        <i class="devicon-bootstrap-plain colored"></i>
        <span>Bootstrap</span>
      </IconContainer>

      <IconContainer>
        <i class="devicon-materialui-plain colored"></i>
        <span>Material UI</span>
      </IconContainer>

      <IconContainer>
        <i class="devicon-typescript-plain colored"></i>
        <span>Material UI</span>
      </IconContainer>
    </StackContainer>
  );
}

export default TechStack;
