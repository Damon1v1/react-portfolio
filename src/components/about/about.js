import React from "react";
import {Card, Button} from "react-bootstrap";
import "./about.css";

function About() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
                    Web developer from a food service background consolidating leadership, teamwork skills, 
                    and quick problem solving ability from a fast-paced work environment to build a sleek and 
                    intuitive user experience on the web. Helped my restaurant achieve the fastest service times company wide 
                    in the third fiscal quarter of 2020 and number one overall restaurant in quarter four. I enjoy working in an 
                    environment where I can count on my co-workers and they can count on me to solve real-world problems. 
                    Education and certifications in full-stack development and computer information systems from 
                    University of California Irvine and Lewis & Clark Technical School. Skills in HTML, CSS, JavaScript, and Python..
          </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    );
}

export default About;