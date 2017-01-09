'use strict';
import React,{Component, PropTypes} from 'react'
import Post from '../post/post'


class PostList extends Component {

  render(){
    return (
      <section className={this.props.indexViewState+' jx-bottom-50'} >
        {this.props.posts.map(post =>
          <Post
            key = {post.id}
            {...post}
            onClick={() =>this.props.detail(post)}
            />
        )}
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
