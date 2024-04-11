import React from "react";
import PropTypes from "prop-types";

function Memory(props) {
  return (
    <React.Fragment>
      <h1>{props.name}</h1>
      <h3>{props.when}</h3>
      <h3>{props.description}</h3>
      <hr/>
    </React.Fragment>
  );
}

Memory.propTypes = {
  name: PropTypes.string.isRequired,
  when: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Memory;