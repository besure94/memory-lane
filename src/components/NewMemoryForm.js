import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewMemoryForm(props) {
  function handleNewMemoryFormSubmission(event) {
    event.preventDefault();
    props.onNewMemoryCreation({
      name: event.target.name.value,
      when: event.target.when.value,
      description: event.target.description.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewMemoryFormSubmission}>
        <input
          type="text"
          name="name"
          placeholder="Name of memory"
          required/>
        <br/>
        <input
          type="text"
          name="when"
          placeholder="When?"
          required/>
        <br/>
        <textarea
          type="text"
          name="description"
          placeholder="Describe the memory. Be specific!"
          required/>
        <br/>
        <button type='submit'>Create</button>
        <hr/>
      </form>
    </React.Fragment>
  );
}

NewMemoryForm.propTypes = {
  onNewMemoryCreation: PropTypes.func
}

export default NewMemoryForm;