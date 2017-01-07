'use strict';
import React,{ Component , PropTypes} from 'react'
import { Link, browserHistory } from 'react-router'
import './me.scss'


class Me extends Component {

  constructor(props){
    super(props);
  }



  render(){
    return (
      <div>
      <div className="jx-me">
        <div className="jx-me__avator">
          <img src={this.props.me.avator} />
        </div>
        <div className="jx-me__name">
          {this.props.me.name}
        </div>

        <div className="jx-me__autograph">
          {this.props.me.autograph}
        </div>

        <div className="jx-me__action">
          <button className='jx-button'><Link to="/me/setting">设置</Link></button>
        </div>
      </div>

      <ul className="jx-tab-nav cf">
        <li className="jx-tab-nav-item jx-tab-nav-item_active">
          订阅的漫画
        </li>
        <li className="jx-tab-nav-item">
          发的帖子
        </li>
        <li className="jx-tab-nav-item">
          我点的赞
        </li>
      </ul>
      <div className="jx-tab-nav-content">
        {this.props.tabContent}
      </div>
      </div>
    )
  }
}

Me.propTypes = {

}


export default Me
