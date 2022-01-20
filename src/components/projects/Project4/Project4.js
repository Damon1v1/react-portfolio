import React, {useState} from "react";
import { Button, Image } from "react-bootstrap"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import SlidingPane from "react-sliding-pane";
import TechBlog from "./techblog.png";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "../Pane.css";

const Project4 = () => {
    //this state might be for if another pane component is also in use
    //might be a source for error in the future
    const [state, setState] = useState({
        isPaneOpen: false,
    });
    return (
        <div>
            <div>
                <Button variant="dark" id="Button" onClick={() => setState({ isPaneOpen: true})}>
                    Tech-Blog
                </Button>
            </div>
            <SlidingPane 
            closeIcon={<div><FontAwesomeIcon icon={faTimesCircle} /></div>}
            className="close"
            isOpen={state.isPaneOpen}
            title="Tech-Blog"
            from="bottom"
            width="100%"
            onRequestClose={() => setState({ isPaneOpen: false })}>
                <div>
                    <h1>CMS-style blog site</h1>
                    <br/>
                    <h2>Features</h2>
                    <ul>
                        <li>Homepage with navigation links</li>
                        <li>Login and logout</li>
                        <li>User credentials saved, hashed, and stored</li>
                        <li>Existing blog posts shown on homepage with title and date created</li>
                        <li>Option to leave comments on posts</li>
                        <li>User can make unique posts</li>
                        <li>User is taken back to updated dashboard after posting</li>
                    </ul>
                    <br/>
                    <h2>Mock-Up</h2>
                    <Image src={TechBlog} id="Project4" />
                    <br/>
                    <h2>Deployment</h2>
                    <p>You can view the repository and live deployment <a href="https://github.com/Damon1v1/Tech-Blog"> here</a>.</p>
                </div>
            </SlidingPane>
        </div>
    )
};

export default Project4;