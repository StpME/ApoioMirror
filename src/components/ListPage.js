import React, {useState} from 'react';
import Collapsible from 'react-collapsible';

export function ListPage(props) {
    // Create components
    const stores = props.stores.map((item, index) => {
        return (
            <CreateCard key={index} store={item} type={item.type}/>
        ); 
    });

    const storeTypes = props.types.map((item, index) => {
        return (
            <CreateList key={index} type={item} cards={stores}/>
        ); 
    });

    

    return (
        <section className="col flex-display">
            <div className="col-lg-12 d-block">
                
                    <div className="card-body">
                        <ul className="list-group list-group-flush">

                            {/*<div id='list_header' className="row p-4 mt-4">
                                <li className="btn btn-success" onClick={handleClick}>
                                    <strong><h2 className="ms-3" id="list_name">Create New List</h2></strong>
                                </li>
                            </div>*/}
                            <div id='list_header' className="row pt-4 mt-2">
                                    <strong><h2 className="title">My Lists</h2></strong>
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
    //List name defaults to store types
    const [text, setText] = useState(type.substring(0,1).toUpperCase() + type.substring(1));

    // Prompts user for list name and changes it
    const changeText = () => {
        const input = prompt('Enter List Name');
        setText(input);
    }
    
    const card = props.cards.map((item) => {
        if (type === item.props.type) {
            return (item)}
    });
    
    function listHeader() {
        return (
            <li className="list-group-item">
                <button type="button" id="edit_btn" className="btn btn-success pull-right me-3" onClick={() => changeText()}>Edit</button>
                <strong><h2 className="ms-3" id="list_name">{text}</h2></strong>
            
            </li>
        )
    }
    
    return (
        <div className="p">
            <div id="list_header collapsible" className="row p-4 mt-4">
                <Collapsible className="collapsible pe-3" trigger={listHeader()}>
                    <div className="row">
                        {card}
                    </div>
                </Collapsible>
            </div>
        </div>
        
        
        
        
        
    )
}

//Function called when user favorites a store (currently making cards for all data)
export function CreateCard(props) {
    const store = props.store;
    
    //unstar to remove from the list?
    const handleClick = (event) => {
        console.log("clicked");
    }

    
    const card = (
        <div className="col-sm-3" id="list_card" onClick={handleClick}>
            <div className="card" style={{width:"18rem", height: "18rem"}}>
            <img className="img-fluid h-100" src={store.placeThumbnail}/>
            <div className="card-block text-center darken">
                <h4 className="center" id="store_name">{store.placeName}</h4>
                {/*<p>{store.description}</p>*/}
                <a href="#" className="btn stretched-link"></a>
            </div>
            </div>
        </div>
    );
    return card;



    
    
}





