'use strict';
import React,{PropTypes} from 'react'


const CircleBtn = ({name,iconName}) =>(
	<div className="button">
    	<a className='circleBtn'>
    		<i className='iconfont icon-'></i>
    	</a>
    	<span>{name}</span>
    </div>
)


export default CircleBtn