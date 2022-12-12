import React from 'react';

import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { StyledFirebaseAuth } from 'react-firebaseui';

export function SignInPage(props) {
    // const loginFunction = props.loginCallback;

    const auth = getAuth();

    const uiConfigObj = {
        signInOptions: [ 
          {provider: EmailAuthProvider.PROVIDER_ID, requireDisplayName: true },
          {provider: GoogleAuthProvider.PROVIDER_ID } 
        ],
        signInFlow: 'popup',
        callbacks: {
          signInSuccessWithAuthResult: () => false,
        },
        credentialHelper: 'none'
    };

    return (
        <StyledFirebaseAuth firebaseAuth={auth} uiConfig={uiConfigObj} />
    );
}