import React, { useState, useEffect } from 'react';
// import { ResultFilter } from './ResultFilter';
import { ResultPane } from './ResultPane';
import { Link } from 'react-router-dom';

export default function ResultPage(props) {
    const allStores = props.stores;
    // const restaurants = allStores.filter((store) => {
    //     return store.type === "restaurant";
    // });
    const [storesVisible, changeStoresVisible] = useState(allStores);
    const [checkboxBool, setCheckboxBool] = useState(
        {
            "female": false,
            "lgbtq": false,
            "black": false,
            "asian": false
        }
    );
    const [renderCheckerBool, setRenderCheckerBool] = useState(false);
    const [typeShop, setTypeShop] = useState("");
    const [typeRestaurant, setTypeRestaurant] = useState("");

    // RE RENDERS IF THE INPUT AFTER SEARCH QUERY IS NOT THE SAME!
    // DOES NOT WORK IF I AM ALREADY ON RESULTS PAGE
    // if(props.stores !== storesVisible) {
    //     changeStoresVisible(props.stores);
    // }

    
    
    if (props.stores !== storesVisible && props.locationPath === "/results" && renderCheckerBool === false) {
        changeStoresVisible(props.stores);
        // handleShopTypeFilter("all");
    }

    const handleShopTypeFilter = (storeParam) => {
        if (storeParam !== "all") {
            const filteredShops = allStores.filter((store) => {

                return store.type === storeParam;
            })
            // console.log(filteredShops);
            if(storeParam === "shop") {
                setTypeRestaurant("all");
            }
            setRenderCheckerBool(true);
            setTypeShop(storeParam);
            changeStoresVisible(filteredShops);
            // changePrevStores(storesVisible);
        } else {
            setRenderCheckerBool(false);
            setTypeShop("all");
            changeStoresVisible(allStores);
        }
    }

    if(props.typeStore !== "" && renderCheckerBool === false) {
        handleShopTypeFilter(props.typeStore);
    }

    const handleRestaurantFilter = (storeParam) => {
        // const filteredRestaurants = restaurants.filter((store) => {

        //     return store.typeFood === storeParam;
        // });
        // changeStoresVisible(filteredRestaurants);

        if (storeParam !== "all") {
            const filteredRestaurants = allStores.filter((store) => {
                return store.typeFood === storeParam;
            })
            // console.log(filteredRestaurants);
            setRenderCheckerBool(true);
            setTypeShop("restaurant");
            setTypeRestaurant(storeParam);
            changeStoresVisible(filteredRestaurants);
            // changePrevStores(storesVisible);
        } else {
            setRenderCheckerBool(false);
            setTypeShop("all");
            setTypeRestaurant("all");
            handleShopTypeFilter("restaurant");
            // changeStoresVisible(restaurants);
        }
    }

    const handleOwnedBy = (storeParam, isChecked) => {
        if (isChecked) {

            setCheckboxBool({ ...checkboxBool, [storeParam]: true });
            // console.log(checkboxBool);
        } else {
            setCheckboxBool({ ...checkboxBool, [storeParam]: false });
            // console.log(checkboxBool);

        }
    }


    useEffect(() => {
        // const searchResultState = props.searchResults;
        // console.log(searchResultState);
        if(props.typeStore !== "") {
            handleShopTypeFilter(props.typeStore);
        } else {
            changeStoresVisible(props.stores);
        }
        
        // console.log("RE RENDERED!");


        // const changeResultView = () => {
        if (Object.values(checkboxBool).every((bool) => bool === false)) {
            console.log(typeShop);
            console.log(typeRestaurant);
            if (typeShop === "" || typeShop === "all") {
                changeStoresVisible(allStores);
                // setRenderCheckerBool(true);
            } else {
                if (typeRestaurant === "" || typeRestaurant === "all") {
                    handleShopTypeFilter(typeShop);
                    // setRenderCheckerBool(true);
                    // handleRestaurantFilter(typeRestaurant);
                } else {
                    handleShopTypeFilter(typeShop);
                    handleRestaurantFilter(typeRestaurant);
                    // setRenderCheckerBool(true);
                }
                setRenderCheckerBool(false);
                // handleShopTypeFilter(typeShop);
                // setRenderCheckerBool(false);
            }
            // console.log("all false");


            // if(typeShop === "restaurant") {
            //     handleShopTypeFilter(typeShop);
            // }
            // if(typeShop === "")
            // changeStoresVisible(storesVisible);
        }

        else {
            setRenderCheckerBool(true);
            // console.log("not all false");
            const filteredObjects = new Set();

            for (const [type, typeBool] of Object.entries(checkboxBool)) {
                // console.log(type);
                // console.log(typeBool);
                for (const storeObj of storesVisible) {
                    // console.log(storeObj);
                    if (typeBool === true) {
                        if (storeObj.ownedBy !== undefined) {
                            if (storeObj.ownedBy.includes(type)) {
                                filteredObjects.add(storeObj);
                            }
                            if (!storeObj.ownedBy.includes(type)) {
                                filteredObjects.delete(storeObj);
                            }
                        }
                    } else {
                        if (storeObj.ownedBy !== undefined) {
                            console.log(storeObj.placeName + " " + storeObj.ownedBy);
                            for (const propertyItem of storeObj.ownedBy) {

                                if (checkboxBool[propertyItem] === false) {
                                    console.log("deleting " + propertyItem);
                                    filteredObjects.delete(storeObj);
                                } else {
                                    console.log("adding " + propertyItem);
                                    filteredObjects.add(storeObj);
                                    break;
                                }
                            }
                        }
                    }
                    // else {
                    //     if (storeObj.ownedBy !== undefined) {

                    //         // storeObj.ownedBy.every((ownedByProperty) => {
                    //         //     console.log("current property " + ownedByProperty);
                    //         //     if ((checkboxBool[ownedByProperty] === true)) {
                    //         //         console.log("inside " + ownedByProperty);
                    //         //         filteredObjects.add(storeObj);
                    //         //     } else {
                    //         //         console.log("outside " + ownedByProperty)
                    //         //         // if (storeObj.ownedBy.includes(type)) {
                    //         //         //     filteredObjects.delete(storeObj);
                    //         //         // }
                    //         //         filteredObjects.delete(storeObj);
                    //         //     }
                    //         // });
                    //     }
                    // }
                }
            }
            const filteredArray = [...filteredObjects];
            changeStoresVisible(filteredArray);
        }



        // }
    }, [checkboxBool]);


    return (
        <div>
            <div className="result-page container my-5">
                <div className="d-flex row m-auto justify-content-center">
                    <div className="col-md-4 col-lg-3">
                        <ResultFilter store={storesVisible} changeOwnedBy={handleOwnedBy} changeShopsVisible={handleShopTypeFilter} changeRestaurantsVisible={handleRestaurantFilter} />
                        <div className="my-3 ">
                            <Link to="../new_item" className="btn btn-danger add-new-button">
                                <strong className="text-white">Add a New Location</strong>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-8 col-sm-12">
                        <ResultPane storeCallback={props.storeCallback} favCallback={props.favCallback} currentStoreCallback={props.currentStoreCallback} stores={storesVisible} />
                    </div>
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
                    <div className="form-check">
                        <input onChange={handleCheckbox} className="form-check-input" type="checkbox" value="black" id="flexCheckDefault"></input>
                        <label className="form-check-label">Black-owned</label>
                    </div>
                    <div className="form-check">
                        <input onChange={handleCheckbox} className="form-check-input" type="checkbox" value="asian" id="flexCheckDefault"></input>
                        <label className="form-check-label">Asian-owned</label>
                    </div>
                </div>
            </div>
        </div>
    )
}