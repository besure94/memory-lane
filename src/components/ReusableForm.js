import React, { useState } from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const [selectedOption, setSelectedOption] = useState('');

  const nameField = <input type="text" name="name" placeholder="Memory Name" defaultValue={props.memory !== undefined ? props.memory.name : ''} required/>;

  const whenField = <input type="text" name="when" placeholder="When?" defaultValue={props.memory !== undefined ? props.memory.when : ''} required/>;

  const shortTermDescripField = <textarea type="text" name="shortTermDescription" placeholder="Details" defaultValue={props.memory !== undefined ? props.memory.shortTermDescription : ''} required/>;

  const longTermDescripField = <textarea type="text" name="longTermDescription" placeholder="What happened? Please be specific!" defaultValue={props.memory !== undefined ? props.memory.longTermDescription : ''} required/>;

  const createButton = <button type='submit'>{props.buttonText}</button>;

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
            <br/>
            <label>Descibe sensory feelings related to this memory.
            <br/>
            Be as specific as you'd like!</label>
            <br/>
            <br/>
            <input
              type="text"
              name="touch"
              placeholder="Touch"
              defaultValue={props.memory !== undefined ? props.memory.touch : ''}
              required/>
            <br/>
            <input
              type="text"
              name="sight"
              placeholder="Sight"
              defaultValue={props.memory !== undefined ? props.memory.sight : ''}
              required/>
            <br/>
            <input
              type="text"
              name="sound"
              placeholder="Sound"
              defaultValue={props.memory !== undefined ? props.memory.sound : ''}
              required/>
            <br/>
            <input
              type="text"
              name="smell"
              placeholder="Smell"
              defaultValue={props.memory !== undefined ? props.memory.smell : ''}
              required/>
            <br/>
            <input
              type="text"
              name="taste"
              placeholder="Taste"
              defaultValue={props.memory !== undefined ? props.memory.taste : ''}
              required/>
            <br/>
            {createButton}
          </React.Fragment>
        )}
        {selectedOption === 'Short Term' && (
          <React.Fragment>
            {nameField}
            <br/>
            {shortTermDescripField}
            <br/>
            {createButton}
          </React.Fragment>
        )}
        {selectedOption === 'Long Term' && (
          <React.Fragment>
            {nameField}
            <br/>
            {whenField}
            <br/>
            {longTermDescripField}
            <br/>
            {createButton}
          </React.Fragment>
        )}
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