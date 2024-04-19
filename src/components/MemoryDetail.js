import React from "react";
import PropTypes from "prop-types";
import { auth } from './../firebase.js';

function MemoryDetail(props) {
  const { memory, onClickingDelete, onClickingEdit } = props;
  const editButton = <button onClick={() => onClickingEdit(memory.id)}>Edit</button>;
  const deleteButton = <button onClick={() => onClickingDelete(memory.id)}>Delete</button>;

  return (
    <React.Fragment>
      <div className="memory-detail">
        <h2>Memory Name</h2>
        <p>{memory.name}</p>
        <h2>Memory Type</h2>
        <p>{memory.type}</p>

        {memory.type === "Sensory" && (
          <React.Fragment>
            <h2>When?</h2>
            <p>{memory.when}</p>
            <div className="table-container">
              <div class="row justify-content-center">
                <div class="col-4">
                  <table class="table">
                    <thead>
                      <tr>
                        <th colspan="2"><h3 id="table-header">Senses</h3></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Touch</th>
                        <td>{memory.touch}</td>
                      </tr>
                      <tr>
                        <th>Sight</th>
                        <td>{memory.sight}</td>
                      </tr>
                      <tr>
                        <th>Sound</th>
                        <td>{memory.sound}</td>
                      </tr>
                      <tr>
                        <th>Smell</th>
                        <td>{memory.smell}</td>
                      </tr>
                      <tr>
                        <th>Taste</th>
                        <td>{memory.taste}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}

        {memory.type === "Short Term" && (
          <React.Fragment>
            <h2>Details:</h2>
            <p>{memory.shortTermDescription}</p>
          </React.Fragment>
        )}

        {memory.type === "Long Term" && (
          <React.Fragment>
            <h2>Description:</h2>
            <p>{memory.longTermDescription}</p>
          </React.Fragment>
        )}

        <p><em>Submitted by {memory.user} on {memory.date.toDateString()}</em></p>

        {auth.currentUser.email === memory.user ? (
          <React.Fragment>
            {editButton}
            <br/>
            {deleteButton}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button style={{display: "none"}}>{editButton}</button>
            <br/>
            <button style={{display: "none"}}>{deleteButton}</button>
          </React.Fragment>
        )}
        <hr/>
      </div>
    </React.Fragment>
  );
}

MemoryDetail.propTypes = {
  memory: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default MemoryDetail;