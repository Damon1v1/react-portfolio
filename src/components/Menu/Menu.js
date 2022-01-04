import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "./menu.css";
import {Link } from 'react-scroll';

class Menu extends Component {  
    render () {
      return (
        <Dropdown id="menu">
        <Dropdown.Toggle variant="Secondary" id="dropdown-basic" size="lg">
          <FontAwesomeIcon icon={faBars} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Link to="portfolio" spy={true} smooth={true}><Dropdown.Item id="item">Portfolio</Dropdown.Item></Link>
          <Link to="contact" spy={true} smooth={true}><Dropdown.Item id="item">Contact</Dropdown.Item></Link>
        </Dropdown.Menu>
      </Dropdown>
      )
    }
};

export default Menu;