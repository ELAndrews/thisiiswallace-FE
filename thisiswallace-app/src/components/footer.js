import React from "react";
import { Link } from 'react-router-dom';
import { FooterContainer, LinkContainer, TweetContainer } from "./styling/footerStyling";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DraftsIcon from '@material-ui/icons/Drafts';



export default function Footer() {



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
