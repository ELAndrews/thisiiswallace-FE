import { SOLID, MEDIA } from "./variables";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';


export const HeaderContainer = styled.div`
    width: 100vw;
    height: 80px;
    background-color: ${SOLID.OFF_WHITE};
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${SOLID.PASTEL};
    z-index: 2;
`;

export const DesktopMenu = styled.div`
@media (max-width: ${MEDIA.LARGE_MOBILE}) {
    display: none;
}

`;

export const MobileMenu = styled.div`
    display: none;

    @media (max-width: ${MEDIA.LARGE_MOBILE}) {
        display: block;
    }
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

// Mini logo image 

export const Logo = styled.div`
        width: 150px;
        text-align: center;
        margin-right: 10px;
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


// Menu Drawer

export const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
}));

export const BurgerList = styled.div`
    display: flex;
`;