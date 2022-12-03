import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

const CARD_CATEGORIES = [
    { name: 'Food', img: 'pics/hamburger.png' },
    { name: 'Clothing', img: 'pics/shirt.png' },
    { name: 'Groceries', img: 'pics/basket.png' }
]

export default function Home(props) {

    const categoryCards = CARD_CATEGORIES.map((element, index) => {
        return <CategoryCard key={index} img={element.img} name={element.name} />
    })

    return (
        <main>
            <div className="banner row">
                <Carousel className="slides">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="pics/restaurant.png"
                            alt="Sizzle and Crunch"
                        />
                        <Carousel.Caption>
                            <h3>Looking for food?</h3>
                            <p>Try Sizzle and Crunch!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="pics/butter_home_tn_crop.jpg"
                            alt="Butter Home"
                        />
                        <Carousel.Caption>
                            <h3>Time for a new look?</h3>
                            <p>Get decoration for your home from this brick + mortar shop!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="row">
                <strong><header className="text-center p-3" id="header">Browse by category</header></strong>
            </div>
            <div className="row pb-5 categories justify-content-center">
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