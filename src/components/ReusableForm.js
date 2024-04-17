import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <select defaultValue="">
          <option hidden value="Memory type">Memory Type</option>
          <option value="sensory">Sensory</option>
          <option value="shortTerm">Short Term</option>
          <option value="longTerm">Long Term</option>
        </select>
        <br/>
        <input
          type="text"
          name="name"
          placeholder="Name"
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
          placeholder="What happened? Be specific!"
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