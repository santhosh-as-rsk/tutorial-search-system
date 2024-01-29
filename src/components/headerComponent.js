import React, { useState } from 'react';
import {  Container, NavDropdown } from 'react-bootstrap';
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);

    const mouseHover = () => {
        setIsOpen(true);
    };

    const mouseLeave = () => {
        setIsOpen(false);
    };

    const mouseHover1 = () => {
        setIsOpen1(true);
    };

    const mouseLeave1 = () => {
        setIsOpen1(false);
    };
    return (
    <Navbar expand="lg" bg='light' variant='light' className='bg-body-teritiary'>
        <Container>
        <Navbar.Brand>
        <img src="https://www.sequoiaat.com/static/img/sat-logo-1.png" alt="" width="240" height="80" className="d-inline-block align-text-top" />
        </Navbar.Brand>
        <NavbarBrand> <h2><b>Tutorial Search System</b></h2></NavbarBrand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse></Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default Header;