import styled from 'styled-components';
import { SOLID } from "./variables"



export const AppContainer = styled.div`
background-color: ${SOLID.OFF_WHITE};
width: 100vw;
height: 100vh;
overflow-x: hidden;
`;

export const BaseContainer = styled.div`
width: 100vw;
margin: 0px 0px;
padding: 10px 0px;
background-color: ${SOLID.OFF_WHITE};
text-align: center;
`;

export const Content = styled.div`
width: 80%;
max-width: 800px;
margin: -50px auto 10px;
`;

export const Icon = styled.img`
    margin: 0px auto;
    position: relative;
    bottom: 70px;
    height: 110px;
`;