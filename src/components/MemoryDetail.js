import React from "react";
import PropTypes from "prop-types";

function MemoryDetail(props) {
  const { memory, onClickingDelete, onClickingEdit } = props;

  return (
    <React.Fragment>
      <h2>Name: {memory.name}</h2>
      <h3>When? {memory.when}</h3>
      <h3>Description: {memory.description}</h3>
      <h3>User: {memory.user}</h3>
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