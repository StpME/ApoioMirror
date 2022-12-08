import React, {useState} from 'react';
import ApoioHeader from './ApoioHeader.js';
import Footer from './Footer.js';
import { ListPage } from './ListPage.js';
import ResultPage from './ResultPage.js';
import Home from './Home.js';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
// import { ProfilePage } from './ProfilePage.js';
import { CreateNewItem } from './CreateNewItem.js';
// import { ProfilePage } from './newProfilePage.js';
import { EditProfile } from './EditProfile.js'
import { ItemPage } from './ItemPage.js'

function App(props) {
    //set stores to whatever the user passes to add to list
    const stores = props.stores;
    const [storeState, setStoreState] = useState(stores);
    const [currentUser, setCurrentUser] = useState(null);

    // This is the updated dataset after user adds new item (TESTING)
    const [newStores, setStore] = useState([]);
    //console.log(newStores);
    
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
                <Route path="/profile" element={<EditProfile />} />
                <Route path="/results" element={<ResultPage stores={stores} storeCallback={favList} />} />
                <Route path="/item" element={<ItemPage store={stores[0]} />} />
                <Route path="/new_item" element={<CreateNewItem stores={stores} passback={setStore}/>} />
            </Routes>         

            <Footer />
        </div>
    );
}
export default App;
