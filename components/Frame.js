'use strict';
import React,{PropTypes} from 'react'


const Frame = ({imgSrc,chapter,resource,title,onClick}) =>(
    <div className='md-frameWrapper' onClick={onClick}>
        <a href='javascript:void(0);' className='md-frameWrapper-avator'>
            <img src={imgSrc}/>
        </a>
        <p className='md-frameWrapper-title'>{title}<br/>{chapter}</p>
    </div>
)


Frame.propTypes = {
    imgSrc:PropTypes.string.isRequired,
    chapter:PropTypes.string.isRequired,
    resource:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired
}


export default Frame