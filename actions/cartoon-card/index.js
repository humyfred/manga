/*
action types
*/
import fetch from 'isomorphic-fetch'

const REQUEST_POSTS = 'REQUEST_POSTS'
const RECEIVE_POSTS = 'RECEIVE_POSTS'

function requestPosts(cartoon) {
  return {
    type: REQUEST_POSTS,
    title: cartoon.title
  }
}

function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchPostsTool(cartoon) {
  return dispatch => {
    dispatch(requestPosts(cartoon))
    setTimeout(function(){
      dispatch(toViewCartoon(cartoon));
    },2000);
    // return fetch(`http://www.reddit.com/r/${subreddit}.json`)
    //   .then(response => response.json())
    //   .then(json => dispatch(receivePosts(subreddit, json)))
  }
}

function shouldFetchPosts(state, subreddit) {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPosts(subreddit) {

  // 注意这个函数也接收了 getState() 方法
  // 它让你选择接下来 dispatch 什么。

  // 当缓存的值是可用时，
  // 减少网络请求很有用。

  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      // 在 thunk 里 dispatch 另一个 thunk！
      return dispatch(fetchPostsTool(subreddit))
    } else {
      // 告诉调用代码不需要再等待。
      return Promise.resolve()
    }
  }
}


export const toViewCartoon = (obj)  =>{
  return{
    type:'CARTOON_CONTENT',
    title:obj.title,
    content:Object.assign(obj,{imgs:['//pic04.ishuhui.com/cartoon/book-1/1/851-8152/00.png?87302690','//pic04.ishuhui.com/cartoon/book-1/1/851-8152/03.png?87302690','//pic04.ishuhui.com/cartoon/book-1/1/851-8152/04.png?87302690','//pic04.ishuhui.com/cartoon/book-1/1/851-8152/05.png?87302690','//pic04.ishuhui.com/cartoon/book-1/1/851-8152/06.png?87302690']})
  }
}


export const toViewCartoons = ()  =>{
  return{
    type:'CARTOON_LIST'
  }

}
