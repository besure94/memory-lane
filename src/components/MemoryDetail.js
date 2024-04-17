import React from "react";
import PropTypes from "prop-types";
import { auth } from './../firebase.js';

function MemoryDetail(props) {
  const { memory, onClickingDelete, onClickingEdit } = props;
  const editButton = <button onClick={() => onClickingEdit(memory.id)}>Edit</button>;
  const deleteButton = <button onClick={() => onClickingDelete(memory.id)}>Delete</button>;

  return (
    <React.Fragment>
      <h2>Memory:</h2>
      <p>{memory.name}</p>
      <h3>Type:</h3>
      <p>{memory.type}</p>
      <p><em>Submitted by {memory.user} on {memory.date.toDateString()}</em></p>

      {memory.type === "Sensory" && (
        <React.Fragment>
          <h3>When?</h3>
          <h3>{memory.when}</h3>
          <h3>Touch:</h3>
          <p>{memory.touch}</p>
          <h3>Sight:</h3>
          <p>{memory.sight}</p>
          <h3>Sound:</h3>
          <p>{memory.sound}</p>
          <h3>Smell:</h3>
          <p>{memory.smell}</p>
          <h3>Taste:</h3>
          <p>{memory.taste}</p>
        </React.Fragment>
      )}

      {memory.type === "Short Term" && (
        <React.Fragment>
          <h3>Details</h3>
          <p>{memory.shortTermDescription}</p>
        </React.Fragment>
      )}

      {memory.type === "Long Term" && (
        <React.Fragment>
          <h3>Description</h3>
          <p>{memory.longTermDescription}</p>
        </React.Fragment>
      )}

      {auth.currentUser.email === memory.user ? (
        <React.Fragment>
          {editButton}
          <br/>
          {deleteButton}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <button style={{display: "none"}}>{editButton}</button>
          <br/>
          <button style={{display: "none"}}>{deleteButton}</button>
        </React.Fragment>
      )}
      <hr/>
    </React.Fragment>
  );
}

MemoryDetail.propTypes = {
  memory: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default MemoryDetail;