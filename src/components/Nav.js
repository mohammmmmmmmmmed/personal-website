import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  let location = useLocation();
  let overlay = false;

  if (location.pathname === "/")
    overlay = true;

  return (
    <Navbar variant="dark" sticky="top" expand="md"
      className={overlay ? "navbar-overlay" : "navbar-default"}>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="m-auto">
            <LinkContainer to="/">
              <Nav.Link className="text-center"> Home </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link className="text-center"> About </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/experience">
              <Nav.Link className="text-center"> Experience </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link className="text-center"> Projects </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link className="text-center"> Blog </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/resume">
              <Nav.Link className="text-center"> Resume </Nav.Link>
            </LinkContainer>
            <Nav.Link className="text-center" href="mailto:mohammedsahal0085@gmail.com" target="_blank">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;

