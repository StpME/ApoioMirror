import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

const CARD_CATEGORIES = [
    { name: 'All', typeShop: "", img: 'pics/all_category_icon.png' },
    { name: 'Restaurants', typeShop: "restaurant", img: 'pics/hamburger.png' },
    { name: 'Shops', typeShop: "shop", img: 'pics/shirt.png' }
]

export default function Home(props) {

    const categoryCards = CARD_CATEGORIES.map((element, index) => {
        return <CategoryCard key={index} typeShop={element.typeShop} img={element.img} name={element.name} typeStoreCallback={props.typeStoreCallback}/>
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
                            <Link className="text-decoration-none text-light" to="/results">
                                <h3>Looking for food?</h3>
                                <p>Try Sizzle and Crunch! A local fast-casual Vietnamese restaurant!</p>
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="pics/butter_home_tn_crop.jpg"
                            alt="Butter Home"
                        />
                        <Carousel.Caption>
                            <Link className="text-decoration-none text-light" to="/results">
                                <h3>Bored?</h3>
                                <p>Stop by Butter Home, a brick + mortor shop in Seattle specializing in fun and functional items for you and your home!</p>
                            </Link>
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

    const handleClick = () => {
        console.log(props.typeShop);
        props.typeStoreCallback(props.typeShop);
    }

    return (
        <div className="card home-card-item">
            <div className="card-body">
                <img className="home-card-img" src={props.img} alt={props.name + " category"} />
            </div>
            <div className="card-title">
                <Link className="btn stretched-link nav-link" onClick={handleClick} to="/results">{props.name}</Link>
            </div>
        </div>

    );
}