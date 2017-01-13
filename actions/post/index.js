
const REQUEST_POSTS = 'POST_REQUEST_POSTS'
const REQUEST_POSTS_LIKE = 'POST_REQUEST_LIKE'
const REQUEST_POSTS_COMMENT= 'POST_REQUEST_COMMENT'
const RECEIVE_POSTS = 'POST_CONTENT'
const LIKE_POST = 'POST_LIKE'
const COMMENT_POST = 'POST_COMMENT'

const requestPosts = (post,type) =>{
  return {
    type: type,
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

const toLikePost = (obj,idx) => {
  return {
    type:LIKE_POST,
    index:idx,
    content:obj
  }
}
const fetchPostsTool = (post,getState) =>{
  return dispatch => {
    dispatch(requestPosts(post,REQUEST_POSTS))
    // setTimeout(function(){
    //   dispatch(toViewPost(post));
    // },2000);
    return fetch('http://192.168.2.158:3000/posts/post')
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

export const fetchPosts = (obj) => {

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

export const likePost = (post,idx) => {
  return (dispatch,getState) =>{
    dispatch(requestPosts(post,REQUEST_POSTS_LIKE));
    return fetch('http://192.168.2.158:3000/posts/like/'+post.id)
      .then(response => response.json())
      .then(json => {
          const state = getState();
          // if(state.contentWrap.type===LIKE_POST){
            dispatch(toLikePost(json,idx))
          // }
      })
  }
}
