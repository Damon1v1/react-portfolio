import React, {useState} from "react";
import { Button, Image } from "react-bootstrap"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import SlidingPane from "react-sliding-pane";
import Tracker1 from "./Tracker1.png";
import Tracker2 from "./Tracker2.png"
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
                    Fitness Tracker
                </Button>
            </div>
            <SlidingPane 
            closeIcon={<div><FontAwesomeIcon icon={faTimesCircle} /></div>}
            className="close"
            isOpen={state.isPaneOpen}
            title="Fitness Tracker"
            from="bottom"
            width="100%"
            onRequestClose={() => setState({ isPaneOpen: false })}>
                <div>
                    <h1>Create and track your daily workouts!</h1>
                    <br/>
                    <h2>Features</h2>
                    <ul>
                        <li>Add exercises to your recent workout plan</li>
                        <li>Add new exercises to a new workout plan</li>
                        <li>Stats page</li>
                        <li>See the combined weight of multiple exercises from the past seven workouts</li>
                        <li>View the total duration of each workout from the past seven workouts</li>
                    </ul>
                    <br/>
                    <h2>Mock-Up</h2>
                    <Image src={Tracker1} id="Project6" />
                    <Image src={Tracker2} id="Project6" />
                    <br/>
                    <h2>Deployment</h2>
                    <p>You can view the repository and live deployment <a href="https://github.com/Damon1v1/Fitness-Tracker"> here</a>.</p>
                </div>
            </SlidingPane>
        </div>
    )
};

export default Project5;