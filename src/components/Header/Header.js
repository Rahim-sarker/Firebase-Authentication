import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
