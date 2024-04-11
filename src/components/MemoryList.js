import React from "react";
import Memory from './Memory';

function MemoryList() {
  return (
    <React.Fragment>
      <Memory
        memory="Beach walk in Mexico"
        time="2023"
        description="Bright, sunny afternoon. Humid. Soft, white sand. Warm, temperate ocean."/>
      <Memory
        memory="Childhood dream at age 7"
        time="2003"
        description="Walking with dinosaurs outside my grandparents home."/>
    </React.Fragment>
  );
}

export default MemoryList;
