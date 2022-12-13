import React, { useState } from 'react';
import { getDatabase, ref, set as firebaseSet, onValue, set } from 'firebase/database';

export function ItemPage(props) {
  const store = props.currentStore;
  const [currRating, setCurrRating] = useState(0);
  const [currNumRating, setCurrNumRating] = useState(0);
  const [ratedBool, setRatedBool] = useState(false);
  const [storeIndex, setStoreIndex] = useState(0);
  const [actualRating, setActualRating] = useState(0);


  const handleStars = (starCount) => {
    let index = 0;


    for (let i = 0; i < props.allStores.length; i++) {
      if (props.allStores[i].placeName === store.placeName) {
        setStoreIndex(i);
        index = i;
      }
    }

    const db = getDatabase(); //"the database"
    const aggregateRating = ref(db, "businessData/" + index + "/aggregateRating");
    const numRatings = ref(db, "businessData/" + index + "/numRatings");
    // const userRatingData = ref(db, "userRatingData/");
    const userCheck = ref(db, "userRatingData/" + props.userInfo.userId + "/" + storeIndex);

    // onValue(userRatingData, (snapshot) => {
    //   const data = snapshot.val();
    //   console.log(data);
    //   if (Object.keys(data).some(v => v === props.userInfo.userId)) {
    //     // setRatedBool(true);
    //     // console.log(data[props.userInfo.userId]);
    //     setExistingRating(data[props.userInfo.userId]);
    //   }
    // });

    onValue(aggregateRating, (snapshot) => {
      const data = snapshot.val();
      console.log("aggregate " + data);
      setCurrRating(data);
    });

    onValue(numRatings, (snapshot) => {
      const data = snapshot.val();
      console.log("num rating " + data);
      setCurrNumRating(data);
    });

    firebaseSet(aggregateRating, currRating + starCount);
    firebaseSet(numRatings, currNumRating + 1);
    firebaseSet(userCheck, starCount);

    if (currNumRating !== 0) {
      setActualRating(currRating / currNumRating);
      console.log(actualRating)
    }

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
          <h3 className="mt-5">This restaurant has a {actualRating} star rating! Rate this place below!</h3>
          {/* <StarRating starCallback={props.starCallback}/> */}
          <StarRating currStore={storeIndex} userInfo={props.userInfo} starCallback={handleStars} />

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
    // console.log("store " + props.currStore);
    if (Object.keys(data).some(v => v === props.currStore)) {
      // setRatedBool(true);
      // console.log(data[props.userInfo.userId]);

      if (rating === 0) {
        // console.log("im here " + data[props.currStore]);
      }

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