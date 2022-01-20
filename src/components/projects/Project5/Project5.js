import React, {useState} from "react";
import { Button, Image } from "react-bootstrap"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import SlidingPane from "react-sliding-pane";
import Budget1 from "./Budget1.png";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "../Pane.css";

const Project5 = () => {
    //this state might be for if another pane component is also in use
    //might be a source for error in the future
    const [state, setState] = useState({
        isPaneOpen: false,
    });
    return (
        <div>
            <div>
                <Button variant="dark" id="Button" onClick={() => setState({ isPaneOpen: true})}>
                    Budget Tracker
                </Button>
            </div>
            <SlidingPane 
            closeIcon={<div><FontAwesomeIcon icon={faTimesCircle} /></div>}
            className="close"
            isOpen={state.isPaneOpen}
            title="Budget Tracker"
            from="bottom"
            width="100%"
            onRequestClose={() => setState({ isPaneOpen: false })}>
                <div>
                    <h1>Manage your expenses</h1>
                    <br/>
                    <h2>Features</h2>
                    <ul>
                        <li>Online and offline functionality</li>
                        <li>Add or subtract funds</li>
                        <li>Chart to visualize your transaction history</li>
                        <li>Funds are updated once a user reconnects to the internet</li>
                        <li>Named entries to track transactions</li>
                    </ul>
                    <br/>
                    <h2>Mock-Up</h2>
                    <Image src={Budget1} id="Project5" />
                    <br/>
                    <h2>Deployment</h2>
                    <p>You can view the repository and live deployment <a href="https://github.com/Damon1v1/Online-Offline-Budget-Tracker"> here</a>.</p>
                </div>
            </SlidingPane>
        </div>
    )
};

export default Project5;