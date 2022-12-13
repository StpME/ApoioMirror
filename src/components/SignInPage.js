import React from 'react';

import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { StyledFirebaseAuth } from 'react-firebaseui';
import { Navigate } from 'react-router-dom';

export function SignInPage(props) {
  const currentUser = props.currentUser;
  const auth = getAuth();

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