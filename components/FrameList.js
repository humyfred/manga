'use strict';
import React,{PropTypes} from 'react'
import Frame from './Frame'


const FrameList = ({frames,viewListState,onTodoClick,goBack}) =>(
  <section className={viewListState} >
    <header className='header flex vertical-middle'>
      <i className='iconfont icon-btn icon-back icon-middle' onClick={() =>goBack()}></i>
      <span className='ml15'>漫画</span>
    </header>
    <div className='content mt48'>

      {frames.map(frame =>
        <Frame
          key = {frame.id}
          {...frame}

          onClick={() =>onTodoClick(frame.title)}
        />
      )}
    </div>
  </section>
)



FrameList.propTypes = {
    frames:PropTypes.arrayOf(PropTypes.shape({
      imgSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
  }).isRequired).isRequired,
    viewListState:PropTypes.string.isRequired,
    onTodoClick: PropTypes.func.isRequired
}


export default FrameList
