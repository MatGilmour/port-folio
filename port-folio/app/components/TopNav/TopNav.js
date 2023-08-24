'use client'

import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './TopNav.css';

function TopNav() {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            console.log("TRU")
            setScrolled(true);
        } else {
            console.log("FALSE")
            setScrolled(false);
        }
    };

    
    useEffect(() => {

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);


    return (
        <Navbar bg='primary' expand="md" className={scrolled ? 'scroll-navbar scrolled border' : 'scroll-navbar border border-5'}>
            <Container className="border border-5 w-100 p-3">
                <div className="d-flex row row-cols-1 border justify-content-center">
                    <div className="col-md-12 border border-2 d-flex align-items-center justify-content-center">
                        <Navbar.Brand href="/" className='rounded-circle bg-info text-light p-2 fs-6 border border-5'>MG</Navbar.Brand>
                    </div>
                    <div className="col">
                        <div className="row">
                            <Nav className="d-flex">
                                <Nav.Link href="/about">About Me</Nav.Link>
                                <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                        </div>
                    </div>
                </div>
            </Container>
        </Navbar>
    );
}
  
export default TopNav;