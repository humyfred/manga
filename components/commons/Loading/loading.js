import React, {Component} from 'react'

const Loading extends Component {
  render(){
    return (
      <div className={this.props.showState+' square flex flex-verti-center flex-hori-center'} >
        <i className='iconfont icon-spinner icon-big '></i>
        <p>加载中...</p>
      </div>
    )
  }

)

export default Loading
