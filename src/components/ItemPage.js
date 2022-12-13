import React, { useState } from 'react';
import { getDatabase, ref, set as firebaseSet } from 'firebase/database';

export function ItemPage(props) {
  const store = props.currentStore;

  const handleStars = (starCount) => {
    let index = 0;
    for (let i = 0; i < props.allStores.length; i++) {
      if (props.allStores[i].placeName === store.placeName) {
        index = i;
      }
    }
    
    const db = getDatabase(); //"the database"
    const businessRatingData = ref(db, "businessData/"+index+"/rating");

    firebaseSet(businessRatingData, starCount);
  }

  return (
    <div className="container">
      <div className="card m-5 pb-4">
        <div className="card-body text-center">
          <div className="search-item-div">
            <img className="rounded mx-auto d-block search-item-img" src={store.placeThumbnail} alt="katsu burger large content image" />
          </div>
          <h1 className="mt-4 text-center"><strong>{store.placeName}</strong></h1>
          {/* <h2 className="text-center text-muted">{owner} {store.type.substring(0,1).toUpperCase() + store.type.substring(1)}</h2> */}
          <h2 className="text-muted">{store.location}</h2>
          <h3 className="my-4">{store.description}</h3>
          <h3 className="mt-5">This restaurant has a 4 star rating! Rate this place below!</h3>
          {/* <StarRating starCallback={props.starCallback}/> */}
          <StarRating starCallback={handleStars} />

          {store.mapEmbed ? <h1 className="pt-4">Location via Google Maps</h1> : null}

          <iframe title="location" id="embed" src={store.mapEmbed} className="ps-4" width="500" height="300" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  );
}

function StarRating(props) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const starArr = [...Array(5)];

  const handleClick = (starCount) => {
    setRating(starCount);
    console.log(starCount);
    props.starCallback(starCount);
  }

  return (
    <div className="star-rating">
      {starArr.map((star, index) => {
        index += 1;
        return (
          <button
            key={index}
            value={index}
            // Uses css styling for class based on hover or rating index
            className={index <= (hover || rating) ? "on" : "off"}
            // Sets rating to clicked star index
            onClick={() => handleClick(index)}
            // () => setRating(index) onclick params before
            // Displays active rating based on user hover
            onMouseEnter={(e) => setHover(index)}
            onMouseLeave={(e) => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}