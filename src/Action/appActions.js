export const ADD_LIST = "ADD_LIST";
export const DELETE_LIST = "DELETE_LIST";
export const EDIT_LIST = "EDIT_LIST"


export const addList =(todo) => {
    todo.id = Math.random().toString();
    return {
        type: ADD_LIST,
        payload: todo
    }
};

export const deleteList =(todoId) => {
    return{
        type: DELETE_LIST,
        payload: todoId
    }
};

export const editList = (updateTodo)=>{
    return{
        type: EDIT_LIST,
        payload: updateTodo
    }
};

