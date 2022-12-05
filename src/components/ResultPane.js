import React, { useState } from 'react';
// import STORE_DATA from '../data/store_data.json';

export function ResultPane(props) {
    // const currentFilter = '';
    // filter by type later
    const stores = props.stores;
    //console.log(stores)

    const resultsArray = stores.map((resultObj, index) => {
        const element = (
            <ResultItem resultData={resultObj} key={index + 1} storeCallback={props.storeCallback} favCallback={props.favCallback}/>
        )
        return element;
    })

    return (
        <div className="col-md-6 col-lg-9 flex-column">
            {resultsArray}
        </div>
    );
}

function ResultItem(props) {
    const [isFavorited, setisFavorited] = useState(false);
    const { placeName, location, description, placeThumbnail } = props.resultData;


    const handleClick = () => {
        
        // console.log(placeName);

        // addToMyList = !isFavorited;
        props.storeCallback(placeName, !isFavorited);
        setisFavorited(!isFavorited);
        // props.favCallback(isFavorited);
        

    }

    let favoritedText = "Add to Lists!";
    let favoritedStyle = "btn btn-outline-danger";
    if (isFavorited || (props.resultData.favorited === true)) {
        favoritedText = "Remove from Lists!";
        favoritedStyle = "btn btn-danger text-white"
    }

    return (
        <div className="d-flex flex-row m-2 result-container">
            <a href="">
                <img src={placeThumbnail} className="results-image" alt={placeName + "'s thumbnail"}></img>
            </a>
            <div className="row">
                <div className="col mx-3">
                    <a className="company-heading mb-0 mt-1" href="">{placeName}</a>
                    <p className="text-muted address-text">{location}</p>
                    <p>{description}</p>
                    <button className={favoritedStyle} onClick={handleClick}>
                        <span>{favoritedText}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}