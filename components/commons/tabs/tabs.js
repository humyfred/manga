'use strict';
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'
import './tabs.scss';

class tabs extends Component {

  constructor(prop) {
    super(prop);
    this.activeTab = 'manga';
  }

  activeTabFn(){
    if(location.href.indexOf('post')>-1){
      this.activeTab = 'post';
    }else if(location.href.indexOf('me')>-1){
      this.activeTab = 'me';
    }else{
      this.activeTab = 'manga';
    }
  }

  render() {
    this.activeTabFn();
    return (
      <ul className = "jx-tabs" >
        <li className={ this.activeTab=='manga' ? 'active':'' }>
          <Link to="#/manga">
            <i className = "iconfont icon-svgmoban67" ></i><span className="jx-tab-name">漫画</span>
          </Link>
        </li>
        <li className={ this.activeTab=='post' ? 'active':'' }>
          <Link to="#/post">
            <i className = "iconfont icon-pinglun" > </i><span className="jx-tab-name">帖子</span>
          </Link>
        </li>
        <li className={ this.activeTab=='me' ? 'active':'' }>
          <Link to="#/me">
           <i className = "iconfont icon-wo" > </i><span className="jx-tab-name">我</span>
          </Link>
        </li>
      </ul>
    )
  }
}

export default tabs
