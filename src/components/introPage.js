import React, { useEffect } from "react";
import DotNav from "./dotNav";
import { BaseContainer, Content } from "./styling/globalStyleComponents";
import { IntroContainer, Info, Img, InfoContainer, Title, P } from "./styling/introPageStyling";
import { useStyles, Summary, Cards, CardsEd, Media, CardContent, Divider, H1, H2 } from "./styling/bioStyling";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';



export default function IntroPage() {
  const classes = useStyles();


  return (
    <IntroContainer className="introPageContainer">
      <DotNav fields={["intro", "positions", "publications", "education", "contact"]} />
      <div id="intro"></div>
      <Info className="canvas">
        <Img src="https://github.com/ELAndrews/thisiiswallace-FE/blob/develop/thisiswallace-app/public/img/profile.jpeg?raw=true" alt="Wallace profile picture" />
        <InfoContainer className="introPageInfo">
          <Title>Wallace</Title>
          <P>Life Science | Venture</P>
        </InfoContainer>
      </Info>
      <Summary>
        <summary>Experienced financial services professional with roles in venture capital and consulting. Skilled in the evaluation of life sciences investments with a keen interest in synthetic biology and senescence. Academic background in genetics and biotech.</summary>
      </Summary>
      <div id="positions">
        <BaseContainer>
          <Content>
            <H2>Key Positions</H2>
            <Divider />
            <Cards>
              <Card className={classes.root}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    M Ventures <br />Associate
                                </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    2018 - Present
                                </Typography>
                  <Typography variant="body2" component="p" className={classes.p}>
                    Investing across life science with a particular interest in enabling technologies of synthetic biology, single-cell analysis, gene editing, gene &amp; cell therapies and multi-omics.
                                </Typography>
                </CardContent>
              </Card>
              <Card className={classes.root}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Accenture UKI<br />Consultant
                                </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    2014 - 2017
                                </Typography>
                  <Typography variant="body2" component="p" className={classes.p}>
                    Broad experience serving financial service clients as part of both the business strategy and strategy operation groups.
                                </Typography>
                </CardContent>
              </Card>
            </Cards>
          </Content>
        </BaseContainer>
      </div>
      <BaseContainer>
        <Content>
          <H2>Education</H2>
          <Divider />
          <CardsEd>
            <Card className={classes.rootEd}>
              <div id="edCards">
                <Media>
                  <CardMedia
                    className={classes.img}
                    component="img"
                    alt="Cambridge University"
                    image="https://static.wixstatic.com/media/571e14_2f7ec6a9946441cea3100030875bd38f~mv2_d_1200_1391_s_2.png/v1/fill/w_280,h_318,al_c,q_85,usm_0.66_1.00_0.01/571e14_2f7ec6a9946441cea3100030875bd38f~mv2_d_1200_1391_s_2.webp"
                    title="Cambridge University"
                  />
                </Media>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    University of Cambridge <br /> MPhil Bioscience Enterprise
                                </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    2017 - 2018
                                </Typography>
                  <Typography variant="body2" component="p" className={classes.p}>
                    Multi-disciplinary biotech and business degree. Strategy, healthcare economics, partnerships &amp; alliances, valuations, IB and venture financing.
                                </Typography>
                </CardContent>
              </div>
            </Card>
            <Card className={classes.rootEd}>
              <div id="edCards">
                <Media>
                  <CardMedia
                    className={classes.img}
                    component="img"
                    alt="Cambridge University"
                    image="https://static.wixstatic.com/media/571e14_8d0638938c6444d8990402aa5ecad454~mv2.png/v1/fill/w_302,h_362,al_c,q_85,usm_0.66_1.00_0.01/571e14_8d0638938c6444d8990402aa5ecad454~mv2.webp"
                    title="Cambridge University"
                  />
                </Media>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    University of York <br />BSc Genetics
                                </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    2010 - 2014
                                </Typography>
                  <Typography variant="body2" component="p" className={classes.p}>
                    Encompassed the molecular studies of genes and genetic engineering. Included topics from human genetics and disease, population dynamics and ancient DNA.
                            </Typography>
                </CardContent>
              </div>
            </Card>
          </CardsEd>
        </Content>
      </BaseContainer>
    </IntroContainer>
  )
}
