import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HeaderContainer, Logo, NavLinks, Info, Img, InfoContainer, Title, P, useStyles, BurgerList, DesktopMenu, MobileMenu } from "./styling/headerStyling";
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export default function Header() {

  const location = useLocation()
  const classes = useStyles();
  const theme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  useEffect(() => {
    if (location.pathname === "/") {
      document.getElementById("logoContainer").style.display = "none";
      document.getElementById("headerContainer").style.justifyContent = "flex-end";
    } else {
      document.getElementById("logoContainer").style.display = "block";
      document.getElementById("headerContainer").style.justifyContent = "space-between";
    }
  }, [location.pathname])

  const toggleDrawer = (side, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideMenu = side => (
    <div>
      <div className={classes.drawerHeader}>
        <IconButton onClick={toggleDrawer('right', false)}>
          {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        <BurgerList>
          <NavLinks exact to="/" onClick={toggleDrawer('right', false)}>HOME</NavLinks>
        </BurgerList>
        <Divider />
        <BurgerList>
          <NavLinks to="/bio" onClick={toggleDrawer('right', false)}>BIO</NavLinks>
        </BurgerList>
        <Divider />
        <BurgerList>
          <NavLinks to="/publications" onClick={toggleDrawer('right', false)}>RESEARCH 	&amp; PUBLICATIONS</NavLinks>
        </BurgerList>
        <Divider />
        <BurgerList>
          <NavLinks to="/contact" onClick={toggleDrawer('right', false)}>CONTACT</NavLinks>
        </BurgerList>
      </List>
    </div>
  )


  return (
    <HeaderContainer id="headerContainer">
      <Logo id="logoContainer">
        <Info className="canvas">
          <Img src="https://github.com/ELAndrews/thisiiswallace-FE/blob/develop/thisiswallace-app/public/img/profile.jpeg?raw=true" alt="Wallace profile picture" />
          <InfoContainer className="introPageInfo">
            <Title>Wallace</Title>
            <P>LS X VC</P>
          </InfoContainer>
        </Info>
      </Logo>
      <DesktopMenu>
        <NavLinks exact to="/">HOME</NavLinks>
        <NavLinks to="/bio">BIO</NavLinks>
        <NavLinks to="/publications">RESEARCH 	&amp; PUBLICATIONS</NavLinks>
        <NavLinks to="/contact">CONTACT</NavLinks>
      </DesktopMenu>
      {/* Header media query burger menu */}
      <MobileMenu>
        <button id="burger" onClick={toggleDrawer('right', true)}><MenuIcon /></button>
        <SwipeableDrawer
          anchor="right"
          open={state.right}
          onClose={toggleDrawer('right', false)}
          onOpen={toggleDrawer('right', true)}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          {sideMenu('right')}
        </SwipeableDrawer>
      </MobileMenu>
    </HeaderContainer>
  );
}
