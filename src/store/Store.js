import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import appReducer from '../Reducer/appReducer';
import memberReducer from '../Reducer/memberReducer';
import firebase from '../Firebase/config';

let reducers= combineReducers({
    todo: appReducer,
    member: memberReducer
})

const store =createStore(reducers, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
))

export default store;