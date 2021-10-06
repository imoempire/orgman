import React, { Component } from "react";
import AddMember from "./AddMember";

class MemberApp extends Component {
  render() {
    return (
      <div className="App" style={{padding: "20px"}}>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <AddMember/>
            </div>
          </div>
          <h1>Click on Members Tab to see new added member </h1>
        </div>
      </div>
    );
  }
}

export default MemberApp;
