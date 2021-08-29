import React, {useState} from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "./Pane.css";

const Project3 = () => {
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
            title="Bandstand"
            from="bottom"
            width="100%"
            onRequestClose={() => setState({ isPaneOpenBottom: false })}>
                <div>
                    <p>
                        Lobby for users to connect with each other, chat and listen
                        to music! You can view the repo and live deployment
                        <a href="https://github.com/Damon1v1/Bandstand">here.</a>
                    </p>
                </div>
            </SlidingPane>
        </div>
    )
};

export default Project3;