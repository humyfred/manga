import {combineReducers } from 'redux'
import contentViewState from './content-view/content-view-state'
import indexViewState from './content-view/index-view-state'
import content from './content-view/content'

import cartoonCardList from './cartoon-card/cartoon-card-list'


import { routerReducer } from 'react-router-redux'
// Add the reducer to your store on the `routing` key
const reducers = combineReducers({
    cartoonCardList,
    content,
    contentViewState,
    indexViewState,
    routing:routerReducer
})


export default reducers
