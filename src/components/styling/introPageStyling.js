import styled from 'styled-components';
import { SOLID, MEDIA } from "./variables"
import { makeStyles } from '@material-ui/core/styles';

export const IntroContainer = styled.div`
    padding: 90px 0px 0px;

    @media (max-width: ${MEDIA.TABLET}) {
        padding-top: 50px;
    }
`;

export const BaseContainer2 = styled.div`
width: 100vw;
padding: 10px 0px 40px;
margin-top: -200px;
background-color: ${SOLID.OFF_WHITE};
text-align: center;
`;

export const Info = styled.div`
    max-width: 900px;
    height: 70vh;
    display: flex;
    flex-direction: row-reverse;
    margin: 50px auto 0px;
    justify-content: space-between;

    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        flex-direction: column-reverse;
        margin: 0px auto;
        height: 50vh;

    }
`;

export const Img = styled.img`
    height: 400px;
    float: right;
    z-index: 1;

    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        height: 275px;
        margin: 0px auto;
    }
`;

export const InfoContainer = styled.div`
    color: ${SOLID.OFF_WHITE};
    width: 600px;
    height: 150px;
    text-align: center;
    position: relative;
    left: 30px;
    z-index: 1;

    @media (max-width: ${MEDIA.TABLET}) {
        width: 300px;
        height: 15px;
        left: 0px;
        bottom: 80px;
        margin: 0px auto;
    }


`;

export const Title = styled.h1`
    color: ${SOLID.OFF_WHITE};
    letter-spacing: 4px;
    font-size: 3rem;
    margin-top: 150px;
`;

export const P = styled.p`
    color: ${SOLID.OFF_WHITE};
    letter-spacing: 4px;
    font-size: 0.7rem;
`;

export const Summary = styled.div`
    width: 60%;
    max-width: 600px;
    padding: 0px 50px 30px;
    margin: 0px auto;
    border-bottom: 5px solid ${SOLID.AQUA_BLUE};
    text-align: center;
    line-height: 1.6;
    position: relative;
    bottom:400px;
    z-index:2;
`;

export const BaseContainer = styled.div`
    position: relative;
    bottom: 320px;
    text-align: center;
    `;

export const Point = styled.div`
    display: flex;
    padding: 10px;
    margin: 20px;
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    background-color: white;
    border-radius: 10px;

    @media (max-width: ${MEDIA.TABLET}) {
        width: 90%;
    }
`;

export const Icon = styled.img`
    margin: 0px auto;
    height: 60px;
    position: relative;
    right: 35px;
    top: 25%;
`;

export const Points = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const PP = styled.p`
    font-size: 0.8rem;
    margin-bottom: 12px;
    text-align: left;
`;

export const ArticleContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 0px auto 30px;
`;

export const useStyles = makeStyles({
    root: {
        width: "40%",
        maxWidth: 600,
        minWidth: 300,
        margin: "10px",
    },
    media: {
        height: 140,
    },
});

export const AImgContainer = styled.div`
    height: 150px;
    width: 150px;
    overflow: hidden;
    margin: auto;
`;

export const AImg = styled.img`
    width: 200px;
`;

export const ACard = styled.div`
    display: flex;
    text-align: left;
    border-top: 2px solid ${SOLID.PASTEL};
    cursor: pointer;

    &:hover {
        background-color: white;
    }
`;
export const CardC = styled.div`
    width: 70%;
`;