import React, {useState} from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "./Pane.css";

const Project1 = () => {
    //this state might be for if another pane component is also in use
    //might be a source for error in the future
    const [state, setState] = useState({
        isPaneOpen: false,
    });
    return (
        <div>
            <div>
                <button onClick={() => setState({ isPaneOpenBottom: true})}>
                    Click here for details
                </button>
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
                    <p>
                        Application that reccomends movies to the user to watch based on questionnaire responses;
                        you can view the respository and deployment of the live application 
                        <a href="https://github.com/Damon1v1/Movie-Recommender">here.</a>
                    </p>
                </div>
            </SlidingPane>
        </div>
    )
};