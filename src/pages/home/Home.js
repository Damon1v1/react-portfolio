import  React from "react";
import { Row } from "react-bootstrap";
import "./aboutme.css";
import "../../components/about/About";
import About from "../../components/about/About";
import Portfolio from "../portfolio/Portfolio";

function Aboutme() {
    return(
        <div>
            <div><Row className="justify-content-center">
                <About></About>
            </Row></div>

            <div>
                <Row>
                    <Portfolio></Portfolio>
                </Row>
            </div>
        </div>
    )
}

export default Aboutme;