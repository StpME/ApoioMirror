import React, {useState} from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import {ListPage} from './ListPage.js';
import {CreateList} from './ListPage.js';
//import Home from './Home.js';

function App(props) {
    //set stores to whatever the user passes to add to list
    const stores = props.stores;

    //Generate unique set of store types for list page
    const list = stores.map((elem) => {
        return elem.type;
      });
    const unique = [...(new Set(list))];

    return (
        <div>
            <Navbar />
            {/*<Home />*/}
            <ListPage stores={stores} types={unique} test={true} />
            

            <Footer />
        </div>
    );
}
export default App;
