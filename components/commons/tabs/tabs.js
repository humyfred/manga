'use strict';
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'
import './tabs.scss';

class tabs extends Component {

  constructor(props) {
    super(props);
    this.activeTab = 'manga';
  }

  render() {
    return (
      <ul className = "jx-tabs" >
        <li >
          <Link to="/manga" activeClassName="active">
            <i className = "iconfont icon-svgmoban67" ></i><span className="jx-tab-name">漫画</span>
          </Link>
        </li>
        <li>
          <Link to="/post" activeClassName="active">
            <i className = "iconfont icon-post" > </i><span className="jx-tab-name">帖子</span>
          </Link>
        </li>
        <li>
          <Link to="/me" activeClassName="active">
           <i className = "iconfont icon-wo" > </i><span className="jx-tab-name">我</span>
          </Link>
        </li>
      </ul>
    )
  }
}

export default tabs
