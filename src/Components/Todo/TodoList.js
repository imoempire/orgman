import React from 'react';
import { connect } from 'react-redux';
import Todos from './Todos'


const TodoList = ({Todo, deleteList, editList}) => {
    const TodoLists = Todo.map((todo)=>{
        return (
            <div className="column is-4" key={todo.id}>
                <Todos 
                key={todo.id}
                Todo={todo}
                deleteList={deleteList}
                editList={editList}
                />
            </div>
        )
    })
    return (
        <div className="container">
      <div className="columns" 
      style={{ flexWrap: "wrap"}}
      >
        {TodoLists}
      </div>
    </div>
    );
}


const mapStateToProps=(state)=>{
    return{
        Todo: state.todo.Todo
    }
}
export default connect(mapStateToProps)(TodoList);
