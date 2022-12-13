import React, {useState} from 'react';
import Collapsible from 'react-collapsible';
import MediaQuery from 'react-responsive';
import { Link, Navigate, useNavigate } from 'react-router-dom';
// Collapse arrow icon
const elem = <img id="arrow" src="pics/collapse_arrow.png"/>


export function ListPage(props) {
    
    // Create card components from data if favorited by user.
    const stores = props.stores.map((item, index) => {
        if (item.favorited === true) {
            return (
                <CreateCard key={index} store={item} type={item.type} currentStoreCallback={props.currentStoreCallback} />
            ); 
        }
    });
    const bools = props.stores.map((elem) => {
        return elem.favorited;
      });
    const boolSet = new Set(bools);
    let count = 1;
    const storeTypes = props.types.map((type, index) => {
        if (type != null && boolSet.has(true) === true) {
            return (
                <CreateList key={index} type={type} cards={stores} />
            ); 
        }
        // Only prints message once instead of once per type in data source
        else if (count === 1) {
            count += 1;
            return (
                <Link to="../results" style={{textDecoration:'inherit', color: 'inherit'}} key={index} id="empty" className="p-4 mt-4">{"Add Some Places!"}</Link>
            );
        }
        
    });

    return (
        <section className="col p-5">
            <div className="col-lg-12 d-block">
                <div className="card pb-5">
                    
                    <ul className="list-group list-group-flush">
                        {/*<div id='list_header' className="row p-4 mt-4">
                            <li className="btn btn-success" onClick={handleClick}>
                                <strong><h2 className="ms-3" id="list_name">Create New List</h2></strong>
                            </li>
                        </div>*/}
                        <div id='list_header' className="row pt-4 mt-2">
                            <strong><header className="title">Favorites</header></strong>
                            
                        </div>
                        
                        <div className="row px-3">
                            {storeTypes}
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    );

    function CreateList(props) {
        const type = props.type;
        // List names defaults to store types
        const [text, setText] = useState(type.substring(0,1).toUpperCase() + type.substring(1));
    
        // Prompts user for list name and changes it
        const changeText = () => {
            const input = prompt('Enter List Name');
            if (input != null && input != "") {setText(input);} 
            else {return} 
        }
        
        // Matches card type to list type
        const listCount = [];
        const card = props.cards.map((item) => {
            if (item === undefined) {return}
            else if (type === item.props.type) {
                listCount.push(type);
                return (item)}
        });
        
        function listHeader(button_name) {
            if (listCount.length != 0) {
                return (
                    <div>
                        <li className="list-group-item">
                            <button className="btn btn-success pull-right me-2" onClick={() => changeText()}>{button_name}</button>
                            <h2 className="ms-3" id="list_name"> {elem} {text + " (" + listCount.length + ")"} </h2>
                        </li>
                    </div>
                )
            }
        }

        if (listCount.length != 0) {
            return (
                <div id="list_header collapsible" className="row p-4 mt-4">
                    <MediaQuery minWidth={768}>
                        <Collapsible className="collapsible" open trigger={listHeader("Edit Name")}>
                            <div className="row">
                                {card}
                            </div>
                        </Collapsible>
                    </MediaQuery>
                    <MediaQuery maxWidth={768}>
                        <Collapsible className="collapsible" close trigger={listHeader("Edit")}>
                            <div className="row">
                                {card}
                            </div>
                        </Collapsible>
                    </MediaQuery>
                </div> 
            )
        }
    }
    
    // Function called when user favorites a store
    function CreateCard(props) { 
        const store = props.store;
        //console.log(store);
        let nav = useNavigate();
        //unstar to remove from the list?
        //click to go to store information (when info is implemented)?
        const handleClick = (event) => {
            
        }
        
        function thumbnailCheck() {
            if (store.placeThumbnail === undefined) {
            // Filler image if passed no thumbnail from data
                store.placeThumbnail = "/pics/placeholder.jpg";
            }
            return store.placeThumbnail;
        }
    
        function nameCheck() {
            if (store.placeName === undefined || store.placeName === null) {
            // Filler name if passed no store name from data
                store.placeName = "Store Name";
            }
            return store.placeName;
        }
        const currentStoreCallback = () => {
            props.currentStoreCallback(store);
        }
        return (
            <div className="col" id="list_card">
                <div className="card" id="list_card">
                    <img className="img-fluid h-100" src={thumbnailCheck()}/>
                    <div className="darken">
                        <Link onClick={currentStoreCallback} className="card-block text-center darken" to={"/results/"+store.placeName} >
                            <h4 className="center" id="store_name">{nameCheck()}</h4>
                        </Link>
                        {/*<p>{store.description}</p>*/}
                        {/*<a href="#" className="btn stretched-link"></a>*/}
                    </div>
                </div>
            </div>
        );
    }  
}