import React,{ Component , PropTypes} from 'react'
import { Link, browserHistory } from 'react-router'
import './tab-nav.scss'

class TabNav extends Component {
  activeTabFn(){
    if(this.props.nav){
      if(this.props.nav.name==='subscribe')
        this.activeTab = 'subscribe';
      else if(this.props.nav.name==='post')
        this.activeTab = 'post';
      else
        this.activeTab = 'like';
    }else{
      this.activeTab='subscribe';
    }
  }
  componentWillReceiveProps(props){
    //this.activeTabFn();
  }
  componentWillMount(){
  //this.activeTabFn();
  }
  componentWillUpdate(){
  this.activeTabFn();
  }
  componentDidUpdate(){
  //this.activeTabFn();
  }
  render(){
    //this.activeTabFn();
    return (
      <div>
      <ul className="jx-tab-nav cf">
        <li className={this.props.nav.name=='subscribe'?'jx-tab-nav-item jx-tab-nav-item_active':'jx-tab-nav-item'} onClick={this.props.toViewSubscribe}>
          订阅的漫画
        </li>
        <li className={this.props.nav.name=='post'?'jx-tab-nav-item jx-tab-nav-item_active':'jx-tab-nav-item'} onClick={this.props.toViewPost}>
          发的帖子
        </li>
        <li className={this.props.nav.name=='like'?'jx-tab-nav-item jx-tab-nav-item_active':'jx-tab-nav-item'} onClick={this.props.toViewLike}>
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
export default TabNav
