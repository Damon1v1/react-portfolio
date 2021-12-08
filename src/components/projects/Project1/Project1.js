import React, {useState} from "react";
import { Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import Project1a from "./Project1a.png";
import Project1b from "./Project1b.png";
import "../Pane.css";

const Project1 = () => {
    //this state might be for if another pane component is also in use
    //might be a source for error in the future
    const [state, setState] = useState({
        isPaneOpen: false,
    });
    return (
        <div>
            <div>
                <Button variant="dark" id="Button" onClick={() => setState({ isPaneOpenBottom: true})}>
                    Movieferee
                </Button>
            </div>
            <SlidingPane 
            closeIcon={<div><FontAwesomeIcon icon={faTimesCircle} /></div>}
            className="close"
            isOpen={state.isPaneOpenBottom}
            title="Movieferee"
            from="bottom"
            width="100%"
            onRequestClose={() => setState({ isPaneOpenBottom: false })}>
                <div>
                    <h1>Movie application that reccomends movies to the user to watch</h1>
                    <br/>
                    <h2>Features</h2>
                    <ul>
                        <li>Homepage with start button to start quiz</li>
                        <li>Frequently asked questions section</li>
                        <li>Navbar to jump between pages quickly</li>
                        <li>Footer with credits to developers that worked on this app and the app repo</li>
                        <li>About us section to learn more about the developers</li>
                        <li>LinkedIn and GitHub links for the developers involved</li>
                        <li>Questionnaire that takes users inputs to grab query searches</li>
                        <li>Users answers plug in to API calls to find similar movies to their answers</li>
                        <li>Movies returned have their poster, rating, and summary appended to the page</li>
                    </ul>
                    <br/>
                    <h2>Mock-Up</h2>
                    <Image src={Project1a} id="Project1" />
                    <Image src={Project1b} id="Project1" />
                    <br/>
                    <h2>Deployment</h2>
                    <p>You can view the repository and deployment <a href="https://github.com/Damon1v1/Movie-Recommender"> here</a>.</p>
                    <br/>
                    <h2>Credits</h2>
                    <h3>Damon Burda</h3>
                    <ul>
                        <li><a href="https://github.com/Damon1v1">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/damon-burda-4ab6a01b7/">LinkedIn</a></li>
                    </ul>
                    <h3>Noreldin Saad</h3>
                    <ul>
                        <li><a href="https://github.com/Noreldin-S">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/noreldin-saad-835930108/">LinkedIn</a></li>
                    </ul>
                    <h3>Ernie Perez</h3>
                    <ul>
                        <li><a href="https://github.com/jep1220?tab=repositories">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/juan-perez-aa2653139/">LinkedIn</a></li>
                    </ul>
                    <h3>Jessica Chen</h3>
                    <ul>
                        <li><a href="https://github.com/jiayc1">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/jchen52/">LinkedIn</a></li>
                    </ul>
                </div>
            </SlidingPane>
        </div>
    )
};

export default Project1;