import React from 'react';
import styled from 'styled-components';

const TechStack = () => {

  const StackContainer = styled.div`
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 1rem;
  `;
  const IconContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin 4rem;
    text-align: center;
    width: 5rem;
  `;
 const styles ={
  fontSize: "4rem",
  margin: "0.5rem"
 }

  return (
    <StackContainer>
      <div className="col-1">
        <IconContainer>
          <i class="devicon-html5-plain colored" style={styles}></i>
          <span>HTML5</span>
        </IconContainer>
        <IconContainer>
          <i class="devicon-css3-plain colored" style={styles}></i>
          <span>CSS</span>
        </IconContainer>
        <IconContainer>
          <i class="devicon-javascript-plain colored" style={styles}></i>
          <span>JavaScript</span>
        </IconContainer>
      </div>
      <div className="col-2">
        <IconContainer>
          <i class="devicon-react-original colored" style={styles}></i>
          <span>React</span>
        </IconContainer>
        <IconContainer>
          <i class="devicon-express-original" style={styles}></i>
          <span>Express</span>
        </IconContainer>
        <IconContainer>
          <i class="devicon-mongodb-plain colored" style={styles}></i>
          <span>MongoDB</span>
        </IconContainer>
      </div>
      <div className="col-3">
        <IconContainer>
          <i class="devicon-nodejs-plain colored" style={styles}></i>
          <span>Node</span>
        </IconContainer>
        <IconContainer>
          <i class="devicon-git-plain colored" style={styles}></i>
          <span>Git</span>
        </IconContainer>
        <IconContainer>
          <i class="devicon-github-original colored" style={styles}></i>
          <span>Github</span>
        </IconContainer>
      </div>
      <div className="col-4">
        <IconContainer>
          <i class="devicon-sass-original colored" style={styles}></i>
          <span>Sass</span>
        </IconContainer>
        <IconContainer>
          <i class="devicon-npm-original-wordmark colored" style={styles}></i>
          <span>NPM</span>
        </IconContainer>
        <IconContainer>
          <i class="devicon-webpack-plain colored" style={styles}></i>
          <span>Webpack</span>
        </IconContainer>
      </div>
    </StackContainer>
  );
}

export default TechStack;
