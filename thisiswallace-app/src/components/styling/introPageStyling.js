import styled from 'styled-components';
import { SOLID, MEDIA } from "./variables"

export const IntroContainer = styled.div`
    padding: 150px 0px 70px;
    background: url("https://github.com/ELAndrews/thisiiswallace-FE/blob/develop/thisiswallace-app/public/img/blue-bacteria.jpeg?raw=true");
    background-attachment: fixed;
    @media (max-width: ${MEDIA.TABLET}) {
        padding-top: 50px;
    }
`;

export const Info = styled.div`
    width: 100%;
    max-width: 700px;
    height: 65%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin: 0px auto;
    padding-bottom: 60px; 
    justify-content: space-around;

    @media (max-width: ${MEDIA.TABLET}) {
        flex-direction: column;
    }
`;

export const Img = styled.img`
    border: 30px solid ${SOLID.OFF_WHITE};
    height: 300px;
    border-radius: 50%;
    margin-top: 100px;
    float: right;

    @media (max-width: ${MEDIA.TABLET}) {
        border: 20px solid ${SOLID.OFF_WHITE};
        height: 40vh;
        max-height: 250px;
    }
`;

export const InfoContainer = styled.div`
    background-color: ${SOLID.OFF_WHITE};
    width: 400px;
    height: 150px;
    text-align: center;
    position: relative;
    top: 50px;
    left: 30px;

    @media (max-width: ${MEDIA.TABLET}) {
        width: 300px;
        height: 150px;
        margin: -20px auto;
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

