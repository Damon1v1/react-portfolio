import {React, Component } from "react";
import {ButtonGroup, Button, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./links.css"


class Links extends Component {
  state={
    visible: false
  };
    
    render() {
      return (
      <div id="contact">
        <Row>
          <h1> E-mail me at <a href="mailto: damonburda96@gmail.com">damonburda96@gmail.com</a> or
            get in touch with me here! </h1>
        </Row>

        <Row>
          <ButtonGroup size="lg" className="mb-2">
            <Button variant="dark" size="sm" id="btnText" href="https://github.com/Damon1v1"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Github </Button>
            <Button variant="dark" size="sm" id="btnText" href="https://www.linkedin.com/in/damon-burda-4ab6a01b7/"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> LinkedIn</Button>
          </ButtonGroup>
        </Row>
      </div>
    );
  };
}

export default Links;
