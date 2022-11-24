import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function ApoioHeader() {
    return (
        // <nav className="navbar navbar-dark navbar-expand-lg">
        //     <div className="container">
        //         <a href="index.html" className="navbar-brand">
        //             <img src="pics/logo.png" alt="Apoio logo"/>
        //         </a>

        //         <div className="ms-auto me-auto">
        //             <form className="d-flex" role="search">
        //                 <div className="input-group">
        //                     <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
        //                     <button className="btn btn-dark" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
        //                 </div>
        //             </form>
        //         </div>


        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>

        //         <div className="collapse navbar-collapse" id="navbarNavDropdown">
        //             <ul className="d-flex justify-content-end  navbar-nav justify-content-end mb-2 mb-lg-0">
        //                 <li className="nav-item ">
        //                     <a href="index.html" className="nav-link">Home</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a href="lists.html" className="nav-link active">My Lists</a>
        //                 </li>
        //                 <li className="nav-item">
        //                     <a href="account.html" className="nav-link">My Account</a>
        //                 </li>
        //             </ul>

        //         </div>
        //     </div>
        // </nav>

        <Navbar className="green" collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="index.html"><img className="logo-large" src="pics/logo.png" alt="Apoio logo large" /></Navbar.Brand>
                <Navbar.Brand href="index.html"><img className="logo-small" src="pics/favicon_white.png" alt="Apoio logo small" /></Navbar.Brand>

                <Form className="d-flex">
                    <div className="input-group">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <Button variant="dark"><i class="fa fa-search" aria-hidden="true"></i></Button>
                    </div>
                </Form>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        <Nav.Link href="index.html">Home</Nav.Link>
                        <Nav.Link href="lists.html">My Lists</Nav.Link>
                        <Nav.Link href="account.html">My Account</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}