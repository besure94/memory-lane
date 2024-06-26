import React, { useState } from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const [selectedOption, setSelectedOption] = useState('');

  const nameField = <input type="text" name="name" placeholder="Memory Name" defaultValue={props.memory !== undefined ? props.memory.name : ''} className="form-control" required/>;

  const whenField = <input type="text" name="when" placeholder="When?" defaultValue={props.memory !== undefined ? props.memory.when : ''} className="form-control" required/>;

  const shortTermDescripField = <textarea type="text" name="shortTermDescription" placeholder="Details" defaultValue={props.memory !== undefined ? props.memory.shortTermDescription : ''} className="form-control" required/>;

  const longTermDescripField = <textarea type="text" name="longTermDescription" placeholder="What happened? Please be specific!" defaultValue={props.memory !== undefined ? props.memory.longTermDescription : ''} className="form-control" required/>;

  const createButton = <button type='submit' className="btn btn-success form-control">{props.buttonText}</button>;

  return (
    <React.Fragment>
      <div className="reusable-form-container">
        <div className="row justify-content-center">
          <div className="col-4">
            <form onSubmit={props.formSubmissionHandler}>
              <select defaultValue="" className="form-select mb-3" name="memoryType"
              onChange={(e) => setSelectedOption(e.target.value)}>
                <option hidden value="">Memory Type</option>
                <option value="Sensory">Sensory</option>
                <option value="Short Term">Short Term</option>
                <option value="Long Term">Long Term</option>
              </select>
              {selectedOption === 'Sensory' && (
                <React.Fragment>
                  {nameField}
                  <br/>
                  {whenField}
                  <br/>
                  <label className="details">Describe your sensory feelings related to this memory.</label>
                  <br/>
                  <input
                    type="text"
                    name="touch"
                    placeholder="Touch"
                    defaultValue={props.memory !== undefined ? props.memory.touch : ''}
                    className="form-control"
                    required/>
                  <br/>
                  <input
                    type="text"
                    name="sight"
                    placeholder="Sight"
                    defaultValue={props.memory !== undefined ? props.memory.sight : ''}
                    className="form-control"
                    required/>
                  <br/>
                  <input
                    type="text"
                    name="sound"
                    placeholder="Sound"
                    defaultValue={props.memory !== undefined ? props.memory.sound : ''}
                    className="form-control"
                    required/>
                  <br/>
                  <input
                    type="text"
                    name="smell"
                    placeholder="Smell"
                    defaultValue={props.memory !== undefined ? props.memory.smell : ''}
                    className="form-control"
                    required/>
                  <br/>
                  <input
                    type="text"
                    name="taste"
                    placeholder="Taste"
                    defaultValue={props.memory !== undefined ? props.memory.taste : ''}
                    className="form-control"
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
            <br/>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;