import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Aboutme from "./pages/aboutme/Aboutme";
import Contact from "./pages/contact/Contact";
//import WebsiteBG from "./websitebg";




function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Aboutme} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
