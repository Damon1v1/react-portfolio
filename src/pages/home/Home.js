import  React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import "./home.css";
import About from "../../components/about/about";
import Portfolio from "../portfolio/portfolio";
import Links from "../../components/links/Links";
import Aos from "aos";
import "aos/dist/aos.css";


const Home = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);
    return(
        <div>
            <div data-aos="fade">
                <Row className="justify-content-center">
                    <About />
                </Row>
            </div>

            <div data-aos="fade">
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