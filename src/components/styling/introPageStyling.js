import styled from 'styled-components';
import { SOLID, MEDIA } from "./variables"
import { makeStyles } from '@material-ui/core/styles';

export const IntroContainer = styled.div`
    margin-bottom: -200px;
    padding: 50px 0px 0px;

    @media (max-width: ${MEDIA.TABLET}) {
        padding-top: 50px;
    }  
`;

export const BaseContainer2 = styled.div`
    width: 100vw;
    padding: 10px 0px 0px;
    background-color: ${SOLID.OFF_WHITE};
    text-align: center;
    z-index: 2;
`;

export const Info = styled.div`
    max-width: 900px;
    height: 350px;
    display: flex; 
    padding: 2%;
    flex-direction: row-reverse;
    margin: -70px auto 0px;
    justify-content: space-between;
    z-index: -1;

    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        flex-direction: column-reverse;
        margin: 0px auto;
        margin-top: -80px;
        margin-left: -50px;
        width: 100vw;
    }
`;

export const Img = styled.img`
    height: 275px;
    z-index: 1;

    @media (max-width: ${MEDIA.TABLET}) {
        height: 275px;
        margin: 0px auto;
    }
`;

export const InfoContainer = styled.div`
    color: ${SOLID.OFF_WHITE};
    width: 600px;
    height: 150px;
    text-align: center;
    margin: 0px auto;
    position: relative; 
    left: 30px;
    bottom: 100px;
    z-index: 1;

    @media (max-width: ${MEDIA.TABLET}) {
        width: 300px;
        height: 150px;
        left: 0px;
        margin: 0px auto;
    }

    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        width: 300px;
        height: 15px;
        bottom: 130px;
        margin: 0px auto;
    }

    @media (max-width: ${MEDIA.MOBILE}) {
        width: 100%;
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

    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        position: relative;
        bottom: 25px;
    }
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
    bottom: 380px;
    z-index: 4;

    @media (max-width: ${MEDIA.TABLET}) {
        bottom: 400px;
        padding: 0px 0px 50px;
        width: 80%;
        margin: 20px auto;
    }

    @media (max-width: ${MEDIA.MOBILE}) {
        font-size: 0.9rem;
        margin: 20px auto;
        bottom: 420px;
        padding: 0px 0px 50px;
    }
`;

export const BaseContainer = styled.div`
    position: relative;
    bottom: 320px;
    text-align: center;
    z-index: 4;
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
    padding: 20px;
    
    &:hover {
        background-color: white;
    }

    @media (max-width: ${MEDIA.TABLET}) {
        flex-direction: column;
    }
`;
export const CardC = styled.div`
    width: 70%;

    @media (max-width: ${MEDIA.TABLET}) {
        width: 100%
    }
`;