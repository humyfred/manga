import {combineReducers } from 'redux'
import frames from './frames'
import cards from './cards'
import viewDetailState from './viewDetailState'
import viewListState from './viewListState'
import cartoonCardList from './cartoon-card/cartoon-card-list'
import viewDetailImgs from './viewDetailImgs'
import { routerReducer } from 'react-router-redux'
// Add the reducer to your store on the `routing` key
const reducers = combineReducers({
    cartoonCardList,
    frames,
    cards,
    viewDetailState,
    viewListState,
    viewDetailImgs,
    routing:routerReducer
})


export default reducers
