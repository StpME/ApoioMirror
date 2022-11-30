import React, {useState} from 'react';
import Collapsible from 'react-collapsible';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';

export function ListPage(props) {
    //console.log(props);
    // Create components
    const stores = props.stores.map((item, index) => {
        if (item.favorited === true) {
            return (
                <CreateCard key={index} store={item} type={item.type}/>
            ); 
        }
        return (
            <CreateCard key={null} store={null} type={null}/>
        ); 
    });

    const storeTypes = props.types.map((item, index) => {
        return (
            <CreateList key={index} type={item} cards={stores}/>
        ); 
    });
    

    return (
        <section className="col p-5">
            <div className="col-lg-12 d-block">
                <div className="card">
                    <ul className="list-group list-group-flush">
                        {/*<div id='list_header' className="row p-4 mt-4">
                            <li className="btn btn-success" onClick={handleClick}>
                                <strong><h2 className="ms-3" id="list_name">Create New List</h2></strong>
                            </li>
                        </div>*/}
                        
                        <div id='list_header' className="row pt-4 mt-2">
                            <strong><header className="title">My Lists</header></strong>
                        </div>
                        
                        <div className="row px-3">
                            {storeTypes}
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export function CreateList(props) {
    const type = props.type;
    //List names defaults to store types
    const [text, setText] = useState(type.substring(0,1).toUpperCase() + type.substring(1));
    
    

    //Prompts user for list name and changes it
    const changeText = () => {
        const input = prompt('Enter List Name');
        if (input != null && input != "") {setText(input);} 
        else {return} 
    }
    
    //Matches card type to list type
    const listCount = [];
    const card = props.cards.map((item) => {
        if (type === item.props.type) {
            listCount.push(type);
            return (item)}
    });

    function listHeader() {
        return (
            <li className="list-group-item">
                <button className="btn btn-success pull-right me-3" onClick={() => changeText()}>Edit</button>
                <strong><h2 className="ms-3" id="list_name">{text + " (" + listCount.length + ")"}</h2></strong>
            </li>
        )
    }

    
    return (
        <div id="list_header collapsible" className="row p-4 mt-4">
            <MediaQuery minWidth={768}>
                <Collapsible className="collapsible" open trigger={listHeader()}>
                    <div className="row">
                        {card}
                    </div>
                </Collapsible>
            </MediaQuery>
            <MediaQuery maxWidth={768}>
                <Collapsible className="collapsible" trigger={listHeader()}>
                    <div className="row">
                        {card}
                    </div>
                </Collapsible>
            </MediaQuery>
        </div> 
    )
}

//Function called when user favorites a store
export function CreateCard(props) { 
    const store = props.store;
    //unstar to remove from the list?
    //click to go to store information (when info is implemented)?
    const handleClick = (event) => {
        console.log("clicked");
    }

    return (
        <div className="col" id="list_card" onClick={handleClick}>
            <div className="card" id="list_card">
            <img className="img-fluid h-100" src={store.placeThumbnail}/>
            <div className="card-block text-center darken">
                <h4 className="center" id="store_name">{store.placeName}</h4>
                {/*<p>{store.description}</p>*/}
                <a href="#" className="btn stretched-link"></a>
            </div>
            </div>
        </div>
    );
}





