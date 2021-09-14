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
            
            <Col xl="4"><Card style={{ width: '40rem' }}> 
              <Card.Img variant="top" src={Movieferee} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Project1 />
              </Card.Body>
            </Card></Col>

            <Col xl="4"><Card style={{ width: '40rem' }}>
              <Card.Img variant="top" src={Kringle} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Project2 />
              </Card.Body>
            </Card></Col> 

            <Col xl="4"><Card style={{ width: '40rem' }}>
              <Card.Img variant="top" src={Bandstand} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Project3 />
              </Card.Body>
            </Card></Col> 

        </Row></article>
    )
};

export default Portfolio;