'use strict';
import React,{PropTypes} from 'react'
import Loading from './Loading'


const FrameDetail = ({viewDetailState,viewDetailImgs,title,loadState,onClick}) =>(
  <section className={viewDetailState} style={{background:'#fff'}}>
    <header className='header flex vertical-middle'>
      <i className='iconfont icon-btn icon-back icon-middle' onClick={() =>onClick()}></i>
      <span className='ml15'>{title}</span>
    </header> 
  
    <div className='content mt48'> 
      {
        viewDetailImgs.map( img =>
          <img key={img.id} src={img.imgSrc} style={{marginTop:'1.5em'}}/>
        )
      }
    </div>

    <Loading showState={loadState}/>
  </section>

  
)



FrameDetail.propTypes = {
  viewDetailImgs:PropTypes.arrayOf(PropTypes.shape({
      imgSrc: PropTypes.string.isRequired
   }).isRequired).isRequired,
   viewDetailState:PropTypes.string.isRequired,
}


export default FrameDetail