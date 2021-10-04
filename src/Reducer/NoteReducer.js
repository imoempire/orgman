import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from "../Action/NotesActions";

const initialState ={
    Note: [
       { 
        note: 'Let the dogs go',
        
        id: '4567ioewj3456h2367'
        }
    ]
}

const NoteReducer = ( state=initialState, action)=>{
    switch(action.type){
        
        // Add Notes code
        case ADD_NOTE :
            return {...state.Note, note: [...state.Note, action.payload] }
       
            // Delete Notes code
        case DELETE_NOTE:
            const SavedNote = state.Note.filter((note)=>{
                return note.id !== action.payload;
            });
            return {...state, Note: SavedNote }

        // Edit Notes code
        case EDIT_NOTE:
            return{...state, Note: state.Note.map((note)=>
                note.id === action.payload.id ? action.payload : note 
                )}

        default:
            return state
    }
}

export default NoteReducer;