import React, { useState } from "react";
import { auth } from "./../firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

function SignIn() {
  const [signUpSuccess, setSignUpSuccess] = useState(null);

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(`Welcome, friend! You've successfully signed up as ${userCredential.user.email}!`);
      })
      .catch((error) => {
        setSignUpSuccess(`There was an error signing up: ${error.message}`);
      });
  }

  return (
    <React.Fragment>
      <h1>Sign Up</h1>
      {signUpSuccess}
      <form onSubmit={doSignUp}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          required/>
        <br/>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required/>
        <br/>
        <button type="submit">Sign Up</button>
      </form>
    </React.Fragment>
  );
}

export default SignIn;