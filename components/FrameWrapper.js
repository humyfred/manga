import React,{PropTypes}  from 'react'
import VisibleFrames from '../containers/VisibleFrames'
import VisibleFrameDetail from '../containers/VisibleFrameDetail'

const FrameWrapper = () =>(
    <div  className='layout-ab of-hidden'>
        <VisibleFrames />

        <VisibleFrameDetail />
    </div>
)


FrameWrapper.propTypes ={
    
}

export default FrameWrapper