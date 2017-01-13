import {combineReducers } from 'redux'
import contentViewState from './content-view/content-view-state'
import indexViewState from './content-view/index-view-state'
import contentWrap from './content-view/content-wrap'

import cartoonCardList from './cartoon-card/cartoon-card-list'
import cartoonCard from './cartoon-card/cartoon-card'
import postList from './post/post-list'
import postsState from './post/posts-state'
import post from './post/post'
import me from './me/me'
import userInfor from './me/user-infor'
import { routerReducer } from 'react-router-redux'
// Add the reducer to your store on the `routing` key
const reducers = combineReducers({
    cartoonCardList,
    cartoonCard,
    postsState,
    postList,
    post,
    me,
    userInfor,
    contentWrap,
    contentViewState,
    indexViewState,
    routing:routerReducer
})


export default reducers
