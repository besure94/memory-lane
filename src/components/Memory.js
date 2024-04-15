import React from "react";
import PropTypes from "prop-types";

function Memory(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenMemoryClicked(props.id)}>
        <h2>{props.name}</h2>
        {/* <h3>When?</h3>
        <h3>{props.when}</h3>
        <h3>What?</h3>
        <h3>{props.description}</h3> */}
        <h3>Submitted by {props.user}</h3>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Memory.propTypes = {
  name: PropTypes.string.isRequired,
  // when: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenMemoryClicked: PropTypes.func
}

export default Memory;