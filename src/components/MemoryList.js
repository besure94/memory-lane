import React from "react";
import Memory from './Memory';
import PropTypes from 'prop-types';

function MemoryList(props) {
  console.log("Memory list props log: ", props.memoryList);
  return (
    <React.Fragment>
      {props.memoryList.map((memory) =>
        <Memory
          whenMemoryClicked={props.onMemorySelection}
          name={memory.name}
          user={memory.user}
          date={memory.date}
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
