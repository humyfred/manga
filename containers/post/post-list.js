'use strict';
import { connect } from 'react-redux'
import { fetchPosts , likePost } from '../../actions/post'
import Posts from '../../components/commons/post-list/post-list'



const mapStateToProps = (state) => {
  return {
    posts: state.postList ,
    postsState:state.postsState,//标识posts更新状态
    indexViewState :state.indexViewState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    detail: (obj) => {
      dispatch(fetchPosts(obj));
    },
    likeF : (obj,idx) =>{
      dispatch(likePost(obj,idx));
    },
    commentF : (obj,idx) =>{
      dispatch(likePost(obj,idx));
    }
  }
}

const PostList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)

export default PostList
