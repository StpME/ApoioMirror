import React from 'react';

export function EditProfile(props) {
    // has to have a prop object and we'll change that object and give it back with callback
    const profileObj = {
        name: "Ayata Bernhardt",
        location: "Bellevue, Washington",
        occupation: "Student at UW",
        email: "help@uw.edu",
        socialInsta: "ayataeatsIG",
        socialTwitter: "ayataeats",
        aboutMessage: "Hello I am Ayata! Thank you for looking at my page with multiple things of interest on it. Please enjoy your stay.",

    }

    const handleNameChange = (nameString) => {
        profileObj.name = nameString;
    }

    const handleLocationChange = (locationString) => {
        profileObj.location = locationString;
    }


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
                            <button type="button" className="btn btn-info">Save</button>
                        </div>
                    </div>


                    <div className="d-flex row justify-content-center mt-3 mb-5">
                        <div className="col-8">
                            <div className="mb-3">
                                <label for="nameInput" class="form-label">Name:</label>
                                <input id="nameInput" type="text" value={profileObj.name} onChange={handleNameChange} className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label for="locationInput" class="form-label">Location:</label>
                                <input id="locationInput" type="text" value={profileObj.location} onChange={handleLocationChange} className="form-control" />
                                
                            </div>
                            <div className="mb-3">
                                <label for="occuInput" class="form-label">Occupation:</label>
                                <input id="occuInput" type="text" value={profileObj.occupation} onChange={handleLocationChange} className="form-control" />
                                
                            </div>
                            <div className="mb-3">
                                <label for="instaInput" class="form-label">Instagram:</label>
                                <input id="instaInput" type="text" value={profileObj.socialInsta} onChange={handleLocationChange} className="form-control" />
                                
                            </div>
                            <div className="mb-3">
                                <label for="twitterInput" class="form-label">Twitter:</label>
                                <input id="twitterInput" type="text" value={profileObj.socialTwitter} onChange={handleLocationChange} className="form-control" />
                                
                            </div>
                            <div>
                                <label for="aboutInput" class="form-label">About:</label>
                                {/* <input id="aboutInput" type="text" value={profileObj.aboutMessage} onChange={handleLocationChange} className="form-control py-5 text-wrap" /> */}
                                <textarea className="form-control" id="aboutInput" rows="3" value={profileObj.aboutMessage} onChange={handleLocationChange}></textarea>
                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}