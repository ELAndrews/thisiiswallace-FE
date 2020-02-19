import React from "react";
import styled from 'styled-components';
import { SOLID } from "./styling/variables"



export default function IntroPage() {

  const IntroContainer = styled.div`
  height: 100%;
  width: 100%;
    background: url("../../../public/img/blue-bacteria.jpeg");
  `;


  return (
    <IntroContainer className="introPageContainer">
      <div className="canvas"></div>
      <div className="introPageInfo">Wallace</div>
    </IntroContainer>
  )
}
