import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { SOLID, MEDIA } from "./variables"


export const BioContainer = styled.div`
width: 100vw;
`;

export const Desktop = styled.div`
    @media (max-width: ${MEDIA.TABLET}) {
        display: none;
    }
`;

export const Mobile = styled.div`
    display: none;
    background-color: ${SOLID.OFF_WHITE};
    margin: 0px auto;
    padding: 30px;
    width: 60%;

    @media (max-width: ${MEDIA.TABLET}) {
        display: block
    }
`;

export const Summary = styled.div`
    width: 55%;
    padding: 20px;
    margin: 0px auto;
    text-align: center;
    position: relative;
    bottom: 150px;
    z-index: 3;
    `;

export const Cards = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 20px auto;
    `;

export const CardsEd = styled.div`
    width: 90%;
    margin: 20px auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    `;

export const Media = styled.div`
    padding: 20px;
    margin: auto 0px;
    
    `;

export const CardContent = styled.div`
    width: 90%;
    margin: 0px auto;
`;

export const H1 = styled.h1`
    color: white;
`;

export const H2 = styled.h2`
    text-align: center;
    z-index: 0;

    @media (max-width: ${MEDIA.TABLET}) {
        font-size: 1.4rem;
    }
`;

export const Divider = styled.div`
    width: 50%;
    max-width: 300px;
    border-bottom: 5px solid ${SOLID.AQUA_BLUE};
    margin: 0px auto 20px;
    `;

export const useStyles = makeStyles({
    root: {
        width: 'calc(50% - 200px)',
        minWidth: 275,
        maxWidth: 350,
        margin: '20px auto',
        textAlign: 'left',
        padding: 10
    },
    rootEd: {
        width: '80%',
        minWidth: 275,
        margin: '20px auto',
        textAlign: 'left',
        padding: 10
    },
    img: {
        minWidth: 70,
        maxWidth: 200,
        margin: '0px auto',
    },
    title: {
        fontSize: '1.6rem',
    },
    pos: {
        fontSize: '0.8 rem',
        marginBottom: 12,

    },
});

export const ImgContainer = styled.div`
    width: 35%;
    overflow: hidden;
    position: absolute;
    top: 80px;
    height: calc(100% - 80px);
    z-index: 0;

`;

export const Img = styled.img`
    height: 100vh;
    margin-left: -100px;
    z-index: 0;

    @media (max-width: ${MEDIA.TABLET}) {
        margin-left: -100px;
    }
`;

export const BaseContainerB = styled.div`
    width: 60%;
    position: relative;
    left: 25%;
    bottom: 60px;
    max-width: 700px;
    margin: 0px 0px 0px 10%;
    text-align: center;
    z-index: 1;

    @media (max-width: ${MEDIA.TABLET}) {
        width: 100%;
        left: 15%;
        bottom: 100px;
    }
`;

export const Statement = styled.div`
    text-align: center;
    padding: 40px;
    width: 50%;
    position: relative;
    left: 25%;
    bottom: 60px;
    max-width: 700px;
    margin: 0px 0px 0px 10%;
    text-align: center;
`;

export const ExperienceContainer = styled.div`
    margin: 20px auto;
    width: 90%;
    text-align: left;
    @media (max-width: ${MEDIA.TABLET}) {
        display: none;
    }
`;

export const ExCard = styled.div`
    border-left: 1px dashed ${SOLID.GREY};
    padding: 20px 20px 20px 40px;
`;

export const ExImg = styled.img`
    height: 30px;
    position: relative;
    right: 55px;
    top: 10px;
`;

export const ResearchContainer = styled.div`
    margin: 20px auto;
    text-align: left;
    @media (max-width: ${MEDIA.TABLET}) {
        display: none;
    }
`;

export const ReCard = styled.div`
    border-right: 1px dashed ${SOLID.GREY};
    padding: 20px 40px 20px 20px;
    display: flex;
    flex-direction: row;
`;

export const ReImg = styled.img`
    height: 30px;
    position: relative;
    left: 55px;
`;

export const EducationContainer = styled.div`
    margin: 20px auto;
    width: 90%;
    text-align: left;
    @media (max-width: ${MEDIA.TABLET}) {
        display: none;
    }
`;

export const EdImg = styled.img`
    height: 30px;
    position: relative;
    right: 55px;
    top: 45px;
`;

export const AwardsContainer = styled.div`
        margin: 20px auto;
    width: 90%;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    @media (max-width: ${MEDIA.TABLET}) {
        display: none;
    }
`;

export const ACard = styled.div`
    padding: 10px;
    margin: 10px;
`;

export const Icon = styled.img`
    margin: 0px auto;
    height: 50px;
`;

export const H2Btn = styled.button`
    cursor: pointer;
    height: 30px;
    width: 30px;
    z-index: 3;
    position: relative;
    left: 10px;
`;