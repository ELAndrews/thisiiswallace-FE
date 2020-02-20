import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DraftsIcon from '@material-ui/icons/Drafts';
import { SOLID } from "./styling/variables";
;


export default function Footer() {

  const FooterContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${SOLID.OFF_WHITE};
  position: absolute;
  bottom: 0px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

  const LinkContainer = styled.div`
    width: 195px;
    display: flex;
    justify-content: space-evenly;
    padding-left: 20px;

    a {
      color: ${SOLID.BLACK};

      &:hover {
        color: ${SOLID.AQUA_BLUE};
        transform: scale(1.2)
      }
    }
  `;

  const TweetContainer = styled.div`
    width: 130px;
    padding-right: 20px;
`;

  return (
    <FooterContainer>
      <LinkContainer>
        <a href="https://twitter.com/MxLWallace" target="_blank">
          <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com/in/mxlwallace/" target="_blank">
          <LinkedInIcon />
        </a>
        <Link to="/contact">
          <DraftsIcon />
        </Link>
      </LinkContainer>
      <TweetContainer>
        TWEET
        </TweetContainer>
    </FooterContainer>
  );
}
