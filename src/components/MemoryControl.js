import React, { useState } from "react";
import NewMemoryForm from "./NewMemoryForm";
import MemoryList from "./MemoryList";
import MemoryDetail from "./MemoryDetail";

function MemoryControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainMemoryList, setMainMemoryList] = useState([]);
  const [selectedMemory, setSelectedMemory] = useState(null);

  const handleClick = () => {
    if (selectedMemory != null) {
      setFormVisibleOnPage(false);
      setSelectedMemory(null);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleCreatingNewMemory = (newMemory) => {
    const newMainMemoryList = mainMemoryList.concat(newMemory);
    setMainMemoryList(newMainMemoryList);
    setFormVisibleOnPage(false);
  }

  const handleChangingSelectedMemory = (id) => {
    const memorySelection = mainMemoryList.filter(memory => memory.id === id)[0];
    setSelectedMemory(memorySelection);
  }

  let currentlyVisibleState = null;
  let buttonText = null;

  if (selectedMemory != null) {
    currentlyVisibleState = <MemoryDetail
      memory = {selectedMemory}/>;
    buttonText = "Home";
  } else if (formVisibleOnPage) {
    currentlyVisibleState = <NewMemoryForm
      onNewMemoryCreation={handleCreatingNewMemory}/>;
    buttonText = "Home";
  } else {
    currentlyVisibleState = <MemoryList
      onMemorySelection={handleChangingSelectedMemory}
      memoryList={mainMemoryList}/>;
    buttonText = "Create Memory";
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={handleClick}>{buttonText}</button>
    </React.Fragment>
  );
}

export default MemoryControl;