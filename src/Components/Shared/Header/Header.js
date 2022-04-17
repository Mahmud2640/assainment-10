import React from "react";
import './Header.css'
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className="logo">
            Doctors-Talk
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#services">Services</Nav.Link>
              <Nav.Link as={Link} to="blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="about">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="login">
                Log In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
