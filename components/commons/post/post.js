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
          <div className='jx-post'>
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
              <a><i className="iconfont icon-like"></i>{this.props.reply}</a>
              <a><i className="iconfont icon-comment"></i>{this.props.views}</a>
            </div>
          </div>
        </div>
      )
    }

}


Post.propTypes = {

}


export default Post
