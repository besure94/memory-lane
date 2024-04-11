import React from "react";
import Memory from './Memory';
import PropTypes from 'prop-types';

function MemoryList(props) {
  return (
    <React.Fragment>
      {props.memoryList.map((memory, index) =>
        <Memory
          name={memory.name}
          when={memory.when}
          description={memory.description}
          key={index}/>
      )}
    </React.Fragment>
  );
}

MemoryList.propTypes = {
  memoryList: PropTypes.array
}

export default MemoryList;
