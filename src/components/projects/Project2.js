import React, {useState} from "react";
import { Button } from "react-bootstrap"; 
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "./Pane.css";

const Project2 = () => {
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
            title="Release The Kringle!"
            from="bottom"
            width="100%"
            onRequestClose={() => setState({ isPaneOpenBottom: false })}>
                <div>
                    <p>
                        Mock-up application for a bakery. Allows users to sign in for rewards to be used on
                        various kringle products. Check out our repo and deployment 
                        <a href="https://github.com/Damon1v1/Release-The-Kringle"> here</a>
                    </p>
                </div>
            </SlidingPane>
        </div>
    )
};

export default Project2;