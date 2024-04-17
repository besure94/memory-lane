import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { auth } from './../firebase.js';
import { serverTimestamp } from "firebase/firestore";

function NewMemoryForm(props) {
  function handleNewMemoryFormSubmission(event) {
    event.preventDefault();
    const selectedOption = event.target.memoryType.value;

    const formData = {
      name: event.target.name.value,
      user: auth.currentUser.email,
      date: serverTimestamp()
    }

    if (selectedOption === 'sensory') {
      formData.when = event.target.when.value;
      formData.touch = event.target.touch.value;
      formData.sight = event.target.sight.value;
      formData.sound = event.target.sound.value;
      formData.smell = event.target.smell.value;
      formData.taste = event.target.taste.value;
    } else if (selectedOption === 'shortTerm') {
      formData.shortTermDescription = event.target.shortTermDescription.value;
    } else if (selectedOption === 'longTerm') {
      formData.when = event.target.when.value;
      formData.longTermDescription = event.target.longTermDescription.value;
    }

    props.onNewMemoryCreation(formData);

  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewMemoryFormSubmission}
        buttonText={"Create"}/>
    </React.Fragment>
  );
}

NewMemoryForm.propTypes = {
  onNewMemoryCreation: PropTypes.func
}

export default NewMemoryForm;