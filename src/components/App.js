import React, {useState} from 'react';
// import ApoioHeader from './ApoioHeader.js';
import Footer from './Footer.js';
import {ListPage} from './ListPage.js';
import {CreateList} from './ListPage.js';
import ResultPage from './ResultPage.js';
import Home from './Home.js';

function App(props) {
    //set stores to whatever the user passes to add to list
    const stores = props.stores;
    const [storeState, setStoreState] = useState(stores);
    const [isFavorited, setisFavorited] = useState(false);

    //Generate unique set of store types for list page
    const list = stores.map((elem) => {
        return elem.type;
      });
    const unique = [...(new Set(list))];

    const changeFavorited = (favBool) => {
        console.log(favBool + " param");
        setisFavorited(favBool);
    }

    //list of stores that have a favorited value on them
    //use this to filter if you want to add an item to
    //the list page
    const favList = (storeName) => {
        const storesCopy = storeState.map((storeObj) => {
            if(storeObj.placeName === storeName) {
                console.log(isFavorited);
                storeObj.favorited = isFavorited;
            }

            return storeObj;
        })

        setStoreState(storesCopy);
    }
    // console.log(storeState);

    return (
        <div>
            <ApoioHeader />
            {/*<Home />*/}
            <ListPage stores={stores} types={unique} test={true} />
            

            <Footer />
        </div>
    );
}
export default App;
