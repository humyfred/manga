import {server_address} from '../../config.js'
const REQUEST_POSTS_VIEW = 'POST_REQUEST_VIEW'
const REQUEST_POSTS_LIST = 'POST_REQUEST_LIST'
const REQUEST_POSTS_LIKE = 'POST_REQUEST_LIKE'
const REQUEST_POSTS_COMMENT= 'POST_REQUEST_COMMENT'
const RECEIVE_POST = 'POST_CONTENT'
const RECEIVE_POSTS = 'POST_LIST'
const LIKE_POST = 'POST_LIKE'
const COMMENT_POST = 'POST_COMMENT'

const requestPosts = (post,type) =>{
  if(post){
    return {
      type: type,
      title: post.title
    }
  }else{
    return {
      type: type
    }
  }

}

const toViewPost = (obj)  =>{
  return{
    type:RECEIVE_POST,
    title:obj.title,
    content:obj
  }
}

const toViewPosts = (list)  =>{
  return{
    type:RECEIVE_POSTS,
    list
  }
}

const toLikePost = (obj,idx) => {
  return {
    type:LIKE_POST,
    index:idx,
    content:obj
  }
}
const fetchPostByObj = (post,getState) =>{
  return dispatch => {
    dispatch(requestPosts(post,REQUEST_POSTS_VIEW));
    return fetch('http://'+server_address+'/posts/'+post.id)
      .then(response => response.json())
      .then(json => {
          const state = getState();
          if(state.actionType===REQUEST_POSTS_VIEW){
            dispatch(toViewPost(json))
          }

      })
    }
}

function fetchPostList (getState) {
  return dispatch => {
    dispatch(requestPosts(null,REQUEST_POSTS_LIST))
    return fetch('http://'+server_address+'/posts/list')
      .then(response => response.json())
      .then(json => {
          const state = getState();
          if(state.actionType===REQUEST_POSTS_LIST){
            dispatch(toViewPosts(json));
          }
      });
  }
}


function shouldFetchPosts(state, subreddit) {
  // const posts = state.postsBySubreddit[subreddit]
  // if (!posts) {
  //   return true
  // } else if (posts.isFetching) {
  //   return false
  // } else {
  //   return posts.didInvalidate
  // }
  return true;
}

export const fetchPost = (obj) => {

  // 注意这个函数也接收了 getState() 方法
  // 它让你选择接下来 dispatch 什么。

  // 当缓存的值是可用时，
  // 减少网络请求很有用。

  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), obj)) {
      // 在 thunk 里 dispatch 另一个 thunk！
      return dispatch(fetchPostByObj(obj,getState))
    } else {
      // 告诉调用代码不需要再等待。
      return Promise.resolve()
    }
  }
}

export const fetchPosts = () => {

  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      // 在 thunk 里 dispatch 另一个 thunk！
      return dispatch(fetchPostList(getState))
    } else {
      // 告诉调用代码不需要再等待。
      return Promise.resolve()
    }
  }
}

export const likePost = (post,idx) => {
  return (dispatch,getState) =>{
    dispatch(requestPosts(post,REQUEST_POSTS_LIKE));
    return fetch('http://'+server_address+'/posts/like/'+post.id)
      .then(response => response.json())
      .then(json => {
          const state = getState();
          // if(state.contentWrap.type===LIKE_POST){
            dispatch(toLikePost(json,idx))
          // }
      })
  }
}
