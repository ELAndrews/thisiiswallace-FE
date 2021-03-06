import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { FooterContainer, LinkContainer, TweetContainer } from "./styling/footerStyling";
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DraftsIcon from '@material-ui/icons/Drafts';

export default function Footer() {



  return (
    <FooterContainer>
      <LinkContainer>
        <a href="https://twitter.com/MxLWallace" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://www.linkedin.com/in/mxlwallace/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
        <a href="mailto:Wallace@thisiswallace.com">
          <DraftsIcon />
          </a>
      </LinkContainer>
      <TweetContainer>
        {/* TWEET */}
      </TweetContainer>
    </FooterContainer>
  );
}
