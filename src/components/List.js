import React from 'react';

function listCard(props) {
    const [something, set] = useState(null);

    const card = (
        <div className="col-sm-3" id="list_card">
            <div className="card" style="width: 18rem; height: 18rem;">
                <div className="card-body">
                    <h4 className="card-title">Place 1</h4>
                    <div className="card-img" style="background-image:url('app/public/pics/food_pic.jpg')"></div>
                    <p>TEXT CONTENT</p>
                    <a href="#" class="btn stretched-link"></a>
                </div>
            </div>
        </div>
    );
    return card;
}