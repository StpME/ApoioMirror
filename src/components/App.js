import React, { useState, useEffect } from 'react';
import ApoioHeader from './ApoioHeader.js';
import Footer from './Footer.js';
import { ListPage } from './ListPage.js';
import ResultPage from './ResultPage.js';
import Home from './Home.js';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { CreateNewItem } from './CreateNewItem.js';
import { ProfilePage } from './newProfilePage.js';
import { EditProfile } from './EditProfile.js'
import { ItemPage } from './ItemPage.js'
import { SignInPage } from './SignInPage.js';
// import { ProfilePage } from './ProfilePage.js';


function App(props) {
    //set stores to whatever the user passes to add to list
    const stores = props.stores;
    //const filtersList = ["LGBTQ+", "Minority-owned", "Female-owned"];
    const [storeState, setStoreState] = useState(stores);
    const [currentUser, setCurrentUser] = useState(null);
    const [authStateDetermined, setAuthStateDetermined] = useState(false);
    const [currentStore, setCurrentStore] = useState(null);
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
    // console.log(newStores);
    
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
                storeObj.favorited = isFavorited;
            }
            return storeObj;
        })
        setStoreState(storesCopy);
    }

    const changeProfileData = (profileObj) => {
        setProfileData(profileObj);
    }

    const setResultPageLink = (storeObj) => {
        setCurrentStore(storeObj);
    }

    // const navigateTo = useNavigate();

    useEffect(() => {
        //log in a default user
        const auth = getAuth();
        onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                console.log("logged in as", firebaseUser.displayName);
                console.log(firebaseUser.uid);
                firebaseUser.userId = firebaseUser.uid
                firebaseUser.name = firebaseUser.displayName;
                // firebaseUser.userImg = firebaseUser.photoURL || "/img/null.png"
                console.log(firebaseUser);
                setCurrentUser(firebaseUser);
            } else {
                console.log("logged out");
                setCurrentUser(null);
            }
        })
    }, [])

    // console.log("Current User " + typeof(currentUser));

    return (
        <div>
            <ApoioHeader currentUser={currentUser} />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/lists" element={<ListPage stores={storeState} types={unique} />} />
                <Route path="/profile" element={<ProfilePage profile={profileData} currentUser={currentUser} />} />
                <Route path="/profile/edit" element={<EditProfile profile={profileData} profileCallback={changeProfileData} />} />

                <Route path="/results" element={<ResultPage stores={stores} storeCallback={favList} currentStoreCallback={setResultPageLink}/>} />
                <Route path="/results/:storeName" element={<ItemPage currentStore={currentStore} />} />
                {/*This component needs to be passed a single store, create in results page instead of a Route here  */}
                {/* <Route path="/item" element={<ItemPage store={stores[0]} />} /> */}
                <Route path="/new_item" element={<CreateNewItem stores={stores} dataset={setStore} />} />
                <Route path="/login" element={<SignInPage currentUser={currentUser} />} />

            </Routes>

            <Footer />
        </div>
    );
}
export default App;
