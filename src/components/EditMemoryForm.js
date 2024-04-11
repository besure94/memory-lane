import React from "react";
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

function EditMemoryForm(props) {
  const { memory } = props;

  function handleEditMemoryFormSubmission(event) {
    event.preventDefault();
    props.onEditingMemory({
      name: event.target.name.value,
      when: event.target.when.value,
      description: event.target.description.value,
      id: memory.id
    })
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditMemoryFormSubmission}
        buttonText={"Edit"}/>
    </React.Fragment>
  )
}

EditMemoryForm.propTypes = {
  memory: PropTypes.object,
  onEditingMemory: PropTypes.func
}

export default EditMemoryForm;