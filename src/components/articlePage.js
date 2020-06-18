import React from "react";
import { PubsContainer, ArticleTitle, ArticleDate, ArticleContainer, ACard, PP, CardC, AImgContainer, AImg, ArticleCon, ArticleImg, ArticleSummary, ArticleText, ArtImg, BackBtn } from "./styling/pubsStyling";
import { ShowBtn, UpBtn } from "./styling/globalStyleComponents";
import CardActions from '@material-ui/core/CardActions';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

export default function Article(props) {

    const posts = props.allArticles == undefined ? undefined : props.allArticles.filter(curr => curr.id !== props.article.id)

    const handleScrollUp = e => {
        console.log(e)
        window.scrollTo(0, 0);

    }

    return (
        <PubsContainer>
            <BackBtn to="/publications">
                Back
                      </BackBtn>
            <ArticleCon id="top" >
                {
                    props.article == undefined ?
                        <p>Loading...</p>
                        :
                        <div>
                            <ArticleTitle>{props.article.title}</ArticleTitle>
                            <ArticleDate>{props.article.date}</ArticleDate>
                            <ArticleSummary>{props.article.summary}</ArticleSummary>
                            <ArticleImg><ArtImg src={props.article.img} /></ArticleImg>
                            <ArticleText>{props.article.text}</ArticleText>
                        </div>

                }
            </ArticleCon>
            <ArticleContainer>
                {
                    posts == undefined ?
                        <p>Loading...</p>
                        :
                        posts.map((curr, index) => {
                            if (index <= 5) {
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
                            }
                        })
                }
            </ArticleContainer>
            <UpBtn onclick={handleScrollUp}> <KeyboardArrowUpIcon className="icon" /></UpBtn>
        </PubsContainer >
    )
}