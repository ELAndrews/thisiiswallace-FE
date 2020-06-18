import React from "react";
import { useHistory } from "react-router-dom"
import { PubsContainer, H1, H2, ArticleContainer, ACard, PP, CardC, AImgContainer, AImg } from "./styling/pubsStyling";
import { ShowBtn } from "./styling/globalStyleComponents"
import { blog } from "../assets/data"
import CardActions from '@material-ui/core/CardActions';



export default function Work(props) {


    return (
        <PubsContainer>
            <H1>Publications and Research</H1>
            <ArticleContainer>
                <H2>Latest Research</H2>
                {
                    blog.map((curr, index) => {
                        return (
                            <ACard key={index}>
                                <CardC>
                                    <h5 onClick={props.handleClick}>
                                        {curr.title}
                                    </h5>
                                    <PP>
                                        {curr.date}
                                    </PP>
                                    <PP>
                                        {curr.summary}
                                    </PP>
                                    <CardActions value={curr.id} onClick={props.handleClick} >
                                        <ShowBtn size="small" className="learnBtn" value={curr.id} onClick={props.handleClick}>
                                            Show More
                      </ShowBtn>
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


    // https://rpj.bembi.org/#mask