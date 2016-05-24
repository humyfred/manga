import React,{PropTypes}  from 'react'
import VisibleCards from '../containers/VisibleCards'
import VisibleCardDetail from '../containers/VisibleCardDetail'

const CardWrapper = () =>(
    <div  className='layout-ab of-hidden'>
        <VisibleCards />

        <VisibleCardDetail />
    </div>
)


CardWrapper.propTypes ={

}

export default CardWrapper
