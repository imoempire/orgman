import React from "react";
import { connect } from "react-redux";
import Notes from "./Notes";

const NotesList = ({ Note, deleteNote, editNote }) => {
    
  const NoteLists = Note.map((note)=> {
    return (
      <div className="column is-4" key={note.id}>
        <Notes
          key={note.id}
          Note={note}
          deleteNote={deleteNote}
          editNote={editNote}
        />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="columns" style={{ flexWrap: "wrap" }}>
        {NoteLists}
      </div>
    </div>
  );
};

const mapStateToProps=(state) => {
  return {
        Note: state.Note
  };
};
export default connect(mapStateToProps)(NotesList);
