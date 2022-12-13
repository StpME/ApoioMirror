import React, { useEffect, useState } from 'react';

import { getAuth, EmailAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { Navigate } from 'react-router-dom';
import { getDatabase, ref, set as firebaseSet, onValue, push as firebasePush } from 'firebase/database';


export function SignInPage(props) {
  const [users, setUsers] = useState({});
  const currentUser = props.currentUser;
  const auth = getAuth();

  const db = getDatabase();

  useEffect(() => {

    const db = getDatabase(); //"the database"
    const userDataRef = ref(db, "userData");

    //when db value changes
    const offFunction = onValue(userDataRef, (snapshot) => {
      const valueObj = snapshot.val();
      setUsers(Object.keys(valueObj));
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
      { provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true }
    ],
    signInFlow: 'popup',
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
    credentialHelper: 'none'
  };

  if (currentUser) { //if I'm signed in
    if (users.includes(currentUser.userId)) {
      return <Navigate to="/profile" />
    }
    return <Navigate to="/profile/edit" />
  }

  return (
    <StyledFirebaseAuth className="p-5" firebaseAuth={auth} uiConfig={uiConfigObj} />
  );
}