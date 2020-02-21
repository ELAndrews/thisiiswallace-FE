import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { SOLID } from "./variables"


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

export const H1 = styled.h1`

`;

export const H2 = styled.h1`
    
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
        textAlign: 'left'
    },
    rootEd: {
        width: 'calc(45% - 10px)',
        minWidth: 375,
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