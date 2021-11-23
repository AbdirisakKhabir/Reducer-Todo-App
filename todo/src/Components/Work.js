import React, { useState } from "react";
import {connect} from "react-redux"
import {toggleEdit, editWork} from "../Actions/WorkAction"

const Work = (props) => {
  // const [work, setWork] = useState("Hello Daily Work!");
  // const [editing, setEditing] = useState(false);
  const [newWorkText, setNewWorkText] = useState("");

  const handleChanges = (e) => {
    setNewWorkText(e.target.value);
  };

  return (
   
      
    <div>
      {!props.editing ? (
        <h1>
          {props.work} <button className="btnEdit" onClick={() => props.toggleEdit()} >Edit </button>
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newWorkText"
            value={newWorkText}
            onChange={handleChanges}
          />
          <button
            onClick={() => props.editWork(newWorkText)}
          >
            Update
          </button>
        </div>
       
      )}
    </div>
    
  );
};

const mapStateToProps = state => {
  return {
    work: state.work,
    editing: state.editing
  }
}

export default connect(mapStateToProps, {toggleEdit, editWork})(Work);
