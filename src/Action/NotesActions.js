export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";


export const addNote =(note) => {
    note.id = Math.random().toString();
    return {
        type: ADD_NOTE,
        payload: note
    }
};

export const deleteNote =(noteId) => {
    return{
        type: DELETE_NOTE,
        payload: noteId
    }
};

export const editNote = (updateNote)=>{
    return{
        type: EDIT_NOTE,
        payload: updateNote
    }
};