import React, {useState} from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import {ListPage} from './ListPage.js';
import {CreateList} from './ListPage.js';
//import Home from './Home.js';

function App(props) {
    const stores = props.stores;
    //Generate unique set of store types for listpage
    const list = stores.map((elem) => {
        return elem.type;
      });
    const unique = [...(new Set(list))];

    return (
        <div>
            <Navbar />
            {/*<Home />*/}
            <ListPage stores={stores} types={unique} />
            

            <Footer />
        </div>
    );
}
export default App;
