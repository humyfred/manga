
const REQUEST_POSTS = 'POST_REQUEST_POSTS'
const RECEIVE_POSTS = 'POST_CONTENT'

const requestPosts = (post) =>{
  return {
    type: REQUEST_POSTS,
    title: post.title
  }
}

const toViewPost = (obj)  =>{
  return{
    type:RECEIVE_POSTS,
    title:obj.title,
    content:obj
  }
}

const fetchPostsTool = (post,getState) =>{
  return dispatch => {
    dispatch(requestPosts(post))
    // setTimeout(function(){
    //   dispatch(toViewPost(post));
    // },2000);
    return fetch('http://localhost:3000/posts/post')
      .then(response => response.json())
      .then(json => {
          const state = getState();
          if(state.contentWrap.type===REQUEST_POSTS){
            dispatch(toViewPost(json))
          }

      })
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

export function fetchPosts(obj) {

  // 注意这个函数也接收了 getState() 方法
  // 它让你选择接下来 dispatch 什么。

  // 当缓存的值是可用时，
  // 减少网络请求很有用。

  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), obj)) {
      // 在 thunk 里 dispatch 另一个 thunk！
      return dispatch(fetchPostsTool(obj,getState))
    } else {
      // 告诉调用代码不需要再等待。
      return Promise.resolve()
    }
  }
}
