
export const ADD_LIST = "ADD_LIST";
export const DELETE_LIST = "DELETE_LIST";
export const EDIT_LIST = "EDIT_LIST"
export const SET_ALL_TOTE="SET_ALL_TOTE"


export const addList =(todo) => {
    todo.id = Math.random().toString();
        return(dispatch, state, {getFirestore})=>{
            getFirestore()
            .collection('Tote')
            .add(todo).then((docs)=>{
                console.log(docs)
            })
        }
    // return {
    //     type: ADD_LIST,
    //     payload: todo
    // }
};

export const deleteList =(todoId) => {
            return(dispatch, state, {getFirestore})=>{
                getFirestore().collection('Tote')
                .doc(todoId).delete().then(()=>{})
            }
    // return{
    //     type: DELETE_LIST,
    //     payload: todoId
    // }
};

export const editList = (updateTodo)=>{
    return(dispatch, state, {getFirestore})=>{
        getFirestore().collection('Tote')
        .doc(updateTodo.id).set(updateTodo)
        .then(()=>{})
    }
    // return{
    //     type: EDIT_LIST,
    //     payload: updateTodo
    // }
};

export const getAllTotes =()=>{
    return(dispatch, state, {getFirestore})=>{
        getFirestore().collection('Tote')
        .onSnapshot((snapshot)=>{
            let Tote=[];
            snapshot.forEach((doc)=>{
                Tote.push({...doc.data(), id:doc.id})
            });
            dispatch({
                type: SET_ALL_TOTE,
                payload: Tote
            })
        })
    }
}

