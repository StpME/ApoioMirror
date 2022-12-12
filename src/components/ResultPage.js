import React, { useState, useEffect } from 'react';
// import { ResultFilter } from './ResultFilter';
import { ResultPane } from './ResultPane';
import { Link } from 'react-router-dom';

export default function ResultPage(props) {
    const allStores = props.stores;
    const restaurants = allStores.filter((store) => {
        return store.type === "restaurant";
    });
    const [storesVisible, changeStoresVisible] = useState(allStores);
    const [initStores, changeinitStores] = useState(allStores);
    const [filterArray, changeFilterArray] = useState([]);
    const [tempStores, changeTempStores] = useState([]);
    const [checkboxBool, setCheckboxBool] = useState(
        {
            "female": false,
            "lgbtq": false,
            "black": false,
            "asian": false
        }
    );

    const handleShopTypeFilter = (storeParam) => {
        if (storeParam !== "all") {
            const filteredShops = allStores.filter((store) => {

                return store.type === storeParam;
            })
            // console.log(filteredShops);
            changeStoresVisible(filteredShops);
            // changePrevStores(storesVisible);
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
            // changePrevStores(storesVisible);
        } else {
            changeStoresVisible(storesVisible);
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

    // changeResultView();

    // if (isChecked) {
    //     console.log(storeParam);
    //     changeFilterArray([...filterArray, storeParam]);
    //     // console.log(filterArray);
    // } else {
    //     const index = filterArray.indexOf(storeParam)
    //     if(index !== -1) {
    //         const currentArray = filterArray.splice(index, 1);
    //         changeFilterArray(currentArray);
    //     }
    //     // changeStoresVisible(initStores);
    // }
    // if(filterArray.length > 0) {
    //     console.log(filterArray);
    //     let currentArray = [];
    //     initStores.some((store) => {
    //         // console.log(store);
    //         // currentObject = store;
    //         // console.log(currentObject);
    //         if (store.ownedBy !== undefined) {
    //             // console.log(store.ownedBy);
    //             store.ownedBy.every((ownedByItem) => {
    //                 console.log("filter array " + filterArray);
    //                 // console.log(currentObject);
    //                 if(filterArray.includes(ownedByItem)){
    //                     currentArray = [...currentArray, store];
    //                 }
    //                 // return filterArray.includes(ownedByItem);
    //             });
    //         }
    //     });
    //     // changeTempStores(currentArray);
    //     console.log(tempStores);
    //     changeStoresVisible(currentArray);
    // } else {
    //     changeStoresVisible(initStores);
    // }

    // }


    useEffect(() => {
        // const changeResultView = () => {
        if (Object.values(checkboxBool).every((bool) => bool === false)) {
            // console.log("all false");
            changeStoresVisible(initStores);
        }

        else {
            // console.log("not all false");
            const filteredObjects = new Set();

            for (const [type, typeBool] of Object.entries(checkboxBool)) {
                // console.log(type);
                // console.log(typeBool);
                for (const storeObj of initStores) {
                    // console.log(storeObj);
                    if (typeBool === true) {
                        if (storeObj.ownedBy !== undefined) {
                            if (storeObj.ownedBy.includes(type)) {
                                filteredObjects.add(storeObj);
                            }
                        }
                    } else {
                        if (storeObj.ownedBy !== undefined) {
                            if(storeObj.ownedBy.includes(type)) {
                                filteredObjects.delete(storeObj);
                            }
                            // storeObj.ownedBy.every((ownedByProperty) => {
                            //     console.log("current property " + ownedByProperty);
                            //     if ((checkboxBool[ownedByProperty] === true)) {
                            //         console.log("inside " + ownedByProperty);
                            //         filteredObjects.add(storeObj);
                            //     } else {
                            //         console.log("outside " + ownedByProperty)
                            //         // if (storeObj.ownedBy.includes(type)) {
                            //         //     filteredObjects.delete(storeObj);
                            //         // }
                            //         filteredObjects.delete(storeObj);
                            //     }
                            // });
                        }
                    }
                }
            }
            const filteredArray = [...filteredObjects];
            changeStoresVisible(filteredArray);
        }



        // }
    }, [checkboxBool]);


    return (
        <div>
            <div className="result-page container mt-5">
                <div className="d-flex row m-auto justify-content-center">
                    <div className="col-md-4 col-lg-3">
                        <ResultFilter store={props.stores} changeOwnedBy={handleOwnedBy} changeShopsVisible={handleShopTypeFilter} changeRestaurantsVisible={handleRestaurantFilter} />
                        <div className="card shadow-none border">
                            <Link to="../new_item" className="card-body btn btn-danger">
                                <strong className="text-white">Add a New Location</strong>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-8 col-lg-8 col-sm-12">
                        <ResultPane storeCallback={props.storeCallback} favCallback={props.favCallback} stores={storesVisible} />
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