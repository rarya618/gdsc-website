import React from 'react';
import styled from 'styled-components';
import { mainHex, greenLightHex } from '../colors';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import SafeArea from './SafeArea';
import { firebaseConfig } from '../firebase/config';

const HeaderObject = styled.div`
    background: ${greenLightHex};
    color: ${mainHex};
    padding: 12px 10px;
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 0;
`;

const Heading = styled.h3`
    padding: 5px;
    margin: 0;    
`;

const MenuItem = styled.span`
    padding: 7px 9px;
    border-radius: 25px;
    margin: 0;
`;

const Subheader = () => {
    const auth = getAuth();

    const signInWithGoogle = async () => {
        signInWithPopup(auth, new GoogleAuthProvider())
        .then(response => {
            console.log(response.user.uid);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const logOut = async () => {
        getAuth().signOut()
        .then(() => {
            console.log("Logged out");
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <HeaderObject>
            <SafeArea className="row spaced">
                <Heading>Cybersecurity</Heading>
                <MenuItem className="deep-hoverable">Capture the Flag</MenuItem>
                <MenuItem className="deep-hoverable" onClick={() => signInWithGoogle()}>Login</MenuItem>
                <MenuItem className="deep-hoverable" onClick={() => logOut()}>Logout</MenuItem>
            </SafeArea>
        </HeaderObject>
    )
}

export default Subheader;