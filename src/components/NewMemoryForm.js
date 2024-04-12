import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewMemoryForm(props) {
  function handleNewMemoryFormSubmission(event) {
    event.preventDefault();
    props.onNewMemoryCreation({
      name: event.target.name.value,
      when: event.target.when.value,
      description: event.target.description.value,
    });
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