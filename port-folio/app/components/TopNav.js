'use client'

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TopNav() {
    return (
        <Navbar bg="light" data-bs-theme="light" variant='light'>
            <Container>
                <Navbar.Brand href="/home">MG</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link href="/about">About Me</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
  
export default TopNav;