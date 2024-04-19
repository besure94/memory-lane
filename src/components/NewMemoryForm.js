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
      type: selectedOption,
      name: event.target.name.value,
      user: auth.currentUser.email,
      date: serverTimestamp()
    }

    if (selectedOption === 'Sensory') {
      formData.when = event.target.when.value;
      formData.touch = event.target.touch.value;
      formData.sight = event.target.sight.value;
      formData.sound = event.target.sound.value;
      formData.smell = event.target.smell.value;
      formData.taste = event.target.taste.value;
    } else if (selectedOption === 'Short Term') {
      formData.shortTermDescription = event.target.shortTermDescription.value;
    } else if (selectedOption === 'Long Term') {
      formData.when = event.target.when.value;
      formData.longTermDescription = event.target.longTermDescription.value;
    }

    props.onNewMemoryCreation(formData);

  }

  return (
    <React.Fragment>
      <div className="create-memory-form">
        <ReusableForm
          formSubmissionHandler={handleNewMemoryFormSubmission}
          buttonText={"Create"}/>
      </div>
    </React.Fragment>
  );
}

NewMemoryForm.propTypes = {
  onNewMemoryCreation: PropTypes.func
}

export default NewMemoryForm;