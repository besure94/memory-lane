import React, { useEffect, useState } from "react";
import NewMemoryForm from "./NewMemoryForm";
import MemoryList from "./MemoryList";
import MemoryDetail from "./MemoryDetail";
import EditMemoryForm from './EditMemoryForm';
import { db, auth } from './../firebase.js';
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';

function MemoryControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainMemoryList, setMainMemoryList] = useState([]);
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "memories"),
      (collectionSnapshot) => {
        const memories = [];
        collectionSnapshot.forEach((doc) => {
          memories.push({
            name: doc.data().name,
            when: doc.data().when,
            description: doc.data().description,
            id: doc.id
          });
        });
        setMainMemoryList(memories);
      },
      (error) => {
        setError(error.message);
      }
    );

    return () => unSubscribe();
  }, []);

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

  const handleDeletingMemory = async (id) => {
    await deleteDoc(doc(db, "memories", id));
    setSelectedMemory(null);
  }

  const handleEditingMemory = async (memoryToEdit) => {
    const memoryReference = doc(db, "memories", memoryToEdit.id);
    await updateDoc(memoryReference, memoryToEdit);
    setEditing(false);
    setSelectedMemory(null);
  }

  if (auth.currentUser == null) {
    return (
      <React.Fragment>
        <h1>You must be signed in to access this application!</h1>
      </React.Fragment>
    )
  } else if (auth.currentUser != null) {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>
    } else if (editing) {
      currentlyVisibleState = <EditMemoryForm
        memory={selectedMemory}
        onEditingMemory={handleEditingMemory}/>
      buttonText = "Memory List";
    } else if (selectedMemory != null) {
      currentlyVisibleState = <MemoryDetail
        memory = {selectedMemory}
        onClickingEdit = {handleEditClick}
        onClickingDelete = {handleDeletingMemory}/>;
      buttonText = "Memory List";
    } else if (formVisibleOnPage) {
      currentlyVisibleState = <NewMemoryForm
        onNewMemoryCreation={handleCreatingNewMemory}/>;
      buttonText = "Memory List";
    } else {
      currentlyVisibleState = <MemoryList
        onMemorySelection={handleChangingSelectedMemory}
        memoryList={mainMemoryList}/>;
      buttonText = "Create Memory";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {error ? null : <button onClick={handleClick}>{buttonText}</button>}
      </React.Fragment>
    );
  }
}

export default MemoryControl;