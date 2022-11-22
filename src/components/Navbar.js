import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg">
            <div className="container">
                <a href="index.html" className="navbar-brand">
                    <img src="pics/logo.png" alt="Apoio logo"/>
                </a>

                <div className="ms-auto me-auto">
                    <form className="d-flex" role="search">
                        <div className="input-group">
                            <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-dark" type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </div>
                    </form>
                </div>
                

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="d-flex justify-content-end  navbar-nav justify-content-end mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <a href="index.html" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="lists.html" className="nav-link active">My Lists</a>
                        </li>
                        <li className="nav-item">
                            <a href="account.html" className="nav-link">My Account</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    );
}