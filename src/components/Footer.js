import React from 'react';
import { Link } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import MediaQuery from 'react-responsive';
import { useMediaQuery } from 'react-responsive';

export default function Footer() {

    function quickLinks() {
        return (
            <ul className="pb-3">
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/favorites">My Favorites</Link></li>
                <li><Link className="nav-link" to="/profile">My Account</Link></li>
            </ul>
        );
    }

    function company() {
        return (
            <ul className="pb-3">
                <li><Link className="nav-link" to="/login">Login</Link></li>
                <li><Link className="nav-link" to="/login">Register</Link></li>
            </ul>
        );
    }

    return (
        <div className="footer-apoio footer-fixed-bottom">
            <footer>
                <div className="container">
                    <div className="row">
                        <MediaQuery maxWidth={768}>
                            <div className="col-sm-6 item">
                                <Collapsible close trigger={<h3>Company</h3>}>
                                    {company()}
                                </Collapsible>
                            </div>
                            <div className="col-sm-6 item">
                                <Collapsible close trigger={<h3>Quick Links</h3>}>
                                    {quickLinks()}
                                </Collapsible>
                            </div>            
                        </MediaQuery>
                        <MediaQuery minWidth={768}>
                            <div className="col-sm-6 col-md-3 item">
                                <Collapsible open trigger={<h3>Company</h3>}>
                                    {company()}
                                </Collapsible>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <Collapsible open trigger={<h3>Quick Links</h3>}>
                                    {quickLinks()}
                                </Collapsible>
                            </div>
                        </MediaQuery>
                        <div className="col-md-6 item text">
                            <h3>About us</h3>
                            <p>
                                We aim to address rising gentrification across King County and the greater Seattle region by increasing the discoverability of local businesses through providing resources for users to interact with and support their communities with small-business centered tools.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}