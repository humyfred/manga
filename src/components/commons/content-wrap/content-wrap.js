'use strict';
import React,{ Component , PropTypes} from 'react'
import Loading from '../Loading/Loading'
import { view, initLoadingState } from './content-wrap-action.js'
import './content-wrap.scss'


class ContentWrap extends Component {

  constructor(props){
    super(props);
  }
  componentDidMount(){
    Object.assign(this,initLoadingState(this.props));
  }
  componentDidUpdate(){
    Object.assign(this,initLoadingState(this.props));
  }

  render(){
    return (
      <section className={this.props.contentViewState+' jx-content-wrap'} style={{background:'#EFF3F6'}}>
        <header className='jx-content-header flex vertical-middle'>
          <a className="icon-btn " onClick={()=>this.props.back()} ><i className='iconfont icon-back icon-middle' ></i></a>
          <span className='ml15 jx-content-title'>{this.props.contentWrap.title}</span>
        </header>

        <div className='jx-content'>
            {view(this.props)}
        </div>
        <Loading showState={this.loadState}/>
      </section>

    )
  }
}

ContentWrap.propTypes = {
   contentViewState:PropTypes.string.isRequired,
}


export default ContentWrap
