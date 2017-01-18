'use strict';


const PostList = (state = {isFetching: false,items: []}, action) => {
  switch (action.type) {
    case 'POST_LIKE':
    case 'POST_COMMENT':
      return Object.assign({}, state, {
        isFetching:false
      });
    case 'POST_LIST':

      return Object.assign({}, state, {
        isFetching:false,
        items:action.list.map(item=>item.id)
      });
    case 'POST_REQUEST_LIST':
    case 'POST_REQUEST_LIKE':
    case 'POST_REQUEST_COMMENT':
      return Object.assign({}, state, {
        isFetching:true
      });
    default:
      return state;
  }
}

export default PostList
