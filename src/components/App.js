import React, {useState} from 'react';
import ApoioHeader from './ApoioHeader.js';
import Footer from './Footer.js';
import {ListPage} from './ListPage.js';
import {CreateList} from './ListPage.js';
import ResultPage from './ResultPage.js';
import Home from './Home.js';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { ProfilePage } from './ProfilePage.js';

function App(props) {
    //set stores to whatever the user passes to add to list
    const stores = props.stores;
    const [storeState, setStoreState] = useState(stores);

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
                //console.log(!isFavorited);
                storeObj.favorited = isFavorited;
            }

            return storeObj;
        })
        //console.log(storesCopy);
        setStoreState(storesCopy);
    }
    //console.log(storeState);

    return (
        <div>
            <ApoioHeader />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/lists" element={<ListPage stores={storeState} types={unique} />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/results" element={<ResultPage stores={stores} storeCallback={favList} />} />
            </Routes>         

            <Footer />
        </div>
    );
}
export default App;
