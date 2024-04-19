import React, { useState } from "react";
import { auth } from "./../firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

function SignIn() {
  const [signUpSuccess, setSignUpSuccess] = useState(null);
  const [signInSuccess, setSignInSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password, confirmPassword)
      .then((userCredential) => {
        setSignUpSuccess(`Welcome! You've successfully signed up as ${userCredential.user.email}.`);
      })
      .catch((error) => {
        setSignUpSuccess(`There was an error signing up: ${error.message}`);
      });
    } else {
      setSignUpSuccess(`Passwords do not match. Please try again.`);
    }
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`);
      })
      .catch((error) => {
        setSignInSuccess(`There was an error signing in: ${error.message}!`);
      });
  }

  function doSignOut() {
    signOut(auth)
      .then(function() {
        setSignOutSuccess(`Successfully signed out!`);
      })
      .catch(function(error) {
        setSignOutSuccess(`There was an error signing out: ${error.message}.`);
      });
  }

  return (
    <React.Fragment>
      <div className="sign-in-forms">
        <div className="row justify-content-center">
          <div className="col-4">
            <h1>Sign Up</h1>
            <div className="message-to-user">
              {signUpSuccess}
            </div>
            <br/>
            <form onSubmit={doSignUp}>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="form-control"/>
              <br/>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"/>
              <br/>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="form-control"/>
              <br/>
              <button type="submit" className="btn btn-primary form-control">Sign Up</button>
            </form>
            <br/>

            <h1>Sign In</h1>
            <div className="message-to-user">
              {signInSuccess}
            </div>
            <br/>
            <form onSubmit={doSignIn}>
              <input
                type="text"
                name="signInEmail"
                placeholder="Email"
                className="form-control"/>
              <br/>
              <input
                type="password"
                name="signInPassword"
                placeholder="Password"
                className="form-control"/>
              <br/>
              <button type="submit" className="btn btn-primary form-control">Sign In</button>
            </form>
            <br/>

            <div className="message-to-user">
              {signOutSuccess}
            </div>
            <br/>
            <button onClick={doSignOut} className="btn btn-danger form-control">Sign Out</button>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SignIn;