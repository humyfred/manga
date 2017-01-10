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
      if(this.likeState==='icon-like'){
        this.likeState = 'icon-like-full';
      }else{
        this.likeState = 'icon-like';
      }
    }

    comment(){
      if(this.commentState==='icon-comment'){
        this.commentState = 'icon-comment-full';
      }else{
        this.commentState = 'icon-comment';
      }
    }

    render(){
      return (
        <div className='jx-post-wrap'>
          <div className='jx-post' onClick={this.props.onClick}>
            <div className='jx-post__title'>
                {this.props.title}
            </div>

            <div className="jx-post__content">
              <div className='jx-post__summary'>
                {this.props.summary}
              </div>

              <div className='jx-post__pictures'>
                {this.props.pictures.map( pic =>
                    <img src={pic} key={pic}/>
                )}
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
              <a onClick={() => this.like()}><i className={this.likeState + " iconfont"}></i>{this.props.reply}</a>
              <a onClick={() => this.comment()}><i className={this.commentState + " iconfont"}></i>{this.props.views}</a>
            </div>
          </div>
        </div>
      )
    }

}


Post.propTypes = {

}


export default Post
