import React from 'react';
import STORE_DATA from '../data/store_data.json';

export function ResultPane(props) {
    const currentFilter = '';
    // filter by type later

    const resultsArray = STORE_DATA.map((resultObj, index) => {
        const element = (
            <ResultItem resultData={resultObj} key={index+1} />
        )
        return element;
    })

    return(
        <div className="col-md-6 col-lg-9 flex-column">
            {resultsArray}
        </div>
    );
}

function ResultItem(props) {
const {placeName, location, description, placeThumbnail} = props.resultData;

    return (
        <div class="d-flex flex-row m-2 result-container">
            <a href="">
                <img src={placeThumbnail} class="results-image" alt={placeName + "'s thumbnail"}></img>
            </a>
            <div class="row">
                <div class="col mx-3">
                    <a class="company-heading mb-0 mt-1" href="">{placeName}</a>
                    <p class="text-muted address-text">{location}</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}