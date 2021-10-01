import React, { Component } from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

class TodoLists extends Component {
  
  render() {
    return (
      <div className="App" style={{padding: "20px"}}>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <TodoAdd/>
            </div>
            <div className="col">
              <TodoList/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoLists;
