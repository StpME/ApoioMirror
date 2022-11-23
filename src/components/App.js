import React, {useState} from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import {ListCard} from './ListPage.js';
import {CreateList} from './ListPage.js';

function App(props) {
    const stores = props.stores;

    return (
        <div>
            <Navbar />
            <ListCard stores={stores}/>
            

            <Footer />
            
        </div>
    );
}
export default App;
