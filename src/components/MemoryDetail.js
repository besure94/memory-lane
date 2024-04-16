import React from "react";
import PropTypes from "prop-types";
import { auth } from './../firebase.js';

function MemoryDetail(props) {
  const { memory, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h2>Memory:</h2>
      <h2>{memory.name}</h2>
      <h3>When?</h3>
      <h3>{memory.when}</h3>
      <h3>What?</h3>
      <h3>{memory.description}</h3>
      <h3>Submitted by {memory.user}</h3>

      {auth.currentUser.email != memory.user ? (
        <React.Fragment>
          <button style={{ display: "none" }} onClick={() => onClickingEdit(memory.id)}>Edit</button>
          <br/>
          <button style={{ display: "none" }} onClick={() => onClickingDelete(memory.id)}>Delete</button>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <button onClick={() => onClickingEdit(memory.id)}>Edit</button>
          <br/>
          <button onClick={() => onClickingDelete(memory.id)}>Delete</button>
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