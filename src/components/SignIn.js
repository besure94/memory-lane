import React from "react";
import { auth } from "./../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

      })
      .catch((error) => {

      });
  }

  return (
    <React.Fragment>
      <h1>Sign In</h1>
      <form onSubmit={doSignUp}>
        <input
          type="text"
          name="name"
          placeholder="Email"/>
        <br/>
        <input
          type="password"
          name="password"
          placeholder="Password"/>
        <br/>
        <button type="submit">Sign Up</button>
      </form>
    </React.Fragment>
  );
}

export default SignIn;