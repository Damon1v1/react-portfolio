import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Aboutme from "./pages/aboutme/Aboutme";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contact/Contact";
import Portfolio from "./pages/portfolio/Portfolio";
import WebsiteBG from "./websitebg.jpg";



function App() {
  return (
    <Router>
      <Header/>
      <div className="container" style={{ backgroundImage: `url(${WebsiteBG})` }}>
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
