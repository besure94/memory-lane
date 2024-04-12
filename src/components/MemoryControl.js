import React, { useState } from "react";
import NewMemoryForm from "./NewMemoryForm";
import MemoryList from "./MemoryList";
import MemoryDetail from "./MemoryDetail";
import EditMemoryForm from './EditMemoryForm';
import db from './../firebase.js';
import { collection, addDoc } from 'firebase/firestore';

function MemoryControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainMemoryList, setMainMemoryList] = useState([]);
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [editing, setEditing] = useState(false);

  const handleClick = () => {
    if (selectedMemory != null) {
      setFormVisibleOnPage(false);
      setSelectedMemory(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleEditClick = () => {
    setEditing(true);
  }

  const handleCreatingNewMemory = async (newMemory) => {
    await addDoc(collection(db, "memories"), newMemory);
    setFormVisibleOnPage(false);
  }

  const handleChangingSelectedMemory = (id) => {
    const memorySelection = mainMemoryList.filter(memory => memory.id === id)[0];
    setSelectedMemory(memorySelection);
  }

  const handleDeletingMemory = (id) => {
    const newMainMemoryList = mainMemoryList.filter(memory => memory.id !== id);
    setMainMemoryList(newMainMemoryList);
    setSelectedMemory(null);
  }

  const handleEditingMemory = (memoryToEdit) => {
    const editedMainMemoryList = mainMemoryList
    .filter(memory => memory.id !== selectedMemory.id)
    .concat(memoryToEdit);
    setMainMemoryList(editedMainMemoryList);
    setEditing(false);
    setSelectedMemory(null);
  }

  let currentlyVisibleState = null;
  let buttonText = null;

  if (editing) {
    currentlyVisibleState = <EditMemoryForm
      memory={selectedMemory}
      onEditingMemory={handleEditingMemory}/>
    buttonText = "Home";
  } else if (selectedMemory != null) {
    currentlyVisibleState = <MemoryDetail
      memory = {selectedMemory}
      onClickingEdit = {handleEditClick}
      onClickingDelete = {handleDeletingMemory}/>;
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