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
                <Button variant="dark" id="Button" onClick={() => setState({ isPaneOpen: true})}>
                    Bandstand
                </Button>
            </div>
            <SlidingPane 
            closeIcon={<div><FontAwesomeIcon icon={faTimesCircle} /></div>}
            className="close"
            isOpen={state.isPaneOpen}
            title="Bandstand"
            from="bottom"
            width="100%"
            onRequestClose={() => setState({ isPaneOpen: false })}>
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
                    <Image src={Project3a} id="Project3" />
                    <br/>
                    <h2>Deployment</h2>
                    <p>You can view the repository and live deployment <a href="https://github.com/Damon1v1/Bandstand"> here</a>.</p>
                </div>
            </SlidingPane>
        </div>
    )
};

export default Project3;