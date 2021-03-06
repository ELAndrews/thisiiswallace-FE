import React from "react";
import { Content, Shadow, ShowBtn } from "./styling/globalStyleComponents";
import { IntroContainer, Info, Img, InfoContainer, Title, P, Summary, Icon, BaseContainer, Point, Points, PP, ArticleContainer, ACard, AImg, useStyles, CardC, AImgContainer } from "./styling/introPageStyling";
import { CardContent, Divider, H1, H2 } from "./styling/bioStyling";
import CardActions from '@material-ui/core/CardActions';
import Brain from "../assets/imgs/brain.png";
import Book from "../assets/imgs/book.png";
import Globe from "../assets/imgs/globe.png";
import Cog from "../assets/imgs/marketing.png";
import Cert from "../assets/imgs/medal.png";
import Think from "../assets/imgs/library.png";
import Profile from "../assets/imgs/profile.jpeg";
import { blog } from "../assets/data"




export default function IntroPage(props) {
  const classes = useStyles();


  return (
    <div>
    <IntroContainer className="introPageContainer">
      <div id="intro"></div>
      <div id="introCanvas">
        <Info className="introbox">
          <Img src={Profile} alt="Wallace profile picture" />
          <InfoContainer className="introPageInfo">
            <Title>Wallace</Title>
            <P>LS X VC</P>
          </InfoContainer>
        </Info>
      </div>
      <Shadow>LS X VC</Shadow>
      <div id="divider"></div>
      <Summary>Experienced financial services professional with roles in venture capital and consulting. Skilled in the evaluation of life sciences investments with a keen interest in synthetic biology and senescence. Academic background in genetics and biotech.</Summary>
      <BaseContainer>
        <Content>
          <H2>Key Stats</H2>
          <Points>
            <Point>
              <Icon src={Globe} alt="globe" />
              <CardContent>
                <h4>M Ventures | Associate</h4>
                <PP>Investing across life science with a particular interest in enabling technologies of synthetic biology, single-cell analysis, gene editing, gene &amp; cell therapies and multi-omics.</PP>
              </CardContent>
            </Point>
            <Point>
              <Icon src={Cert} alt="book" />
              <CardContent>
                <h4>University of Cambridge | MPhil Bioscience Enterprise</h4>
                <PP>Multi-disciplinary biotech and business degree. Strategy, healthcare economics, partnerships &amp; alliances, valuations, IB and venture financing.</PP>
              </CardContent>
            </Point>
            <Point>
              <Icon src={Brain} alt="brain" />
              <CardContent>
                <h4>Lorem ipsum | Lorem ipsum</h4>
                <PP>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</PP>
              </CardContent>
            </Point>
            <Point>
              <Icon src={Cog} alt="book" />
              <CardContent>
                <h4>Lorem ipsum | Lorem ipsume</h4>
                <PP>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</PP>
              </CardContent>
            </Point>
            <Point>
              <Icon src={Book} alt="globe" />
              <CardContent>
                <h4>Lorem ipsum | Lorem ipsum</h4>
                <PP>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</PP>
              </CardContent>
            </Point>
            <Point>
              <Icon src={Think} alt="book" />
              <CardContent>
                <h4>Lorem ipsum | Lorem ipsume</h4>
                <PP>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</PP>
              </CardContent>
            </Point>
          </Points>
        </Content>
      </BaseContainer>
      {/* <BaseContainer id="activity">
        <Content>
          <Divider />
          <H2>Activity</H2>
          <ArticleContainer>
            {
              blog.map((curr, index) => {
                return (
                  <ACard>
                    <CardC>
                      <h3>
                        {curr.title}
                      </h3>
                      <PP>
                        {curr.date}
                      </PP>
                      <PP>
                        {curr.summary}
                      </PP>
                      <CardActions>
                        <ShowBtn size="small" id="learnBtn" value={curr.id} onClick={props.handleClick}>
                          Show More
                      </ShowBtn>
                      </CardActions>
                    </CardC>
                    <AImgContainer>
                      <AImg
                        src="https://images.unsplash.com/photo-1578496479531-32e296d5c6e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                      />
                    </AImgContainer>
                  </ACard>
                )
              })
            }
          </ArticleContainer>
        </Content>
      </BaseContainer> */}
    </IntroContainer>
    <div id="dividerEnd"></div>
    </div>
  )
}
