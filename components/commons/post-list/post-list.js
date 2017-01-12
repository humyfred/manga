'use strict';
import React,{Component, PropTypes} from 'react'
import Post from '../post/post'


class PostList extends Component {

  componentWillReceiveProps(props){
    console.log(props)
  }
  
  render(){
    return (
      <section className={this.props.indexViewState+' jx-bottom-50'} >
        {this.props.posts.map( (post,idx) =>
          <Post
            key = {post.id}
            {...post}
            onClick={() => this.props.detail(post)}
            like = {() => this.props.like(post,idx)}
            comment = {() => this.props.comment(post,idx)}
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
