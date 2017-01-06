'use strict';
import React,{Component , PropTypes} from 'react'
import './post.scss'

class Post extends Component {

    constructor(props){
      super(props)
    }

    render(){
      return (
        <div className='jx-post-wrap' onClick={this.props.onClick}>
            <img className='post-avatar' src={this.props.imgSrc}/>
            <div className='post-content'>
              <span className='post-title'>{this.props.title}</span>
              <span className='post-reply'>{this.props.reply}/</span> <span className='post-views'>{this.props.views}</span>
              <span className="post-time">6小时前</span>
            </div>
        </div>
      )
    }

}


Post.propTypes = {

}


export default Post
