import { createStore, combineReducers } from 'redux';
import appReducer from '../Reducer/appReducer';
import memberReducer from '../Reducer/memberReducer';

let reducers= combineReducers({
    todo: appReducer,
    member: memberReducer
})

const store =createStore(reducers)

export default store;