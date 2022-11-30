import React, { useState } from 'react';
import STORE_DATA from '../data/store_data.json';

export function ResultPane(props) {
    // const currentFilter = '';
    // filter by type later

    const resultsArray = STORE_DATA.map((resultObj, index) => {
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
        let someBool = isFavorited;
        if (isFavorited) {
            someBool = false;
        } else {
            someBool = true;
        }
        setisFavorited(!isFavorited);
        console.log(someBool + " handleclick");
        props.storeCallback(placeName);
        props.favCallback(someBool);
    }

    let favoritedText = "Favorite this place!";
    let favoritedStyle = "btn btn-outline-danger text-danger";
    if (isFavorited || (props.resultData.favorited === true)) {
        favoritedText = "Unfavorite this place!";
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