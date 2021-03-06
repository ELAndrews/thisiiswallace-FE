import styled from 'styled-components';
import { SOLID, MEDIA } from "./variables";
import { NavLink } from "react-router-dom";

export const PubsContainer = styled.div`
    margin: 100px auto 0px;
    width: 90%;
    padding-bottom: 100px;
    background-color: ${SOLID.OFF_WHITE};
`;

export const H1 = styled.h2`
    text-align: center;
    color: ${SOLID.BLACK};
    margin: auto 20px;
    padding-top: 20px;
`;

export const H2 = styled.h4`
    width: 100%;
    background-color: ${SOLID.GREY};
    color: ${SOLID.OFF_WHITE};
    padding: 20px;
    position: relative;
    top: 20px;
`;

export const PP = styled.p`
    font-size: 0.7rem;
    margin-bottom: 12px;
    text-align: left;
`;

export const ArticleContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: stretch;
    margin: 0px auto 30px;
    max-width: 900px;
    `;


export const AImgContainer = styled.div`
    height: 150px;
    width: 150px;
    overflow: hidden;
    margin: auto 20px;

    `;

export const AImg = styled.img`
    width: 200px;

    @media (max-width: ${MEDIA.MOBILE}) {
        width: 100px;
    }
    `;

export const ACard = styled.div`
    display: flex;
    text-align: left;
    border-bottom: 2px solid ${SOLID.PASTEL};
    cursor: pointer;
    padding: 5px;
    background-color: white;
    width: calc(50% - 10px);
    min-width: 280px;
    
    &:hover {
        background-color: ${SOLID.OFF_WHITE};
    }

    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        width: 100%;
    }

    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        width: 100%;
    }
`;
export const CardC = styled.div`
    width: 100%;

    @media (max-width: ${MEDIA.TABLET}) {
        width: 100%
    }
`;

export const ArticleCon = styled.div`
    width: 90%;
    max-width: 900px;
    margin: 0px auto 40px;
`;

export const ArticleTitle = styled.h3`
`;

export const ArticleDate = styled.p`
    font-size: 10px;
    position: relative;
    bottom: 10px;
`;

export const ArticleImg = styled.div`
    width: 80%;
    height: 80px;
    overflow: hidden;
    margin: 0px auto;
`;

export const ArtImg = styled.img`
    width: 100%;
    position: relative;
    bottom: 50%;
`;

export const ArticleSummary = styled.p`
    font-size: 12px;
    font-style: italic;
`;

export const ArticleText = styled.p`
    font-size: 14px;
`;

export const BackBtn = styled(NavLink)`
    background-color: transparent;
    border: none;
    text-transform: uppercase;
    padding: 6px 8px;
    border-radius: 5px;
    text-decoration: none;
    color: black;
    font-size: 12px;
    position: relative;
    bottom: 10px;
    cursor: pointer;
`;