'use strict';
import React,{Component , PropTypes} from 'react'
import './post.scss'

class Post extends Component {

    constructor(props){
      super(props);
      this.likeState = 'icon-like';
      this.commentState = 'icon-comment';
    }



    like(){
      if(this.props.isLike){
        this.likeState = 'icon-like-full';
      }else{
        this.likeState = 'icon-like';
      }
    }

    comment(){
      if(this.props.isComment){
        this.commentState = 'icon-comment-full';
      }else{
        this.commentState = 'icon-comment';
      }
    }

    render(){
      this.like();
      this.comment();
      return (
        <div className='jx-post-wrap'>
          <div className='jx-post' onClick={this.props.onClick}>
            <div className='jx-post__title ellipsis'>
                {this.props.title}
            </div>

            <div className="jx-post__content">
              <div className='jx-post__summary'>
                {this.props.summary}
              </div>
            </div>
          </div>
          <div className="jx-post-author">
            <img className='jx-post-author__avatar' src={this.props.author.avator}/>
            <div className='jx-post-author__infor'>
              <span className='jx-post-author__name'>{this.props.author.name}</span>
              <span className="jx-post-time">6小时前</span>
            </div>
            <div className="jx-post__infor">
              <a onClick={this.props.likeF}><i className={this.likeState + " iconfont"}></i>{this.props.like}</a>
              <a onClick={this.props.commentF}><i className={this.commentState + " iconfont"}></i>{this.props.views}</a>
            </div>
          </div>
        </div>
      )
    }

}


Post.propTypes = {

}


export default Post
