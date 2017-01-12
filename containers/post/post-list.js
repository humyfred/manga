'use strict';
import { connect } from 'react-redux'
import { fetchPosts , likePost } from '../../actions/post'
import Posts from '../../components/commons/post-list/post-list'



const mapStateToProps = (state) => {
  if(state.postList[0].isLike){
    return {
      posts: state.postList ,
      indexViewState :state.indexViewState,
      yeah:1
    }
  }
  return {
    posts: state.postList ,
    indexViewState :state.indexViewState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    detail: (obj) => {
      dispatch(fetchPosts(obj));
    },
    like : (obj,idx) =>{
      dispatch(likePost(obj,idx));
    },
    comment : (obj,idx) =>{
      dispatch(likePost(obj,idx));
    }
  }
}

const PostList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)

export default PostList
