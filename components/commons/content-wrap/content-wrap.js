'use strict';
import React,{ Component , PropTypes} from 'react'
import Loading from '../Loading/Loading'
import { view } from './content-wrap-action.js'
import './content-wrap.scss'


class ContentWrap extends Component {

  constructor(props){
    super(props);
  }


  render(){
    return (
      <section className={this.props.contentViewState+' jx-content-wrap'} style={{background:'#fff'}}>
        <header className='jx-content-header flex vertical-middle'>
          <a className="icon-btn " onClick={()=>this.props.back()} ><i className='iconfont icon-back icon-middle' ></i></a>
          <span className='ml15 jx-content-title'>{this.props.content.title}</span>
        </header>

        <div className='jx-content'>
            {view()}
        </div>
        <Loading showState={this.props.loadState}/>
      </section>

    )
  }
}

ContentWrap.propTypes = {
   contentViewState:PropTypes.string.isRequired,
   content: PropTypes.object.isRequired
}


export default ContentWrap
