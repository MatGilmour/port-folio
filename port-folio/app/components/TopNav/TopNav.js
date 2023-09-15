'use client'

import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/js/src/collapse.js";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './TopNav.css';
import Image from 'next/image'

function TopNav() {

    const [scrolled, setScrolled] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    const [open, setOpen] = useState(true);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const handleClosed = () => {
        setIsClosed(true);
    }
    const handleOpened = () => {
        setIsClosed(false);
    }
    
    useEffect(() => { 

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <div id="navbar-Container" className="container-fluid">
            <div className='row align-items-center'>
                <div id="navBarFull" className='col-md-12'>
                    <Collapse in={open}>
                        <div id='topNav' className="row">
                            <div className="col-md-6">
                                <Image className='rounded-circle p-3 pt-4' src="/images/profile.jpg" width={420} height={600} alt="Profile Picture"></Image>
                            </div>
                            <div className="col-md-6 pt-5 mt-5">
                                <Card id="shortDesc">
                                    <h1>HI MY NAME JEFF</h1>
                                    <p>Das me</p>
                                    <p>wow</p>
                                </Card>
                            </div>
                        </div>
                    </Collapse>
                    <div id="botNav" className='row-sm-12'>
                        <Button
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className='d-flex justify-content-center align-items-center'
                        >
                            X
                        </Button>
                        {isClosed ? 
                        <div className='col'>
                            <button className='open-description' onClick={handleOpened}>^</button>
                        </div> 
                        : ''}
                    </div>
                </div>
            </div>
        </div>
        // <Navbar bg='primary' expand="md" className={scrolled ? 'scroll-navbar scrolled border' : 'scroll-navbar border border-5'}>
        //     <Container className="border border-5 w-100 p-3 ">
        //         <div className="d-flex row row-cols-1 border justify-content-center ">
        //             <div className="col-md-12 border border-2 d-flex align-items-center justify-content-center">
        //                 <Navbar.Brand href="/" className='rounded-circle bg-info text-light p-2 fs-6 border border-5'>MG</Navbar.Brand>
        //             </div>
        //             <div className="col">
        //                 <div className="row">
        //                     <Nav className="d-flex">
        //                         <Nav.Link href="/about">About Me</Nav.Link>
        //                         <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        //                         <Nav.Link href="#pricing">Pricing</Nav.Link>
        //                     </Nav>
        //                 </div>
        //             </div>
        //         </div>
        //     </Container>
        // </Navbar>
    );
}
  
export default TopNav;