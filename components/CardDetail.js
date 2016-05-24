'use strict';
import React,{PropTypes} from 'react'
import Loading from './Loading'


const CardDetail = ({viewDetailState,title,loadState,onClick}) =>(
  <section className={viewDetailState} style={{background:'#fff'}}>
    <header className='header flex vertical-middle'>
      <i className='iconfont icon-btn icon-back icon-middle' onClick={() =>onClick()}></i>
      <span className='ml15'>{title}</span>
    </header>

    <div className='content mt48'>
        <section className='card-content'>


            <article>
              <div className='card-topic'>
                <span className='card-topic-title'>今天很开心~~~~~~</span>
                <div >
                   <span> 发布于 2016年3月29日</span>
                </div>
              </div>
              <div className='card-detail'>
                jfkljflkdjafsl
              </div>
            </article>
        </section>
    </div>

    <Loading showState={loadState}/>
  </section>


)



CardDetail.propTypes = {

   viewDetailState:PropTypes.string.isRequired,
}


export default CardDetail
