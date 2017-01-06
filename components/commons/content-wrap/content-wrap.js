'use strict';
import React,{ Component , PropTypes} from 'react'
import Loading from '../Loading/Loading'
import { view } from './content-wrap-action.js'
import './content-wrap.scss'


class ContentWrap extends Component {

  constructor(props){
    super(props);
  }


  componentDidUpdate(){
    this.loadState = 'hide';
  }

  render(){
    this.loadState = 'show';
    return (
      <section className={this.props.contentViewState+' jx-content-wrap'} style={{background:'#f2f2f2'}}>
        <header className='jx-content-header flex vertical-middle'>
          <a className="icon-btn " onClick={()=>this.props.back()} ><i className='iconfont icon-back icon-middle' ></i></a>
          <span className='ml15 jx-content-title'>{this.props.contentWrap.content.title}</span>
        </header>

        <div className='jx-content'>
            {view(this.props.contentWrap)}
        </div>
        <Loading showState={this.loadState}/>
      </section>

    )
  }
}

ContentWrap.propTypes = {
   contentViewState:PropTypes.string.isRequired,
   content: PropTypes.object.isRequired
}


export default ContentWrap
