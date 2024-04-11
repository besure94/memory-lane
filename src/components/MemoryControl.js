import React, { useState } from "react";
import NewMemoryForm from "./NewMemoryForm";
import MemoryList from "./MemoryList";

function MemoryControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainMemoryList, setMainMemoryList] = useState([]);

  const handleClick = () => {
    setFormVisibleOnPage(!formVisibleOnPage);
  }

  const handleCreatingNewMemory = (newMemory) => {
    const newMainMemoryList = mainMemoryList.concat(newMemory);
    setMainMemoryList(newMainMemoryList);
    setFormVisibleOnPage(false);
  }


  let currentlyVisibleState = null;
  let buttonText = null;

  if (formVisibleOnPage) {
    currentlyVisibleState = <NewMemoryForm
      onNewMemoryCreation={handleCreatingNewMemory}/>;
    buttonText = "Home";
  } else {
    currentlyVisibleState = <MemoryList
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