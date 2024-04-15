import React from "react";
import Memory from './Memory';
import PropTypes from 'prop-types';

function MemoryList(props) {
  return (
    <React.Fragment>
      {props.memoryList.map((memory) =>
        <Memory
          whenMemoryClicked={props.onMemorySelection}
          name={memory.name}
          when={memory.when}
          description={memory.description}
          user={memory.user}
          id={memory.id}
          key={memory.id}/>
      )}
    </React.Fragment>
  );
}

MemoryList.propTypes = {
  memoryList: PropTypes.array,
  onMemorySelection: PropTypes.func
}

export default MemoryList;
