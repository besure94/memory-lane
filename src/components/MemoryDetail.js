import React from "react";
import PropTypes from "prop-types";

function MemoryDetail(props) {
  const { memory, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h2>Name: {memory.name}</h2>
      <h3>When? {memory.when}</h3>
      <h3>Description: {memory.description}</h3>
      <button onClick={() => onClickingDelete(memory.id)}>Delete</button>
      <hr/>
    </React.Fragment>
  );
}

MemoryDetail.propTypes = {
  memory: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default MemoryDetail;