import React from 'react';

export function ProfilePage(props) {
    return (
        <div className="container mt-5 p-5">
            <div className="d-flex row justify-content-center m-auto">
                <div className="col-lg-10 flex-column bg-white rounded">
                    <div>
                        <div>
                            <img alt="profile picture" src="/pics/brows.png" className="rounded img-thumbnail d-block mx-auto profile-img" />
                        </div>
                    </div>
                    <div className="d-flex profile-negative-margins justify-content-between mx-3">
                        <div className="d-block justify-content-center bg-light text-center">
                            <p className="page-view-count mb-0">3</p>
                            <p className="text-muted">Pages Viewed</p>

                        </div>
                        <div>
                            <button type="button" className="btn btn-success">Edit Profile</button>
                        </div>
                    </div>


                    <div className="text-center mt-3 mb-5">
                        <h1 className="fw-bold">
                            Ayata Bernhardt
                        </h1>
                        <p className="text-muted text-uppercase mb-5">Bellevue, Washington</p>
                        <p className="profile-text text-muted mb-2">Student at the UW </p>
                        <p className="profile-text">Contact: help@uw.edu</p>
                        <div className="d-flex row justify-content-center">
                            <div className="col-lg-2">
                                <a href="https://www.instagram.com/accounts/login/" target="blank" className="d-flex justify-content-center text-decoration-none">
                                    <i id="social-links" className="fa fa-instagram" aria-label="instagram"></i>
                                    <p className='ms-2'>ayataeats</p>
                                </a>
                            </div>
                            <div className="col-lg-2">
                                <a href="https://twitter.com/i/flow/login" target="blank" className="d-flex justify-content-center text-decoration-none">
                                    <i id="social-links" className="fa fa-twitter" aria-label="twitter"></i>
                                    <p className='ms-2'>ayataeats</p>
                                </a>
                            </div>
                        </div>
                        <hr className='line-break my-5' />
                        <p className="px-10">Hello I am Ayata! Thank you for looking at my page with multiple things of interest on it. Please enjoy your stay.</p>
                        <hr className='line-break my-5' />

                        <h1>My Favorite Places to Go</h1>

                        {/* favorite items will go here change with inputs */}
                        <div className="card" id="list_card">
                        <img className="img-fluid h-100" src="/pics/kb_tn.jpg"/>
                            <div className="card-block darken"></div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}