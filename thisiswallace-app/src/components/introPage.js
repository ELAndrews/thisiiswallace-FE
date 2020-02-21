import React from "react";
import { IntroContainer, Info, Img, InfoContainer, Title, P } from "./styling/introPageStyling";

export default function IntroPage() {

  return (
    <IntroContainer className="introPageContainer">
      <Info className="canvas">
        <Img src="https://github.com/ELAndrews/thisiiswallace-FE/blob/develop/thisiswallace-app/public/img/profile.jpeg?raw=true" alt="Wallace profile picture" />
        <InfoContainer className="introPageInfo">
          <Title>Wallace</Title>
          <P>Life Science | Venture</P>
        </InfoContainer>
      </Info>
      {/* <content>
        <summary>Experienced financial services professional with roles in venture capital and consulting. Skilled in the evaluation of life sciences investments with a keen interest in synthetic biology and senescence. Academic background in genetics and biotech.</summary>
      </content> */}
    </IntroContainer>
  )
}
