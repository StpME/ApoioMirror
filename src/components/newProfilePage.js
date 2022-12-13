import { getAuth, signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database';


export function ProfilePage(props) {
    const currentUser = props.currentUser;
    

    const navigateTo = useNavigate();
    const [profileData, setProfileData] = useState(props.profile);

    // console.log(profileData);

    const handleClick = (event) => {
        navigateTo("/profile/edit");
    }

    const handleSignOut = (event) => {
        console.log("Signing Out");
        signOut(getAuth());
    }

    useEffect(() => {

        const db = getDatabase(); //"the database"
        const allMessageRef = ref(db, "userData");

        //when db value changes
        const offFunction = onValue(allMessageRef, (snapshot) => {
            const valueObj = snapshot.val();
            setProfileData(valueObj[currentUser.userId])
            // console.log(profileData);

        })

        function cleanup() {
            //   console.log("component is being removed");
            //when the component goes away, we turn off the listener
            offFunction();
        }
        return cleanup; //return instructions on how to turn off lights
    }, [])

    if (!currentUser) {
        return <Navigate to="/" />
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
                            <p className="page-view-count mb-0">2022</p>
                            <p className="text-muted">Member Since</p>

                        </div>
                        <div>
                            <button type="button" className="btn btn-success" onClick={handleClick}>Edit Profile</button>
                        </div>
                    </div>


                    <div className="text-center mt-3 mb-5">
                        <h1 className="fw-bold">{profileData.name}</h1>
                        <p className="text-muted text-uppercase mb-5">{profileData.location}</p>
                        <p className="profile-text text-muted mb-2">{profileData.title}</p>

                        <div className="d-flex justify-content-center">
                            <p className="profile-text text-muted me-1">Contact:</p>
                            <a className="profile-text text-decoration-none mb-3" href={"mailto:" + profileData.email}>{profileData.email}</a>
                        </div>

                        <div className="d-flex row justify-content-center mt-2">
                            <div className="col-lg-2">
                                <a href={"https://www.instagram.com/"+profileData.socialInsta} target="blank" className="d-flex justify-content-center text-decoration-none">
                                    <i id="social-links" className="fa fa-instagram" aria-label="instagram"></i>
                                    <p className='ms-2'>{profileData.socialInsta}</p>
                                </a>
                            </div>
                            <div className="col-lg-2">
                                <a href={"https://twitter.com/"+profileData.socialTwitter} target="blank" className="d-flex justify-content-center text-decoration-none">
                                    <i id="social-links" className="fa fa-twitter" aria-label="twitter"></i>
                                    <p className='ms-2'>{profileData.socialTwitter}</p>
                                </a>
                            </div>
                        </div>
                        <hr className='line-break my-5 mx-3' />
                        <h2 className="mb-3">A little about me</h2>
                        <p className="px-10">{profileData.aboutMessage}</p>
                        {/* <hr className='line-break my-5 mx-3' /> */}

                        {/* <h2>My Favorite Places to Go</h2> */}

                        {/* favorite items will go here change with inputs
                        <div className="card" id="list_card">
                            <img className="img-fluid h-100" src="/pics/kb_tn.jpg" alt="favorited item" />
                            <div className="card-block darken"></div>
                        </div> */}
                    </div>
                </div>
                <button type="button" className="btn btn-signout btn-danger" onClick={handleSignOut}>Sign Out</button>
            </div>
        </div>

    )
}