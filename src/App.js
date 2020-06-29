import React, { useState, useEffect } from "react";
import { Route, useHistory, Redirect } from "react-router-dom";
import { AppContainer } from "./components/styling/globalStyleComponents";
import Header from "./components/header";
import IntroPage from "./components/introPage";
import Bio from "./components/bio";
import Pubs from "./components/pubs";
import Article from "./components/articlePage";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Login from "./components/login.js";
import { blog } from "./assets/data"


export default function App() {

  const history = useHistory()

  const [articleID, setArticleID] = useState()
  const [allArticles, setAllArticles] = useState(blog)

  const [article, setArticle] = useState()

  useEffect(() => {
    //axios request
  }, [])

  useEffect(() => {
    if (!article || history.location.pathname.split("/").slice(-1)[0] !== articleID) {
      //axios request to get blog post
      const id = history.location.pathname.split("/").slice(-1)[0]
      setArticleID(id)
      const art = blog.filter(curr => curr.id == id)
      setArticle(art[0])
    }
  }, [history.location.pathname])


  const handleClick = e => {
    history.push(`/publications/${e.target.value}`)
  }


  return (
    <AppContainer className="App">
      <Header />
      <Route exact path="/" render={props => <IntroPage handleClick={handleClick} />} />
      <Route path="/bio" component={Bio} />
      <Route exact path="/publications" render={props => <Pubs setArticle={setArticleID} allArticles={allArticles} handleClick={handleClick} />} />
      <Route path={`/publications/${articleID}`} render={props => <Article handleClick={handleClick} article={article} allArticles={allArticles} history={history} />} />
      <Route path="/contact" component={Contact} />
      <Route exact path="/nothing-to-see-here" component={Login} />
      <Route path="/nothing-to-see-here/dashboard" render={() => !localStorage.getItem("wallaceToken") ? <Redirect to="/" /> : <Route path="/nothing-to-see-here/dashboard" component={Login} />} />
      <Footer />
    </AppContainer>
  );
}

