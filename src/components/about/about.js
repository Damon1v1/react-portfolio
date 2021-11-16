import React from "react";
import {Card, Row, Col} from "react-bootstrap";
import Damon from "./Damon.png";
import Banner from "./Banner1.png";
import "./about.css";

function About() {
    return (
      [
        'Dark'
      ].map((variant, idx) => (
        <Card
          bg={variant.toLowerCase()}
          key={idx}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '100rem' }}
          className="mb-2"
          id="about"
        >
          <Row>
          <Col xs={3}><Card.Img src={Damon} className="portrait" style={{ height: "95%" }} /></Col>
          <Col xs={9}><Card.Img src={Banner} className="banner" style={{ height: "95%" }} /></Col>
          </Row>
            <Row><Card.Body>
            <Col xs={12}>
            <Card.Text style={{ fontSize: "1.5rem" }}>
                      Web developer from a food service background consolidating leadership, teamwork skills, 
                      and quick problem solving ability from a fast-paced work environment to build a sleek and 
                      intuitive user experience on the web. Helped my restaurant achieve the fastest service times company wide 
                      in the third fiscal quarter of 2020 and number one overall restaurant in quarter four. I enjoy working in an 
                      environment where I can count on my co-workers and they can count on me to solve real-world problems. 
                      Education and certifications in full-stack development and computer information systems from 
                      University of California Irvine and Lewis & Clark Technical School. Skills in HTML, CSS, JavaScript, and Python.
            </Card.Text></Col>
        </Card.Body></Row>
      </Card>
    ))
    );
}

export default About;