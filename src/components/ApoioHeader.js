import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


export default function ApoioHeader() {
    return (
        <Navbar className="green" collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="index.html"><Link className="nav-link" to="/"><img className="logo-large" src="pics/logo.png" alt="Apoio logo large" /></Link></Navbar.Brand>
                <Navbar.Brand href="index.html"><Link className="nav-link" to="/"><img className="logo-small" src="pics/favicon_white.png" alt="Apoio logo small" /></Link></Navbar.Brand>

                <Form className="d-flex">
                    <div className="input-group">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <Button variant="dark"><i className="fa fa-search" aria-hidden="true"></i></Button>
                    </div>
                </Form>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Link className="nav-link" to="/">Home</Link>
                        <Link className="nav-link" to="/lists">My Lists</Link>
                        <Link className="nav-link" to="/profile">My Account</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}