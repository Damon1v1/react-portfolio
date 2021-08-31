import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Aboutme from "./pages/aboutme/aboutme";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Contact from "./pages/contact/Contact";
import Portfolio from "./pages/portfolio/Portfolio";

function App() {
  return (
    <Router>
      <Header/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Aboutme} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
