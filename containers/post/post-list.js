'use strict';
import { connect } from 'react-redux'
import { fetchPost , likePost , fetchPosts } from '../../actions/post'
import Posts from '../../components/commons/post-list/post-list'



const mapStateToProps = (state) => {
  return {
    posts: state.postList ,
    actionType:state.actionType,//标识posts更新状态
    indexViewState :state.indexViewState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    detail: (obj) => {
      dispatch(fetchPost(obj));
    },
    loadData : () => {
      dispatch(fetchPosts());
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
