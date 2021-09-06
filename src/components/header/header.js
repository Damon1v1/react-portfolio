import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./header.css";

function Header() {
    return (
        <nav className="navbar navbar-expand-xl navbar-dark">
        <div className="container">
          <a className="navbar-brand" href="index.html">Damon Burda</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto mt-0 mt-lg-1">
              <li className="nav-item active">
                <a className="nav-link" href="/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          {/* <!--End list--> */}
        </div>
        {/* <!--End container--> */}
      </nav>
    )
}

export default Header;