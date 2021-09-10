import React from "react";
import {ButtonGroup, Button, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


function Links () {
    return (
      
      <div>
        <Row>
          <h1> Get in touch with me! </h1>
        </Row>

        <Row>
          <ButtonGroup size="lg" className="mb-2">
            <Button variant="dark" size="sm" href="https://github.com/Damon1v1"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Github </Button>
            <Button variant="dark" size="sm" href="https://www.linkedin.com/in/damon-burda-4ab6a01b7/"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> LinkedIn</Button>
            <Button variant="dark" href="/contact" style={{ float: "right" }}>Contact Me</Button>
          </ButtonGroup>
        </Row>
      </div>
  );
};

export default Links;
