import React, { useState, useEffect } from 'react';
import ApoioHeader from './ApoioHeader.js';
import Footer from './Footer.js';
import { ListPage } from './ListPage.js';
import ResultPage from './ResultPage.js';
import Home from './Home.js';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase, ref as dbRef, set, onValue, child, get } from 'firebase/database';
import { CreateNewItem } from './CreateNewItem.js';
import { ProfilePage } from './newProfilePage.js';
import { EditProfile } from './EditProfile.js'
import { ItemPage } from './ItemPage.js'
import { SignInPage } from './SignInPage.js';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { ProfilePage } from './ProfilePage.js';


function App(props) {
    //set stores to whatever the user passes to add to list
    const stores = props.stores;
    //const filtersList = ["LGBTQ+", "Minority-owned", "Female-owned"];
    const [storeState, setStoreState] = useState(stores);
    const [currentUser, setCurrentUser] = useState(null);
    const [currentStore, setCurrentStore] = useState(null);
    const [profileData, setProfileData] = useState({
        name: "",
        location: "",
        title: "",
        email: "",
        socialInsta: "",
        socialTwitter: "",
        aboutMessage: "",
        profileImage: "/pics/placeholder.jpg",
        uid: null,
        favs: []
    });
    const [location, setLocation] = useState("");
    const [queryResults, setQueryResults] = useState(stores);
    const [typeStore, setTypeStore] = useState("");
    const [placeRating, setPlaceRating] = useState({});

    // This is the updated full dataset after user adds new item (TESTING)
    // Adds new object from create page, should get added to database
    const [newStores, setStore] = useState(storeState);
    //console.log("Current Dataset: ", newStores);

    //Generate unique set of store types for list page
    const list = stores.map((elem) => {
        return elem.type;
    });
    const unique = [...(new Set(list))];

    const db = getDatabase();
    const objectData = dbRef(db, "businessData");
    const objectInformation = onValue(objectData, (snapshot) => {
        // console.log(snapshot.val());
    });
    // console.log(objectData);
    // objectInformation();

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
        const db = getDatabase();
        const userFavRef = dbRef(db, 'userData/' + currentUser.userId + "/favorites");
        set(userFavRef, storeState);
    }

    const changeProfileData = (profileObj) => {
        setProfileData(profileObj);
        const db = getDatabase();
        const userDataRef = dbRef(db, 'userData/' + currentUser.userId);
        console.log(userDataRef);
        set(userDataRef, profileObj);
    }

    const setResultPageLink = (storeObj) => {
        setCurrentStore(storeObj);
    }

    const changeSearchInput = (searchQuery, locationName) => {
        setLocation(locationName);
        // console.log(locationName);
        setQueryResults(storeState);
        const queryToLower = searchQuery.toLowerCase();
        const filteredObjects = new Set();


        storeState.filter((storeObj) => {

            if (searchQuery !== "") {
                if (storeObj.placeName !== undefined) {
                    const placeLower = storeObj.placeName.toLowerCase();
                    if (placeLower.includes(queryToLower)) {
                        filteredObjects.add(storeObj);
                    }
                }
                if (storeObj.type !== undefined) {
                    if (storeObj.type.includes(queryToLower)) {
                        filteredObjects.add(storeObj);
                    }
                }
                if (storeObj.typeFood !== undefined) {
                    if (storeObj.typeFood.includes(queryToLower)) {
                        filteredObjects.add(storeObj);
                    }
                }
            }
        })


        const filteredArray = [...filteredObjects];
        // console.log("results in app " + queryResults);
        if (filteredArray.length !== 0) {
            setQueryResults(filteredArray);
        }
    }

    const typeStoreForResult = (storeString) => {
        setTypeStore(storeString);
    }

    const starSetter = (numStars) => {

    }

    const auth = getAuth();
    const [user, loading, error] = useAuthState(auth);

    // logging in
    useEffect(() => {
        onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                console.log("logged in as", firebaseUser.displayName);
                firebaseUser.userId = firebaseUser.uid
                firebaseUser.name = firebaseUser.displayName;
                setCurrentUser(firebaseUser);
                const userDataRef = dbRef(getDatabase(), "userData");
                get(child(userDataRef, firebaseUser.userId)).then((snapshot) => {
                    if(snapshot.exists()) {
                        setProfileData(snapshot.val())
                    } else {
                        console.log("unavailable");
                    }
                }).catch((error) => {
                    console.log(error);
                })
            } else {
                console.log("logged out");
                setCurrentUser(null);
            }
        })
    }, [])

    //just getting data
    useEffect(() => {

        const db = getDatabase(); //"the database"
        const businessData = dbRef(db, "businessData");

        //when db value changes
        const offFunction = onValue(businessData, (snapshot) => {
            const valueObj = snapshot.val();
            //convert object into array
            const objKeys = Object.keys(valueObj);
            const objArray = objKeys.map((keyString) => {
                const businessObj = valueObj[keyString];
                businessObj.key = keyString;
                return businessObj;
            })
            // console.log(objArray);
        })

        function cleanup() {
            offFunction();
        }
        return cleanup; //return instructions on how to turn off lights
    }, [])

    return (
        <div>
            <ApoioHeader currentUser={currentUser} searchInputCallback={changeSearchInput} />
            <Routes>
                <Route index element={<Home typeStoreCallback={typeStoreForResult} />} />
                <Route path="/favorites" element={<ListPage currentUser={currentUser} stores={storeState} types={unique} currentStoreCallback={setResultPageLink} />} />
                <Route path="/profile" element={<ProfilePage profile={profileData} currentUser={currentUser} />} />
                <Route path="/profile/edit" element={<EditProfile profile={profileData} currentUser={currentUser} profileCallback={changeProfileData} />} />

                <Route path="/results" element={<ResultPage stores={queryResults} storeCallback={favList} currentStoreCallback={setResultPageLink} locationPath={location} typeStore={typeStore} />} />
                <Route path="/results/:storeName" element={<ItemPage allStores={stores} currentStore={currentStore} starCallback={starSetter} userInfo={currentUser} />} />
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
