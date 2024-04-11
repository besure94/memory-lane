import React from "react";
import Memory from './Memory';

const mainMemoryList = [
  {
    memory:"Beach walk in Mexico",
    time:"2023",
    description:"Bright, sunny afternoon. Humid. Soft, white sand. Warm, temperate ocean."
  },
  {
    memory:"Childhood dream at age 7",
    time:"2003",
    description:"Walking with dinosaurs outside my grandparents home."
  },
  {
    memory:"How to change guitar strings",
    time:"Unknown",
    description:"Step 1: let out tension from strings. Step 2: Cut strings. Step 3: Secure string with peg in body. Thread through tuning peg and wind tight. Repeat."
  }
];

function MemoryList() {
  return (
    <React.Fragment>
      {mainMemoryList.map((memory, index) =>
        <Memory
          memory={memory.memory}
          time={memory.time}
          description={memory.description}
          key={index}/>
      )}
    </React.Fragment>
  );
}

export default MemoryList;
