import {combineReducers } from 'redux'
import frames from './frames'
import cards from './cards'
import indexViewState from './content-view/index-view-state'
import contentViewState from './content-view/content-view-state'
import cartoonCardList from './cartoon-card/cartoon-card-list'
import content from './content-view/content'

import { routerReducer } from 'react-router-redux'
// Add the reducer to your store on the `routing` key
const reducers = combineReducers({
    cartoonCardList,
    frames,
    cards,
    contentViewState,
    indexViewState,
    content,
    routing:routerReducer
})


export default reducers
