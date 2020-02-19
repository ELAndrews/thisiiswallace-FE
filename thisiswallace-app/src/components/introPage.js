import React from "react";
import styled from 'styled-components';
import { SOLID } from "./styling/variables"



export default function IntroPage() {

  const IntroContainer = styled.div`
    height: 100%;
    width: 100%;
    background: url("https://github.com/ELAndrews/thisiiswallace-FE/blob/develop/thisiswallace-app/public/img/blue-bacteria.jpeg?raw=true");
  `;

  const Info = styled.div`
    width: 80%;
    height: 80%;
    position: absolute;
    left: 10%;
    top: 10%;
  `;

  const Img = styled.img`
    border: 20px solid ${SOLID.PASTEL};
    height: 300px;
    border-radius: 50%;
    margin-top: 100px;
    float: right;
  `;

  const InfoContainer = styled.div`
    background-color: ${SOLID.OFF_WHITE};
    width: 60%;
    height: 200px;
  `;

  const Title = styled.h1`
    color: ${SOLID.BLACK};
  `;


  return (
    <IntroContainer className="introPageContainer">
      <Info className="canvas">
        <Img src="https://github.com/ELAndrews/thisiiswallace-FE/blob/develop/thisiswallace-app/public/img/profile.jpeg?raw=true" alt="Wallace profile picture" />
        <InfoContainer className="introPageInfo">
          <Title>Wallace</Title>
        </InfoContainer>
      </Info>
    </IntroContainer>
  )
}
