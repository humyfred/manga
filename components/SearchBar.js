'use strict';
import React,{PropTypes} from 'react'

let val ;

const SearchBar = () =>(
    <header className='header flex vertical-middle'>
      <i className='iconfont  icon-svgmoban67 icon-middle icon-btn' ></i>
      <input className="input" placeholder='请输入搜索关键字'/>
      <i className='iconfont  icon-chazhao icon-middle icon-btn' ></i>
    </header> 
)


export default SearchBar