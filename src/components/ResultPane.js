import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import STORE_DATA from '../data/store_data.json';

export function ResultPane(props) {
    // const currentFilter = '';
    // filter by type later
    const stores = props.stores;
    //console.log(stores)

    const resultsArray = stores.map((resultObj, index) => {
        const element = (
            <ResultItem resultData={resultObj} key={index + 1} storeCallback={props.storeCallback} favCallback={props.favCallback} />
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
        // <div className="flex-fill card result-item-card">
        //     <img src={placeThumbnail} className="card-img-top" alt="..." />
        //     <div className="card-body">
        //         <h5 className="card-title">{placeName}</h5>
        //         <p className="text-muted">{location}</p>
        //         <p className="card-text">{description}</p>
        //         <button className={favoritedStyle} onClick={handleClick}>{favoritedText}</button>
        //     </div>
        // </div>

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
                        <Link className="company-heading mb-0 mt-1" to="../item">{placeName}</Link>
                        <p className="text-muted">{location}</p>
                        <p className="card-text">
                            {description}
                        </p>
                        <button className={favoritedStyle} onClick={handleClick}>{favoritedText}</button>
                    </div>
                </div>
            </div>
        </div>

        // <div className="card">
            
        //     <div className="row">
        //     <a href="" className="col">
        //         <img src={placeThumbnail} className="results-image" alt={placeName + "'s thumbnail"}></img>
        //     </a>
        //         <div className="col mx-3">
        //             <Link className="company-heading mb-0 mt-1" to="../item">{placeName}</Link>
        //             <p className="text-muted address-text">{location}</p>
        //             <p>{description}</p>
        //             <button className={favoritedStyle} onClick={handleClick}>
        //                 <span>{favoritedText}</span>
        //             </button>
        //         </div>
        //     </div>
        // </div>

    );
}