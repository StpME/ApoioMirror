import React, {useState} from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import {ListCard} from './ListPage.js';
import {CreateList} from './ListPage.js';
import Home from './Home.js';

function App(props) {
    const stores = props.stores;
    //console.log(props);

    return (
        <div>
            <Navbar />
            <Home />
            {/* <ListCard stores={stores}/> */}
            

            <Footer />
        </div>
    );
}
export default App;
