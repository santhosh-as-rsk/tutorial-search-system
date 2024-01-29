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
        <NavbarBrand> Tutorial Search System</NavbarBrand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse > 
            <Nav className="w-50 justify-content-between">
                <Nav.Link className="font-weight-bold" href='/'> Home </Nav.Link>
                <NavDropdown
                    className="font-weight-bold"
                    title="Tutorial"
                    show={isOpen}
                    onMouseEnter={mouseHover}
                    onMouseLeave={mouseLeave}
                >
                    <NavDropdown.Item href='/singleselect'>Single Select</NavDropdown.Item>
                    <NavDropdown.Item href='/'>Multiple Select</NavDropdown.Item>
                    <NavDropdown
                        className="font-weight-bold dropend"
                        title="New Tutorial"
                        show={isOpen1}
                        onMouseEnter={mouseHover1}
                        onMouseLeave={mouseLeave1}
                    >
                        <NavDropdown.Item href='/singleselect'>Single Select</NavDropdown.Item>
                        <NavDropdown.Item href='/'>Multiple Select</NavDropdown.Item>
                    </NavDropdown>
                </NavDropdown>
                <Nav.Link className="font-weight-bold" href='/'> Contact </Nav.Link>
                <Nav.Link className="font-weight-bold" href='/'> Others </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

export default Header;