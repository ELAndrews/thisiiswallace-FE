import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HeaderContainer, Logo, NavLinks, Info, Img, InfoContainer, Title, P } from "./styling/headerStyling";

export default function Header() {

  const location = useLocation()

  useEffect(() => {
    if (location.pathname === "/") {
      document.getElementById("logoContainer").style.display = "none";
      document.getElementById("headerContainer").style.justifyContent = "flex-end";
    }
  }, [location.pathname])

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
