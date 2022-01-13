import React, { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./menu.css";
import { Link } from 'react-scroll';

class Menu extends Component {  
  render () {
    return (
      <DropdownButton id="menu" title="Jump" variant="Success">
        <Link to="portfolio" spy={true} smooth={true}><Dropdown.Item as="button">Portfolio</Dropdown.Item></Link>
        <Link to="contact" spy={true} smooth={true}><Dropdown.Item as="button">Contact</Dropdown.Item></Link>
      </DropdownButton>
    )
  }
};

export default Menu;