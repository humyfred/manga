'use strict';
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router'
import './tabs.scss';

class tabs extends Component {

  constructor(prop) {
    super(prop);
  }

  render() {
    return (
      <ul className = "jx-tabs" >
        <li className="active">
          <Link to="#/manga">
            <i className = "iconfont icon-svgmoban67" ></i><span className="jx-tab-name">漫画</span>
          </Link>
        </li>
        <li>
          <Link to="#/post">
            <i className = "iconfont icon-pinglun" > </i><span className="jx-tab-name">帖子</span>
          </Link>
        </li>
        <li>
          <Link to="#/me">
           <i className = "iconfont icon-wo" > </i><span className="jx-tab-name">我</span>
          </Link>
        </li>
      </ul>
    )
  }
}

export default tabs
