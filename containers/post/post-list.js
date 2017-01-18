'use strict';
import { connect } from 'react-redux'
import { fetchPost , likePost , fetchPosts } from '../../actions/post'
import Posts from '../../components/commons/post-list/post-list'



const mapStateToProps = (state) => {
  return {
    postsId: state.postList.items ,
    posts: state.entities.posts,
    isFetching:state.postList.isFetching,//标识posts更新状态
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
    likeF : (obj) =>{
      dispatch(likePost(obj));
    },
    commentF : (obj) =>{
      dispatch(likePost(obj));
    }
  }
}

const PostList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts)

export default PostList
