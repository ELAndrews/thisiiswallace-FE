import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/header";
import IntroPage from "./components/introPage";
import Bio from "./components/bio";
import Pubs from "./components/pubs";
import Contact from "./components/contact"
import Footer from "./components/footer";
import { AppContainer } from "./components/styling/globalStyleComponents"


export default function App() {

  return (
    <AppContainer className="App">
      <Header />
      <Route exact path="/" component={IntroPage} />
      <Route path="/bio" component={Bio} />
      <Route path="/publications" component={Pubs} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </AppContainer>
  );
}

