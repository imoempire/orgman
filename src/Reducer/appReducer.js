import { ADD_LIST, DELETE_LIST } from "../Action/appActions";

const initialState ={
    Todos: [
       { list: 'clean car'}
    ]
}

const appReducer = ( state= initialState, action)=>{
    switch(action.type){
        
        // Add list code
        case ADD_LIST :
            return {...state.Todos, Todos: [...state.Todos, action.payload] }
       
            // Delete List code
        case DELETE_LIST:
            const SavedLists = state.Todos.filter((todo)=>{
                return todo.id !== action.payload;
            });
            return {...state, Todos: SavedLists }
        
        default:
            return state
    }
}

export default appReducer;