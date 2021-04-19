import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";
import { useContext } from 'react';

import { useHistory, useLocation } from 'react-router';
import "./Login.css"
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

firebase.initializeApp(firebaseConfig);
if (!firebase.app.length) {
    firebase.initializeApp({});
} else {
    firebase.app();
}

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
       
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email }
            console.log(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    return (
        <div>
            <div className="login-container mt-5" style={{ textAlign: "center" }}>
                <h2 className="mt-5"><FontAwesomeIcon icon={faCamera}>Ellegance</FontAwesomeIcon></h2>
                <h4>Please Log in Here</h4>
                <button className="google-signin mt-5" onClick={handleGoogleSignIn}> Sign in with Google</button>
            </div>
        </div>
    );
};

export default Login;