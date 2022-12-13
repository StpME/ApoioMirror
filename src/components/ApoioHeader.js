import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';


export default function ApoioHeader(props) {
    const [queryText, setQueryText] = useState("");
    const currentUser = props.currentUser;
    const navigateTo = useNavigate();


    const location = useLocation();
    // console.log(location.pathname);


    const handleSubmit = (event) => {
        event.preventDefault();

        props.searchInputCallback(queryText, location.pathname);
        // if (location.pathname === "/results") {
        //     navigateTo("/searchResults");
        // } else {
        //     navigateTo("/results");
        // }
        navigateTo("/results");

    }

    const handleChange = (event) => {
        setQueryText(event.target.value);
    }

    return (
        <Navbar className="green" collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Link className="navbar-brand nav-link" to="/"><img className="logo-small" src="pics/favicon_white.png" alt="Apoio logo small" /></Link>
                <Link className="navbar-brand nav-link" to="/"><img className="logo-large" src="pics/logo.png" alt="Apoio logo large" /></Link>

                <Form className="d-flex" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            value={queryText}
                            onChange={handleChange}
                        // ON SUBMIT NEEDS PREVENTDEFAULT
                        />
                        <Button onClick={handleSubmit} variant="dark"><i className="fa fa-search" aria-hidden="true"></i></Button>
                    </div>
                </Form>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
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