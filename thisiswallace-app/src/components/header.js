import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { SOLID } from "./styling/variables"


export default function Header() {

  const HeaderContainer = styled.div`
      width: 100%;
      height: 90px;
      background-color: ${SOLID.PASTEL};
      display: flex;
      justify-content: space-between;
      align-items: center;
  `;

  const Logo = styled.div`
    width: 150px;
    text-align: center;
    margin-right: 10px;
  `;

  const NavLinks = styled(NavLink)`
    color: ${SOLID.BLACK};
    text-decoration: none;
    margin: auto 15px;
    letter-spacing: 2px;
    font-size: 0.7rem;

    &:hover {
      text-decoration: underline;
    }
    &.active {
      text-decoration: underline;
    }
  `;

  return (
    <HeaderContainer className="headerContainer">
      <Logo>LOGO</Logo>
      <div className="navLinks">
        <NavLinks exact to="/">HOME</NavLinks>
        <NavLinks to="/about">ABOUT</NavLinks>
        <NavLinks to="/work">WORK</NavLinks>
        <NavLinks to="/publications">PUBLICATIONS</NavLinks>
        <NavLinks to="/contact">CONTACT</NavLinks>
      </div>
    </HeaderContainer>
  );
}
