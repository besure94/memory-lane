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
      <h2>Type:</h2>
      <p>{memory.type}</p>

      {memory.type === "Sensory" && (
        <React.Fragment>
          <h2>When?</h2>
          <p>{memory.when}</p>
          <h2>Touch:</h2>
          <p>{memory.touch}</p>
          <h2>Sight:</h2>
          <p>{memory.sight}</p>
          <h2>Sound:</h2>
          <p>{memory.sound}</p>
          <h2>Smell:</h2>
          <p>{memory.smell}</p>
          <h2>Taste:</h2>
          <p>{memory.taste}</p>
        </React.Fragment>
      )}

      {memory.type === "Short Term" && (
        <React.Fragment>
          <h2>Details:</h2>
          <p>{memory.shortTermDescription}</p>
        </React.Fragment>
      )}

      {memory.type === "Long Term" && (
        <React.Fragment>
          <h2>Description:</h2>
          <p>{memory.longTermDescription}</p>
        </React.Fragment>
      )}

      <p><em>Submitted by {memory.user} on {memory.date.toDateString()}</em></p>

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