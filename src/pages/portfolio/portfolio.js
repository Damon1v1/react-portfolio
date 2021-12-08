import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Project1 from "../../components/projects/Project1/Project1";
import Project2 from "../../components/projects/Project2/Project2";
import Project3 from "../../components/projects/Project3/Project3";
import Movieferee from "./project1.png";
import Kringle from "./project2.png";
import Bandstand from "./project3.png";
import "./portfolio.css"

function Portfolio() {
    return(
        <article className="block" >
          <Row>
            <div id="PortfolioHead">Portfolio</div>
          </Row>
          <Row>
            
            <Col xl="4"><Card className="project-card" style={{ width: '40rem' }}> 
              <Card.Img variant="top" src={Movieferee} />
              <Card.Body>
                <Project1 />
              </Card.Body>
            </Card></Col>

            <Col xl="4"><Card className="project-card" style={{ width: '40rem' }}>
              <Card.Img variant="top" src={Kringle} />
              <Card.Body>
                <Project2 />
              </Card.Body>
            </Card></Col> 

            <Col xl="4"><Card className="project-card" style={{ width: '40rem' }}>
              <Card.Img variant="top" src={Bandstand} />
              <Card.Body>
                <Project3 />
              </Card.Body>
            </Card></Col> 
        </Row></article>
    )
};

export default Portfolio;