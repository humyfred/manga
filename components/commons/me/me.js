'use strict';
import React,{ Component , PropTypes} from 'react'
import { Link, browserHistory } from 'react-router'
import TabNav from '../tab-nav/tab-nav'
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
          <button className='jx-button'><Link to="me/setting">设置</Link></button>
        </div>
      </div>
      <TabNav nav={this.props.nav} tabContent={this.props.tabContent}
              toViewSubscribe={this.props.toViewSubscribe}
              toViewPost={this.props.toViewPost}
              toViewLike={this.props.toViewLike}
      />

      </div>
    )
  }
}

Me.propTypes = {

}


export default Me
