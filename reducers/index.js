import {combineReducers } from 'redux'
import frames from './frames'
import cards from './cards'
import viewDetailState from './viewDetailState'
import viewListState from './viewListState'
import viewDetailImgs from './viewDetailImgs'
import { routerReducer } from 'react-router-redux'
// Add the reducer to your store on the `routing` key
const reducers = combineReducers({
    frames,
    cards,
    viewDetailState,
    viewListState,
    viewDetailImgs,
    routing:routerReducer
})


export default reducers
