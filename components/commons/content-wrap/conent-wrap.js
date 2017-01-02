'use strict';
import React,{ Component , PropTypes} from 'react'
import Loading from '../Loading/loading'


const ContentWrap extends Component {
  render(){
    return (
      <section className={this.props.contentViewState} style={{background:'#fff'}}>
        <header className='header flex vertical-middle'>
          <i className='iconfont icon-btn icon-back icon-middle' onClick={() =>this.props.onClick()}></i>
          <span className='ml15'>{this.props.title}</span>
        </header>

        <div className='content mt48'>
            {this.props.content}
        </div>
        <Loading showState={this.props.loadState}/>
      </section>

    )
  }
}

ContentWrap.propTypes = {

   contentViewState:PropTypes.string.isRequired,
}


export default ContentWrap
