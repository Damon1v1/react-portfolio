import {React, Component } from "react";
import {ButtonGroup, Button, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Contact from "../../pages/contact/Contact";
import "./links.css"


class Links extends Component {
  state={
    visible: false
  };
    
    render() {
      return (
      <div>
        {this.state.visible ? <Contact />: null }
        <Row>
          <h1> Get in touch with me! </h1>
        </Row>

        <Row>
          <ButtonGroup size="lg" className="mb-2">
            <Button variant="dark" size="sm" href="https://github.com/Damon1v1"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Github </Button>
            <Button variant="dark" size="sm" href="https://www.linkedin.com/in/damon-burda-4ab6a01b7/"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> LinkedIn</Button>
            <Button variant="dark" style={{ float: "right" }} onClick={() => {
              this.setState({ visible: !this.state.visible });
            }}>Contact Me</Button>
          </ButtonGroup>
        </Row>
      </div>
    );
  };
}

export default Links;
