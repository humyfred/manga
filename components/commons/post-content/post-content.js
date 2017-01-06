'use strict';
import React,{Component , PropTypes} from 'react'
import './post-content.scss'

class PostContent extends Component {

    constructor(props){
      super(props);
    }

    render(){
      return (
          <div className="jx-postContent">
            <div className='jx-postContent__hd'>
              <div className="jx-postContent-banner">
                <img src={this.props.bannerUrl}/>
              </div>
              <div className="jx-postContent-title">{this.props.title}</div>
              <div className="jx-postContent-author">
                <img src={this.props.author.avator} className="jx-postContent-author__avator"/>
                <div className="jx-postContent-author__infor">
                  <span className="jx-postContent-author-name">{this.props.author.name}</span>
                  <span className="jx-postContent-author-time">{this.props.time}</span>
                </div>
              </div>
            </div>

            <div className="jx-postContent__bd">
              {this.props.content}
            </div>
          </div>
      )
    }

}


PostContent.propTypes = {

}


export default PostContent
