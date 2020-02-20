import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/header";
import IntroPage from "./components/introPage";
import Bio from "./components/bio";
import Pubs from "./components/pubs";
import Contact from "./components/contact"
import Footer from "./components/footer";
import styled from 'styled-components';
import { SOLID } from "./components/styling/variables"

export default function App() {

  const Container = styled.div`
      background-color: ${SOLID.OFF_WHITE};
      width: 100vw;
      height: 100vh;
    `;

  return (
    <Container className="App">
      <Header />
      <Route exact path="/" component={IntroPage} />
      <Route path="/bio" component={Bio} />
      <Route path="/publications" component={Pubs} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </Container>
  );
}

