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
  }, [location.pathname])

  const HeaderContainer = styled.div`
      width: 100%;
      height: 90px;
      background-color: ${SOLID.OFF_WHITE};
      position: fixed;
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
    text-underline-position: under;

    &:hover {
      text-decoration: underline;
    }
    &.active {
      text-decoration: underline;
      color: ${SOLID.AQUA_BLUE};
    }
  `;

  const Info = styled.div`
width:140px;
height: 150px;
display: flex;
flex-direction: row-reverse;
align-items: center;
margin-left: 30px;
justify-content: space-around;
`;

  const Img = styled.img`
border: 10px solid ${SOLID.OFF_WHITE};
height: 60px;
border-radius: 50%;
float: right;
`;

  const InfoContainer = styled.div`
background-color: ${SOLID.OFF_WHITE};
width: 150px;
height: 65px;
text-align: center;
margin-top: 10px;
`;

  const Title = styled.h1`
color: ${SOLID.BLACK};
letter-spacing: 2px;
font-size: 0.8rem;
`;

  const P = styled.p`
color: ${SOLID.BLACK};
letter-spacing: 4px;
font-size: 0.5rem;
`;

  return (
    <HeaderContainer id="headerContainer">
      <Logo id="logoContainer">
        <Info className="canvas">
          <Img src="https://github.com/ELAndrews/thisiiswallace-FE/blob/develop/thisiswallace-app/public/img/profile.jpeg?raw=true" alt="Wallace profile picture" />
          <InfoContainer className="introPageInfo">
            <Title>Wallace</Title>
            <P>LS X VC</P>
          </InfoContainer>
        </Info>
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
