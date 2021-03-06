import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Project1 from "../../components/projects/Project1/Project1";
import Project2 from "../../components/projects/Project2/Project2";
import Project3 from "../../components/projects/Project3/Project3";
import Project4 from "../../components/projects/Project4/Project4";
import Project5 from "../../components/projects/Project5/Project5";
import Project6 from "../../components/projects/Project6/Project6";
import Movieferee from "./project1.png";
import Kringle from "./project2.png";
import Bandstand from "./project3.png";
import TechBlog from "./project4.png";
import Budget from "./project5.png";
import Tracker from "./project6.png";

import "./portfolio.css"

function Portfolio() {
    return(
        <article className="block" id="portfolio">
          <Row>
            <div id="header">Portfolio</div>
          </Row>
          <Row>
            <div id="header2">Click the title buttons to learn more!</div>
          </Row>
            <Row>
            <Col xl="6"><Card className="project-card" style={{ width: '35rem' }}> 
              <Card.Img variant="top" src={Movieferee} id="Movieferee"/>
              <Card.Body>
                <Project1 />
              </Card.Body>
            </Card></Col>

            <Col xl="6"><Card className="project-card" style={{ width: '35rem' }}>
              <Card.Img variant="top" src={Kringle} id="Kringle"/>
              <Card.Body>
                <Project2 />
              </Card.Body>
            </Card></Col> 
            </Row>

            <Row>
            <Col xl="6"><Card className="project-card" style={{ width: '35rem' }}>
              <Card.Img variant="top" src={Bandstand} id="Bandstand"/>
              <Card.Body>
                <Project3 />
              </Card.Body>
            </Card></Col> 

            
            <Col xl="6"><Card className="project-card" style={{ width: '35rem' }}>
              <Card.Img variant="top" src={TechBlog} id="TechBlog"/>
              <Card.Body>
                <Project4 />
              </Card.Body>
            </Card></Col> 
            </Row>

            <Row>
            <Col xl="6"><Card className="project-card" style={{ width: '35rem' }}>
              <Card.Img variant="top" src={Budget} id="Budget"/>
              <Card.Body>
                <Project5 />
              </Card.Body>
            </Card></Col>

            <Col xl="6"><Card className="project-card" style={{ width: '35rem' }}>
              <Card.Img variant="top" src={Tracker} id="Tracker"/>
              <Card.Body>
                <Project6 />
              </Card.Body>
            </Card></Col>  
            </Row>
            
        </article>
    )
};

export default Portfolio;