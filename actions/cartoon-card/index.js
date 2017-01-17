/*
action types
*/
import fetch from 'isomorphic-fetch'
import {server_address} from '../../config.js'
const REQUEST_CARTOON_VIEW = 'CARTOON_REQUEST_VIEW';
const REQUEST_CARTOON_LIST = 'CARTOON_REQUEST_LIST';
const RECEIVE_CARTOON = 'CARTOON_CONTENT'
const RECEIVE_CARTOONS = 'CARTOON_LIST'

function requestPosts( cartoon , type) {
  if(cartoon){
    return {
      type: type,
      title: cartoon.title
    }
  }else{
    return {
      type: type
    }
  }

}

const toViewCartoon = (obj)  =>{
  return{
    type:RECEIVE_CARTOON,
    title:obj.title,
    content:obj
  }
}

export const toViewCartoons = (list)  =>{
  return{
    type:RECEIVE_CARTOONS,
    list
  }
}

function fetchCartoonByObj(cartoon,getState) {
  return dispatch => {
    dispatch(requestPosts(cartoon,REQUEST_CARTOON_VIEW));
    return fetch('http://'+server_address+'/mangas/'+cartoon.id)
      .then(response => response.json())
      .then(json => {
          const state = getState();
          if(state.actionType===REQUEST_CARTOON_VIEW){
            dispatch(toViewCartoon(json));
          }
      });
  }
}

function fetchCartoonList (getState) {
  return dispatch => {
    dispatch(requestPosts(null,REQUEST_CARTOON_LIST));
    return fetch('http://'+server_address+'/mangas/list')
      .then(response => response.json())
      .then(json => {
          const state = getState();
          if(state.actionType===REQUEST_CARTOON_LIST){
            dispatch(toViewCartoons(json));
          }
      });
  }
}

function shouldFetchPosts(state, obj) {
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

export function fetchCartoon(obj) {

  // 注意这个函数也接收了 getState() 方法
  // 它让你选择接下来 dispatch 什么。

  // 当缓存的值是可用时，
  // 减少网络请求很有用。

  return (dispatch, getState) => {//getState不仅获取当前state，还有一个关键作用：当请求发出去延时很长时候，必须获取当前state看看用户是不是已经取消了，否则还继续dispatch则影响体验
    if (shouldFetchPosts(getState(), obj)) {
      // 在 thunk 里 dispatch 另一个 thunk！
      return dispatch(fetchCartoonByObj(obj,getState))
    } else {
      // 告诉调用代码不需要再等待。
      return Promise.resolve()
    }
  }
}

export function fetchCartoons() {

  return (dispatch, getState) => {
    if (shouldFetchPosts(getState())) {
      // 在 thunk 里 dispatch 另一个 thunk！
      return dispatch(fetchCartoonList(getState))
    } else {
      // 告诉调用代码不需要再等待。
      return Promise.resolve()
    }
  }
}
