import React from "react";
import NewMemoryForm from "./NewMemoryForm";
import MemoryList from "./MemoryList";

class MemoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage}));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewMemoryForm/>;
      buttonText = "Home";
    } else {
      currentlyVisibleState = <MemoryList/>
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