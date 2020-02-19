import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/header";
import IntroPage from "./components/introPage";
import About from "./components/about";
import Work from "./components/work";
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
      <Route exact path="/about" component={About} />
      <Route path="/work" component={Work} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </Container>
  );
}

