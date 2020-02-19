import React from "react";
import styled from 'styled-components';
import { SOLID } from "./styling/variables"



export default function IntroPage() {

  const IntroContainer = styled.div`
  height: 100%;
  width: 100%;
    background: url("https://github.com/ELAndrews/thisiiswallace-FE/blob/develop/thisiswallace-app/public/img/blue-bacteria.jpeg?raw=true");
  `;


  return (
    <IntroContainer className="introPageContainer">
      <div className="canvas"></div>
      <div className="introPageInfo">Wallace</div>
    </IntroContainer>
  )
}
