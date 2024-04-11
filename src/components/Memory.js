import React from "react";

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

export default Memory;