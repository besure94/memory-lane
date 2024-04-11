import React from "react";
import PropTypes from "prop-types";

function Memory(props) {
  return (
    <React.Fragment>
      <h1>{props.memory}</h1>
      <h3>{props.time}</h3>
      <h3>{props.description}</h3>
      <hr/>
    </React.Fragment>
  );
}

Memory.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string,
  description: PropTypes.string.isRequired
}

export default Memory;