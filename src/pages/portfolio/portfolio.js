import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Project1 from "../../components/projects/Project1";
import Project2 from "../../components/projects/Project2";
import Project3 from "../../components/projects/project3";
import Movieferee from "./project1.png";
import Kringle from "./project2.png";
import Bandstand from "./project3.png";
import "./portfolio.css"

function Portfolio() {
    return(
        <article className="block" ><Row>
            
            <Col xl="4"><Card className="project-card" style={{ width: '40rem' }}> 
              <Card.Img variant="top" src={Movieferee} />
              <Card.Body>
                <Card.Title style={{ fontSize:"2rem" }}>Movieferee</Card.Title>
                <Project1 />
              </Card.Body>
            </Card></Col>

            <Col xl="4"><Card className="project-card" style={{ width: '40rem' }}>
              <Card.Img variant="top" src={Kringle} />
              <Card.Body>
                <Card.Title style={{ fontSize:"2rem" }}>Release The Kringle!</Card.Title>
                <Project2 />
              </Card.Body>
            </Card></Col> 

            <Col xl="4"><Card className="project-card" style={{ width: '40rem' }}>
              <Card.Img variant="top" src={Bandstand} />
              <Card.Body>
                <Card.Title style={{ fontSize:"2rem" }}>Bandstand</Card.Title>
                <Project3 />
              </Card.Body>
            </Card></Col> 
        </Row></article>
    )
};

export default Portfolio;