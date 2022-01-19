import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./pages/home/Home";
import Menu from "./components/Menu/Menu";
//import WebsiteBG from "./websitebg";




function App() {
  return (
      <div className="container">
      <Menu />
      <Home />
      </div>
    
  );
};

export default App;
