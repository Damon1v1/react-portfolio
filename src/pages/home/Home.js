import  React from "react";
import { Row } from "react-bootstrap";
import "./home.css";
import "../../components/about/About";
import About from "../../components/about/About";
import Portfolio from "../portfolio/Portfolio";

function Home() {
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

export default Home;