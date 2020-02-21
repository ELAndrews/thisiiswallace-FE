import { SOLID } from "./variables";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';


export const HeaderContainer = styled.div`
    width: 100%;
    height: 90px;
    background-color: ${SOLID.OFF_WHITE};
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div`
    width: 150px;
    text-align: center;
    margin-right: 10px;
`;

export const NavLinks = styled(NavLink)`
    color: ${SOLID.BLACK};
    text-decoration: none;
    margin: auto 15px;
    letter-spacing: 2px;
    font-size: 0.7rem;
    text-underline-position: under;

    &:hover {
     text-decoration: underline;
    }
    &.active {
        text-decoration: underline;
        color: ${SOLID.AQUA_BLUE};
    }
`;

export const Info = styled.div`
    width:140px;
    height: 150px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-left: 30px;
    justify-content: space-around;
`;

export const Img = styled.img`
    border: 10px solid ${SOLID.OFF_WHITE};
    height: 60px;
    border-radius: 50%;
    float: right;
`;

export const InfoContainer = styled.div`
    background-color: ${SOLID.OFF_WHITE};
    width: 150px;
    height: 65px;
    text-align: center;
    margin-top: 10px;
`;

export const Title = styled.h1`
    color: ${SOLID.BLACK};
    letter-spacing: 2px;
    font-size: 0.8rem;
`;

export const P = styled.p`
    color: ${SOLID.BLACK};
    letter-spacing: 4px;
    font-size: 0.5rem;
`;