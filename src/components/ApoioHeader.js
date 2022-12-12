import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';


export default function ApoioHeader(props) {
    const currentUser = props.currentUser;

    const textCallback = (event) => {
        props.searchInputCallback(event.target.value);
    }

    return (
        <Navbar className="green" collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Link className="navbar-brand nav-link" to="/"><img className="logo-small" src="pics/favicon_white.png" alt="Apoio logo small" /></Link>
                <Link className="navbar-brand nav-link" to="/"><img className="logo-large" src="pics/logo.png" alt="Apoio logo large" /></Link>

                <Form className="d-flex">
                    <div className="input-group">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            defaultValue=""
                            onChange={textCallback}
                        />
                        <Button variant="dark"><i className="fa fa-search" aria-hidden="true"></i></Button>
                    </div>
                </Form>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/lists">My Lists</NavLink>
                        {currentUser &&
                            <>
                                <NavLink className="nav-link" to="/profile">My Account</NavLink>
                            </>
                        }
                        {!currentUser &&
                            <>
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}