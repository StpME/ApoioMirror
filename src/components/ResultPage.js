import React, { useState } from 'react';
// import { ResultFilter } from './ResultFilter';
import { ResultPane } from './ResultPane';
import { Link } from 'react-router-dom';

export default function ResultPage(props) {
    const allStores = props.stores;
    const restaurants = allStores.filter((store) => {
        return store.type === "restaurant";
    });
    const [storesVisible, changeStoresVisible] = useState(allStores);
    const [prevStores, changePrevStores] = useState(storesVisible);

    const handleShopTypeFilter = (storeParam) => {
        if (storeParam !== "all") {
            const filteredShops = allStores.filter((store) => {

                return store.type === storeParam;
            })
            // console.log(filteredShops);
            changeStoresVisible(filteredShops);
        } else {
            changeStoresVisible(allStores);
        }
    }

    const handleRestaurantFilter = (storeParam) => {
        if (storeParam !== "all") {
            const filteredRestaurants = restaurants.filter((store) => {
                return store.typeFood === storeParam;
            })
            // console.log(filteredRestaurants);
            changeStoresVisible(filteredRestaurants);
        } else {
            changeStoresVisible(storesVisible);
        }
    }

    const handleOwnedBy = (storeParam, isChecked) => {
        if (isChecked) {
            const filteredRestaurants = storesVisible.filter((store) => {
                if (store.ownedBy !== undefined) {
                    return store.ownedBy.includes(storeParam);
                }
            });
            changePrevStores(storesVisible);
            changeStoresVisible(filteredRestaurants);
        } else {
            changeStoresVisible(prevStores);
        }
    }



    return (
        <div>
            <div className="container mt-5">
                <div className="row m-auto">
                    <div className="col-md-4 col-lg-3">
                        <ResultFilter store={props.stores} changeOwnedBy={handleOwnedBy} changeShopsVisible={handleShopTypeFilter} changeRestaurantsVisible={handleRestaurantFilter} />
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
    const [isRestaurant, setIsRestaurant] = useState(false);

    const handleShopChange = (event) => {
        if (event.target.value === "restaurant") {
            setIsRestaurant(true);
        } else {
            setIsRestaurant(false);
        }
        props.changeShopsVisible(event.target.value);
    }

    const handleRestaurantChange = (event) => {
        props.changeRestaurantsVisible(event.target.value);
    }

    const handleCheckbox = (event) => {
        props.changeOwnedBy(event.target.value, event.target.checked);
    }

    return (
        <div className="card shadow-none">
            <div className="card-body">

                <p>Type of Shop</p>
                <select onChange={handleShopChange} className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                    <option value="all">Open this select menu</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="shop">Shop</option>
                    {/* <option value="">Three</option> */}
                </select>
                {isRestaurant &&
                    <div>
                        <p>Type of Food</p>
                        <select onChange={handleRestaurantChange} className="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                            <option value="all">Filter by Type of Food</option>
                            <option value="japanese">Japanese</option>
                            <option value="european">European</option>
                            <option value="mexican">Mexican</option>
                            {/* <option value="">Three</option> */}
                        </select>
                    </div>
                }

                {/* <p>Owned By:</p> */}
                <div>
                    <div className="form-check">
                        <input onChange={handleCheckbox} className="form-check-input" type="checkbox" value="female" id="flexCheckDefault"></input>
                        <label className="form-check-label">Female-owned</label>
                    </div>
                    <div className="form-check">
                        <input onChange={handleCheckbox} className="form-check-input" type="checkbox" value="lgbtq" id="flexCheckDefault"></input>
                        <label className="form-check-label">LGBTQ+-owned</label>
                    </div>
                </div>
            </div>
        </div>
    )
}