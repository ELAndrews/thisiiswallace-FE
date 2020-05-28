import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles, BioContainer, Summary, Cards, CardsEd, Media, H1, H2, Divider, Img, BaseContainerB, Statement, ExperienceContainer, EducationContainer, AwardsContainer, ImgContainer, ExCard, ExImg, Icon, ResearchContainer, ReCard, ReImg, EdImg, ACard, Desktop, Mobile, H2Btn } from "./styling/bioStyling";
import { BaseContainer, Content, HeaderTriangle, Shadow } from "./styling/globalStyleComponents";
import Brain from "../assets/imgs/brain.png";
import Book from "../assets/imgs/book.png";
import Globe from "../assets/imgs/globe.png";
import Cog from "../assets/imgs/marketing.png";
import Cert from "../assets/imgs/medal.png";
import Think from "../assets/imgs/library.png";
import WallaceAmst from "../assets/imgs/wallaceAmst.jpeg";
import Circle from "../assets/imgs/circle.png";
import { bioData } from "../assets/data";

export default function Bio() {
    const classes = useStyles();

    const handleClick = e => {
        e.preventDefault()
        console.log(e.target.value)

    }

    return (
        <BioContainer>
            <HeaderTriangle />
            <Content>
                <Summary>
                    <H1>BIO</H1>
                </Summary>
            </Content>
            <ImgContainer>
                <Img src={WallaceAmst} alt="Wallace in Amsterdam" />
            </ImgContainer>
            <Statement>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with: “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Statement>
            {
                // DESKTOP VIEW
            }
            <Desktop>
                <BaseContainerB>
                    <Icon src={Globe} alt="globe" />
                    <ExperienceContainer>
                        <H2>Professional Experience</H2>
                        <Divider />
                        {
                            bioData.experience.map((curr, index) => {
                                return (
                                    <ExCard>
                                        <ExImg src={Circle} alt="point" />
                                        <span>{curr.position}</span>
                                        <span>{curr.company}</span>
                                        <span>{curr.dates}</span>
                                        <p>{curr.summary}</p>
                                    </ExCard>
                                )
                            })
                        }
                    </ExperienceContainer>
                    <Icon src={Brain} alt="globe" />
                    <ResearchContainer>
                        <H2>Research Experience</H2>
                        <Divider />
                        {
                            bioData.research.map((curr, index) => {
                                return (
                                    <ReCard>
                                        <div>
                                            <span>{curr.project}</span>
                                            <span>{curr.place}</span>
                                            <span>{curr.dates}</span>
                                            <span>{curr.position}</span>
                                            <p>{curr.summary}</p>
                                        </div>
                                        <ReImg src={Circle} alt="point" />
                                    </ReCard>
                                )
                            })
                        }
                    </ResearchContainer>
                    <Icon src={Book} alt="book" />
                    <EducationContainer>
                        <H2>Education</H2>
                        <Divider />
                        {
                            bioData.education.map((curr, index) => {
                                return (
                                    <ExCard>
                                        <EdImg src={Circle} alt="point" />
                                        <p>{curr.course}</p>
                                        <span>{curr.place}</span>
                                        <span>{curr.date}</span>
                                    </ExCard>
                                )
                            })
                        }
                    </EducationContainer>
                    <Icon src={Cert} alt="globe" />
                    <H2>{'Prizes \& Awards'}</H2>
                    <Divider />
                    <AwardsContainer>
                        {
                            bioData.awards.map((curr, index) => {
                                return (
                                    <ACard>
                                        <p>{curr.title}</p>
                                        <p>{curr.date}</p>
                                    </ACard>
                                )
                            })
                        }
                    </AwardsContainer>
                </BaseContainerB>
            </Desktop>
            {
                // Mobile VIEW
            }
            <Mobile>
                <BaseContainerB>
                    <Icon src={Globe} alt="globe" />
                    <H2 value="experience">Professional Experience</H2>
                    <H2Btn onClick={handleClick} value="experience">
                    </H2Btn>
                    <Divider />
                    <ExperienceContainer id="proex">
                        {
                            bioData.experience.map((curr, index) => {
                                return (
                                    <ExCard>
                                        <ExImg src={Circle} alt="point" />
                                        <span>{curr.position}</span>
                                        <span>{curr.company}</span>
                                        <span>{curr.dates}</span>
                                        <p>{curr.summary}</p>
                                    </ExCard>
                                )
                            })
                        }
                    </ExperienceContainer>
                    <Icon src={Brain} alt="globe" />
                    <H2 value="research">Research Experience</H2>
                    <H2Btn onClick={handleClick} value="research">
                    </H2Btn>
                    <Divider />
                    <ResearchContainer id="resexp">
                        {
                            bioData.research.map((curr, index) => {
                                return (
                                    <ReCard>
                                        <div>
                                            <span>{curr.project}</span>
                                            <span>{curr.place}</span>
                                            <span>{curr.dates}</span>
                                            <span>{curr.position}</span>
                                            <p>{curr.summary}</p>
                                        </div>
                                        <ReImg src={Circle} alt="point" />
                                    </ReCard>
                                )
                            })
                        }
                    </ResearchContainer>
                    <Icon src={Book} alt="book" />
                    <H2 value="education">Education</H2>
                    <H2Btn onClick={handleClick} value="education">
                    </H2Btn>
                    <Divider />
                    <EducationContainer id="ed">
                        {
                            bioData.education.map((curr, index) => {
                                return (
                                    <ExCard>
                                        <EdImg src={Circle} alt="point" />
                                        <p>{curr.course}</p>
                                        <span>{curr.place}</span>
                                        <span>{curr.date}</span>
                                    </ExCard>
                                )
                            })
                        }
                    </EducationContainer>
                    <Icon src={Cert} alt="globe" />
                    <H2 value="awards">{'Prizes \& Awards'}</H2>
                    <H2Btn onClick={handleClick} value="awards">
                    </H2Btn>
                    <Divider />
                    <AwardsContainer id="awards">
                        {
                            bioData.awards.map((curr, index) => {
                                return (
                                    <ACard>
                                        <p>{curr.title}</p>
                                        <p>{curr.date}</p>
                                    </ACard>
                                )
                            })
                        }
                    </AwardsContainer>
                </BaseContainerB>
            </Mobile>
        </BioContainer >
    );
}


{/* <BaseContainer>
<Icon src={Globe} alt="globe" />
<Content>
    <H2>Professional Experience</H2>
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
<BaseContainer>
<Icon src={Brain} alt="globe" />
<Content>
    <H2>Research Experience</H2>
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
<BaseContainer>
<Icon src={Book} alt="book" />
<Content>
    <H2>Education</H2>
    <Divider />
    <CardsEd>
        <Card className={classes.rootEd}>
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
        </Card>
        <Card className={classes.rootEd}>
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
        </Card>
    </CardsEd>
</Content>
</BaseContainer>
<BaseContainer>
<Icon src={Cert} alt="globe" />
<Content>
    <H2>{'Prizes \& Awards'}</H2>
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
</BaseContainer> */}