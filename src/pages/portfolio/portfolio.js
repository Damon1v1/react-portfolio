import React from "react";
import { Card,Button, Row, Col } from "react-bootstrap";
import Project1 from "../../components/projects/Project1";
import Project2 from "../../components/projects/Project2";
import Movieferee from "./project1.png";
import Kringle from "./project2.png";
import "./portfolio.css"
// import Project3 from "../../components/projects/project3"

function Portfolio() {
    return(
        <article className="block" >
            <Card style={{ width: '40rem' }}>
              <Card.Img variant="top" src={Movieferee} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Project1 />
              </Card.Body>
            </Card>


            <Card style={{ width: '40rem' }}>
              <Card.Img variant="top" src={Kringle} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Project2 />
              </Card.Body>
            </Card>

        </article>
    )
};

export default Portfolio;