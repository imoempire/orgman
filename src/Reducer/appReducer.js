import { ADD_LIST, DELETE_LIST, EDIT_LIST } from "../Action/appActions";


const initialState ={
    Todo: [
       { list: 'clean car',
         note: 'wqefe',
         id: '4567ioewjh2367'}
    ],
}

const appReducer = ( state=initialState, action)=>{
    switch(action.type){
        
        // Add list code
        case ADD_LIST :
            return {...state.Todo, Todo: [...state.Todo, action.payload] }
       
            // Delete List code
        case DELETE_LIST:
            const SavedLists = state.Todo.filter((todo)=>{
                return todo.id !== action.payload;
            });
            return {...state, Todo: SavedLists }
        
        case EDIT_LIST:
            return{...state, Todo: state.Todo.map((todo)=>
                todo.id === action.payload.id ? action.payload : todo 
                )}

        default:
            return state
    }
}

export default appReducer;