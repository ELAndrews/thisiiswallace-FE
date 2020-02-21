import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { SOLID } from "./variables"

export const useStyles = makeStyles({
    root: {
        width: 'calc(50% - 100px)',
        minWidth: 275,
        maxWidth: 350,
        margin: '10px auto',
        textAlign: 'left'
    },
    rootEd: {
        minWidth: 275,
        maxWidth: 500,
        margin: '20px auto',
        textAlign: 'left',
        display: 'flex',
    },
    img: {
        width: 100
    },
    title: {
        fontSize: '1.6rem',
    },
    pos: {
        fontSize: '0.8 rem',
        marginBottom: 12,
    },
});

export const BioContainer = styled.div`
width: 100%;
padding: 150px 0px 70px;
background: url("https://github.com/ELAndrews/thisiiswallace-FE/blob/develop/thisiswallace-app/public/img/cells.jpeg?raw=true");
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover;
`;

export const Summary = styled.div`
    background-color: ${SOLID.OFF_WHITE};
    width: 55%;
    padding: 20px;
    margin: 50px auto 0px;
    text-align: center;
`;

export const BaseContainer = styled.div`
    width: 100%;
    margin: 200px 0px;
    padding: 10px 0px 40px;
    background-color: ${SOLID.OFF_WHITE};
    text-align: center;
`;

export const Content = styled.div`
    width: 80%;
    max-width: 800px;
    margin: 0px auto;
`;

export const Cards = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    margin: 20px auto;
`;

export const CardsEd = styled.div`
    width: 80%;
    margin: 20px auto;
    justify-content: space-evenly;

`;

export const Media = styled.div`
    padding: 20px;
    margin: auto 0px;
`;

export const H1 = styled.h1`

`;

export const Divider = styled.div`
    width: 50%;
    max-width: 300px;
    border-bottom: 5px solid ${SOLID.AQUA_BLUE};
    margin: 0px auto 20px;
`;