'use strict';
import { connect } from 'react-redux'
import { fetchPosts } from '../../actions/post'
import Posts from '../../components/commons/post-list/post-list'



const mapStateToProps = (state) => {
  return {
    posts: state.postList ,
    indexViewState :state.indexViewState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    detail: (obj) => {
      dispatch(fetchPosts(obj));
    }
  }
}

const PostList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)

export default PostList
