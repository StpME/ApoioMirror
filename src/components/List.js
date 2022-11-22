import React, {useState} from 'react';

export function ListCard(props) {
    // pass this component a prop from the data source, being the place/item being put into te card, then map these properties to an object and pass that object into rendered element
    const [card, setCard] = useState(null);
    //create list button
    //on click, pass to createnewlist
    console.log('List card');
    return (
        <section className="col flex-display">
            <div className="col-lg-12 d-block">
                <div className="card">
                    <div className="card-body">
                        <ul className="list-group list-group-flush">

                            <div id='list_header' className="row p-4 mt-4">
                                <li className="btn btn-success" onClick={createList}>
                                    <strong><h2 className="ms-3" id="list_name">Create New List</h2></strong>
                                </li>
                            </div>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

function createList() {
    console.log('create list');
    const testName = "My Food List";
    const handleClick = (event) => {
        console.log('clicked');
    }
    return (
        <div id='list_header' className="row p-4" onClick={handleClick}>
            <li className="list-group-item">
                <button type="button" id="edit_btn" className="btn btn-success pull-right me-3">Edit</button>
                <strong><h2 className="ms-3" id="list_name">{testName}</h2></strong>
            </li>
        </div>
    )
}

//function should be called when user wants to add a place from the search bar ?
export function createCard(props) {
    console.log('create card props: ' + props);
    //see pinned pic for what to work on lol
    const testName = "Place 1";
    const testText = "TEXT CONTENT";
    const handleClick = (event) => {
        console.log('clicked');
    }
    
    //change card image url to the item data source
    const card = (
        <div className="col-sm-3" id="list_card" onClick={handleClick}>
            <div className="card" style="width: 18rem; height: 18rem;">
                <div className="card-body">
                    <h4 className="card-title">{testName}</h4>
                    <div className="card-img" style="background-image:url('app/public/pics/food_pic.jpg')"></div>
                    <p>{testText}</p>
                    <a href="#" class="btn stretched-link"></a>
                </div>
            </div>
        </div>
    );
    return card;
}





