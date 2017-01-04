import React, {Component} from 'react'
import './loading.scss'

class Loading extends Component {
  render(){
    return (
      <div className={this.props.showState+' jx-loading flex flex-ver-center flex-hor-center'} >
        <i className='iconfont icon-spinner icon-big '></i>
        <p>加载中...</p>
      </div>
    )
  }
}

export default Loading
