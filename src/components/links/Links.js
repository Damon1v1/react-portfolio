import React from "react";
import {ButtonGroup, Button, Image} from "react-bootstrap";
import Github from "./github_badge.png";
import LinkedIn from "./linkedin_badge.png";

function Links () {
    return (
        <ButtonGroup size="lg" className="mb-2">
          <Button variant="dark" size="sm" href="https://github.com/Damon1v1"><Image src={Github} ></Image></Button>
          <Button variant="dark" size="sm" href="https://www.linkedin.com/in/damon-burda-4ab6a01b7/"><Image src={LinkedIn}></Image></Button>
          <Button variant="primary" href="/contact" style={{ float: "right" }}>Contact Me</Button>
        </ButtonGroup>
    );
};

export default Links;
