'use strict';
import React, {
  Component
}
from 'react';
import './tabs.scss';

class tabs extends Component {

  constructor(prop) {
    super(prop);
  }

  render() {
    return ( < ul className = "jx-tabs" >
      < li > < a > < i className = "iconfont icon-svgmoban67" > <
      /i><span className="jx-tab-name">漫画</span > < /a> </li >
      < li > < a > < i className = "iconfont icon-pinglun" > <
      /i><span className="jx-tab-name">帖子</span > < /a> </li >
      < li > < a > < i className = "iconfont icon-wo" > <
      /i><span className="jx-tab-name">我</span > < /a> </li >
      < /ul>
    )
  }
}

export default tabs
