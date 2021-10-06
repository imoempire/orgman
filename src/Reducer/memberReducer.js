import { ADD_MEMBER, DELETE_MEMBER, EDIT_MEMBER, SET_ALL_MEMBERS } from "../Action/memberActions";

const initialState ={
    Member: [  ]
}

const memberReducer = ( state=initialState, action)=>{
    switch(action.type){
        
        // Add Notes code
        case ADD_MEMBER :
            return {...state.Member, Member: [...state.Member, action.payload] }
       
            // Delete Notes code
        case DELETE_MEMBER:
            const SavedNote = state.Member.filter((member)=>{
                return member.id !== action.payload;
            });
            return {...state, Member: SavedNote }

        // Edit Notes code
        case EDIT_MEMBER:
            return{...state, Member: state.Member.map((member)=>
                member.id === action.payload.id ? action.payload : member 
                )}
        case SET_ALL_MEMBERS: 
                return{...state, Member: action.payload}

        default:
            return state
    }
}

export default memberReducer;