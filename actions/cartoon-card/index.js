/*
action types
*/
import fetch from 'isomorphic-fetch'

const REQUEST_POSTS = 'MANGA_REQUEST_POSTS';//与post区分是为避免两个延时的请求出现交叉展示
const RECEIVE_POSTS = 'CARTOON_CONTENT'

function requestPosts(cartoon) {
  return {
    type: REQUEST_POSTS,
    title: cartoon.title
  }
}

const toViewCartoon = (obj)  =>{
  return{
    type:RECEIVE_POSTS,
    title:obj.title,
    content:obj
  }
}

export const toViewCartoons = ()  =>{
  return{
    type:'CARTOON_LIST'
  }
}

export function fetchPostsTool(cartoon,getState) {
  return dispatch => {
    dispatch(requestPosts(cartoon))
    // setTimeout(function(){
    //   dispatch(toViewCartoon(cartoon));
    // },2000);
    return fetch('http://localhost:3000/mangas/cartoon')
      .then(response => response.json())
      .then(json => {
          const state = getState();
          if(state.contentWrap.type===REQUEST_POSTS){
            dispatch(toViewCartoon(json));
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

export function fetchPosts(obj) {

  // 注意这个函数也接收了 getState() 方法
  // 它让你选择接下来 dispatch 什么。

  // 当缓存的值是可用时，
  // 减少网络请求很有用。

  return (dispatch, getState) => {//getState不仅获取当前state，还有一个关键作用：当请求发出去延时很长时候，必须获取当前state看看用户是不是已经取消了，否则还继续dispatch则影响体验
    if (shouldFetchPosts(getState(), obj)) {
      // 在 thunk 里 dispatch 另一个 thunk！
      return dispatch(fetchPostsTool(obj,getState))
    } else {
      // 告诉调用代码不需要再等待。
      return Promise.resolve()
    }
  }
}
