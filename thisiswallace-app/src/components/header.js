import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from 'styled-components';
import { SOLID } from "./styling/variables"


export default function Header() {

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/") {
      document.getElementById("logoContainer").style.display = "none";
      document.getElementById("headerContainer").style.justifyContent = "flex-end";
    }
  }, location)

  const HeaderContainer = styled.div`
      width: 100%;
      height: 90px;
      background-color: ${SOLID.OFF_WHITE};
      display: fixed;
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
    <HeaderContainer id="headerContainer">
      <Logo id="logoContainer">
        LOGO
        </Logo>
      <div id="navLinks">
        <NavLinks exact to="/">HOME</NavLinks>
        <NavLinks to="/bio">BIO</NavLinks>
        <NavLinks to="/publications">RESEARCH 	&amp; PUBLICATIONS</NavLinks>
        <NavLinks to="/contact">CONTACT</NavLinks>
      </div>
    </HeaderContainer>
  );
}
