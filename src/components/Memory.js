import React from "react";
import PropTypes from "prop-types";

function Memory(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenMemoryClicked(props.id)}>
        <h2>{props.name}</h2>
        <p><em>Submitted by <strong>{props.user}</strong> on <strong>{props.date.toDateString()}</strong></em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Memory.propTypes = {
  name: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date),
  id: PropTypes.string,
  whenMemoryClicked: PropTypes.func
}

export default Memory;