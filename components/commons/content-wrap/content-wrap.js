'use strict';
import React,{ Component , PropTypes} from 'react'
import Loading from '../Loading/Loading'
import { back } from './content-wrap-action.js'
import './content-wrap.scss'


class ContentWrap extends Component {

  constructor(props){
    super(props);
  }


  render(){
    return (
      <section className={this.props.contentViewState} style={{background:'#fff'}}>
        <header className='header flex vertical-middle'>
          <a className="icon-btn " onClick={()=>this.props.back()} ><i className='iconfont icon-back icon-middle' ></i></a>
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
   title: PropTypes.string.isRequired,
   content: PropTypes.string.isRequired
}


export default ContentWrap
