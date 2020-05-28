import styled from 'styled-components';
import { SOLID, MEDIA } from "./variables"



export const AppContainer = styled.div`
background-color: ${SOLID.OFF_WHITE};
width: 100vw;
height: 100vh;
overflow-x: hidden;
`;

export const BaseContainer = styled.div`
width: 100vw;
margin: 200px 0px;
padding: 10px 0px 40px;
background-color: ${SOLID.OFF_WHITE};
text-align: center;
`;

export const Content = styled.div`
    width: 80%;
    max-width: 800px;
    margin: -50px auto 10px;
    z-index: 3;
`;

export const Icon = styled.img`
    margin: 0px auto;
    position: relative;
    bottom: 70px;
    height: 110px;
`;

export const HeaderTriangle = styled.div`
    border-top: 300px solid ${SOLID.BLACK};
    border-left: 200vw solid transparent;
    border-right: 0px solid transparent;
    border-bottom: 0px solid transparent;
    position: relative;
    top: 50px;
    right: 80vw;
    z-index: 1;
`;

export const Shadow = styled.div`
    color: white;
    text-align: center;
    font-size: 7rem;
    position: absolute;
    top: 55%;
    width: 100%;
    background-color: transparent;
    z-index: 2;

    @media (max-width: ${MEDIA.TABLET}) {
        font-size: 5rem;
    }

    @media (max-width: ${MEDIA.MOBILE}) {
        font-size: 3rem;
    }
`;

