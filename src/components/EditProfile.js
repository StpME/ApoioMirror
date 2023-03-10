import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getDatabase, ref as dbRef, set as firebaseSet} from 'firebase/database';
import { updateProfile } from 'firebase/auth';

export function EditProfile(props) {
    // has to have a prop object and we'll change that object and give it back with callback
    const navigateTo = useNavigate();
    const currentUser = props.currentUser;

    const [profileData, setProfileData] = useState(props.profile);
    const [imageFile, setImageFile] = useState(undefined);
    const [imageUrl, setImageUrl] = useState(props.profile.profileImage);

    const handleProfileData = (event) => {
        setProfileData({ ...profileData, [event.target.name]: event.target.value });
    }

    const handleClick = (event) => {
        props.profileCallback(profileData);
        navigateTo('/profile');
    }

    const handleChange = (event) => {
        if (event.target.files.length > 0 && event.target.files[0]) {
            const imageFile = event.target.files[0]
            setImageFile(imageFile);
        }
    }

    const handleImageUpload = async (event) => {
        // console.log("Uploading", imageFile);
        // console.log(currentUser);
    
        const storage = getStorage();
        const userImageRef = storageRef(storage, "/userImages/"+currentUser.userId+".png");
    
        await uploadBytes(userImageRef, imageFile);
        const downloadUrlString = await getDownloadURL(userImageRef)
        setImageUrl(downloadUrlString);
        await updateProfile(currentUser, {photoURL: downloadUrlString})
        setProfileData({...profileData, "profileImage": downloadUrlString})
        const userDbRef = dbRef(getDatabase(), "userData/"+currentUser.userId+"/profileImage");
        firebaseSet(userDbRef, downloadUrlString);
      }

    return (
        <div className="container mt-5 p-5">
            <div className="d-flex row justify-content-center m-auto">
                <div className="col-lg-10 flex-column bg-white rounded">
                    <div>
                        <div>
                            <img alt="profile picture" src={imageUrl} className="rounded img-thumbnail d-block mx-auto profile-img" />


                        </div>
                    </div>
                    <div className="d-flex profile-negative-margins justify-content-between mx-3">
                        <div className="d-block justify-content-center bg-light text-center">
                            <p className="page-view-count mb-0">2022</p>
                            <p className="text-muted">Member Since</p>

                        </div>
                        <div>
                            <button type="button" className="btn btn-info" onClick={handleClick}>Save</button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <label htmlFor="imageUploadInput" className="btn btn-sm btn-secondary me-2">Choose Image</label>
                        <button className="btn btn-sm btn-success" onClick={handleImageUpload}>Save to Profile</button>
                        <input type="file" name="image" id="imageUploadInput" className="d-none" onChange={handleChange} />
                    </div>

                    <div className="d-flex row justify-content-center mt-3 mb-5">
                        <div className="col-8">
                            <div className="form-group mb-3">
                                <label htmlFor="nameInput" className="form-label">Name:</label>
                                <input name="name" className="form-control" id="nameInput" type="text" value={profileData.name} onChange={handleProfileData} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="locationInput" className="form-label">Location:</label>
                                <input name="location" id="locationInput" type="text" value={profileData.location} onChange={handleProfileData} className="form-control" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="occuInput" className="form-label">Title:</label>
                                <input name="title" id="occuInput" type="text" value={profileData.title} onChange={handleProfileData} className="form-control" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="instaInput" className="form-label">Instagram:</label>
                                <input name="socialInsta" id="instaInput" type="text" value={profileData.socialInsta} onChange={handleProfileData} className="form-control" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="twitterInput" className="form-label">Twitter:</label>
                                <input name="socialTwitter" id="twitterInput" type="text" value={profileData.socialTwitter} onChange={handleProfileData} className="form-control" />

                            </div>
                            <div>
                                <label htmlFor="aboutInput" className="form-label">About:</label>
                                {/* <input id="aboutInput" type="text" value={profileObj.aboutMessage} onChange={handleLocationChange} className="form-control py-5 text-wrap" /> */}
                                <textarea name="aboutMessage" className="form-control" id="aboutInput" rows="3" value={profileData.aboutMessage} onChange={handleProfileData}></textarea>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}