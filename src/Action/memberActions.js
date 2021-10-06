export const ADD_MEMBER = "ADD_MEMBER";
export const DELETE_MEMBER = "DELETE_MEMBER";
export const EDIT_MEMBER = "EDIT_MEMBER";
export const SET_ALL_MEMBERS="SET_ALL_MEMBERS"


export const addMember =(member) => {
    member.id = Math.random().toString();
    return(dispatch, state, {getFirestore})=>{
        getFirestore()
        .collection('Member')
        .add(member).then((docs)=>{
            console.log(docs)
        })
    }
    // return {
    //     type: ADD_MEMBER,
    //     payload: member
    // }
};

export const deleteMember =(memberId) => {
    return(dispatch, state, {getFirestore})=>{
        getFirestore().collection('Member')
        .doc(memberId).delete().then(()=>{})
    }
    // return{
    //     type: DELETE_MEMBER,
    //     payload: memberId
    // }
};

export const editMember = (updateMember)=>{
    return(dispatch, state, {getFirestore})=>{
        getFirestore().collection('Member')
        .doc(updateMember.id).set(updateMember)
        .then(()=>{})
    }
    // return{
    //     type: EDIT_MEMBER,
    //     payload: updateMember
    // }
};


export const getAllMembers=()=>{
    return(dispatch, state, {getFirestore})=>{
        getFirestore().collection('Member')
        .onSnapshot((snapshot)=>{
            let Member=[];
            snapshot.forEach((doc)=>{
                Member.push({...doc.data(), id:doc.id})
            });
            dispatch({
                type: SET_ALL_MEMBERS,
                payload: Member
            })
        })
    }
}