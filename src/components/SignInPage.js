import React, { useEffect, useState } from 'react';

import { getAuth, EmailAuthProvider, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { Navigate } from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database';


export function SignInPage(props) {
  const [userExists, setUserExists] = useState(false);
  const currentUser = props.currentUser;
  const auth = getAuth();

  // console.log(currentUser);

  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (firebaseUser) => {
        if (firebaseUser) {
            console.log(firebaseUser);
        } else {
            // console.log("logged out");
            // setCurrentUser(null);
        }
    })
}, [])

  const db = getDatabase();

  useEffect(() => {

    const db = getDatabase(); //"the database"
    const userDataRef = ref(db, "userData");

    //when db value changes
    const offFunction = onValue(userDataRef, (snapshot) => {
      const valueObj = snapshot.val();
      const objKeys = Object.keys(valueObj)
      // console.log(objKeys);

      // setProfileData(valueObj[currentUser.userId])
      // console.log(profileData);

    })

    function cleanup() {
      //   console.log("component is being removed");
      //when the component goes away, we turn off the listener
      offFunction();
    }
    return cleanup; //return instructions on how to turn off lights
  }, [])

  const uiConfigObj = {
    signInOptions: [
      { provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true },
      { provider: GoogleAuthProvider.PROVIDER_ID }
    ],
    signInFlow: 'popup',
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
    credentialHelper: 'none'
  };

  if (currentUser) { //if I'm signed in
    return <Navigate to="/profile" />
  }

  return (
    <StyledFirebaseAuth className="p-5" firebaseAuth={auth} uiConfig={uiConfigObj} />
  );
}