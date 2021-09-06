import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./header.css";

function Header() {
    return (
        <Navbar expand="lg">
        <Container>
        <Navbar.Brand href="/">Damon Burda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/">About Me</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header;