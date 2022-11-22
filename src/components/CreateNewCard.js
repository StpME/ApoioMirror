import React from 'react';

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