import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import STORE_DATA from '../data/store_data.json';

export function ResultPane(props) {
    const stores = props.stores;
    //console.log(stores)

    const resultsArray = stores.map((resultObj, index) => {
        const element = (
            <ResultItem resultData={resultObj} key={index + 1} storeCallback={props.storeCallback} favCallback={props.favCallback} currentStoreCallback={props.currentStoreCallback}/>
        )
        return element;
    })

    return (
        <div className="card-deck">
            {resultsArray}
        </div>
    );
}

function ResultItem(props) {
    const [isFavorited, setisFavorited] = useState(false);
    const { placeName, location, description, placeThumbnail } = props.resultData;


    const handleClick = () => {

        props.storeCallback(placeName, !isFavorited);
        setisFavorited(!isFavorited);


    }

    let favoritedText = "Add to Lists!";
    let favoritedStyle = "btn btn-outline-danger";
    if (isFavorited || (props.resultData.favorited === true)) {
        favoritedText = "Remove from Lists!";
        favoritedStyle = "btn btn-danger text-white"
    }

    const currentStoreCallback = () => {
        props.currentStoreCallback(props.resultData);
    }

    return (

        <div className="card mb-3 result-item-card">
            <div className="row">
                <div className="col col-lg-4">
                    <img
                        src={placeThumbnail}
                        alt="..."
                        className="img-fluid rounded-start result-card-img"
                    />
                </div>
                <div className="col col-lg-8">
                    <div className="card-body">
                        {/* <h5 className="card-title">{placeName}</h5> */}
                        <Link onClick={currentStoreCallback} className="company-heading mb-0 mt-1" to={"/results/"+placeName}>{placeName}</Link>
                        <p className="text-muted">{location}</p>
                        <p className="card-text">
                            {description}
                        </p>
                        <button className={favoritedStyle} onClick={handleClick}>{favoritedText}</button>
                    </div>
                </div>
            </div>
        </div>

    );
}