import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const CARD_CATEGORIES = [
    { name: 'Food', img: 'pics/hamburger.png' },
    { name: 'Clothing', img: 'pics/shirt.png' },
    { name: 'Groceries', img: 'pics/basket.png' }
]

export default function Home(props) {

    const categoryCards = CARD_CATEGORIES.map((element) => {
        return <CategoryCard img={element.img} name={element.name} />
    })

    return (
        <main>
            <div className="banner row">
                <img src="pics/restaurant.png" alt="The front of the restuarant Sizzle and Crunch" />
            </div>
            <div className="row">
                <h2 className="text-center p-3">Browse by category</h2>
            </div>
            <div className="row categories justify-content-center">
                {categoryCards}
            </div>
        </main>
    );
}

function CategoryCard(props) {
    return (
            <div className="card">
                <div className="card-body">
                    <img src={props.img} alt={props.name + " category"} />
                </div>
                <div className="card-title">
                    <Link className="btn stretched-link nav-link" to="/results">{props.name}</Link>
                </div>
            </div>
        
    );
}