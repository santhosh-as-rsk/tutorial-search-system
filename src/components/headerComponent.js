import React from 'react';
import {  Container } from 'react-bootstrap';
import {  Navbar, NavbarBrand } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
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