import React, {Component} from 'react'
import './loading.scss'

class Loading extends Component {
  render(){
    return (
      <div className={this.props.showState+' jx-loading'} >
        <i className='iconfont icon-spinner icon-big  jx-loading-loop'></i>
        <p>加载中...</p>
      </div>
    )
  }
}

export default Loading
