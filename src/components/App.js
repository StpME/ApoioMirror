import React, { useState } from 'react';
import ApoioHeader from './ApoioHeader.js';
import Footer from './Footer.js';
import { ListPage } from './ListPage.js';
import ResultPage from './ResultPage.js';
import Home from './Home.js';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import { ProfilePage } from './ProfilePage.js';
import { CreateNewItem } from './CreateNewItem.js';
import { ProfilePage } from './newProfilePage.js';
import { EditProfile } from './EditProfile.js'
import { ItemPage } from './ItemPage.js'
import { SignInPage } from './SignInPage.js';

function App(props) {
    //set stores to whatever the user passes to add to list
    const stores = props.stores;
    const filtersList = ["LGBTQ+", "Minority-owned", "Female-owned"];
    const [storeState, setStoreState] = useState(stores);
    const [currentUser, setCurrentUser] = useState(null);
    const [profileData, setProfileData] = useState({
        name: "Ayata Bernhardt",
        location: "Bellevue, Washington",
        occupation: "Student at UW",
        email: "help@uw.edu",
        socialInsta: "ayataeatsIG",
        socialTwitter: "ayataeats",
        aboutMessage: "Hello I am Ayata! Thank you for looking at my page with multiple things of interest on it. Please enjoy your stay.",
        profileImage: "/pics/brows.png"

    });

    // This is the updated FULL dataset after user adds new item (TESTING)
    const [newStores, setStore] = useState([]);
    console.log(newStores);
    
    //Generate unique set of store types for list page
    const list = stores.map((elem) => {
        return elem.type;
    });

    const unique = [...(new Set(list))];

    //list of stores that have a favorited value on them
    //use this to filter if you want to add an item to
    //the list page
    const favList = (storeName, isFavorited) => {
        const storesCopy = storeState.map((storeObj) => {
            if(storeObj.placeName === storeName) {
                storeObj.favorited = isFavorited;
            }
            return storeObj;
        })
        setStoreState(storesCopy);
    }

    const changeProfileData = (profileObj) => {
        setProfileData(profileObj);
    }

    const loginUser = (userObj) => {
        console.log("logging in as", userObj.userName);
        setCurrentUser(userObj);
        // if(userObj.userId !== null){
        //   navigateTo('/chat/general'); //go to chat after login
        // }
      }

    return (
        <div>
            <ApoioHeader />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/lists" element={<ListPage stores={storeState} types={unique} />} />
                <Route path="/profile" element={<ProfilePage profile={profileData} />} />
                <Route path="/profile/edit" element={<EditProfile profile={profileData} profileCallback={changeProfileData}/>}/>

                <Route path="/results" element={<ResultPage stores={stores} storeCallback={favList} />} />
                {/*This component needs to be passed a single store, create in results page instead of a Route here  */}
                <Route path="/item" element={<ItemPage store={stores[0]} />} />
                <Route path="/new_item" element={<CreateNewItem stores={stores} filters={filtersList} dataset={setStore}/>} />
                <Route path="/login" element={<SignInPage currentUser={currentUser} loginCallback={loginUser} />} />
            </Routes>         

            <Footer />
        </div>
    );
}
export default App;
