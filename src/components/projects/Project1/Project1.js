import React, {useState} from "react";
import { Button } from "react-bootstrap";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
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
                <Button variant="dark" onClick={() => setState({ isPaneOpenBottom: true})}>
                    Click here for details
                </Button>
            </div>
            <SlidingPane 
            closeIcon={<div>X</div>}
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
                </div>
            </SlidingPane>
        </div>
    )
};

export default Project1;