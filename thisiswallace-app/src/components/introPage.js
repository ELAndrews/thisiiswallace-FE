import React from "react";
import styled from 'styled-components';
import { SOLID } from "./styling/variables"



export default function IntroPage() {

  const IntroContainer = styled.div`
    height: calc(100% - 100px);
    width: 100%;
    padding-top: 100px;
    background: url("https://github.com/ELAndrews/thisiiswallace-FE/blob/develop/thisiswallace-app/public/img/blue-bacteria.jpeg?raw=true");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  `;

  const Info = styled.div`
    width: 700px;
    height: 65%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin: 0px auto;
    justify-content: space-around;
  `;

  const Img = styled.img`
    border: 30px solid ${SOLID.OFF_WHITE};
    height: 300px;
    border-radius: 50%;
    margin-top: 100px;
    float: right;
  `;

  const InfoContainer = styled.div`
    background-color: ${SOLID.OFF_WHITE};
    width: 400px;
    height: 150px;
    text-align: center;
    position: relative;
    top: 50px;
    left: 30px;
  `;

  const Title = styled.h1`
    color: ${SOLID.BLACK};
    letter-spacing: 4px;
    font-size: 2.5rem;
  `;

  const P = styled.p`
   color: ${SOLID.BLACK};
    letter-spacing: 4px;
    font-size: 0.7rem;
  `;


  return (
    <IntroContainer className="introPageContainer">
      <Info className="canvas">
        <Img src="https://github.com/ELAndrews/thisiiswallace-FE/blob/develop/thisiswallace-app/public/img/profile.jpeg?raw=true" alt="Wallace profile picture" />
        <InfoContainer className="introPageInfo">
          <Title>Wallace</Title>
          <P>Life Science | Venture</P>
        </InfoContainer>
      </Info>
    </IntroContainer>
  )
}
