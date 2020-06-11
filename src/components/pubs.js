import React from "react";
import { PubsContainer, H1, H2, ArticleContainer, ACard, PP, CardC, AImgContainer, AImg } from "./styling/pubsStyling";
import Particles from 'react-particles-js';
import { blog } from "../assets/data"
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';



export default function Work() {

    const handleClick = e => {
        console.log(e)
    }

    return (
        <PubsContainer>
            <H1>Publications and Research</H1>
            <ArticleContainer>
                <H2>Latest Research</H2>
                {
                    blog.map((curr, index) => {
                        return (
                            <ACard>
                                <CardC>
                                    <h5>
                                        {curr.title}
                                    </h5>
                                    <PP>
                                        {curr.date}
                                    </PP>
                                    <PP>
                                        {curr.summary}
                                    </PP>
                                    <CardActions >
                                        <Button size="small" className="learnBtn" onClick={handleClick} id={curr.title} >
                                            Show More
                      </Button>
                                    </CardActions>
                                </CardC>
                                <AImgContainer>
                                    <AImg
                                        src={curr.img}
                                    />
                                </AImgContainer>
                            </ACard>
                        )
                    })
                }
            </ArticleContainer>
        </PubsContainer>
    )
}

{/* <Particles
    params={{
        "fps_limit": 28,
        "particles": {
            "number": {
                "value": 200,
                "density": {
                    "enable": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 30,
                "opacity": 0.4
            },
            "move": {
                "speed": 1
            },
            "opacity": {
                "anim": {
                    "enable": true,
                    "opacity_min": 0.05,
                    "speed": 2,
                    "sync": false
                },
                "value": 0.4
            },

        },
        "polygon": {
            "debug": true,
            "enable": true,
            "scale": 0.5,
            "type": "inline",
            "move": {
                "radius": 10
            },
            "url": {
                "src": '../assets/imgs/dna-strand.svg',
                "width": 100,
                "height": 100
            },
            "inline": {
                "arrangement": "equidistant"
            },
            "draw": {
                "enable": true,
                "stroke": {
                    "color": "white"
                }
            }
        },
        "retina_detect": false,
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                }
            },
            "modes": {
                "bubble": {
                    "size": 6,
                    "distance": 40
                }
            }
        }
    }} /> */}

    // https://rpj.bembi.org/#mask