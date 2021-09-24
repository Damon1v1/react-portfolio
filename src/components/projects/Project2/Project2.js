import React, {useState} from "react";
import { Button, Image } from "react-bootstrap"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import "../Pane.css";

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
            closeIcon={<div><FontAwesomeIcon icon={faTimesCircle} /></div>}
            className="close"
            isOpen={state.isPaneOpenBottom}
            title="Release The Kringle!"
            from="bottom"
            width="100%"
            onRequestClose={() => setState({ isPaneOpenBottom: false })}>
                <div>
                    <h1>Slepptu Kringlunni! The finest kringle bakery storefront</h1>
                    <br/>
                    <h2>Features</h2>
                    <ul>
                        <li>Home landing page for users to learn more about the bakery</li>
                        <li>About us page for the user to learn about the developers and contact them by e-mail</li>
                        <li>Bakery locations also listed on the about us page</li>
                        <li>Dynamic menu that pulls kringles from our database</li>
                        <li>Users can can sign up for 500 Kringle Kash for free</li>
                        <li>Passwords are validated to be a certain length and stored hashed for security</li>
                        <li>Users can also log back in on returning visists</li>
                        <li>Kringle Rewards rewards page for logged in users to use their Kringle Kash</li>
                    </ul>
                    <br/>
                    <h2>Deployment</h2>
                    <p>You can view the repository and live deployment <a href="https://github.com/Damon1v1/Release-The-Kringle"> here</a>.</p>
                </div>
            </SlidingPane>
        </div>
    )
};

export default Project2;