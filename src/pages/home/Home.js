import  React from "react";
import { Row } from "react-bootstrap";
import "./home.css";
import "../../components/about/About";
import About from "../../components/about/About";
import Portfolio from "../portfolio/Portfolio";
import Links from "../../components/links/Links";


function Home() {
    return(
        <div>
            <div>
                <Row className="justify-content-center">
                    <About />
                </Row>
            </div>

            <div>
                <Row>
                    <Portfolio />
                </Row>
            </div>

            <div>
                <Row>
                    <Links />
                </Row>
            </div>
        </div>
    )
}

export default Home;