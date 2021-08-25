import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Aboutme from "./pages/aboutme/aboutme";
import Header from "./components/header/header";

function App() {
  return (
    <Router>
      <Header/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Aboutme} />
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
