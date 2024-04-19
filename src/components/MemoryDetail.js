import React from "react";
import PropTypes from "prop-types";
import { auth } from './../firebase.js';

function MemoryDetail(props) {
  const { memory, onClickingDelete, onClickingEdit } = props;
  const editButton = <button onClick={() => onClickingEdit(memory.id)} className="btn btn-success form-control">Edit</button>;
  const deleteButton = <button onClick={() => onClickingDelete(memory.id)} className="btn btn-danger form-control">Delete</button>;

  return (
    <React.Fragment>
      <div className="memory-detail">
        <h3>Memory Name</h3>
        <p>{memory.name}</p>
        <h3>Memory Type</h3>
        <p>{memory.type}</p>

        {memory.type === "Sensory" && (
          <React.Fragment>
            <h3>When?</h3>
            <p>{memory.when}</p>
            <div className="table-container">
              <div className="row justify-content-center">
                <div className="col-4">
                  <table className="table">
                    <thead>
                      <tr>
                        <th colSpan="2"><h3 id="table-header">Senses</h3></th>
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
            <h3>Details</h3>
            <p>{memory.shortTermDescription}</p>
          </React.Fragment>
        )}

        {memory.type === "Long Term" && (
          <React.Fragment>
            <h3>Description</h3>
            <p>{memory.longTermDescription}</p>
          </React.Fragment>
        )}

        <p><em>Submitted by <strong>{memory.user}</strong> on <strong>{memory.date.toDateString()}</strong></em></p>

        {auth.currentUser.email === memory.user ? (
          <React.Fragment>
            <div className="row justify-content-center">
              <div className="col-4">
                {editButton}
                <br/>
                <br/>
                {deleteButton}
              </div>
            </div>
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