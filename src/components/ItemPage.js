import React, { useState } from 'react';
import { getDatabase, ref, set as firebaseSet, onValue } from 'firebase/database';

export function ItemPage(props) {
  const store = props.currentStore;
  const [currRating, setCurrRating] = useState(0);
  const [currNumRating, setCurrNumRating] = useState(0);

  let index = 0;
  let ratingValue = 0;
  for (let i = 0; i < props.allStores.length; i++) {
    if (props.allStores[i].placeName === store.placeName) {
      index = i;
    }
  }

  const db = getDatabase(); //"the database"
  const businessData = ref(db, "businessData/" + index);
  onValue(businessData, (snapshot) => {
    const data = snapshot.val();
    // console.log(data["aggregateRating"] / data["numRatings"]);
    
    if (data["numRatings"] === 0) {
      ratingValue = 0;
    } else {
      const longRatingValue = data["aggregateRating"] / data["numRatings"]
      ratingValue = longRatingValue.toFixed(1);
    }

  });


  const handleStars = (starCount) => {

    let aggregatedRatingVariable = 0;
    let numberOfRatings = 0;
    let currentUserRating = 0;
    let currentUserCount = 0;
    
    const aggregateRating = ref(db, "businessData/" + index + "/aggregateRating");
    const numRatings = ref(db, "businessData/" + index + "/numRatings");
    // const userRatingData = ref(db, "userRatingData/");
    const userCheck = ref(db, "userRatingData/" + props.userInfo.userId + "/" + index);
    const userRatingData = ref(db, "userRatingData/" + props.userInfo.userId + "/" + index);

    onValue(userRatingData, (snapshot) => {
      const data = snapshot.val();
      if (data !== null) {
        currentUserRating = data;
        currentUserCount = 1;
      }
    });

    onValue(aggregateRating, (snapshot) => {
      const data = snapshot.val();
      // console.log("aggregate " + data);
      setCurrRating(data);
      aggregatedRatingVariable = data;
    });

    onValue(numRatings, (snapshot) => {
      const data = snapshot.val();
      // console.log("num rating " + data);
      setCurrNumRating(data);
      numberOfRatings = data;
    });
    console.log("current Rating " + currentUserRating);
    console.log("current count " + currentUserCount);

    firebaseSet(aggregateRating, aggregatedRatingVariable + starCount - currentUserRating);
    firebaseSet(numRatings, numberOfRatings + 1 - currentUserCount);
    firebaseSet(userCheck, starCount);

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
          <p className="fs-5 my-4">{store.description}</p>
          <p className="fs-5 mt-5">This restaurant has a {ratingValue} star rating! Rate this place below!</p>
          {/* <StarRating starCallback={props.starCallback}/> */}
          <p className="fs-5 fw-bold mb-0">Your current rating of this place:</p>
          <StarRating currStore={index} userInfo={props.userInfo} starCallback={handleStars} />

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

  const db = getDatabase();
  const userRatingData = ref(db, "userRatingData/" + props.userInfo.userId + "/" + props.currStore);

  onValue(userRatingData, (snapshot) => {
    const data = snapshot.val();
    // console.log(data);
    // console.log("store " + props.currStore);
    if (data !== null && rating === 0) {
      setRating(data);
    }
  });

  const handleClick = (starCount) => {
    setRating(starCount);
    // console.log(starCount);
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