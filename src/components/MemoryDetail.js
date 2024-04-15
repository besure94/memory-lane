import React from "react";
import PropTypes from "prop-types";

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
      <button onClick={() => onClickingEdit(memory.id)}>Edit</button>
      <br/>
      <button onClick={() => onClickingDelete(memory.id)}>Delete</button>
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