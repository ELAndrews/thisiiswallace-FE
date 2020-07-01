import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles, BioContainer, Summary, Cards, CardsEd, Media, H1, H2, Divider, Img, BaseContainerB, Statement, ExperienceContainer, EducationContainer, AwardsContainer, ImgContainer, ExCard, ExImg, Icon, ResearchContainer, ReCard, ReImg, EdImg, ACard, Desktop, Mobile, H2Btn, Awards, PartContainer, BaseContainerA } from "./styling/bioStyling";
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
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Particles from 'react-particles-js';


export default function Bio() {
    const classes = useStyles();

    const handleClick = e => {
        e.preventDefault()
        console.log(e.target.id)
        if (document.getElementById(e.target.id).classList.contains("activeOpenBtn") === false) {
            document.getElementById(e.target.id).classList.add("activeOpenBtn")
            document.getElementById(`${e.target.id}Info`).style.display = "block"
        } else {
            document.getElementById(e.target.id).classList.remove("activeOpenBtn")
            document.getElementById(`${e.target.id}Info`).style.display = "none"
        }

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
                <BaseContainerA>
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
                    <AwardsContainer>
                    <H2>{'Prizes \& Awards'}</H2>
                    <Divider />
                    <Awards>
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
                        </Awards>
                    </AwardsContainer>
                </BaseContainerA>
            </Desktop>
            {
                // Mobile VIEW
            }
                <PartContainer>
                        <Particles id="myParticles"
                            params={{
                                "particles": {
                                    "number": {
                                        "value": 150
                                    },
                                    "move": {
                                        "speed": 1
                                    },
                                    "size": {
                                        "value": 4
                                    },
                                    "color": {
                                        "value": "#FFFFFF"
                                    },
                                    "line_linked": {
                                        "color": "#FFFFFF"
                                    },
                                }
                            }} />
                    </PartContainer>
            <Mobile>
                <BaseContainerB>
                    <Icon src={Globe} alt="globe" />
                    <H2 value="experience">Professional Experience</H2>
                    <H2Btn onClick={handleClick} id="experience" className="openBtn" >
                    </H2Btn>
                    <KeyboardArrowDownIcon id="experienceBtn" className="btnIcon openBtn" />
                    <Divider />
                    <ExperienceContainer id="experienceInfo">
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
                    <H2Btn onClick={handleClick} id="research" className="openBtn">
                    </H2Btn>
                    <KeyboardArrowDownIcon id="researchBtn" className="btnIcon openBtn" />
                    <Divider />
                    <ResearchContainer id="researchInfo">
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
                    <H2Btn onClick={handleClick} id="education" className="openBtn">
                    </H2Btn>
                    <KeyboardArrowDownIcon id="educationBtn" className="btnIcon openBtn" />
                    <Divider />
                    <EducationContainer id="educationInfo">
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
                    <H2Btn onClick={handleClick} id="awards" className="openBtn">
                    </H2Btn>
                    <KeyboardArrowDownIcon id="awardsBtn" className="btnIcon openBtn" />
                    <Divider />
                    <AwardsContainer id="awardsInfo">
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

