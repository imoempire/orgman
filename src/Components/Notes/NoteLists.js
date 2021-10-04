import React, { Component } from "react";
import NoteAdd from "./NoteAdd";
import NoteList from "./NoteList";

class NotesLists extends Component {
  render() {
    return (
      <div className="App" style={{padding: "20px"}}>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <NoteAdd/>
            </div>
            <div className="col">
              <NoteList/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotesLists;
