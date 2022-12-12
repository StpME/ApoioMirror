import React, {useState} from 'react';

export function ItemPage(props) {
    const store = props.currentStore;
    // let owner = "";
    
    // if (store.ownedBy !== "") {
    //     owner = store.ownedBy.substring(0,1).toUpperCase() + store.ownedBy.substring(1) + "-owned"
    // }
    return (
        <div className="card m-5 pb-4">
            <div className="card-body">
                <div className="search-item-div">
                    <img className="search-item-img" src={store.placeThumbnail} alt="katsu burger large content image"/>
                </div>
                <h1 className="p-4 text-center"><strong>{store.placeName}</strong></h1>
                {/* <h2 className="text-center text-muted">{owner} {store.type.substring(0,1).toUpperCase() + store.type.substring(1)}</h2> */}
                <h2 className="text-center text-muted">{store.location}</h2>
                <h3 className="text-center text-muted">{store.description}</h3>
            

                <h1 className="p-4">Location via Google Maps</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2691.5393814631484!2d-122.17258248452757!3d47.57674987918264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906eaaac5fc89f%3A0xc19dbcdad1040ad3!2sKatsu%20Burger!5e0!3m2!1sen!2sus!4v1668031908779!5m2!1sen!2sus" className="ps-4" width="400" height="250"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );

}