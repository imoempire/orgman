import { ADD_MEMBER, DELETE_MEMBER, EDIT_MEMBER } from "../Action/memberActions";

const initialState ={
    Member: [
       { 
        name: 'Let the dogs go',
        Phone: '234567890',
        email: 'imo@gmail.com',
        id: '4567ioewj3456h2367',
        }
    ]
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

        default:
            return state
    }
}

export default memberReducer;