import React, {useState} from 'react';

export function ListCard(props) {
    // pass this component a prop from the data source, being the place/item being put into te card, then map these properties to an object and pass that object into rendered element
    const [cards, setCard] = useState(null);
    const [lists, setList] = useState(null);
    const [click, setC] = useState(false);



    
    const handleClick = (event) => {
        console.log('clicked');
        setC(true);
        console.log(click);
        //setC(true);
    }
    //create list button
    //on click, pass to create list
    //console.log('List card');
    const potato = function helper() {
        if (click === true) {
            console.log("helper")
            setC(false);
            return <CreateList />
        }
    }




    
    return (
        <section className="col flex-display">
            <div className="col-lg-12 d-block">
                
                    <div className="card-body">
                        <ul className="list-group list-group-flush">

                            <div id='list_header' className="row p-4 mt-4">
                                <li className="btn btn-success" onClick={handleClick}>
                                    <strong><h2 className="ms-3" id="list_name">Create New List</h2></strong>
                                    <div></div>
                                </li>
                            </div>
                            <CreateList />
                            
                        </ul>
                    </div>
                
            </div>
        </section>
    );
}



export function CreateList() {
    //console.log('create list');
    const testName = "My Food List";
    const [text, setText] = useState(testName);

    // Prompts user for list name and changes it
    const changeText = () => {
        //console.log('change text');
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





