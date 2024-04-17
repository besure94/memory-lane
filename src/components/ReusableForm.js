import React, { useState } from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const [selectedOption, setSelectedOption] = useState('');
  const nameField = <input type="text" name="name" placeholder="Memory Name" required/>
  const whenField = <input type="text" name="when" placeholder="When?" required/>
  const shortTermDescripField = <textarea type="text" name="shortTermDescription" placeholder="Details" required/>
  const longTermDescripField = <textarea type="text" name="longTermDescription" placeholder="What happened? Be specific!" required/>

  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <select defaultValue="" className="form-select" name="memoryType"
        onChange={(e) => setSelectedOption(e.target.value)}>
          <option hidden value="">Memory Type</option>
          <option value="Sensory">Sensory</option>
          <option value="Short Term">Short Term</option>
          <option value="Long Term">Long Term</option>
        </select>
        <br/>
        {selectedOption === 'Sensory' && (
          <React.Fragment>
            {nameField}
            <br/>
            {whenField}
            <br/>
            <input
              type="text"
              name="touch"
              placeholder="Touch"/>
            <br/>
            <input
              type="text"
              name="sight"
              placeholder="Sight"/>
            <br/>
            <input
              type="text"
              name="sound"
              placeholder="Sound"/>
            <br/>
            <input
              type="text"
              name="smell"
              placeholder="Smell"/>
            <br/>
            <input
              type="text"
              name="taste"
              placeholder="Taste"/>
          </React.Fragment>
        )}
        {selectedOption === 'Short Term' && (
          <React.Fragment>
            {nameField}
            <br/>
            {shortTermDescripField}
          </React.Fragment>
        )}
        {selectedOption === 'Long Term' && (
          <React.Fragment>
            {nameField}
            <br/>
            {whenField}
            <br/>
            {longTermDescripField}
          </React.Fragment>
        )}
        <br/>
        <button type='submit'>{props.buttonText}</button>
      </form>
      <hr/>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;