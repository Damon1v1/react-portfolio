import React from "react";
import {Card, Button, Container, Row, Col} from "react-bootstrap";
import Damon from "./Damon.jpg";
import Banner from "./Banner.png";
import "./about.css";

function About() {
    return (
        <Card style={{ width: '100rem' }}>
          <Row>
          <Col xs={4}><Card.Img src={Damon} /></Col>
          <Col xs={8}><Card.Img src={Banner} /></Col>
          </Row>
            <Card.Body>
            <Col xs={8}>
            <Card.Text>
                      Web developer from a food service background consolidating leadership, teamwork skills, 
                      and quick problem solving ability from a fast-paced work environment to build a sleek and 
                      intuitive user experience on the web. Helped my restaurant achieve the fastest service times company wide 
                      in the third fiscal quarter of 2020 and number one overall restaurant in quarter four. I enjoy working in an 
                      environment where I can count on my co-workers and they can count on me to solve real-world problems. 
                      Education and certifications in full-stack development and computer information systems from 
                      University of California Irvine and Lewis & Clark Technical School. Skills in HTML, CSS, JavaScript, and Python..
            </Card.Text></Col>
          <Button variant="dark" href="/contact">Contact Me</Button>
        </Card.Body>

      </Card>
    );
}

export default About;