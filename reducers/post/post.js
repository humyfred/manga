
let post = {}
const Post = (state = [], action) => {
  switch (action.type) {
    case 'POST_CONTENT':
        post = action.content;
        return post;
    default:
      return post;
  }
}

export default Post
