import React from "react";
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";

function EditMemoryForm(props) {
  const { memory } = props;

  function handleEditMemoryFormSubmission(event) {
    event.preventDefault();
    const formData = {
      name: event.target.name.value,
      id: memory.id
    };

    switch (event.target.memoryType.value) {
      case "Sensory":
        formData.type = event.target.memoryType.value;
        formData.when = event.target.when.value;
        formData.touch = event.target.touch.value;
        formData.sight = event.target.sight.value;
        formData.sound = event.target.sound.value;
        formData.smell = event.target.smell.value;
        formData.taste = event.target.taste.value;
        break;
      case "Short Term":
        formData.type = event.target.memoryType.value;
        formData.shortTermDescription = event.target.shortTermDescription.value;
        break;
      case "Long Term":
        formData.type = event.target.memoryType.value;
        formData.when = event.target.when.value;
        formData.longTermDescription = event.target.longTermDescription.value;
        break;
      default:
        break;
    }

    props.onEditingMemory(formData);
  }

  return (
    <React.Fragment>
      <div className="edit-form">
        <ReusableForm
          formSubmissionHandler={handleEditMemoryFormSubmission}
          buttonText={"Edit"}
          memoryType={memory.type}
          memory={memory}/>
      </div>
    </React.Fragment>
  )
}

EditMemoryForm.propTypes = {
  memory: PropTypes.object,
  onEditingMemory: PropTypes.func
}

export default EditMemoryForm;