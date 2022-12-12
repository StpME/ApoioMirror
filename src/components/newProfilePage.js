import { getAuth, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function ProfilePage(props) {



    const navigateTo = useNavigate();
    // const [profileData, setProfileData] = useState({
    //     name: "Ayata Bernhardt",
    //     location: "Bellevue, Washington",
    //     occupation: "Student at UW",
    //     email: "help@uw.edu",
    //     socialInsta: "ayataeatsIG",
    //     socialTwitter: "ayataeats",
    //     aboutMessage: "Hello I am Ayata! Thank you for looking at my page with multiple things of interest on it. Please enjoy your stay.",

    // });

    const profileData = props.profile;
    console.log(profileData);

    const emailHref = "mailto:" + profileData.email

    const handleClick = (event) => {
        navigateTo("/profile/edit");
    }

    const handleSignOut = (event) => {
        console.log("Signing Out");
        signOut(getAuth());
    }

    return (
        <div className="container mt-5 p-5">
            <div className="d-flex row justify-content-center m-auto">
                <div className="col-lg-10 flex-column bg-white rounded">
                    <div>
                        <div>
                            <img alt="profile" src={profileData.profileImage} className="rounded img-thumbnail d-block mx-auto profile-img" />
                        </div>
                    </div>
                    <div className="d-flex profile-negative-margins justify-content-between mx-3">
                        <div className="d-block justify-content-center text-center">
                            <p className="page-view-count mb-0">3</p>
                            <p className="text-muted">Pages Viewed</p>

                        </div>
                        <div>
                            <button type="button" className="btn btn-success" onClick={handleClick}>Edit Profile</button>
                        </div>
                    </div>


                    <div className="text-center mt-3 mb-5">
                        <h1 className="fw-bold">{profileData.name}</h1>
                        <p className="text-muted text-uppercase mb-5">{profileData.location}</p>
                        <p className="profile-text text-muted mb-2">{profileData.occupation}</p>

                        <div className="d-flex justify-content-center">
                            <p className="profile-text text-muted me-1">Contact:</p>
                            <a className="profile-text text-decoration-none mb-3" href={emailHref}>{profileData.email}</a>
                        </div>

                        <div className="d-flex row justify-content-center mt-2">
                            <div className="col-lg-2">
                                <a href="https://www.instagram.com/accounts/login/" target="blank" className="d-flex justify-content-center text-decoration-none">
                                    <i id="social-links" className="fa fa-instagram" aria-label="instagram"></i>
                                    <p className='ms-2'>{profileData.socialInsta}</p>
                                </a>
                            </div>
                            <div className="col-lg-2">
                                <a href="https://twitter.com/i/flow/login" target="blank" className="d-flex justify-content-center text-decoration-none">
                                    <i id="social-links" className="fa fa-twitter" aria-label="twitter"></i>
                                    <p className='ms-2'>{profileData.socialTwitter}</p>
                                </a>
                            </div>
                        </div>
                        <hr className='line-break my-5 mx-3' />
                        <h2 className="mb-3">A little about me</h2>
                        <p className="px-10">{profileData.aboutMessage}</p>
                        <hr className='line-break my-5 mx-3' />

                        <h2>My Favorite Places to Go</h2>

                        {/* favorite items will go here change with inputs */}
                        <div className="card" id="list_card">
                            <img className="img-fluid h-100" src="/pics/kb_tn.jpg" alt="favorited item" />
                            <div className="card-block darken"></div>
                        </div>

                    </div>

                    

                </div>
                <button type="button" className="btn btn-signout btn-danger" onClick={handleSignOut}>Sign Out</button>
            </div>
        </div>

    )
}