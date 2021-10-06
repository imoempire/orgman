import { ADD_LIST, DELETE_LIST, EDIT_LIST, SET_ALL_TOTE } from "../Action/appActions";


const initialState ={
    Todo: [ ],
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
        case SET_ALL_TOTE:
            return{...state, Todo: action.payload}
        default:
            return state
    }
}

export default appReducer;