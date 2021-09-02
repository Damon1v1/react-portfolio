import  React from "react";
import { Row } from "react-bootstrap";
import "./aboutme.css";
import "../../components/about/About";
import About from "../../components/about/About";

function Aboutme() {
    return(
        <Row className="justify-content-center">
            <About></About>
        </Row>
    )
}

export default Aboutme;