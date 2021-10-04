import { ADD_LIST, DELETE_LIST, EDIT_LIST } from "../Action/appActions";
import {ADD_NOTE, DELETE_NOTE, EDIT_NOTE} from '../Action/NotesActions'


const initialState ={
    Todo: [
       { list: 'clean car',
        id: '4567ioewjh2367'}
    ],
    Note:[
        {   note: 'wqefe',
            id: '145353'

        }
    ]
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
        
        // NOte 

        // Add note code
        case ADD_NOTE :
            return {...state.Note, Note: [...state.Note, action.payload] }
       
            // Delete note code
        case DELETE_NOTE:
            const SavedList = state.Note.filter((note)=>{
                return note.id !== action.payload;
            });
            return {...state, Note: SavedList }
        
            // edit note code
        case EDIT_NOTE:
            return{...state, Note: state.Note.map((note)=>
                note.id === action.payload.id ? action.payload : note 
                )}

        default:
            return state
    }
}

export default appReducer;