import React from "react";
import "./header.css";

function header() {
    return (
        <nav class="navbar navbar-expand-xl navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="index.html">Damon Burda</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto mt-0 mt-lg-1">
              <li class="nav-item active">
                <a class="nav-link" href="/home">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/portfolio">Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          {/* <!--End list--> */}
        </div>
        {/* <!--End container--> */}
      </nav>
    )
}

export default header;