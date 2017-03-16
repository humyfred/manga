const PostsState = (state = [], action) => {
  switch (action.type) {
    case 'POST_REQUEST_LIKE':
    case 'POST_REQUEST_COMMENT':
      return 'waiting';
    case 'POST_LIKE':
      return 'like';
    case 'POST_COMMENT':
      return 'comment';
    default:
      return '';
  }
}

export default PostsState
