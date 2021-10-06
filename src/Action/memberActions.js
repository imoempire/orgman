export const ADD_MEMBER = "ADD_MEMBER";
export const DELETE_MEMBER = "DELETE_MEMBER";
export const EDIT_MEMBER = "EDIT_MEMBER";


export const addMember =(member) => {
    member.id = Math.random().toString();
    return {
        type: ADD_MEMBER,
        payload: member
    }
};

export const deleteMember =(memberId) => {
    return{
        type: DELETE_MEMBER,
        payload: memberId
    }
};

export const editMember = (updateMember)=>{
    return{
        type: EDIT_MEMBER,
        payload: updateMember
    }
};