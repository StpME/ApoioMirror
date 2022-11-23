import React, {useState} from 'react';


export function ListCard(props) {
    // pass this component a prop from the data source, being the place/item being put into te card, then map these properties to an object and pass that object into rendered element

    
    // const currentFilter = '';
    // filter by type later
    //console.log(props.stores);
    const stores = props.stores.map((item, index) => {
        return (
        <CreateCard key={index} store={item} />
        ); 
    });

    const storeTypes = props.stores.map((item, index) => {
        //console.log(item.type);
        return (
            <CreateList key={index} store={item} />
        ); 
    });
    //console.log(storeTypes);

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

                            {storeTypes}


                            <div className="row px-3">
                                {stores}
                            </div>
                            
                        </ul>
                    </div>
                
            </div>
        </section>
    );
}



export function CreateList(props) {
    const type = props.store.type;
    
    //const types = [props];
    //console.log(props);
    
    //console.log(typeof arr);
    
    
    
    const [text, setText] = useState(type);

    // Prompts user for list name and changes it
    const changeText = () => {
        const input = prompt('Enter List Name');
        setText(input);
        
    }

    return (
        <div id='list_header' className="row p-4" onClick={() => changeText()}>
            <li className="list-group-item">
                <button type="button" id="edit_btn" className="btn btn-success pull-right me-3">Edit</button>
                <strong><h2 className="ms-3" id="list_name">{text}</h2></strong>
            </li>
        </div>
    )
}

//function called when user favorites a store
export function CreateCard(props) {
    //console.log(props);
    const store = props.store;
    //unstar to remove from the list?
    const handleClick = (event) => {
        console.log('clicked');
    }
    const card = (
        <div className="col-sm-3" id="list_card" onClick={handleClick}>
            <div className="card" style={{width:"18rem", height: "18rem"}}>
                <div className="card-body">
                    <h4 className="card-title">{store.placeName}</h4>
                    <img className="img-fluid" src={store.placeThumbnail}/>
                    <p>{store.description}</p>
                    <a href="#" className="btn stretched-link"></a>
                </div>
            </div>
        </div>
    );
    return card;
}





