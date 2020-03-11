import styled from 'styled-components';
import { SOLID, MEDIA } from "./variables"

export const IntroContainer = styled.div`
    padding: 90px 0px 70px;
    background: url("https://github.com/ELAndrews/thisiiswallace-FE/blob/develop/public/img/blue-bacteria.jpeg?raw=true");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden;

    @media (max-width: ${MEDIA.TABLET}) {
        padding-top: 50px;
    }
`;

export const Info = styled.div`
    width: 80%;
    max-width: 700px;
    height: 70vh;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin: 0px auto;
    padding-bottom: 10vh;
    justify-content: space-around;

    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        flex-direction: column;
    }
`;

export const Img = styled.img`
    border: 30px solid ${SOLID.OFF_WHITE};
    height: 300px;
    border-radius: 50%;
    margin-top: 100px;
    float: right;
    z-index: 1;

    @media (max-width: ${MEDIA.TABLET}) {
        border: 20px solid ${SOLID.OFF_WHITE};
        height: 40vh;
        max-height: 250px;
    }

    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        margin: 75px auto 0px;
    }
`;

export const InfoContainer = styled.div`
    background-color: ${SOLID.OFF_WHITE};
    width: 400px;
    height: 150px;
    border-radius: 3px;
    text-align: center;
    position: relative;
    top: 50px;
    left: 30px;
    z-index: 0;

    @media (max-width: ${MEDIA.TABLET}) {
        width: 300px;
        height: 145px;
        margin: -20px auto;
        left: 41px;
    }

    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        margin: -20px auto 0px;
        position: static;
    }
`;

export const Title = styled.h1`
    color: ${SOLID.BLACK};
    letter-spacing: 4px;
    font-size: 2.5rem;
`;

export const P = styled.p`
    color: ${SOLID.BLACK};
    letter-spacing: 4px;
    font-size: 0.7rem;
`;

