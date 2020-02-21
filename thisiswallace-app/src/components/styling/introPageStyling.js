import styled from 'styled-components';
import { SOLID } from "./variables"

export const IntroContainer = styled.div`
    height: calc(100% - 100px);
    width: 100%;
    padding-top: 100px;
    background: url("https://github.com/ELAndrews/thisiiswallace-FE/blob/develop/thisiswallace-app/public/img/blue-bacteria.jpeg?raw=true");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
`;

export const Info = styled.div`
    width: 700px;
    height: 65%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin: 0px auto;
    justify-content: space-around;
`;

export const Img = styled.img`
    border: 30px solid ${SOLID.OFF_WHITE};
    height: 300px;
    border-radius: 50%;
    margin-top: 100px;
    float: right;
`;

export const InfoContainer = styled.div`
    background-color: ${SOLID.OFF_WHITE};
    width: 400px;
    height: 150px;
    text-align: center;
    position: relative;
    top: 50px;
    left: 30px;
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