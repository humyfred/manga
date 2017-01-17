'use strict';
import React,{Component, PropTypes} from 'react'
import Post from '../post/post'
import Loading from '../Loading/Loading'
import { initLoadingState } from './post-list-action.js'

class PostList extends Component {

  componentWillReceiveProps(props){
    //console.log(props)
  }

  render(){
    Object.assign(this,initLoadingState(this.props));
    return (
      <section className={this.props.indexViewState+' jx-bottom-50'} >
        {this.props.posts.map( (post,idx) =>
          <Post
            key = {post.id}
            {...post}
            onClick={() => this.props.detail(post)}
            likeF = {() => this.props.likeF(post,idx)}
            commentF = {() => this.props.commentF(post,idx)}
            />
        )}

        <Loading showState={this.loadState}/>
      </section>
    )
  }

}


PostList.propTypes = {
    posts:PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      reply: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired
  }).isRequired).isRequired,
    indexViewState:PropTypes.string.isRequired,
    detail: PropTypes.func.isRequired
}


export default PostList
