import React, {useState} from "react";
import { Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import SlidingPane from "react-sliding-pane";
import Project3a from "./Project3a.png";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "../Pane.css";

const Project3 = () => {
    //this state might be for if another pane component is also in use
    //might be a source for error in the future
    const [state, setState] = useState({
        isPaneOpen: false,
    });
    return (
        <div>
            <div>
                <Button variant="dark" onClick={() => setState({ isPaneOpenBottom: true})}>
                    Click here for details
                </Button>
            </div>
            <SlidingPane 
            closeIcon={<div><FontAwesomeIcon icon={faTimesCircle} /></div>}
            className="close"
            isOpen={state.isPaneOpenBottom}
            title="Bandstand"
            from="bottom"
            width="100%"
            onRequestClose={() => setState({ isPaneOpenBottom: false })}>
                <div>
                    <h1>MERN Stack application to chat with your friends while listening to music</h1>
                    <br/>
                    <h2>Features</h2>
                    <ul>
                        <li>Register as a new user</li>
                        <li>Login Authentification</li>
                        <li>Profile management</li>
                        <li>Spotify listening with master control</li>
                        <li>Chat pane for clean user interface</li>
                        <li>Chat with your friends with socket.io!</li>
                    </ul>
                    <br/>
                    <h2>Mock-Up</h2>
                    <Image src={Project3a} className="Project3a" />
                    <br/>
                    <h2>Deployment</h2>
                    <p>You can view the repository and live deployment <a href="https://github.com/Damon1v1/Bandstand"> here</a>.</p>
                    <br/>
                    <h2>Install</h2>
                    <p>You can run the application locally on your localhost! Run npm i in your terminal and then npm start once your packages are finished installing/</p>
                    <br/>
                    <h2>Credits</h2>
                    <h3>Damon Burda</h3>
                    <ul>
                        <li><a href="https://github.com/Damon1v1">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/damon-burda-4ab6a01b7/">LinkedIn</a></li>
                    </ul>
                    <h3>Andy Nguyen</h3>
                    <ul>
                        <li><a href="https://github.com/Ydna317">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/andyphuocnguyen/">LinkedIn</a></li>
                    </ul>
                    <h3>Shakofa Mahmody</h3>
                    <ul>
                        <li><a href="https://github.com/shakofa">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/shakofa-mahmody-2328a3193/">LinkedIn</a></li>
                    </ul>
                    <h3>Dane Laban</h3>
                    <ul>
                        <li><a href="https://github.com/DaneLaban">Github</a></li>
                    </ul>
                    <h3>David Cox</h3>
                    <ul>
                        <li><a href="https://github.com/Dcoxmen">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/david-cox-78b88b44/">LinkedIn</a></li>
                    </ul>
                </div>
            </SlidingPane>
        </div>
    )
};

export default Project3;