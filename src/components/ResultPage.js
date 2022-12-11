import React, { useState } from 'react';
// import { ResultFilter } from './ResultFilter';
import { ResultPane } from './ResultPane';
import { Link } from 'react-router-dom';

export default function ResultPage(props) {
    const allStores = props.stores;
    const [storesVisible, changeStoresVisible] = useState(allStores);

    const handleRestaurantFilter = (storeParam) => {
        const filteredRestaurants = allStores.filter((store) => {
            return store.typeFood === storeParam;
        })
        console.log(filteredRestaurants);
        changeStoresVisible(filteredRestaurants);
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row m-auto">
                    <div className="col-md-4 col-lg-3">
                        <ResultFilter store={props.storeCallback} changeStoresVisible={handleRestaurantFilter}/>
                        <div className="card shadow-none border">
                            <Link to="../new_item" className="card-body btn btn-danger">
                                <strong className="text-white">Add a New Location</strong>
                            </Link>
                        </div>
                    </div>
                    <ResultPane storeCallback={props.storeCallback} favCallback={props.favCallback} stores={storesVisible} />
                </div>
            </div>
        </div>
    );
}

function ResultFilter(props) {
    return (
        <div className="card shadow-none">
            <div className="card-body">
                <p>Type of Food</p>
                <select onChange={(event) => {props.changeStoresVisible(event.target.value);}} className="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option defaultValue>Open this select menu</option>
                    <option value="japanese">Japanese</option>
                    <option value="european">European</option>
                    {/* <option value="">Three</option> */}
                </select>
            </div>
        </div>
    )
}