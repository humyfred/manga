
const Post = (state = '', action) => {
  switch (action.type) {
    case 'POST_CONTENT':
        return action.content.id;
    default:
      return state;
  }
}

export default Post
