'use strict';

let datas = [];
//let idx = 11;

const PostList = (state = [], action) => {
  switch (action.type) {
    case 'POST_LIST':
        datas = action.list;
        return datas;
    case 'POST_LIKE':
      datas[action.index] = action.content;
      //datas.length = 9;
      return datas;
    case 'POST_COMMENT':
      datas[action.index] = action.content;
      return datas;
    default:
      return datas;
  }
}

export default PostList
