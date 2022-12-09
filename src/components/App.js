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

function App(props) {
    //set stores to whatever the user passes to add to list
    const stores = props.stores;
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

    });

    // This is the updated dataset after user adds new item (TESTING)
    const [newStores, setStore] = useState([]);
    
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
            if (storeObj.placeName === storeName) {
                //console.log(!isFavorited);
                storeObj.favorited = isFavorited;
            }

            return storeObj;
        })
        setStoreState(storesCopy);
    }

    const changeProfileData = (profileObj) => {
        setProfileData(profileObj);
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
                <Route path="/item" element={<ItemPage store={stores[0]} />} />
                <Route path="/new_item" element={<CreateNewItem stores={stores} passback={setStore}/>} />
            </Routes>         

            <Footer />
        </div>
    );
}
export default App;
