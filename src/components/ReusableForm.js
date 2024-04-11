import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type='submit'>{props.buttonText}</button>
        <hr/>
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;