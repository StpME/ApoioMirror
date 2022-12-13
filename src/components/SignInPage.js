import React, { useEffect } from 'react';

import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { Navigate } from 'react-router-dom';
import { getDatabase, ref, onValue } from 'firebase/database';

export function SignInPage(props) {
  const currentUser = props.currentUser;
  const auth = getAuth();

  const db = getDatabase();
  console.log(currentUser);
  // const firebaseUser = ref(db, 'userData'+currentUser.userId)

  // console.log(firebaseUser);

  // useEffect(() => {

  // })

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

  // if (currentUser) { //if I'm signed in
  //   return <Navigate to="/profile" />
  // }

  return (
    <StyledFirebaseAuth className="p-5" firebaseAuth={auth} uiConfig={uiConfigObj} />
  );
}