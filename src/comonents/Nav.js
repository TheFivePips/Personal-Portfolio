import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {

  const Header = styled.header`
    margin: 1rem;
  `;
  const Nav = styled.nav`
    font-size: 1.5rem;
    display: flex;
    justify-content: space-around;
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
    <Header>
      <Nav>
        <StyledLink to="/">About</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
      </Nav>
    </Header>
  );
}

export default Nav;
