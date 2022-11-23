import React, {useState} from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import {ListCard} from './ListPage.js';
import {CreateList} from './ListPage.js';
import {ResultPane} from './ResultPane.js'
function App(props) {
    const stores = props.stores;
    //console.log(props);

    return (
        <div>
            <Navbar />
            <ListCard stores={stores}/>
           

            <Footer />
        </div>
    );
}
export default App;
