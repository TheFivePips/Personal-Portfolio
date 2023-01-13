import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = () => {

  const Header = styled(motion.header)`
    margin: 1rem;
    @media (width <= 500px) {
      margin: 0.5rem
    }
  `;
  const Nav = styled.nav`
    font-size: 1.5rem;
    display: flex;
    justify-content: space-around;
    @media (width <= 500px) {
     font-size: 1rem;
    }
  `;

  const StyledLink = styled(Link)`
  font-wieght: bold;
  text-decoration: none;
  color: white;
  transition: color 0.3s ease-in-out;
  &:hover {
    color:pink;
  }

  `
  return (
    <Header
      initial={{
        opacity: 0,
        y: -200
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.3
      }}
    >
      <Nav>
        <StyledLink to="/">About</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
      </Nav>
    </Header>
  );
}

export default Nav;
