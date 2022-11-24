import React from 'react';

export function ProfilePage(props) {
    return (
        <div className="container mt-5">
            <div className="row m-auto">
                <div className="col-lg-4 flex-column">
                    <div className="card">
                        <div>
                            <div className="card-body text-center">
                                <img src="/pics/brows.png" className="rounded-circle profile-img" alt="Your Profile Picture" />
                                <h1 className="py-3">Ayata Bernhardt</h1>
                                <div>He/His</div>
                                <button type="button" className="btn btn-success mt-3">Edit your profile</button>
                            </div>
                        </div>
                    </div>

                    <div className="card d-block mt-3">
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col">
                                            <a href="#"><i id="social-links" className="fa fa-instagram" aria-label="instagram"></i></a>
                                        </div>
                                        <div className="col">
                                            Instagram: ayataeats
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row">
                                        <div className="col">
                                            <a href="#"><i id="social-links" className="fa fa-twitter" aria-label="twitter"></i></a>
                                        </div>
                                        <div className="col">
                                            Twitter: ayataeats
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="col-lg-8 d-block ">
                    <div className="card">
                        <div className="card-body">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item py-3">
                                    <div className="row d-flex justify-content-between">
                                        <div className="col">
                                            <strong>Name:</strong>
                                        </div>
                                        <div className="col text-muted">
                                            Ayata
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item py-3">
                                    <div className="row d-flex justify-content-between">
                                        <div className="col">
                                            <strong>Email:</strong>
                                        </div>
                                        <div className="col text-muted">
                                            ayatab@uw.edu
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item py-3">
                                    <div className="row d-flex justify-content-between">
                                        <div className="col">
                                            <strong>Phone Number:</strong>
                                        </div>
                                        <div className="col text-muted">
                                            (111) 111-1111
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item py-3">
                                    <div className="row d-flex justify-content-between">
                                        <div className="col">
                                            <strong>Interests:</strong>
                                        </div>
                                        <div className="col text-muted">
                                            Food, Games
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="card mt-3">
                        <div className="card-body">
                            <strong>About Me!</strong>
                            <p>Hello I am Ayata! Thank you for looking at my page with multiple things of interest on it. Please enjoy your stay.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function EditPage(props) {
    return (
        <div className="card">
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item py-3">
                        <div className="row d-flex justify-content-between">
                            {/* name */}
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row d-flex justify-content-between">
                            {/* email */}
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row d-flex justify-content-between">
                            {/* phone number */}
                        </div>
                    </li>
                    <li className="list-group-item py-3">
                        <div className="row d-flex justify-content-between">
                            {/* interests/favorite local place */}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}