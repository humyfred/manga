'use strict';
import React,{Component, PropTypes} from 'react'
import Post from '../post/post'
import Loading from '../Loading/Loading'
import { initLoadingState , loadData } from './post-list-action.js'

class PostList extends Component {

  componentWillMount(){
    Object.assign(this,loadData(this.props));
    Object.assign(this,initLoadingState(this.props));
  }

  componentWillReceiveProps(props){
    Object.assign(this,initLoadingState(props));
  }

  render(){

    return (
      <section className={this.props.indexViewState+' jx-bottom-50'} >
        {this.props.postsId.map( (id) =>
          <Post
            key = {id}
            {...this.props.posts[id]}
            onClick={() => this.props.detail(this.props.posts[id])}
            likeF = {() => this.props.likeF(this.props.posts[id])}
            commentF = {() => this.props.commentF(this.props.posts[id])}
            />
        )}

        <Loading showState={this.loadState}/>
      </section>
    )
  }

}


PostList.propTypes = {
    indexViewState:PropTypes.string.isRequired,
    detail: PropTypes.func.isRequired
}


export default PostList
