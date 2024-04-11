import React from "react";
import NewMemoryForm from "./NewMemoryForm";
import MemoryList from "./MemoryList";

class MemoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainMemoryList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage}));
  }

  handleCreatingNewMemory = (newMemory) => {
    const newMainMemoryList = this.state.mainMemoryList.concat(newMemory);
    this.setState({
      mainMemoryList: newMainMemoryList,
      formVisibleOnPage: false
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewMemoryForm
        onNewMemoryCreation={this.handleCreatingNewMemory}/>;
      buttonText = "Home";
    } else {
      currentlyVisibleState = <MemoryList
        memoryList={this.state.mainMemoryList}/>;
      buttonText = "Create Memory";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default MemoryControl;