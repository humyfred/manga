//所有列表的实例
'use strict';

let datas = {

};

const entities = (state = {posts:[],cartoons:[]}, action) => {
  switch (action.type) {
    case 'POST_LIST':
        action.list.forEach(post => {
            state.posts[post.id] = post ;
        })
        return state;
    case 'POST_LIKE':
      state.posts[action.content.id] = action.content;
      return state;
    case 'POST_COMMENT':
      state.posts[action.content.id] = action.content;
      return state;
    case 'POST_CONTENT':
        state.posts[action.content.id] = action.content;
        return state;
    case 'CARTOON_LIST':
        action.list.forEach(post => {
                state.posts[post.id] = post ;
        })
        return state;
    default:
      return state;
  }
}

export default entities
