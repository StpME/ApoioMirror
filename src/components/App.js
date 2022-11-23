import React, {useState} from 'react';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import {ListCard} from './List.js';
import {CreateList} from './List.js';

// props is data source 
function App(props) {
    return (
        <div>
            <Navbar />
            <ListCard />
            

            <Footer />
            
        </div>
    );
}
export default App;
