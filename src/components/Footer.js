import React from 'react';

export default function Footer(props) {
    return (
        <footer>   
        <div class="footer-apoio mt-5">
          <footer>
              <div class="container">
                  <div class="row">
                      <div class="col-sm-6 col-md-3 item">
                          <h3>Company</h3>
                          <ul>
                              <li><a href="#">Login</a></li>
                              <li><a href="#">Register</a></li>
                          </ul>
                      </div>
                      <div class="col-sm-6 col-md-3 item">
                          <h3>Quick Links</h3>
                          <ul>
                              <li><a href="#">Home</a></li>
                              <li><a href="#">My Account</a></li>
                              <li><a href="#">My Lists</a></li>
                          </ul>
                      </div>
                      <div class="col-md-6 item text">
                          <h3>About us</h3>
                          <p>
                          We aim to address rising gentrification across King County and the greater Seattle region through increasing the discoverability of local businesses by providing resources for users to interact with and support their communities with small-business centered tools.
                          </p>
                      </div>
                  </div>
              </div>
          </footer>
        </div>
    </footer>
    );
}